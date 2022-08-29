import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environment/environment';
import { Weapon, WeaponDetails } from '@models/weapon';

import { map, Observable, retry } from 'rxjs';

const WEAPONS_URL = `${environment.baseUrl}all-weapons.json`;
const WEAPON_DETAILS_URL = `${environment.baseUrl}weapons`;

@Injectable({
  providedIn: 'root',
})
export class WeaponsService {
  constructor(private http: HttpClient) {}

  weapons: Weapon[] = [];

  getAllWeapons() {
    return this.http.get<Weapon[]>(WEAPONS_URL).pipe(
      retry(3),
      map((weapons: Weapon[]) => {
        for (const weapon of weapons) {
          this.weapons.push(weapon);
        }
        return this.weapons;
      })
    );
  }

  getWeaponDetails(weaponName: string): Observable<WeaponDetails> {
    return this.http
      .get<WeaponDetails>(`${WEAPON_DETAILS_URL}/${weaponName}.json`)
      .pipe(retry(3));
  }
}
