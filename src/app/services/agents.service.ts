import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { delay, Observable, of, tap } from 'rxjs';
import { Agent, NewAgent } from '@models/agent';
import { environment } from '@environment/environment';

const AGENTS_URL = `${environment.baseUrl}all-agents.json`;
const SINGLE_AGENT_URL = `${environment.baseUrl}agents/`;
@Injectable({
  providedIn: 'root',
})
export class AgentsService {
  private http = inject(HttpClient);
  private newAgent: NewAgent;
  private agents: Agent[] = [];

  getAllAgents(): Observable<Agent[]> {
    if (this.agents.length) return of(this.agents);
    return this.http.get<Agent[]>(AGENTS_URL).pipe(tap((agents) => (this.agents = agents)));
  }

  getSingleAgent(pathName: string) {
    return this.http.get<Agent>(`${SINGLE_AGENT_URL}${pathName}.json`);
  }

  getNewAgent(): Observable<NewAgent> {
    if (this.newAgent?.displayName) return of(this.newAgent);
    return this.http.get<NewAgent>(`${SINGLE_AGENT_URL}new-agent.json`).pipe(
      tap((agent) => (this.newAgent = agent)),
      delay(2000)
    );
  }
}
