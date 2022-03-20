import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VsHomeLayoutComponent } from './containers';

const ANGULAR_MODULES = [
  CommonModule
];

const MODULES = [];

const COMPONENTS = [
  VsHomeLayoutComponent
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
export class VsHomeLayoutModule {}
