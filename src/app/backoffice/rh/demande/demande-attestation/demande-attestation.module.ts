import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemandeAttestationComponent } from './demande-attestation.component';
import { AdddemandeAttestationComponent } from './adddemande-attestation/adddemande-attestation.component';
import { DetailsdemandeAttestationComponent } from './detailsdemande-attestation/detailsdemande-attestation.component';
import { ListdemandeAttestationComponent } from './listdemande-attestation/listdemande-attestation.component';



@NgModule({
  declarations: [
    DemandeAttestationComponent,
    AdddemandeAttestationComponent,
    DetailsdemandeAttestationComponent,
    ListdemandeAttestationComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DemandeAttestationModule { }
