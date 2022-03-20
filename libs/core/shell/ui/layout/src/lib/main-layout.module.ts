import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './containers';
import {RouterModule} from "@angular/router";

const ANGULAR_MODULES = [
  CommonModule,
  RouterModule
];

const MODULES = [

];

const COMPONENTS = [
  MainLayoutComponent
];
@NgModule({
  imports: [
    ...ANGULAR_MODULES
  ],
  declarations: [
    ...COMPONENTS
  ],
  exports: [
    ...COMPONENTS
  ],
})
export class CoreShellUiLayoutModule {}
