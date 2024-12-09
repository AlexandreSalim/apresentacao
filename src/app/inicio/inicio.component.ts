import { CommonModule, NgClass } from '@angular/common';
import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-inicio',
  imports: [ MatIconModule, CommonModule ],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.scss'
})
export class InicioComponent {

  abrir: boolean = false;  
  imgAlianca: string = '/public/img/favicon.ico'

  sidBar() {
    this.abrir = !this.abrir;
  };


}
