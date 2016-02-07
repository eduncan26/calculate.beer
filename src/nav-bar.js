import {bindable, inject} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';

@inject(EventAggregator)
export class NavBar {
	@bindable router = null;
	navOpen = false;
	
	constructor(eventEmitter) {
		this.eventEmitter = eventEmitter;

		this.eventEmitter.subscribe('left-nav:open', event => this.navOpen = true);
		this.eventEmitter.subscribe('left-nav:close', event => this.navOpen = false);
	}

	toggleMenu(event) {
		this.eventEmitter.publish('nav-toggle', event);
	}
}