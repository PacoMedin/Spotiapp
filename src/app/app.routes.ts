import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { PaisesComponent } from './components/paises/paises.component';
    

export const ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'search', component: SearchComponent },
    { path: 'paises', component: PaisesComponent},

    // Cualquier path vacio redirecciona al home
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    // Cualquier otro path redirecciona al home
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];




