import { Component, OnInit, inject } from '@angular/core';
import { WeaponsService } from '@services/weapons.service';
import { Observable } from 'rxjs';
import { Weapon } from '@shared/models/weapon';
import { MetaService } from '@services/meta.service';
import { LoadingComponent } from '@shared/components';
import { RouterLink } from '@angular/router';
import { AsyncPipe, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-weapons-container',
  templateUrl: './weapons-container.component.html',
  styleUrls: ['./weapons-container.component.scss'],
  imports: [RouterLink, LoadingComponent, AsyncPipe, NgOptimizedImage],
})
export class WeaponsContainerComponent implements OnInit {
  private weaponsService = inject(WeaponsService);
  private metaService = inject(MetaService);

  weapons$: Observable<Weapon[]>;

  ngOnInit(): void {
    this.generateTags();
    this.weapons$ = this.weaponsService.getAllWeapons();
  }

  private generateTags() {
    this.metaService.generateTags({
      title: 'Weapons',
      description: 'Explore vvalorant weapons and their details',
      image:
        'https://boostingexpert.com/wp-content/uploads/2021/04/imagen_2021-04-08_135810-1024x576.png',
    });
  }
}
