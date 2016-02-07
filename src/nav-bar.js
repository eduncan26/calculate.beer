import {bindable, inject} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';

@inject(EventAggregator)
export class NavBar {
	@bindable router = null;
	navOpen = false;
	
	constructor(eventEmitter) {
		this.eventEmitter = eventEmitter;

		this.eventEmitter.subscribe('nav-toggle:open', event => { this.navOpen = true; });
		this.eventEmitter.subscribe('nav-toggle:close', event => { this.navOpen = false; });
	}

	toggleMenu(event) {
		this.eventEmitter.publish('nav-toggle', event);
	}
}