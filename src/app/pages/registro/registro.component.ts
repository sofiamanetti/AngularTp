import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  myForm:FormGroup
  constructor(
    private fb:FormBuilder,
    private _snackbar:MatSnackBar,
  ) { 
    this.myForm=this.fb.group({
      nombre:["",[Validators.required]],
      apellido:["",[Validators.required]],
      telefono:["",[Validators.required]],
      correo:["",[Validators.required]],
      clave:["",[Validators.required,Validators.minLength(6),Validators.maxLength(10)]],


    })
  }
  registrarse(){
    console.log(this.myForm.value)
    this._snackbar.open("Gracias por registrarse","Ocultar",{
      duration:2000
    })
  }
  ngOnInit(): void {
  }

}

