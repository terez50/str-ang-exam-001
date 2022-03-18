import { Component, OnInit } from '@angular/core';
import { HeroService } from 'src/app/hero.service';
import { Hero } from 'src/app/model/hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = this.heroService.getAll();
  phrase: string = '';
  key: string = 'name';

  constructor(
    private heroService: HeroService
    ) { }

  ngOnInit(): void {
  }

  onClick(field: string): void {
    this.key = field;
  }
}
