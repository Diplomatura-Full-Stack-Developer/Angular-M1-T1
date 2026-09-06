import { Component } from '@angular/core';
import { Header } from '../../shared/header/header';
import { Footer } from '../../shared/footer/footer';
import { Home } from '../../pages/home/home';

@Component({
  selector: 'app-main-layout',
  imports: [Header, Footer, Home],
  templateUrl: './main-layout.html',
})
export class MainLayout { }
