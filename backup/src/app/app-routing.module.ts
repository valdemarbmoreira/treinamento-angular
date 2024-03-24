import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { checkParmGuard } from './guards/check-parm.guard';

const routes: Routes = [
  { path: '', redirectTo: '/mod01', pathMatch: 'full' },
    { path: 'mod01', loadChildren: () => import('./modules/module01/module01.module').then(m => m.Module01Module) },
    { path: 'mod02/:id', loadChildren: () => import('./modules/module02/module02.module').then(m => m.Module02Module) , canActivate:[checkParmGuard]},
  { path: '**', component: NotFoundComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
