import {Route, RouterModule} from "@angular/router";
import {VsAboutUsComponent} from "./containers";

const routes: Route[] = [
  {
    path: '',
    component: VsAboutUsComponent
  }
];

export const VSAboutUsRoutes = RouterModule.forChild(routes);
