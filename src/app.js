export class App {
  configureRouter(config, router) {
    config.title = 'calculate.beer';
    config.map([
      { route: ['', 'welcome'], name: 'welcome', moduleId: 'welcome', nav: true, title: 'Welcome' },
      { route: 'calculators', name: 'calculators-router', moduleId: 'calculators-router', nav: true, title: 'Calculators'}
    ]);

    this.router = router;
  }
}
