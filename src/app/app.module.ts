import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {HttpModule} from '@angular/http';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AppBootstrapModule } from './modules/app-bootstrap.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FcSetListComponent } from './components/fc-set-list/fc-set-list.component';
import { FcSetComponent } from './components/fc-set/fc-set.component';
import { FcSharedSetListComponent } from './components/fc-shared-set-list/fc-shared-set-list.component';
import { MenuComponent } from './components/menu/menu.component';

import {FlashcardService} from './flashcard.service';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { MemorizeComponent } from './components/memorize/memorize.component';
import { TestComponent } from './components/test/test.component';
import { ProfileComponent } from './components/profile/profile.component';

const ROUTES = [
  { path: '', redirectTo: 'sets', pathMatch: 'full' },
  { path: 'sets', component: FcSetListComponent },
  { path: 'sets/:id', component: FcSetComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FcSetListComponent,
    FcSetComponent,
    FcSharedSetListComponent,
    MenuComponent,
    StatisticsComponent,
    MemorizeComponent,
    TestComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppBootstrapModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
    FlashcardService,
    {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
