import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppBootstrapModule } from './modules/app-bootstrap.module';

import { AppComponent } from './app.component';
import { FcSetListComponent } from './components/fc-set-list/fc-set-list.component';


@NgModule({
  declarations: [
    AppComponent,
    FcSetListComponent
  ],
  imports: [
    BrowserModule,
    AppBootstrapModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
