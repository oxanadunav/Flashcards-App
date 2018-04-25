import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpModule} from '@angular/http';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AppBootstrapModule } from './modules/app-bootstrap.module';

import { FlashcardService} from './services/flashcard.service';
import {GoogleTranslateService} from './services/google-translate.service';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FcSetListComponent } from './components/fc-set-list/fc-set-list.component';
import { FcSetComponent } from './components/fc-set/fc-set.component';
import { FcSharedSetListComponent } from './components/fc-shared-set-list/fc-shared-set-list.component';
import { NewSetComponent} from './components/new-set/new-set.component';
import { StudySetComponent } from './components/study-set/study-set.component';
import { EditSetComponent } from './components/edit-set/edit-set.component';
import { ViewStatisticsComponent } from './components/view-statistics/view-statistics.component';

const ROUTES = [
  { path: '', redirectTo: 'sets', pathMatch: 'full' },
  { path: 'sets', component: FcSetListComponent },
  { path: 'sets/:id', component: FcSetComponent },
  { path: 'newset', component: NewSetComponent},
  { path: 'sharedsets', component: FcSharedSetListComponent},
  { path: 'sets/:id/studyset', component:  StudySetComponent},
  { path: 'sets/:id/editset', component:  EditSetComponent},
  { path: 'sets/:id/viewstatistics', component:  ViewStatisticsComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FcSetListComponent,
    FcSetComponent,
    FcSharedSetListComponent,
    NewSetComponent,
    StudySetComponent,
    EditSetComponent,
    ViewStatisticsComponent
  ],
  imports: [
    BrowserModule,
    AppBootstrapModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
    FlashcardService,
    GoogleTranslateService,
    {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
