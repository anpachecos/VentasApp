import { Component, OnInit } from '@angular/core';
import { ServiciosService } from 'src/app/services/servicios.service';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-formulario-entrada',
  templateUrl: './formulario-entrada.page.html',
  styleUrls: ['./formulario-entrada.page.scss'],
})
export class FormularioEntradaPage implements OnInit {

  usuario: Usuario | null = null;

  constructor(public servicios: ServiciosService) { }

  ngOnInit() {

//TRAREMOS EL USUARIO ACTUAL NO SE SI HAY UNA FORMA MAS EFICIENTE QUE NO SEA CON EL LOCAL STORAGEE AA
    this.usuario = this.servicios.obtenerUsuarioActual();
  }
}
