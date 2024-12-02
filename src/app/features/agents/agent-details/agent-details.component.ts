import { Location, NgStyle, AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, inject, input } from '@angular/core';
import { AgentsService } from '@services/agents.service';
import { Ability, AbilityType, Agent } from '@shared/models/agent';
import { Observable, tap } from 'rxjs';
import { MetaService } from '@services/meta.service';
import { LoadingComponent, TitleComponent } from '@shared/components';

@Component({
  selector: 'app-agent-details',
  templateUrl: './agent-details.component.html',
  styleUrls: ['./agent-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgStyle, TitleComponent, LoadingComponent, AsyncPipe],
})
export class AgentDetailsComponent implements OnInit {
  private agentsService = inject(AgentsService);
  private metaService = inject(MetaService);
  public location = inject(Location);

  id = input('');

  abilityVideo: string;
  agent$: Observable<Agent>;
  abilities: AbilityType;
  activeAbility = AbilityType.Ability1;

  ngOnInit(): void {
    this.agent$ = this.agentsService.getSingleAgent(this.id()).pipe(
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
