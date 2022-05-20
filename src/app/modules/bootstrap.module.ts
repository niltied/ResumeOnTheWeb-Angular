import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { TabsModule } from 'ngx-bootstrap/tabs';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TooltipModule.forRoot(),
    TabsModule.forRoot(),
  ],
  exports: [
    TooltipModule,
    TabsModule,
  ]
})
export class BootstrapModule { }
