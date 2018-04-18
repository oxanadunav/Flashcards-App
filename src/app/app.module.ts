import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppBootstrapModule } from './modules/app-bootstrap.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FcSetListComponent } from './components/fc-set-list/fc-set-list.component';
import { FcSetComponent } from './components/fc-set/fc-set.component';
import { FcSharedSetListComponent } from './components/fc-shared-set-list/fc-shared-set-list.component';
import { MenuComponent } from './components/menu/menu.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FcSetListComponent,
    FcSetComponent,
    FcSharedSetListComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppBootstrapModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
