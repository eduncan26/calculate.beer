import {inject, bindable} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';

@inject(EventAggregator)
export class LeftNav {
	@bindable router = null;
	isOpen = false;

	constructor(eventEmitter) {
		this.eventEmitter = eventEmitter;

		eventEmitter.subscribe('nav-toggle', this.toggle.bind(this));

		eventEmitter.subscribe('left-nav:open', this.open.bind(this));
		eventEmitter.subscribe('left-nav:close', this.close.bind(this));

		// Left nav should always close on router navigation
		eventEmitter.subscribe('router:navigation:complete', event => eventEmitter.publish('left-nav:close', event));
	}

	toggle(event) {
		if (!this.isOpen) {
			this.eventEmitter.publish('left-nav:open', event);
		} else {
			this.eventEmitter.publish('left-nav:close', event);
		}
	}

	close(event) {
		this.isOpen = false;
	}

	open(event) {
		this.isOpen = true;
	}
}
