import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppBootstrapModule } from './modules/app-bootstrap.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FcSetListComponent } from './components/fc-set-list/fc-set-list.component';
import { FcSetComponent } from './components/fc-set/fc-set.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FcSetListComponent,
    FcSetComponent
  ],
  imports: [
    BrowserModule,
    AppBootstrapModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
