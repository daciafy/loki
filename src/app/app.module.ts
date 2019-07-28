import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { MaterialModule } from './material/material.module';
import { AppComponent } from './app.component';
import { CpanelComponent } from './cpanel/cpanel.component';
import { LayoutModule } from '@angular/cdk/layout';
import { LayoutsComponent } from './layouts/layouts.component';
import { HomeComponent } from './home/home.component';
import { ListsViewComponent } from './lists-view/lists-view.component';
import { AppBarBottomComponent } from './comParts/app-bar-bottom/app-bar-bottom.component';
import { ComPartsComponent } from './comParts/com-parts.component';
import {FlexLayoutModule} from '@angular/flex-layout';

@NgModule({
	declarations: [
		AppComponent,
		CpanelComponent,
		LayoutsComponent,
		HomeComponent,
		ListsViewComponent,
		AppBarBottomComponent,
		ComPartsComponent,
	],
	imports: [
		BrowserModule,
		FormsModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		MaterialModule,
		LayoutModule,
		FlexLayoutModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
