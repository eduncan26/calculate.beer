export class CalculatorsRouter {
	configureRouter(config, router) {
		config.map([
			{ route: '', name: 'calculators', moduleId: 'calculators', nav: true}
		]);

		this.router = router;
	}
}