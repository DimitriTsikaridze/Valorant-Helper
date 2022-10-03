import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WeaponsService } from '@services/weapons.service';
import { Observable, switchMap, tap } from 'rxjs';
import { WeaponDetails } from '@shared/models/weapon';
import { MetaService } from '../../../services/meta.service';

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
    private metaService: MetaService
  ) {}

  weaponDetails$: Observable<WeaponDetails>;

  ngOnInit(): void {
    this.weaponDetails$ = this.route.params.pipe(
      switchMap(({ name }) => this.weaponsService.getWeaponDetails(name)),
      tap(({ displayName, weaponStats, displayIcon }) => {
        if (!weaponStats) return;
        const { fireRate, magazineSize } = weaponStats;

        this.metaService.generateTags({
          title: `${displayName} Details`,
          description: `Fire rate: ${fireRate}, Magazine Size ${magazineSize}`,
          image: displayIcon,
        });
      })
    );
  }
}
