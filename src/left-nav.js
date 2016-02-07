import {inject} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';

@inject(EventAggregator)
export class LeftNav {
	isOpen = false;

	constructor(eventEmitter) {
		eventEmitter.subscribe('nav-toggle', event => {
			if (!this.isOpen) {
				eventEmitter.publish('nav-toggle:open', event);
			} else {
				eventEmitter.publish('nav-toggle:close', event);
			}
		});

		eventEmitter.subscribe('nav-toggle:open', event => { this.isOpen = true; });
		eventEmitter.subscribe('nav-toggle:close', event => { this.isOpen = false; });
	}
}
