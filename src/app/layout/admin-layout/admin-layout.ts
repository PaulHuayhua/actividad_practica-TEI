import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Sidebar } from './components/sidebar/sidebar';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.html',
  styleUrls: ['./admin-layout.scss'],
  standalone: true,
  imports: [RouterOutlet, Header, Sidebar]
})
export class AdminLayout {
  sidebarExpanded = true;

  onToggleSidebar(expanded: boolean) {
    this.sidebarExpanded = expanded;
  }
}
