import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ButtonComponent } from '@shared/components';
import { NgStyle, AsyncPipe } from '@angular/common';

@Component({
    selector: 'app-agent-news',
    templateUrl: './agent-news.component.html',
    styleUrls: ['./agent-news.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [NgStyle, ButtonComponent, RouterLink, AsyncPipe]
})
export class AgentNewsComponent {
  agent = inject(ActivatedRoute).snapshot.data['newAgent'];
}
