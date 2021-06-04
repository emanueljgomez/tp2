import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';  // Activar herramientas de Reactive Forms

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  myForm:FormGroup  // Declarar la directiva FormGroup que luego será asignada al elemento 'form' en login.component.html

  constructor(
    private fb:FormBuilder  // Inyección de dependencias: declarar variable clase 'fb' (objeto) de tipo FormBuilder
  ) {
    this.myForm=this.fb.group({ // Lógica del formulario (campos)
      user:["",[Validators.required]],
      password:["",[Validators.required]],
    })
  }

  registro(){ // Método que se ejecuta al presionar el botón 'submit' en el formulario
    console.log(this.myForm.value)
  }

  ngOnInit(): void {
  }

}
