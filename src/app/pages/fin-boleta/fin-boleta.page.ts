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

  constructor(public servicios: ServiciosService) { }

  ngOnInit() {
  }

}
