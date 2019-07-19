import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutsComponent } from './layouts/layouts.component';
import { HomeComponent } from './home/home.component';
import { ListsViewComponent } from './lists-view/lists-view.component';
import { ComPartsComponent } from './comParts/com-parts.component';


const routes: Routes = [
	{path:'', component:HomeComponent},
	{path:'home', component:HomeComponent},
	{path:'layouts', component:LayoutsComponent},
	{path:'listsView', component:ListsViewComponent},
	{path:'comparts', component:ComPartsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {anchorScrolling: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
