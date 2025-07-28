import { Routes } from '@angular/router';
import { Home } from './component/home/home';
import { About } from './component/about/about';
import { Contact } from './component/contact/contact';
import { Notfound } from './component/notfound/notfound';
import { Portfolio } from './component/portfolio/portfolio';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home' , component:Home , title: 'Home'},
    {path: 'about', component:About , title: 'About'},
    {path: 'portfolio', component:Portfolio , title: 'Portfolio'},
    {path: 'contact', component:Contact , title: 'Contact'},
    {path: '**' , component:Notfound , title: 'Notfound'},
];
