import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html'
})
export class PaisesComponent implements OnInit {
  paises: any [] = [];
  constructor( private http: HttpClient ) {

   console.log('Constructor del home hecho.');
   this.http.get('https://restcountries.eu/rest/v2/lang/es')
  .subscribe( (response: any) => {
   this.paises = response;
   console.log(response);
 });

   }

  ngOnInit(): void {
  }

}
