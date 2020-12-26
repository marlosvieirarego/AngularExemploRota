import { Component, OnInit } from '@angular/core';

import { Crisis } from '../crisis';
import { CrisisService } from '../crises.service';
import { MessageService } from '../../message.service';

@Component({
  selector: 'app-crises-list',
  templateUrl: './crises-list.component.html',
  styleUrls: ['./crises-list.component.css']
})
export class CrisesListComponent implements OnInit {

  selectedCrisis: Crisis;

  crisis: Crisis[];

  constructor(private crisesService: CrisisService, private messageService: MessageService) { }

  ngOnInit() {
    console.log("CrisesListComponent.ngOnInit()")
    this.getCrises();
  }

  onSelect(crisis: Crisis): void {
    this.selectedCrisis = crisis;
    this.messageService.add(`CrisesComponent: Selected crisis id=${this.selectedCrisis.id}`);
  }

  getCrises(): void {
    this.crisesService.getCrises()
        .subscribe(crises => this.crisis = crises);
    console.log("getCrises()");
  }
}


 