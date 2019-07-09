import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

export interface Tile {
	color: string;
	cols: number;
	rows: number;
	text: string;
}

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'loki';
	windowSize = "lg";
	rowHt = 300;

	tiles: Tile[] = [
		{ text: 'One', cols: 3, rows: 1, color: 'lightblue' },
		{ text: 'Two', cols: 1, rows: 2, color: 'lightgreen' },
		{ text: 'Three', cols: 1, rows: 1, color: 'lightpink' },
		{ text: 'Four', cols: 2, rows: 1, color: '#DDBDF1' },
	];

	constructor(breakpointObserver: BreakpointObserver) {
		breakpointObserver.observe([
			Breakpoints.HandsetPortrait,
			Breakpoints.TabletLandscape,
			Breakpoints.WebLandscape
		]).subscribe(result => {
			if (result.matches) {
				let bp = result.breakpoints;
				for (let obj in result.breakpoints){
					if(bp[obj]){
						switch(obj){
							case "(max-width: 599.99px) and (orientation: portrait)":
								this.windowSize = "sm";
								break;
							case "(min-width: 960px) and (max-width: 1279.99px) and (orientation: landscape)":
									this.windowSize = "md";
									break;
							case "(min-width: 1280px) and (orientation: landscape)":
									this.windowSize = "lg";
									break;
						}
						console.log(this.windowSize)
					}
				}
			}
		});
	}
}
