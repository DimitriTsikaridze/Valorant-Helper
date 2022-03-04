import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Agent } from '../shared/models/agent.interface';

@Injectable({
  providedIn: 'root',
})
export class AgentsService {
  private AGENTS_URL =
    'https://raw.githubusercontent.com/DimitriTsikaridze/Valorant-Helper-API/main/all-agents.json';

  constructor(private http: HttpClient) {}

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
}
