import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgentsContainerComponent } from './agents-container/agents-container.component';

const routes: Routes = [{ path: '', component: AgentsContainerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgentsRoutingModule {}
