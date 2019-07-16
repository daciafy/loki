import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

export interface Tile {
	color: string;
	cols: number;
	rows: number;
	text: string;
}

@Component({
	selector: 'app-layouts',
	templateUrl: './layouts.component.html',
	styleUrls: ['./layouts.component.scss']
})
export class LayoutsComponent implements OnInit {
	windowSize = "lg";
	rowHt = 300;

	tiles: Tile[] = [
		{ text: 'One', cols: 3, rows: 1, color: 'lightblue' },
		{ text: 'Two', cols: 1, rows: 2, color: 'lightgreen' },
		{ text: 'Three', cols: 1, rows: 1, color: 'lightpink' },
		{ text: 'Four', cols: 2, rows: 1, color: '#DDBDF1' },
	];
	constructor(public breakpointObserver: BreakpointObserver) {
		breakpointObserver.observe([
			'(max-width: 486px)',
			'(min-width: 487px) and (max-width: 640px)',
			'(min-width: 641px) and (max-width: 960px)',
			'(min-width: 961px)',
		]).subscribe(result => {
			console.log(result)
			if (result.matches) {
				let bp = result.breakpoints;
				for (let obj in result.breakpoints) {
					if (bp[obj]) {
						switch (obj) {
							case "(max-width: 486px)":
								this.windowSize = "xs";
								break;
							case "(min-width: 487px) and (max-width: 640px)":
								this.windowSize = "sm";
								break;
							case "(min-width: 641px) and (max-width: 960px)":
								this.windowSize = "md";
								break;
							case "(min-width: 961px)":
								this.windowSize = "lg";
								break;
						}
						console.log(this.windowSize)
					}
				}
			}
		});
	}

	ngOnInit() {
	}

}
