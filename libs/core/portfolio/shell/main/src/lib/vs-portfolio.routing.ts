import {Route, RouterModule} from "@angular/router";
import {VsPortfolioComponent} from "./containers";

const routes: Route[] = [
  {
    path: '',
    component: VsPortfolioComponent
  }
]

export const VSPortfolioRoutes = RouterModule.forChild(routes);
