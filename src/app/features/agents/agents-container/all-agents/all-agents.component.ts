import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { Router } from '@angular/router';
import { Agent } from '../../../../shared/models/agent.interface';

@Component({
  selector: 'app-all-agents',
  templateUrl: './all-agents.component.html',
  styleUrls: ['./all-agents.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AllAgentsComponent implements OnInit {
  constructor(private router: Router) {}

  @Input() agents!: Agent[];

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

  onAgentClick(pathName: string) {
    this.router.navigate(['agents', pathName]);
  }
}
