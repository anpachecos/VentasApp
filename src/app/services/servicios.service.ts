import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario';


@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

  usuarios: Usuario[]=[];    //Aquí se guardaran las personas que se registren
  usuarioActual: Usuario | null = null;  //pa llamar a la persona actual sin usar el local storage
  datos_compra: any ={};  //Aqui se guardaran los datos de la compra con el tipo de entrada, la cantidad y el total a pagar

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
  }

  obtenerDatosCompra(){
    return this.datos_compra
  }
}
