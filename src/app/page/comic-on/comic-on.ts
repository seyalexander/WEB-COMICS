import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { NavComponents } from '../../components/nav-components/nav-components';

@Component({
  selector: 'app-comic-on',
  imports: [NavComponents, CommonModule],
  templateUrl: './comic-on.html',
  styleUrl: './comic-on.css',
})
export class ComicOn {
  showScrollTop = false;

  @HostListener('window:scroll', [])
  onScroll() {
    this.showScrollTop = window.scrollY > 300;
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  scrollToMapa() {
    const section = document.getElementById('mapa');
    section?.scrollIntoView({ behavior: 'smooth' });
  }
}
