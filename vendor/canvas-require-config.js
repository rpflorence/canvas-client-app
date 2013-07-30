require.config({
  baseUrl: '/',

  paths: {
    ember: '/vendor/ember/ember',
    handlebars: '/vendor/handlebars/handlebars',
    jquery: '/vendor/jquery/jquery'
  },

  shim: {
    ember: {
      deps: ['jquery', 'handlebars'],
      exports: 'Ember'
    }
  }
});

