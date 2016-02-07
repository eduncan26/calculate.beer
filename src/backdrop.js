import {inject} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';

@inject(EventAggregator)
export class Backdrop {
	isOn = false;

	constructor(eventEmitter) {
		this.eventEmitter = eventEmitter;

		eventEmitter.subscribe('nav-toggle:open', event => { this.isOn = true; });
		eventEmitter.subscribe('nav-toggle:close', event => { this.isOn = false; });
	}

	closeNav(event) {
		this.eventEmitter.publish('nav-toggle:close', event);
	}
}