import {
  Location,
  NgIf,
  NgStyle,
  NgFor,
  NgClass,
  AsyncPipe,
} from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AgentsService } from '@services/agents.service';
import { Ability, Agent } from '@shared/models/agent';
import { Observable, switchMap, tap } from 'rxjs';
import { MetaService } from '@services/meta.service';
import { LoadingComponent, TitleComponent } from '@shared/components';

@Component({
  selector: 'app-agent-details',
  templateUrl: './agent-details.component.html',
  styleUrls: ['./agent-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    NgIf,
    NgStyle,
    TitleComponent,
    NgFor,
    NgClass,
    LoadingComponent,
    AsyncPipe,
  ],
})
export class AgentDetailsComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private agentsService: AgentsService,
    private metaService: MetaService,
    public location: Location
  ) {}

  abilityVideo: string;
  agent$: Observable<Agent>;
  abilities: 'Ability1' | 'Ability2' | 'Grenade' | 'Ultimate';
  activeAbility = 'Ability1';

  ngOnInit(): void {
    this.agent$ = this.route.params.pipe(
      switchMap(({ id }) => this.agentsService.getSingleAgent(id)),
      tap(({ abilities, displayName, fullPortraitV2, description }) => {
        this.abilityVideo = abilities[0].displayVideo;
        this.metaService.generateTags({
          title: `${displayName} Description`,
          image: fullPortraitV2,
          description: description,
        });
      })
    );
  }

  abilityClick(ability: Ability) {
    this.activeAbility = ability.slot;
    this.abilityVideo = ability.displayVideo;
  }
}
