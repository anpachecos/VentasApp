import { Component, OnInit } from '@angular/core';
import { ServiciosService } from 'src/app/services/servicios.service';
import { Usuario } from 'src/app/models/usuario';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-formulario-entrada',
  templateUrl: './formulario-entrada.page.html',
  styleUrls: ['./formulario-entrada.page.scss'],
})
export class FormularioEntradaPage implements OnInit {

  tipos_evento = [
    { tipo: "CONCIERTO", descripcion: "Mr Bungle en Vivo" },
    { tipo: "DEPORTE", descripcion: "Colo - Colo Vs U de Chile" },
    { tipo: "TEATRO", descripcion: "La Traviata" }
  ];

  tipos_entrada = [
    { tipo: "VIP", precio: 5000 },
    { tipo: "GENERAL", precio: 3000 },
    { tipo: "PREFERENCIAL", precio: 4000 }
  ];

  selectedEntrada: string = ''; 
  precioEntrada: number | undefined;
  usuario: Usuario | null = null;
  f_datos_entrada: FormGroup;

  constructor(
    public servicios: ServiciosService, 
    private formBuilder: FormBuilder, 
    public navCtrl: NavController,
    public alertController: AlertController
  ) { 
    this.f_datos_entrada = this.formBuilder.group({
      tipos_evento: ['', Validators.required],
      cantidad: ['', Validators.required],
      tipo_entrada: ['', Validators.required]
    });
  }

  ngOnInit() { 
    this.usuario = this.servicios.obtenerUsuarioActual();
  }

  async continuar() {
    if (this.f_datos_entrada.valid) {
      const datosFormulario = this.f_datos_entrada.value;
      console.log('funcó')
      this.servicios.guardarDatosCompra(datosFormulario);  
      this.navCtrl.navigateForward('/fin-boleta');
    } else {
      console.log('No funca');
      const alert = await this.alertController.create({
        header: 'Faltan DATOS!',
        message: 'Para comprar una entrada debes completar todos los campos',
        buttons: ['Aceptar']
      });
      await alert.present();
    }
  }
}
