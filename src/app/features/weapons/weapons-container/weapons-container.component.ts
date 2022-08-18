import { Component, OnInit } from '@angular/core';
import { WeaponsService } from '@services/weapons.service';
import { Observable, of } from 'rxjs';
import { Weapon } from '@shared/models/weapon';

@Component({
  selector: 'app-weapons-container',
  templateUrl: './weapons-container.component.html',
  styleUrls: ['./weapons-container.component.scss'],
})
export class WeaponsContainerComponent implements OnInit {
  constructor(private weaponsService: WeaponsService) {}
  weapons$: Observable<Weapon[]>;

  ngOnInit(): void {
    if (this.weaponsService.weapons.length) {
      this.weapons$ = of(this.weaponsService.weapons);
    } else {
      this.weapons$ = this.weaponsService.getAllWeapons();
    }
  }
}
