import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { TitleComponent } from './components/title/title.component';
import { AgentCardComponent } from './components/agent-card/agent-card.component';

const components = [ButtonComponent, TitleComponent, AgentCardComponent];

@NgModule({
  declarations: [components],
  imports: [CommonModule],
  exports: [components],
})
export class SharedModule {}
