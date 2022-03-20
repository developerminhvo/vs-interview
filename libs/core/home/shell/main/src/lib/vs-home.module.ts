import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VsHomeComponent } from './containers';
import {VSHomeRoutes} from "./vs-home.routing";
import {VsHomeLayoutModule} from "@core-home-layout";

const ANGULAR_MODULES = [
  CommonModule
];

const MODULES = [
  VsHomeLayoutModule,
  VSHomeRoutes
];

const COMPONENTS = [
  VsHomeComponent
];

@NgModule({
  imports: [
    ...ANGULAR_MODULES,
    ...MODULES
  ],
  declarations: [
    ...COMPONENTS
  ],
  exports: [
    ...COMPONENTS
  ],
})
export class VsHomeModule {}
