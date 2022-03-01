import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Agent, AgentsResponseType } from '../shared/models/agent.interface';

@Injectable({
  providedIn: 'root',
})
export class AgentsService {
  private AGENTS_URL = 'https://valorant-api.com/v1/agents';

  constructor(private http: HttpClient) {}

  agents: Agent[] = [];

  getAllAgents() {
    return this.http.get<AgentsResponseType>(this.AGENTS_URL).pipe(
      map((response: AgentsResponseType) => {
        for (const agent of response.data) {
          if (agent.isPlayableCharacter) {
            this.agents.push(agent);
          }
        }
        return this.agents;
      })
    );
  }
}
