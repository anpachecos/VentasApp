import { ServiciosService } from 'src/app/services/servicios.service';
import { Usuario } from 'src/app/models/usuario';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-fin-boleta',
  templateUrl: './fin-boleta.page.html',
  styleUrls: ['./fin-boleta.page.scss'],
})
export class FinBoletaPage implements OnInit {
  datosCompra: any = {};
  usuario: Usuario | null = null;
  precioTotal: number = 0;
  descuento: number = 0;
  textoDescuento: string = '';

  constructor(public servicios: ServiciosService,    public alertController: AlertController,
    public navCtrl : NavController
  ) { }

  ngOnInit() {
    this.datosCompra = this.servicios.obtenerDatosCompra();  
    console.log(this.datosCompra);  // Imprimir pa ver si trajo los datos o no sii funcaaaa
    this.usuario = this.servicios.obtenerUsuarioActual();
    this.precioTotal = this.servicios.obtenerPrecioTotal();
    const edadUsuario = this.servicios.obtenerUsuarioActual()?.edad;

    if (this.usuario) {
      this.descuento = this.servicios.obtenerPrecioConDescuento(this.usuario.edad);
      this.textoDescuento = this.servicios.obtenerTextoDescuento();

    }

  }
  
  async finalizar(){
    const alert = await this.alertController.create({
      header: 'Compra finalizada con éxito',
      message: 'Redirigiendo al Menú Principal',
      buttons: ['Aceptar']
    });
    await alert.present();
    this.navCtrl.navigateForward('/datos-usuario');

  }


}
