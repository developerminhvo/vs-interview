import {Route, RouterModule} from "@angular/router";
import {ShellMainComponent} from "./container";

const routes: Route[] = [
  {
    path: '',
    component: ShellMainComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        loadChildren: () => import('@core-home').then((m) => m.VsHomeModule)
      },
      {
        path: 'about-us',
        loadChildren: () => import('@core-about-us').then((m) => m.VsAboutUsModule)
      },
      {
        path: 'portfolio',
        loadChildren: () => import('@core-portfolio').then((m) => m.VsPortfolioModule)
      },
    ]
  }
]

export const VSShellMainRoutes = RouterModule.forRoot(routes, { enableTracing: true });
