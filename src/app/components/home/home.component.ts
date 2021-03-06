import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent {
  nuevasCanciones: any[] = [];
  constructor( private spotify: SpotifyService ) {
    this.spotify.getNewReleases()
    .subscribe( (res: any) => {
      console.log(res.albums.items);
      this.nuevasCanciones = res.albums.items;
    });
  }

}
