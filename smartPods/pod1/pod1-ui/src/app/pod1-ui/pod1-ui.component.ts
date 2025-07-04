import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pod1-ui-feature',
  templateUrl: './pod1-ui.component.html',
  styleUrls: ['./pod1-ui.component.css']
})
export class Pod1UiComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('Pod1UiComponent (federated) initialized!');
  }

}
