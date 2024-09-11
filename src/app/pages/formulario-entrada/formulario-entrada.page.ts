import { Component, OnInit } from '@angular/core';
import { ServiciosService } from 'src/app/services/servicios.service';
import { Usuario } from 'src/app/models/usuario';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-formulario-entrada',
  templateUrl: './formulario-entrada.page.html',
  styleUrls: ['./formulario-entrada.page.scss'],
})
export class FormularioEntradaPage implements OnInit {

  usuario: Usuario | null = null;
  f_datos_entrada: FormGroup;


  constructor(public servicios: ServiciosService, private formBuilder: FormBuilder) { 
    this.f_datos_entrada = this.formBuilder.group({
      cantidad: ['', Validators.required],
      tipo_entrada: ['', Validators.required]
  });
}

  ngOnInit() {

//TRAREMOS EL USUARIO ACTUAL NO SE SI HAY UNA FORMA MAS EFICIENTE QUE NO SEA CON EL LOCAL STORAGEE AA
    this.usuario = this.servicios.obtenerUsuarioActual();
  }
}
