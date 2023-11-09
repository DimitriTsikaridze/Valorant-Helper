import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AgentsService } from '@services/agents.service';
import { RouterLink } from '@angular/router';
import { ButtonComponent } from '@shared/components';
import { NgIf, NgStyle, AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-agent-news',
  templateUrl: './agent-news.component.html',
  styleUrls: ['./agent-news.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [NgIf, NgStyle, ButtonComponent, RouterLink, AsyncPipe],
})
export class AgentNewsComponent {
  newAgent$ = inject(AgentsService).getNewAgent();
}
