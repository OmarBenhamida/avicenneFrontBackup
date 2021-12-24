import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemandeFichepaieComponent } from './demande-fichepaie.component';
import { AdddemandeFichepaieComponent } from './adddemande-fichepaie/adddemande-fichepaie.component';
import { ListdemandeFichepaieComponent } from './listdemande-fichepaie/listdemande-fichepaie.component';
import { DetailsdemandeFichepaieComponent } from './detailsdemande-fichepaie/detailsdemande-fichepaie.component';



@NgModule({
  declarations: [
    DemandeFichepaieComponent,
    AdddemandeFichepaieComponent,
    ListdemandeFichepaieComponent,
    DetailsdemandeFichepaieComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DemandeFichepaieModule { }
