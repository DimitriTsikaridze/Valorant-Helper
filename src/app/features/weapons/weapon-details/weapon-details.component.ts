import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WeaponsService } from '../../../services/weapons.service';

@Component({
  selector: 'app-weapon-details',
  templateUrl: './weapon-details.component.html',
  styleUrls: ['./weapon-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WeaponDetailsComponent {
  private weaponName = this.route.snapshot.params['weaponName'];
  weaponDetails$ = this.weaponsService.getWeaponDetails(this.weaponName);

  constructor(
    private route: ActivatedRoute,
    private weaponsService: WeaponsService
  ) {}
}
