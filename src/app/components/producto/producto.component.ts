import { Component, OnInit,Input } from '@angular/core';
import { Producto } from 'src/app/interfaces/Productos';
import { UsuariosService } from 'src/app/service/usuarios.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css',]
})
export class ProductoComponent implements OnInit {
  @Input()
  data:any
  @Input()
  verDetalle:boolean=true

  isLogin:boolean=false
  constructor(
    private _usuarios:UsuariosService,
    private _snackbar:MatSnackBar,
  ) { 
    this._usuarios.isAuthenticate()
    .subscribe(login=>{
      this.isLogin=login
    })
  }
  comprar(){
    this._snackbar.open("Gracias por su compra!","Ocultar",{
      duration:3000
    })
  }

  ngOnInit(): void {
  }

}
