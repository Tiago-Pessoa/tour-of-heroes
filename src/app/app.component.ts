import { Component } from '@angular/core';
import { MenuItem } from './core/models/menu-item.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Caminho dos Heróis';
  menuItems: MenuItem[] = [
    {
      icon: 'settings_accessibility',
      routerLink: '/dashboard',
      toolTipText: 'Painel de Heróis'
    },
    {
      icon: 'scuba_diving',
      routerLink: '/heroes',
      toolTipText: 'Heróis'
    },
  ];
}
