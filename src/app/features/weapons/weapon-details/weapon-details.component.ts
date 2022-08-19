import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { WeaponsService } from '@services/weapons.service';
import { capitalizeFirstletter } from '@shared/utils';

@Component({
  selector: 'app-weapon-details',
  templateUrl: './weapon-details.component.html',
  styleUrls: ['./weapon-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WeaponDetailsComponent implements OnInit {
  private weaponName = this.route.snapshot.params['weaponName'];
  weaponDetails$ = this.weaponsService.getWeaponDetails(this.weaponName);

  constructor(
    private route: ActivatedRoute,
    private weaponsService: WeaponsService,
    private title: Title
  ) {}

  ngOnInit(): void {
    this.title.setTitle(`${capitalizeFirstletter(this.weaponName)} details`);
  }
}
