import {singleton} from 'aurelia-framework';

@singleton('Colors')
export class Colors {
	static collection = [
	'#f44336', '#e91e63', '#9c27b0',
	'#673ab7', '#3f51b5', '#2196f3',
	'#039be5', '#0097a7', '#009688',
	'#43a047', '#689f38', '#827717',
	'#ef6c00', '#ff5722', '#795548'];
}
