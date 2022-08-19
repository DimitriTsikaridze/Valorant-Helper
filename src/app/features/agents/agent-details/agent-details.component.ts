import { Location } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { AgentsService } from '@services/agents.service';
import { Ability, Agent } from '@shared/models/agent';
import { capitalizeFirstletter } from '@shared/utils';
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'app-agent-details',
  templateUrl: './agent-details.component.html',
  styleUrls: ['./agent-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AgentDetailsComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private agentsService: AgentsService,
    public location: Location,
    private title: Title
  ) {}

  abilityVideo: string;
  agent$: Observable<Agent>;
  abilities: 'Ability1' | 'Ability2' | 'Grenade' | 'Ultimate';
  activeAbility = 'Ability1';

  ngOnInit(): void {
    const pathName: string = this.route.snapshot.params['id'];
    this.title.setTitle(`${capitalizeFirstletter(pathName)} details`);
    this.agent$ = this.agentsService.getSingleAgent(pathName).pipe(
      tap((agent: Agent) => {
        this.abilityVideo = agent.abilities[0].displayVideo;
      })
    );
  }

  abilityClick(ability: Ability) {
    this.activeAbility = ability.slot;
    this.abilityVideo = ability.displayVideo;
  }
}
