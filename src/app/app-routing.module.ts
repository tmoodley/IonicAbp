import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'zones', loadChildren: './zones/zones.module#ZonesPageModule' },
  { path: 'logout', loadChildren: './logout/logout.module#LogoutPageModule' },
  {
    path: 'parades/:id',
    loadChildren: './parades/parades.module#ParadesPageModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
