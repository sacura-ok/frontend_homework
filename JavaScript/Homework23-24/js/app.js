require.config({
  paths:{
     'jquery': 'https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min',
     'template': 'template'
  },
  shim: {
    'jquery': {
      exports: 'jQuery'
    },
    'template' : {
            exports: 'tmpl'
    }
  }
});

require(
  [
    'template',
    'model',
    'view',
    'controller',
    'script',
    'jquery'
  ],
  (template, model, view, controller, script, $) => {
  }
);
