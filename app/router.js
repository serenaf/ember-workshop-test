import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('active');
  this.route('ask');
  this.route('frontpage');
  this.route('jobs');
  this.route('new');
  this.route('show');
});

export default Router;
