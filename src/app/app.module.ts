import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { MaterialModule } from './material/material.module';
import { AppComponent } from './app.component';
import { CpanelComponent } from './cpanel/cpanel.component';
import { LayoutModule } from '@angular/cdk/layout';


@NgModule({
	declarations: [
		AppComponent,
		CpanelComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		MaterialModule,
		LayoutModule,
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
