import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { Agent } from '../shared/models/agent.interface';

@Injectable({
  providedIn: 'root',
})
export class AgentsService {
  private AGENTS_URL =
    'https://raw.githubusercontent.com/DimitriTsikaridze/Valorant-Helper-API/main/all-agents.json';

  constructor(private http: HttpClient, private router: Router) {}

  agents: Agent[] = [];

  getAllAgents() {
    return this.http.get<Agent[]>(this.AGENTS_URL).pipe(
      map((agents: Agent[]) => {
        for (const agent of agents) {
          this.agents.push(agent);
        }
        return this.agents;
      })
    );
  }

  navigateToAgent(agentName: string, agent: Agent) {
    //check for fcking kay/o
    const name = agentName.replace('/', '').toLocaleLowerCase();
    this.router.navigateByUrl(`agents/${name}`, { state: { agent: agent } });
  }
}
