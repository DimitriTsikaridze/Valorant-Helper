import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AgentsService } from '@services/agents.service';
import { Ability, Agent } from '@shared/models/agent';

@Component({
  selector: 'app-agent-details',
  templateUrl: './agent-details.component.html',
  styleUrls: ['./agent-details.component.scss'],
})
export class AgentDetailsComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private agentsService: AgentsService,
    private location: Location
  ) {}

  abilityVideo!: string;
  agent!: Agent;
  abilities!: 'Ability1' | 'Ability2' | 'Grenade' | 'Ultimate';
  activeAbility = 'Ability1';

  ngOnInit(): void {
    const pathName = this.route.snapshot.params['id'];
    this.agentsService.getSingleAgent(pathName).subscribe((data) => {
      this.agent = data;
      this.abilityVideo = this.agent.abilities[0].displayVideo;
    });
  }

  navigateBack() {
    this.location.back();
  }

  abilityClick(ability: Ability) {
    this.activeAbility = ability.slot;
    this.abilityVideo = ability.displayVideo;
  }
}
