import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, retry } from 'rxjs';
import { Agent, NewAgent } from '@models/agent';
import { environment } from '@environment/environment';

const AGENTS_URL = `${environment.baseUrl}all-agents.json`;
const SINGLE_AGENT_URL = `${environment.baseUrl}agents/`;
@Injectable({
  providedIn: 'root',
})
export class AgentsService {
  constructor(private http: HttpClient) {}

  agents: Agent[] = [];

  getAllAgents() {
    return this.http.get<Agent[]>(AGENTS_URL).pipe(
      retry(3),
      map((agents: Agent[]) => {
        for (const agent of agents) {
          this.agents.push(agent);
        }
        return this.agents;
      })
    );
  }

  getSingleAgent(pathName: string) {
    return this.http
      .get<Agent>(`${SINGLE_AGENT_URL}${pathName}.json`)
      .pipe(retry(3));
  }

  getNewAgent() {
    return this.http
      .get<NewAgent>(`${SINGLE_AGENT_URL}new-agent.json`)
      .pipe(retry(3));
  }
}
