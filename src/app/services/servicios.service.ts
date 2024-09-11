import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario';


@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

  usuarios: Usuario[]=[];    //Aquí se guardaran las personas que se registren
  usuarioActual: Usuario | null = null;  //pa llamar a la persona actual sin usar el local storage

  constructor() { }

  guardarUsuario(usuario: Usuario){
    this.usuarioActual = usuario;
    this.usuarios.push(usuario);
  }

  obtenerUsuarioActual(): Usuario | null {
    return this.usuarioActual;
  }
}
