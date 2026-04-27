import { Component, HostListener } from '@angular/core';
import { NavComponents } from "../../components/nav-components/nav-components";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-funko-pop',
  imports: [NavComponents, CommonModule],
  templateUrl: './funko-pop.html',
  styleUrl: './funko-pop.css',
})
export class FunkoPop {
  showScrollTop = false;

  @HostListener('window:scroll', [])
  onScroll() {
    this.showScrollTop = window.scrollY > 300;
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}
