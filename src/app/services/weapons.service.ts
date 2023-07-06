import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '@environment/environment';
import { Weapon, WeaponDetails } from '@models/weapon';

import { Observable, of, tap } from 'rxjs';

const WEAPONS_URL = `${environment.baseUrl}all-weapons.json`;
const WEAPON_DETAILS_URL = `${environment.baseUrl}weapons`;

@Injectable({
  providedIn: 'root',
})
export class WeaponsService {
  private http = inject(HttpClient);

  private weapons: Weapon[] = [];

  getAllWeapons(): Observable<Weapon[]> {
    if (this.weapons.length) return of(this.weapons);
    return this.http
      .get<Weapon[]>(WEAPONS_URL)
      .pipe(tap((weapons) => this.weapons.push(...weapons)));
  }

  getWeaponDetails(weaponName: string): Observable<WeaponDetails> {
    return this.http.get<WeaponDetails>(
      `${WEAPON_DETAILS_URL}/${weaponName}.json`
    );
  }
}
