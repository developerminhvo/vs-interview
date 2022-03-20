import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VsAboutUsLayoutComponent } from './containers';

const ANGULAR_MODULES = [
  CommonModule
];

const MODULES = [

];

const COMPONENTS = [
  VsAboutUsLayoutComponent
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
export class VsAboutUsLayoutModule {}
