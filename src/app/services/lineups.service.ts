import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Map } from '../features/lineups/lineups-container/agent-lineup-maps/maps.model';

@Injectable({
  providedIn: 'root',
})
export class LineupsService {
  private MAPS_URL =
    'https://raw.githubusercontent.com/DimitriTsikaridze/Valorant-Helper-API/main/all-maps.json';

  constructor(private http: HttpClient) {}

  getMaps() {
    return this.http.get<Map[]>(this.MAPS_URL);
  }
}
