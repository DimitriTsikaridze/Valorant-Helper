import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Map } from '@models/map';

@Injectable({
  providedIn: 'root',
})
export class LineupsService {
  private MAPS_DATA =
    'https://raw.githubusercontent.com/DimitriTsikaridze/Valorant-Helper-API/main/all-maps.json';
  private MAP_PATH =
    'https://raw.githubusercontent.com/DimitriTsikaridze/Valorant-Helper-API/main/assets/maps';

  constructor(private http: HttpClient) {}

  getMapsData() {
    return this.http.get<Map[]>(this.MAPS_DATA);
  }

  getMapImagePath(mapName: string, mapType: 'layout' | 'splash' | 'list-view') {
    return `${this.MAP_PATH}/${mapName}/${mapName}-${mapType}.webp`;
  }
}
