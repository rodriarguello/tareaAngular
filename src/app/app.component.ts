import { Component } from '@angular/core';
import { Producto } from './models/producto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(){

    this.mostrar = true;
  }
  
  listProductos:Producto[] = [{
    nombre:'Leche',
    costo:'500'
  },
  {
    nombre:'Azucar',
    costo:'600'
  },
  {
    nombre:'Aceite',
    costo:'1000'
  },
  {
    nombre:'Dulce de leche',
    costo:'500'
  },
  {
    nombre:'Manteca',
    costo:'400'
  }
  ];

  public mostrar:boolean;

  modificarVisibilidad(){
    this.mostrar = !this.mostrar;
  }



}
