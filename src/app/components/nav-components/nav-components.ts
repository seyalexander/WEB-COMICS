import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Drawer, DrawerModule } from 'primeng/drawer';

@Component({
  selector: 'app-nav-components',
  imports: [CommonModule, RouterModule, Drawer, DrawerModule],
  templateUrl: './nav-components.html',
  styleUrl: './nav-components.css',
})
export class NavComponents {

  visible4: boolean = false;
  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
