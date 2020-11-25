import { Component, OnInit, OnDestroy } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Subscription } from 'rxjs';

import { User } from '../user.model';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [
    trigger('nameAnimation', [
      state('out', style({
        transform: 'translateY(100%)',
        opacity: '0'
      })),
      state('in', style({
        transform: 'translateY(0%)',
        opacity: '1'
      })),
      transition('out => in', animate('400ms ease-in'))
    ])
  ]
})
export class HeaderComponent implements OnInit, OnDestroy {
  header = 'User';
  animationState = 'in';
  subscription: Subscription;

  constructor(private usersService: UsersService) {}

  ngOnInit() {
    this.usersService.userSelected.subscribe((user: User) => {
      this.animationState = 'out';
      setTimeout(() => {
        this.header = user.name;
        this.animationState = 'in';
      }, 300);
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
