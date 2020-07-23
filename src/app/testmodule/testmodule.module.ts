import { FormsModule } from '@angular/forms';
import { TestcompComponent } from './testcomp/testcomp.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipemoduleModule } from '../pipemodule/pipemodule.module';
import { AppRoutingModule } from '../app-routing.module';
import { FormbasicsComponent } from './formbasics/formbasics.component';
@NgModule({
  declarations: [TestcompComponent, FormbasicsComponent],
  imports: [
    CommonModule,
    FormsModule,
    PipemoduleModule,
    AppRoutingModule
  ],
  exports: [TestcompComponent]
})
export class TestmoduleModule { }
