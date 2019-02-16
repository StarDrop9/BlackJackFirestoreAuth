import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as $ from 'jquery';
//import { Globals } from '../helpers/globals';

@Component({
  selector: 'blackjack',
  templateUrl: './blackjack.component.html',
  styleUrls: ['./blackjack.component.scss']
})
export class BlackjackComponent implements OnInit, AfterViewInit {
  title = 'dashboard-app';
  authentication = false;

  constructor() {

  }

  ngOnInit() {

  //   $("button").click(function(){
  //     var div = $("div");  
  //     div.animate({left: '100px'}, "slow");
  //     div.animate({fontSize: '.85em'}, "slow");
  // });
      // this.helpers.logout();
      // this.router.navigate(['/login']);
  }

  ngAfterViewInit() {
      // loading templates js after dom render
      $.getScript("/assets/js/blackjack.js", () => {
      });
    }
}



  

