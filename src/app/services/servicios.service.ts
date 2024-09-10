import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario';


@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

  usuarios: Usuario[]=[];    //Aquí se guardaran las personas que se registren


  constructor() { }

  guardarUsuario(usuario: Usuario){
    this.usuarios.push(usuario);
  }
}
