import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lists-view',
  templateUrl: './lists-view.component.html',
  styleUrls: ['./lists-view.component.scss']
})
export class ListsViewComponent implements OnInit {
	typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];

	links: string[] = ["home","layouts","listsView"]
  constructor() { }

  ngOnInit() {
  }
  showInfo(link) {
	  console.log(link);
  }
}
