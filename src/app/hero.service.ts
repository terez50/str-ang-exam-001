import { Injectable } from '@angular/core';
import { Hero } from './model/hero';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private list: Hero[] = [
    {
      id: 1,
      name: "Kuku Benkó",
      superPower: "eating",
      address: "Só u. 7."
    },
    {
      id: 2,
      name: "Super Zseni",
      superPower: "laughing",
      address: "Kő u. 17."
    },
    {
      id: 3,
      name: "Zsazsa",
      superPower: "running",
      address: "Ég u. 27."
    },
    {
      id: 4,
      name: "Nyanya",
      superPower: "seating",
      address: "Jenő u. 37."
    },
    {
      id: 5,
      name: "Jenőke",
      superPower: "jumping",
      address: "Jenő tér 47."
    }
  ];

  constructor() { }

  getAll(): Hero[] {
    return this.list;
  }
}
