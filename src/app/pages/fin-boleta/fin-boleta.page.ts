import { ServiciosService } from 'src/app/services/servicios.service';
import { Usuario } from 'src/app/models/usuario';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fin-boleta',
  templateUrl: './fin-boleta.page.html',
  styleUrls: ['./fin-boleta.page.scss'],
})
export class FinBoletaPage implements OnInit {
  datosCompra: any = {};

  constructor(public servicios: ServiciosService) { }

  ngOnInit() {
    this.datosCompra = this.servicios.obtenerDatosCompra();  
    console.log(this.datosCompra);  // Imprimir pa ver si trajo los datos o no sii funcaaaa
  }


}
