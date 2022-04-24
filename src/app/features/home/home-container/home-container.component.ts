import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { Agent } from '@models/agent';
import { AgentsService } from '@services/agents.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeContainerComponent implements OnInit {
  constructor(
    private agentsService: AgentsService,
    private titleService: Title,
    private cd: ChangeDetectorRef
  ) {}

  agents!: Agent[];

  ngOnInit(): void {
    this.titleService.setTitle('Home');
    if (this.agentsService.agents.length) {
      this.agents = this.agentsService.agents;
    } else {
      this.agentsService.getAllAgents().subscribe((agents) => {
        this.agents = agents;
        this.cd.detectChanges();
      });
    }
  }
}
