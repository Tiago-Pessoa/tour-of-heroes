import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, tap } from 'rxjs';
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

  // GET /heroes
  getAll(): Observable<Hero[]> {
    return this.http
    .get<Hero[]>(this.heroesUrl)
    .pipe(tap((heroes) => this.log(`${heroes.length} Heróis Listados`)));
  }

  // GET /heroes/id
  getOne(id: number): Observable<Hero> {
    return this.http
    .get<Hero>(this.getUrl(id))
    .pipe(tap((hero) => this.log(`Herói Selecionado ${this.descAttributes(hero)}`)));
  }

  //GET /heroes?name=term
  search(term: string): Observable<Hero[]> {
    if (!term.trim()){
      return of([]);
    }
    return this.http
    .get<Hero[]>(`${this.heroesUrl}?name=${term}`)
    .pipe(
      tap((heroes) =>
      heroes.length
      ? this.log(`${heroes.length} Heróis Encontrado(s) -- Pesquisado: "${term}"`)
      : this.log(`Nenhum Herói Encontrado -- Pesquisado: "${term}"`)
    )
    );
  }

  // POST /heroes
  create(hero: Hero): Observable<Hero>{
    return this.http
    .post<Hero>(this.heroesUrl, hero)
    .pipe(
      tap((hero) =>
      this.log(`Herói Adicionado: ${this.descAttributes(hero)}`)
      )
      );
    }

    // PUT /heroes/id
    update(hero: Hero): Observable<Hero> {
      return this.http
      .put<Hero>(this.getUrl(hero.id), hero)
      .pipe(
        tap((hero) =>
        this.log(`Alterou Herói: ${this.descAttributes(hero)}`)
        )
        );
      }

      // DELETE /heroes/id
      delete(hero: Hero): Observable<any> {
        return this.http
        .delete<any>(this.getUrl(hero.id))
        .pipe(
          tap(() =>
          this.log(`Deletou Herói: ${this.descAttributes(hero)}`)
          )
          );


        }

        private descAttributes(hero: Hero): string {
          return `ID: ${hero.id} -- Nome: ${hero.name} -- Super Poder: ${hero.power} `
        }

        private log(message: string): void {

    this.messageService.add( `${this.messageService.getMessages().length+1}º Registro: ${message}`);

  }

  private getUrl(id: number): string {
    return `${this.heroesUrl}/${id}`;
  }
}
