import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VsAboutUsComponent } from './containers/';
import {VSAboutUsRoutes} from "./vs-about-us.routing";
import {VsAboutUsLayoutModule} from "@core-about-us-layout";

const ANGULAR_MODULES = [
  CommonModule
];

const MODULES = [
  VsAboutUsLayoutModule,
  VSAboutUsRoutes
];

const COMPONENTS = [
  VsAboutUsComponent
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
  ]
})
export class VsAboutUsModule {}
