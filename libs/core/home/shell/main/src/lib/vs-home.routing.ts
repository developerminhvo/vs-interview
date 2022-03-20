import {Route, RouterModule} from "@angular/router";
import {VsHomeComponent} from "./containers";

const routes: Route[] = [
  {
    path: '',
    component: VsHomeComponent,
  }
]

export const VSHomeRoutes = RouterModule.forChild(routes);
