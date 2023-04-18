import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Agent } from '@models/agent';
import { RouterLink } from '@angular/router';
import { NgFor } from '@angular/common';
import {
  ButtonComponent,
  AgentCardComponent,
  TitleComponent,
} from '@shared/components';

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
