import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  stats = [
    { title: 'Total Users', value: '8,282', change: '+12.5%', icon: 'fa-users', color: 'blue' },
    { title: 'Revenue', value: '$45,385', change: '+8.2%', icon: 'fa-dollar-sign', color: 'green' },
    { title: 'Orders', value: '1,234', change: '+5.1%', icon: 'fa-shopping-cart', color: 'purple' },
    { title: 'Growth', value: '23.5%', change: '+2.4%', icon: 'fa-chart-line', color: 'orange' }
  ];
}