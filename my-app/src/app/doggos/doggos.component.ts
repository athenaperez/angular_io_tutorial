import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Dog } from '../dog';
import { PUPPERS } from '../mock-doggos'

@Component({
  selector: 'app-doggos',
  templateUrl: './doggos.component.html',
  styleUrls: ['./doggos.component.css'],
})

export class DoggosComponent implements OnInit {
  
  puppers = PUPPERS;

  selectedDog: Dog;

  constructor() {
  }

  ngOnInit() {
  }

  onSelect(dog: Dog): void {
    this.selectedDog= dog;
  }
}


