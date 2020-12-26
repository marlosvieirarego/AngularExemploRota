import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Crisis } from '../crisis';
import { CrisisService } from '../crises.service';

@Component({
  selector: 'app-crisis-detail',
  templateUrl: './crisis-detail.component.html',
  styleUrls: ['./crisis-detail.component.css']
})
export class CrisisDetailComponent implements OnInit {

  crisis: Crisis;
 

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private crisisService: CrisisService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    
    this.crisisService.getCrisis(id)
      .subscribe(crisis => this.crisis = crisis);
  }

  gotocrisises(crisis: Crisis) {
    const crisisId = crisis ? crisis.id : null ;
    this.router.navigate(['/crisis', { id: crisisId, foo: 'foo' }]);
  }


}