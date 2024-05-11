import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SibblingComponentComponent } from '../app/sibbling-component/sibbling-component.component';
import { AuthGuard } from './auth-guard/auth.guard';
import { CanDeactivateGuard } from './auth-guard/can-deactivate.guard';
import { PipeComponentComponent } from './pipe-component/pipe-component.component';
import { SibblingComponent1Component } from './sibbling-component1/sibbling-component1.component';

const routes: Routes = [
  { path: 'sib', component: SibblingComponentComponent, canActivate: [AuthGuard] },
  { path: 'sib1', component: SibblingComponent1Component, canDeactivate: [CanDeactivateGuard] },
  { path: 'pipe', component: PipeComponentComponent, outlet:'outlet1' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
