import { Component } from '@angular/core';

@Component({
  selector: 'app-supplires',
  templateUrl: './supplires.component.html',
  styleUrls: ['./supplires.component.css']
})
export class SuppliresComponent {

  isArabic:boolean= false;

  reciveFromChild(e:boolean){
    this.isArabic = e;
  }
}
