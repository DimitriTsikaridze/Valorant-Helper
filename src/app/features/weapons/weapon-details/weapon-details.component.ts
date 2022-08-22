import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { WeaponsService } from '@services/weapons.service';
import { map, Observable, switchMap, tap } from 'rxjs';
import { WeaponDetails } from '@shared/models/weapon';

@Component({
  selector: 'app-weapon-details',
  templateUrl: './weapon-details.component.html',
  styleUrls: ['./weapon-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WeaponDetailsComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private weaponsService: WeaponsService,
    private title: Title
  ) {}

  weaponDetails$: Observable<WeaponDetails>;

  ngOnInit(): void {
    this.weaponDetails$ = this.route.params.pipe(
      map((params) => params.weaponName),
      switchMap((name) => this.weaponsService.getWeaponDetails(name)),
      tap(({ displayName }) => this.title.setTitle(`${displayName} Details`))
    );
  }
}
