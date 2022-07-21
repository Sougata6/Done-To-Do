import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {

  public name = "Sougata";
  public paraClass = "paragraph";
  public greet = "";
  //public citeUrl = 
  constructor() { }

  ngOnInit(): void {
  }
  onClick(){
    //console.log();
    this.greet = "Thanks a lot!";
  }

}
