import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Hero } from '../models/hero.model';
import { environment } from '../../../environments/environment';
import { MessageService } from './message.service';
import {HEROES} from './mock-heroes'

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  private heroesUrl = `${environment.baseUrl}/heroes`;

constructor(
   private http: HttpClient,
   private messageService: MessageService
  ) {}

  getHeroes(): Observable<Hero[]> {
    return this.http
    .get<Hero[]>(this.heroesUrl)
    .pipe(tap((heroes) => this.log(`${heroes.length} Registros de Heróis`)));
  }

  getHero(id: number): Observable<Hero> {
    return this.http
    .get<Hero>(`${this.heroesUrl}/${id}`)
    .pipe(tap((hero) => this.log(`id: ${id} - Nome: ${hero.name}`)));
  }

  private log(message: string): void {
    this.messageService.add(`Serviço de Heróis: ${message}`);
  }

}
