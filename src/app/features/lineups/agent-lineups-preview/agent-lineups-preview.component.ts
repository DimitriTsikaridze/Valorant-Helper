import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Agent } from '@models/agent';
import { RouterLink } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-agent-lineups-preview',
  templateUrl: './agent-lineups-preview.component.html',
  styleUrls: ['./agent-lineups-preview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, NgOptimizedImage],
})
export class AgentLineupsPreviewComponent {
  agent = input.required<Agent>();
}
