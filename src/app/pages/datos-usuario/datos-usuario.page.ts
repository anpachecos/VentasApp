import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Usuario } from 'src/app/models/usuario';
import { ServiciosService } from 'src/app/services/servicios.service';

@Component({
  selector: 'app-datos-usuario',
  templateUrl: './datos-usuario.page.html',
  styleUrls: ['./datos-usuario.page.scss'],
})
export class DatosUsuarioPage implements OnInit {

  f_datos_usuario: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    public servicios: ServiciosService
  ) { 
    this.f_datos_usuario = this.formBuilder.group({
      nombre: new FormControl("", Validators.required),
      apellido: new FormControl("", Validators.required),
      edad: new FormControl("", Validators.required)
    });
  }

  ngOnInit() {
  }

  continuarCompra() {
    var f = this.f_datos_usuario.value;
    // Creamos un objeto de tipo Usuario usando los valores del formulario
    const usuario: Usuario = {
      nombre: f.nombre,
      apellido: f.apellido,
      edad: f.edad
    };

    // Guardamos el usuario usando el servicio
    this.servicios.guardarUsuario(usuario);
    console.log(this.servicios.usuarios);    
  }

}
