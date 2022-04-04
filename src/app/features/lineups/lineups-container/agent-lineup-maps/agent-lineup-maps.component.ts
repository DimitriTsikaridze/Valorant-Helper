import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { LineupsService } from '../../../../services/lineups.service';
import { Map } from './maps.model';

@Component({
  selector: 'app-agent-lineup-maps',
  templateUrl: './agent-lineup-maps.component.html',
  styleUrls: ['./agent-lineup-maps.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AgentLineupMapsComponent implements OnInit {
  constructor(private lineupsService: LineupsService) {}

  maps$!: Observable<Map[]>;

  mockSites = ['A', 'B'];

  ngOnInit(): void {
    this.maps$ = this.lineupsService.getMaps();
  }
}
