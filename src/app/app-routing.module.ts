import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NASAPhotoExplorerComponent } from './nasaphoto-explorer/nasaphoto-explorer.component';


const routes: Routes = [
  {path: '', redirectTo: 'nasaphoto', pathMatch: 'full'},
  {path: 'nasaphoto', component: NASAPhotoExplorerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
