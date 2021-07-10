import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.scss']
})
export class InterpolationComponent implements OnInit {

	name: string = 'Dwayne Johnson';


	greetings(name: string): string {
		return `Welcome ${name?.split(' ')?.[0] || `Mr. Unknown`}.`;
	}

	getHeight() {
		return window.innerHeight;
	}




	strong(input: any): any {
		return `<b>${input}</b>`
	}

	constructor() { }

	ngOnInit(): void {
	}

}
