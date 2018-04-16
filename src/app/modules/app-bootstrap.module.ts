import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { AlertModule } from 'ngx-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    TooltipModule.forRoot(),
    AlertModule.forRoot()
  ],
  exports: [TooltipModule, AlertModule]
})
export class AppBootstrapModule {}
