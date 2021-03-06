import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestComponent } from './test/test.component';
import { TestcompComponent } from './testmodule/testcomp/testcomp.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { FormbasicsComponent } from './testmodule/formbasics/formbasics.component';


const routes: Routes = [{
  path: "",
  redirectTo: 'comptest',
  pathMatch: 'full'
},{
    path: "login",
  component: FormbasicsComponent
},{
  path: 'test',
  component: TestComponent
}, {
    path: 'comptest',
    component: TestcompComponent
  }, {
    path: '**',
    component: PagenotfoundComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
