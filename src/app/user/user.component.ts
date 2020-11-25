import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

import { User } from '../user.model';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserComponent implements OnInit {
  @Input() user: User;

  constructor(private usersService: UsersService) {}

  ngOnInit() {}

  onUserSelect() {
    this.usersService.userSelected.emit(this.user);
  }

  getColor(color: string): string {
    return `2px solid ${color}`;
  }
}
