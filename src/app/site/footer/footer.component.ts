import { Component } from '@angular/core';
import { petsData } from '../petsData';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  date:number = new Date().getFullYear();
  petsData = petsData;
}
