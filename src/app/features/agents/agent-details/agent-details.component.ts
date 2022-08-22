import { Location } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Params } from '@angular/router';
import { AgentsService } from '@services/agents.service';
import { Ability, Agent } from '@shared/models/agent';
import { map, Observable, switchMap, tap } from 'rxjs';

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
    this.agent$ = this.route.params.pipe(
      map((params) => params.id),
      switchMap((id) => this.agentsService.getSingleAgent(id)),
      tap(({ abilities, displayName }) => {
        this.abilityVideo = abilities[0].displayVideo;
        this.title.setTitle(`${displayName} Details`);
      })
    );
  }

  abilityClick(ability: Ability) {
    this.activeAbility = ability.slot;
    this.abilityVideo = ability.displayVideo;
  }
}
