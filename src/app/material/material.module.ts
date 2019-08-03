import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
	MatButtonModule,
	MatCheckboxModule,
	MatCardModule,
	MatGridListModule
} from '@angular/material';
import { MatToolbarModule, MatSidenavModule, MatIconModule, MatListModule, MatDatepickerModule, MatFormFieldModule, MatNativeDateModule,MatInputModule } from '@angular/material';

@NgModule({
	declarations: [],
	imports: [
		CommonModule,
		MatButtonModule,
		MatCheckboxModule,
		MatCardModule,
		MatGridListModule, MatToolbarModule, MatSidenavModule, MatIconModule, MatListModule, MatDatepickerModule, MatFormFieldModule, MatNativeDateModule,MatInputModule
	],
	exports: [
		MatButtonModule,
		MatCheckboxModule,
		MatCardModule,
		MatGridListModule, MatToolbarModule, MatSidenavModule, MatIconModule, MatListModule, MatDatepickerModule, MatFormFieldModule, MatNativeDateModule,MatInputModule
	]
})
export class MaterialModule { }
