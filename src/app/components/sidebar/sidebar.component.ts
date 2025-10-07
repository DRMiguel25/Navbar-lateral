import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface MenuItem {
  icon: string;
  title: string;
  subtitle: string;
  route: string;
}

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  menuItems: MenuItem[] = [
    {
      icon: 'fa-solid fa-table-cells-large',
      title: 'Dashboard',
      subtitle: 'Data Overview',
      route: '/dashboard'
    },
    {
      icon: 'fa-solid fa-database',
      title: 'Database',
      subtitle: 'Database Manager',
      route: '/database'
    },
    {
      icon: 'fa-solid fa-cloud',
      title: 'Cloud Storage',
      subtitle: 'Manage Cloud Storage',
      route: '/cloud-storage'
    },
    {
      icon: 'fa-solid fa-flag',
      title: 'Reports',
      subtitle: 'Manage Reports',
      route: '/reports'
    },
    {
      icon: 'fa-solid fa-key',
      title: 'Security',
      subtitle: 'Generate Security Keys',
      route: '/security'
    },
    {
      icon: 'fa-solid fa-puzzle-piece',
      title: 'Extensions',
      subtitle: 'Manage Extensions',
      route: '/extensions'
    },
    {
      icon: 'fa-solid fa-gear',
      title: 'Settings',
      subtitle: 'Edit App Settings',
      route: '/settings'
    }
  ];

  userName = 'Edward Tompson';
  userAvatar = 'https://i.pravatar.cc/100?img=12';
}