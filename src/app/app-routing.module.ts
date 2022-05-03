import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddFileComponent } from './add-file/add-file.component';
import { AddFilecsvComponent } from './admin/add-filecsv/add-filecsv.component';
import { ConfigPublicationComponent } from './admin/config-publication/config-publication.component';
import { RegionEducativeComponent } from './admin/region-educative/region-educative.component';
import { LoginComponent } from './admin/login/login.component';
import { BaseComponent } from './base/base.component';
import { ErrorComponent } from './error/error.component';
import { InfoComponent } from './info/info.component';
import { ImportFileComponent } from './admin/import-file/import-file.component';
import GestionLogComponent from './admin/gestion-log/gestion-log.component';
import { StatistiqueComponent } from './admin/statistique/statistique.component';
import { DatePublicationGeneraleComponent } from './admin/date-publication-generale/date-publication-generale.component';
import { StepCEPDComponent } from './resultatCEPD/step-cepd/step-cepd.component';
import { ConsultationCEPDComponent } from './resultatCEPD/consultation-cepd/consultation-cepd.component';
import { ConsultationBEPCComponent } from './resultatBEPC/consultation-bepc/consultation-bepc.component';
import { StepBEPCComponent } from './resultatBEPC/step-bepc/step-bepc.component';
import { StepBACIComponent } from './resultatBACI/step-baci/step-baci.component';
import { ConsultationBACIComponent } from './resultatBACI/consultation-baci/consultation-baci.component';
import { ConsultationBACIIComponent } from './resultatBACII/consultation-bacii/consultation-bacii.component';
import { StepBACIIComponent } from './resultatBACII/step-bacii/step-bacii.component';
import { UtilisateurComponent } from './admin/gestionUtilisateur/utilisateur/utilisateur.component';
import { RoleComponent } from './admin/gestionUtilisateur/role/role.component';

const routes: Routes = [
  {path:'',component:BaseComponent},
  {path: 'info', component: InfoComponent},
  {path: 'resultatCEPD/stepCEPD', component: StepCEPDComponent},
  {path: 'resultatCEPD/afficheCEPD', component: ConsultationCEPDComponent},
  {path: 'resultatBEPC/stepBEPC', component: StepBEPCComponent},
  {path: 'resultatBEPC/afficheBEPC', component: ConsultationBEPCComponent},
  {path: 'resultatBACI/stepBACI', component: StepBACIComponent},
  {path: 'resultatBACI/afficheBACI', component: ConsultationBACIComponent},
  {path: 'resultatBACII/stepBACII', component: StepBACIIComponent},
  {path: 'resultatBACII/afficheBACII', component: ConsultationBACIIComponent},
  {path: 'admin/add-file', component: AddFilecsvComponent},
  {path: 'admin/logs', component: GestionLogComponent},
  {path: 'admin/import-file', component: ImportFileComponent},
  {path: 'admin/config', component: ConfigPublicationComponent},
  {path: 'admin/dateGenerale', component: DatePublicationGeneraleComponent},
  {path: 'admin/regionEducative', component: RegionEducativeComponent},
  {path: 'admin/stat', component: StatistiqueComponent},
  {path:'admin/login', component: LoginComponent},
  {path:'admin/gestion-user', component: UtilisateurComponent},
  {path:'admin/gestion-role', component: RoleComponent},
  {path:'**',component: ErrorComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
