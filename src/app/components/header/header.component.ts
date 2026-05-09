import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  mobileMenuOpen = signal(false);

  toggleMenu() {
    this.mobileMenuOpen.update(v => !v);
  }

  closeMenu() {
    this.mobileMenuOpen.set(false);
  }

  readonly navLinks = [
    { label: 'Modules', path: '/modules' },
    { label: "All Qn's", path: '/questions' },
    { label: 'Installations', path: '/installations' },
    { label: 'Cheatsheets', path: '/cheatsheets' },
    { label: 'Contact', path: '/contact' },
  ];
}
