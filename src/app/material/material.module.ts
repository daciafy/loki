import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
	MatButtonModule,
	MatCheckboxModule,
	MatCardModule,
	MatGridListModule
} from '@angular/material';
import { MatToolbarModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';

@NgModule({
	declarations: [],
	imports: [
		CommonModule,
		MatButtonModule,
		MatCheckboxModule,
		MatCardModule,
		MatGridListModule, MatToolbarModule, MatSidenavModule, MatIconModule, MatListModule
	],
	exports: [
		MatButtonModule,
		MatCheckboxModule,
		MatCardModule,
		MatGridListModule, MatToolbarModule, MatSidenavModule, MatIconModule, MatListModule
	]
})
export class MaterialModule { }
