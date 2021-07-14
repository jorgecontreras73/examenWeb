import { Component, OnInit } from '@angular/core';
import {Interface,ListaLibros} from '../../interface'

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.scss']
})
export class LibrosComponent implements OnInit {
  listaLibros:Array<Interface>=[]; //libros
  Lista=ListaLibros;
  constructor() { }

  ngOnInit(): void {
  }

}
