import { Injectable, EventEmitter } from '@angular/core';

import { User } from './user.model';

@Injectable()
export class UsersService {
  private users: User[] = [
    { name: 'Luis', color: '#FF4233' },
    { name: 'Carlos', color: '#338DFF' },
    { name: 'Juan', color: '#3AB31F' },
    { name: 'Zico', color: '#D624E1' },
    { name: 'Sam', color: '#080808' },
    { name: 'Erini', color: '#24E1CD' }
  ];

  userSelected = new EventEmitter<User>();

  getUsers() {
    return this.users.slice();
  }
}
