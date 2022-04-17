import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-agent-news',
  templateUrl: './agent-news.component.html',
  styleUrls: ['./agent-news.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AgentNewsComponent {}
