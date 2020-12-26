import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  hero: Hero;
 

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private heroService: HeroService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  gotoHeroes(hero: Hero) {
    const heroId = hero ? hero.id : null ;
    this.router.navigate(['/heroes', { id: heroId, foo: 'foo' }]);
  }


}