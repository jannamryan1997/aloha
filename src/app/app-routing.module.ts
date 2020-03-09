import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: "", redirectTo: 'auth', pathMatch: "full" },
  {
    path: "auth",
    loadChildren: () => import('./com/annaniks/aloha/pages/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: "main",
    loadChildren: () => import('./com/annaniks/aloha/pages/main/main.module').then(m => m.MainModule)
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
