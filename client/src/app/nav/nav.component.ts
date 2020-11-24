import { Component, OnInit } from '@angular/core';
// import { Console } from 'console';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {}
  loggedIn: boolean;

  constructor(private accountService: AccountService) 
  { 
    this.loggedIn = true;
  }

  ngOnInit(): void {
  }

  login() {
      this.accountService.login(this.model).subscribe(response => {
        console.log(response);
        this.loggedIn = true;
      }, error => {
         console.log(error);
      })
  }
    
  logout() {
    this.loggedIn = false; 
  }
}
