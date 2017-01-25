/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'mindmap-web',
    environment: environment,
    rootURL: '/',
    locationType: 'hash',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    ENV.APP.API_HOST = 'http://localhost:4200';
    ENV.APP.API_NAMESPACE = 'api';

    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    //For example
    //ENV.APP.API_HOST = 'https://api.myproject.com';
    //ENV.APP.API_NAMESPACE = 'api';
  }

  ENV['ember-simple-auth'] = {
  authorizer: 'authorizer:jwt'
  };
  ENV['ember-simple-auth-token'] = {
    refreshAccessTokens: true,
    refreshLeeway: 300 ,// Refresh the token 5 minutes (300s) before it expires.
    //serverTokenEndpoint: '/api/token-auth/',
    serverTokenEndpoint: '/api-auth/login/',
    /*
    identificationField: 'username',
    passwordField: 'password',
    tokenPropertyName: 'token',
    authorizationPrefix: 'Bearer ',
    authorizationHeaderName: 'Authorization',
    headers: {},
    */
    //jwt
    serverTokenRefreshEndpoint: '/api/token-refresh/',
    tokenExpireName: 'exp',
    refreshLeeway: 0
  };

  return ENV;
};
