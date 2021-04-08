import { Component, OnInit } from '@angular/core';
import { ListadopokemonService } from '../servicio/listadopokemon.service';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.page.html',
  styleUrls: ['./favoritos.page.scss'],
})
export class FavoritosPage implements OnInit {

arrayFav = [];

  constructor(private servicio: ListadopokemonService) { }

  ngOnInit() {
  }

ionViewWillEnter(){
  this.arrayFav = this.servicio.getfav();
  console.log(this.arrayFav);
}

}
