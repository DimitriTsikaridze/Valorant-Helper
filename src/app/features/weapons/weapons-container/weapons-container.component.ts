import { Component, OnInit } from '@angular/core';
import { WeaponsService } from '@services/weapons.service';
import { Observable, of } from 'rxjs';
import { Weapon } from '@shared/models/weapon';
import { MetaService } from '@services/meta.service';
import { LoadingComponent } from '../../../shared/components/loading/loading.component';
import { RouterLink } from '@angular/router';
import { NgIf, NgFor, AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-weapons-container',
  templateUrl: './weapons-container.component.html',
  styleUrls: ['./weapons-container.component.scss'],
  standalone: true,
  imports: [NgIf, NgFor, RouterLink, LoadingComponent, AsyncPipe],
})
export class WeaponsContainerComponent implements OnInit {
  constructor(
    private weaponsService: WeaponsService,
    private metaService: MetaService
  ) {}

  weapons$: Observable<Weapon[]>;

  ngOnInit(): void {
    this.generateTags();

    if (this.weaponsService.weapons.length) {
      this.weapons$ = of(this.weaponsService.weapons);
    } else {
      this.weapons$ = this.weaponsService.getAllWeapons();
    }
  }

  generateTags() {
    this.metaService.generateTags({
      title: 'Weapons',
      description: 'Explore vvalorant weapons and their details',
      image:
        'https://boostingexpert.com/wp-content/uploads/2021/04/imagen_2021-04-08_135810-1024x576.png',
    });
  }
}
