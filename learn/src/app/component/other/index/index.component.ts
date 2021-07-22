import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-index',
	templateUrl: './index.component.html',
	styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

	
	constructor(private router: Router	) { }
	
	ngOnInit(): void {
		console.log('here');
		// setTimeout(() => {
		// 	this.router.navigate(['learn/basic/interpolation']);
		// 	console.log(`Here`)
		// }, 2000);
	}

}
