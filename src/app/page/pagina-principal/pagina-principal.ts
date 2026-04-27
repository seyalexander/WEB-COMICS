import { Component, HostListener } from '@angular/core';
import { NavComponents } from '../../components/nav-components/nav-components';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pagina-principal',
  imports: [NavComponents, CommonModule],
  templateUrl: './pagina-principal.html',
  styleUrl: './pagina-principal.css',
})
export class PaginaPrincipal {
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

  scrollToAnimes() {
    const section = document.getElementById('animes');
    section?.scrollIntoView({ behavior: 'smooth' });
  }

  crollToDescripcion() {
    const section = document.getElementById('descripcionAnime');
    section?.scrollIntoView({ behavior: 'smooth' });
  }
}
