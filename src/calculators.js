import {inject} from 'aurelia-framework';
import {Colors} from 'colors';

@inject(Colors)
export class Calculators {
	calculators = [
		{ name: 'recipe formulator' },
		{ name: 'priming sugar' },
		{ name: 'IBU' },
		{ name: 'gravity' },
		{ name: 'color' },
		{ name: 'brewing water' },
		{ name: 'mash' },
		{ name: 'something 1'},
		{ name: 'something 2'},
		{ name: 'something 3'},
		{ name: 'something 4'},
		{ name: 'something 5'}
	];

	getRandomColor() {
		return Colors.collection[Math.floor(Math.random() * Colors.collection.length)];
	}
}
