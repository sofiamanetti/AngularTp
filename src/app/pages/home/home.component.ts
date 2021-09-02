import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/interfaces/Productos';
import { ProductosService } from '../../service/productos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  productos:Producto[]=[]
  loading:boolean=true;

  constructor(private productosService:ProductosService) {
    this.getProductos()
  }
  async getProductos(){

    const response:any = await this.productosService.getAllPromise()
    console.log("Response",response)
    this.productos = response.results
    this.loading=false
  }

  ngOnInit(): void {
  }

}
