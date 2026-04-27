import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav-components',
  imports: [CommonModule, RouterModule],
  templateUrl: './nav-components.html',
  styleUrl: './nav-components.css',
})
export class NavComponents {
   menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
