import { ChangeDetectionStrategy, Component, OnInit, inject, input } from '@angular/core';
import { WeaponsService } from '@services/weapons.service';
import { Observable, tap } from 'rxjs';
import { WeaponDetails } from '@shared/models/weapon';
import { MetaService } from '@services/meta.service';
import { LoadingComponent, TitleComponent } from '@shared/components';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-weapon-details',
  templateUrl: './weapon-details.component.html',
  styleUrls: ['./weapon-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TitleComponent, LoadingComponent, AsyncPipe],
})
export class WeaponDetailsComponent implements OnInit {
  private weaponsService = inject(WeaponsService);
  private metaService = inject(MetaService);

  name = input('');

  weaponDetails$: Observable<WeaponDetails>;

  ngOnInit(): void {
    this.weaponDetails$ = this.weaponsService.getWeaponDetails(this.name()).pipe(
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
