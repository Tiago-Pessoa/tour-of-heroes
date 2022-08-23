import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from './hero.model'
import { MessageService } from './message.service';
import {HEROES} from './mock-heroes'

@Injectable({
  providedIn: 'root',
})
export class HeroService {

constructor(private messageService: MessageService) {}

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add('Registro do Herói selecionado:');
    return heroes;
  }

  getHero(id: number): Observable<Hero> {
    const hero = HEROES.find((hero) => hero.id === id)!;
    this.messageService.add(`Herói selecionado id=${id}`);
    return of(hero);
  }
}
