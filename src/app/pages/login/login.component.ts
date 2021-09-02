import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuariosService } from 'src/app/service/usuarios.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  myForm:FormGroup
  constructor(
    private fb:FormBuilder,
    private _usuarios:UsuariosService
  ) {
    this.myForm=this.fb.group({
      correo:["",[Validators.required]],
      clave:["",[Validators.required,Validators.minLength(6),Validators.maxLength(10)]],
    })
   }
   login(){
    console.log(this.myForm.value)
    this._usuarios.authenticate();
  }

  ngOnInit(): void {
  }

}
