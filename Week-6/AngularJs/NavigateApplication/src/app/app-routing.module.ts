import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from 'src/app/home/home.component';
import { MyPageComponent } from 'src/app/mypage/mypage.component';
import { DataComponent } from 'src/app/data/data.component';
import { AuthGuard } from './auth.guard';
const routes: Routes = [
  { path: '',
  redirectTo: 'Home',
  pathMatch: 'full'
},
{
  path: 'Home',
  component: HomeComponent
},
{
  path: 'Superheroes',
  component: DataComponent,
  canActivate: [AuthGuard]
},
{
  path: '**',
  component: MyPageComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
