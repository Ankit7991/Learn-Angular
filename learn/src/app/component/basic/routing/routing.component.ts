import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-routing',
	templateUrl: './routing.component.html',
	styleUrls: ['./routing.component.scss']
})
export class RoutingComponent implements OnInit {


	steps = {
		'1': "<base href='\'>",
		'2.3': "{ path: 'index', component: IndexComponent }",
		'4': "<router-outlet> </router-outlet>",
		'5': `routerLink = path`,
		'6': `<h3 routerLink = "learn/basic/interpolation"> H3 text </h3>`,
		'7': `<a routerLink="learn/basic/interpolation"> Link text </a>`
	}

	constructor() { }

	ngOnInit(): void {
	}

}
