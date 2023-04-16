import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Agent } from '@models/agent';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-agent-lineups-preview',
  templateUrl: './agent-lineups-preview.component.html',
  styleUrls: ['./agent-lineups-preview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [RouterLink],
})
export class AgentLineupsPreviewComponent {
  @Input() agent: Agent;
}
