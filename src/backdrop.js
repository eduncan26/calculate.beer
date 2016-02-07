import {inject} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';

@inject(EventAggregator)
export class Backdrop {
	isOn = false;

	constructor(eventEmitter) {
		this.eventEmitter = eventEmitter;

		eventEmitter.subscribe('left-nav:open', event => this.isOn = true);
		eventEmitter.subscribe('left-nav:close', event => this.isOn = false);
	}

	closeNav(event) {
		this.eventEmitter.publish('left-nav:close', event);
	}
}