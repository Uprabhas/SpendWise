import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  accounts: any[] = [];

  constructor() { }

  ngOnInit() {
    this.accounts = [
      { id:1, acc_no:'8421397721',balance:'250000'},
      { id:2, acc_no:'1900800271',balance:'50000'},
      { id:3, acc_no:'1800760039',balance:'80000'},      
    ]
  }

}
