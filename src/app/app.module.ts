import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule, HttpClient} from '@angular/common/http';

import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InfoComponent } from './info/info.component';
import { ResultatComponent } from './resultat/resultat.component';
import { BaseComponent } from './base/base.component';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms'
import { LoginComponent } from './admin/login/login.component';
import { ErrorComponent } from './error/error.component';
import { AddFileComponent } from './add-file/add-file.component';
import { AddFilecsvComponent } from './admin/add-filecsv/add-filecsv.component';
import { SidebarComponent } from './admin/sidebar/sidebar.component';
import { AffichageResultatComponent } from './affichage-resultat/affichage-resultat.component';
import { GoogleVolumeListResponseComponent } from './admin/google-volume-list-response/google-volume-list-response.component';
import { ConfigPublicationComponent } from './admin/config-publication/config-publication.component';
import { RegionEducativeComponent } from './admin/region-educative/region-educative.component'; // <-- NgModel lives here
registerLocaleData(localeFr, 'fr');
import { LOCALE_ID } from '@angular/core';
import { GestionLogComponent } from './admin/gestion-log/gestion-log.component';
import { StatistiqueComponent } from './admin/statistique/statistique.component';
import { CalendarComponent } from './admin/calendar/calendar.component';
import { ImportFileComponent } from './admin/import-file/import-file.component';




@NgModule({
  declarations: [
    AppComponent,
    InfoComponent,
    ResultatComponent,
    BaseComponent,
    LoginComponent,
    ErrorComponent,
    AddFileComponent,
    AddFilecsvComponent,
    SidebarComponent,
    AffichageResultatComponent,
    GoogleVolumeListResponseComponent,
    ConfigPublicationComponent,
    RegionEducativeComponent,
    GestionLogComponent,
    StatistiqueComponent,
    CalendarComponent,
    ImportFileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: "fr-FR" }],
  bootstrap: [AppComponent]
})
export class AppModule { }
