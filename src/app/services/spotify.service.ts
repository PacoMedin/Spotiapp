import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('Servicio spotify Listo!');
   }

   getNewReleases(){
    const headers = new HttpHeaders({
     'Authorization':'Bearer BQDubZLsOKgYN3yA1-PSPXGQEuRO7evmKis25gSE6mwSxQ548jcMWvwSUA31LvdffauCT9KtS-rkJIY6txs'
    });
    return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', { headers });
  }
}

