import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { VsPortfolioLayoutComponent } from './containers/vs-portfolio-layout/vs-portfolio-layout.component';

@NgModule({
  imports: [
    CommonModule,

    RouterModule.forChild([
      /* {path: '', pathMatch: 'full', component: InsertYourComponentHere} */
    ]),
  ],
  declarations: [
    VsPortfolioLayoutComponent
  ],
  exports: [
    VsPortfolioLayoutComponent
  ],
})
export class VsPortfolioLayoutModule {}
