exports.config =
  # See http://brunch.io/#documentation for docs.
  # espacially https://github.com/brunch/brunch/blob/master/docs/config.md
  paths:
    public: 'public'

  files:
    javascripts:
      joinTo:
        'js/jquery.js': /^(bower_components[\\/]jquery[\\/]dist[\\/]jquery.js)/
        'js/app.js': /^(app[\\/]scripts)/
        'js/vendor.js': /^(vendor|bower_components(?![\\/]jquery[\\/]dist[\\/]jquery.js))/
    stylesheets:
      joinTo:
        'css/app.css': /^(app[\\/]scss|vendor)/

  modules:
    wrapper: false
    definition: false

  conventions:
      # we don't want javascripts in asset folders to be copied like the one in
      # the bootstrap assets folder
      assets: /assets[\\/](?!javascripts)/

  plugins:
    sass:
      debug: 'comments' # or set to 'debug' for the FireSass-style output
      mode: 'ruby' # set to 'native' to force libsass
      options:
        includePaths: ['bower_components/bootstrap-sass-official/assets/stylesheets']
      allowCache: true
