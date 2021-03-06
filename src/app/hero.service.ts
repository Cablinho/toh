import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';

@Injectable()
export class HeroService {
  private heroesUrl = 'api/heroes';
  constructor(
    private messageService: MessageService,
    private http: HttpClient,) { }

  getHeroes(): Observable<Hero[]> {
    // Todo: send the message _after_ fetching the heroes
    this.messageService.add('HeroService: + message');
    return this.http.get<Hero[]>(this.heroesUrl);sar
  }
  getHero(id: number): Observable<Hero>{
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }
}
