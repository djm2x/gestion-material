import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FournisseurComponent } from './fournisseur.component';


const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full'},
  { path: 'list', component: FournisseurComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FournisseurRoutingModule { }
