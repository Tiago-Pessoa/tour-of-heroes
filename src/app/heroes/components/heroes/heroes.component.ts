import { Component, OnInit } from '@angular/core';
import { Hero } from '../../../core/models/hero.model';
import { HeroService } from '../../../core/services/hero.service';



@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'actions'];
  heroes: Hero[] = [];


  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
   this.heroService.getAll().subscribe((heroes) =>
    (this.heroes = heroes));
  }

  delete(hero: Hero): void {
    this.heroService.delete(hero).subscribe(() => {
      this.heroes = this.heroes.filter(h => h !== hero)
    })
  }


}
