import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DatabaseComponent } from './components/database/database.component';
import { CloudStorageComponent } from './components/cloud-storage/cloud-storage.component';
import { ReportsComponent } from './components/reports/reports.component';
import { SecurityComponent } from './components/security/security.component';
import { ExtensionsComponent } from './components/extensions/extensions.component';
import { SettingsComponent } from './components/settings/settings.component';

export const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'database', component: DatabaseComponent },
  { path: 'cloud-storage', component: CloudStorageComponent },
  { path: 'reports', component: ReportsComponent },
  { path: 'security', component: SecurityComponent },
  { path: 'extensions', component: ExtensionsComponent },
  { path: 'settings', component: SettingsComponent },
];