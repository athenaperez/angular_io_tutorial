import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Dog } from '../dog';

@Component({
  selector: 'app-doggos',
  templateUrl: './doggos.component.html',
  styleUrls: ['./doggos.component.css'],
})

export class DoggosComponent implements OnInit {
  dog: Dog = {
    id: 1,
    name: 'Hebba'
  };

  constructor() { }

  ngOnInit() {
  }

}


