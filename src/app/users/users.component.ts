import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { User } from '../user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersComponent implements OnInit {
  @Input() users: User[];

  constructor() {}

  ngOnInit() {}
}
