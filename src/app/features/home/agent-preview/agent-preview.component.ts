import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Agent } from '@models/agent';
import { ButtonComponent } from '../../../shared/components/button/button.component';
import { RouterLink } from '@angular/router';
import { AgentCardComponent } from '../../../shared/components/agent-card/agent-card.component';
import { NgFor } from '@angular/common';
import { TitleComponent } from '../../../shared/components/title/title.component';

@Component({
  selector: 'app-agent-preview',
  templateUrl: './agent-preview.component.html',
  styleUrls: ['./agent-preview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    TitleComponent,
    NgFor,
    AgentCardComponent,
    RouterLink,
    ButtonComponent,
  ],
})
export class AgentPreviewComponent {
  @Input() agents: Agent[];
}
