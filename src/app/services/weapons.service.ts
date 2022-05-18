import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environment/environment';
import { Weapon } from '@models/weapon';

import { Observable } from 'rxjs';

const WEAPONS_URL = `${environment.baseUrl}/all-weapons.json`;

@Injectable({
  providedIn: 'root',
})
export class WeaponsService {
  constructor(private http: HttpClient) {}

  weapons$: Observable<Weapon[]> = this.http.get<Weapon[]>(WEAPONS_URL);
}
