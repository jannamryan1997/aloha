import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './com/annaniks/aloha/core/guards/auth.guards';

const routes: Routes = [
  {
    path: "home",
    loadChildren: () => import('./com/annaniks/aloha/pages/home/home.module').then(m => m.HomeModule),
  },
  {
    path: "auth",
    loadChildren: () => import('./com/annaniks/aloha/pages/auth/auth.module').then(m => m.AuthModule),
  },
  {
    path: "",
    loadChildren: () => import('./com/annaniks/aloha/pages/main/main.module').then(m => m.MainModule),
    // canActivate: [AuthGuard]
  },
  {
    path: "**",
    loadChildren: () => import('./com/annaniks/aloha/pages/not-found/not-found.module').then(m => m.NotFoundModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }