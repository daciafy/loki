import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
	MatButtonModule,
	MatCheckboxModule,
	MatCardModule,
	MatGridListModule
} from '@angular/material';


@NgModule({
	declarations: [],
	imports: [
		CommonModule,
		MatButtonModule,
		MatCheckboxModule,
		MatCardModule,
		MatGridListModule
	],
	exports: [
		MatButtonModule,
		MatCheckboxModule,
		MatCardModule,
		MatGridListModule
	]
})
export class MaterialModule { }
