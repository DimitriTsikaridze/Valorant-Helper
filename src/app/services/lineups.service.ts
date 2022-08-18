import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Map } from '@models/map';
import { environment } from '@environment/environment';
import { map } from 'rxjs';

const MAPS_DATA = `${environment.baseUrl}all-maps.json`;
const MAP_PATH = `${environment.baseUrl}assets/maps`;
@Injectable({
  providedIn: 'root',
})
export class LineupsService {
  constructor(private http: HttpClient) {}

  maps: Map[] = [];

  getAllMaps() {
    return this.http.get<Map[]>(MAPS_DATA).pipe(
      map((maps: Map[]) => {
        for (const map of maps) {
          this.maps.push(map);
        }
        return this.maps;
      })
    );
  }

  getMapImagePath(mapName: string, mapType: 'layout' | 'splash' | 'list-view') {
    return `${MAP_PATH}/${mapName}/${mapName}-${mapType}.webp`;
  }
}
