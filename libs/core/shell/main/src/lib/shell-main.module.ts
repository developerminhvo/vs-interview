import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ShellMainComponent } from './container';
import { CoreShellUiLayoutModule } from "@core-shell-layout";
import { VSShellMainRoutes } from "./shell-main.routing";

const ANGUlAR_MODULES = [
  CommonModule,
  RouterModule
];

const MODULES = [
  CoreShellUiLayoutModule,
  VSShellMainRoutes
];

const COMPONENTS = [
  ShellMainComponent
];
@NgModule({
  imports: [
    ...ANGUlAR_MODULES,
    ...MODULES
  ],
  declarations: [
    ...COMPONENTS
  ],
  exports: [
    ...COMPONENTS
  ],
})
export class CoreShellMainModule {}
