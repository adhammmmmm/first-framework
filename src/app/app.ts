import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from "./component/footer/footer";
import { Navbar } from "./component/navbar/navbar";
import { Home } from "./component/home/home";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Footer, Navbar, Home],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('portfolio');
}
