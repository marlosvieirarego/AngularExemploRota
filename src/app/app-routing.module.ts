import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes:  Routes = [
  { path: '', redirectTo: '/heroes', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot( 
      appRoutes, 
      //{ enableTracing: true } 
      ),
  ] ,
  exports: [ 
    RouterModule
  ]
})
export class AppRoutingModule { }
