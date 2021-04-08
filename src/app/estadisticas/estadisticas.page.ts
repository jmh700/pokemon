import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ListadopokemonService} from '../servicio/listadopokemon.service';

@Component({
  selector: 'app-estadisticas',
  templateUrl: './estadisticas.page.html',
  styleUrls: ['./estadisticas.page.scss'],
})
export class EstadisticasPage implements OnInit {
  idpokemon:string;
  nombrepokemon:string;
  listado:any;

  constructor(private activateRoute: ActivatedRoute,
    private servicio: ListadopokemonService){}

  ionviewWillEnter(){
    this.idpokemon = this.activateRoute.snapshot.paramMap.get('id');
    this.nombrepokemon = this.activateRoute.snapshot.paramMap.get('nombre');

    this.servicio.getdata('https://pokeapi.co/api/v2/pokemon/' + this.idpokemon + '/').subscribe
    (data => {
        console.log(data);
        this.listado=data;
  });
}
  ngOnInit() {
  }

}
