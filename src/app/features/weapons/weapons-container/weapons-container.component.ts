import { Component } from '@angular/core';
import { WeaponsService } from '../../../services/weapons.service';

@Component({
  selector: 'app-weapons-container',
  templateUrl: './weapons-container.component.html',
  styleUrls: ['./weapons-container.component.scss'],
})
export class WeaponsContainerComponent {
  constructor(private weaponsService: WeaponsService) {}
  weapons$ = this.weaponsService.weapons$;
}
