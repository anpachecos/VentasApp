import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario';


@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

  usuarios: Usuario[]=[];    //Aquí se guardaran las personas que se registren
  usuarioActual: Usuario | null = null;  //pa llamar a la persona actual sin usar el local storage
  datos_compra: any ={};  //Aqui se guardaran los datos de la compra con el tipo de entrada, la cantidad y el total a pagar
  precioTotal: number = 0; 
  descuento: number = 0;
  textoDescuento: string = '';

  constructor() { }

  guardarUsuario(usuario: Usuario){
    this.usuarioActual = usuario;
    this.usuarios.push(usuario);
  }

  obtenerUsuarioActual(): Usuario | null {
    return this.usuarioActual;
  }

  guardarDatosCompra(datos: any) {
    this.datos_compra = datos;

    // Calcula el precio en base al tipo de entrada
    switch (datos.tipo_entrada) {
      case 'VIP':
        this.precioTotal = datos.cantidad * 5000;
        break;
      case 'PREFERENCIAL':
        this.precioTotal = datos.cantidad * 4000;
        break;
      case 'GENERAL':
        this.precioTotal = datos.cantidad * 3000;
        break;
      default:
        this.precioTotal = 0;
    }
  }

  obtenerDatosCompra(){
    return this.datos_compra
  }
  obtenerPrecioTotal() {
    return this.precioTotal;
  }
  //realmente son puros get y set aqui????

  calcularDescuentoPorEdad(edad: number): number {
    if (edad < 10) {
      this.descuento = 0.20;  
      this.textoDescuento = "Por ser menor de 10 años, tienes un 20% de descuento";
    } else if (edad > 65) {
      this.descuento = 0.50;  
      this.textoDescuento = "Por ser mayor de 65 años, tienes un 50% de descuento";
    } else if (edad >= 10 && edad <= 18) {
      this.descuento = 0.10;
      this.textoDescuento = "Por ser estudiante, tienes un 10% de descuento";
    }else {
      this.descuento = 0;  
    }
    return this.descuento;
  }

  // Función para obtener el precio total con descuento aplicado
  obtenerPrecioConDescuento(edad: number): number {
    const descuento = this.calcularDescuentoPorEdad(edad);
    return this.precioTotal - descuento;
  }
 
}
