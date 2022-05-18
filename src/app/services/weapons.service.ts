import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environment/environment';
import { Weapon, WeaponDetails } from '@models/weapon';

import { Observable } from 'rxjs';

const WEAPONS_URL = `${environment.baseUrl}/all-weapons.json`;
const WEAPON_DETAILS_URL = `${environment.baseUrl}/weapons`;

@Injectable({
  providedIn: 'root',
})
export class WeaponsService {
  constructor(private http: HttpClient) {}

  weapons$: Observable<Weapon[]> = this.http.get<Weapon[]>(WEAPONS_URL);

  getWeaponDetails(weaponName: string): Observable<WeaponDetails> {
    return this.http.get<WeaponDetails>(
      `${WEAPON_DETAILS_URL}/${weaponName}.json`
    );
  }
}
