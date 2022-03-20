import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VsPortfolioComponent } from './containers';
import {VSPortfolioRoutes} from "./vs-portfolio.routing";
import {VsPortfolioLayoutModule} from "@core-portfolio-layout";

const ANGULAR_MODULES = [
  CommonModule
]

const MODULES = [
  VsPortfolioLayoutModule,
  VSPortfolioRoutes
];

const COMPONENTS = [
  VsPortfolioComponent
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
export class VsPortfolioModule {}
