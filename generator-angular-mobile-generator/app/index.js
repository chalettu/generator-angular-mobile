'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var chalk = require('chalk');


var AngularMobileGeneratorGenerator = yeoman.generators.Base.extend({
  init: function () {
    this.pkg = require('../package.json');

    this.on('end', function () {
      if (!this.options['skip-install']) {
        this.installDependencies();
      }
    });
  },

  askFor: function () {
    var done = this.async();

    // have Yeoman greet the user
    this.log(this.yeoman);

    // replace it with a short and sweet description of your generator
    this.log(chalk.magenta('You\'re using the fantastic AngularMobileGenerator generator.'));

    var prompts = [{
      type: 'confirm',
      name: 'someOption',
      message: 'Would you like to enable this option?',
      default: true
    }];

    this.prompt(prompts, function (props) {
      this.someOption = props.someOption;

      done();
    }.bind(this));
  },

  app: function () {
    this.mkdir('www');
    //this is all the js folders
    this.mkdir('www/js');
    this.copy('_common.js', 'www/js/common.js');
    this.copy('_constants.js', 'www/js/constants.js');
    this.copy('_onload.js', 'www/js/onload.js');
    this.copy('_js_includes.js', 'www/js/js_includes.js');

    this.mkdir('www/js/libs');

    this.mkdir("www/js/includes");
    this.copy('angular_files/_angular_controllers.js', 'www/js/includes/angular_controllers.js');


    this.mkdir('www/js/services');
    this.mkdir('www/js/controllers');
    this.mkdir('www/partials');

    //angular stuff!
    this.copy('angular_files/_app.js', 'www/js/app.js');
    this.copy('angular_files/_home.js', 'www/js/controllers/home.js');
    this.copy('angular_files/_services.js', 'www/js/services/services.js');
    this.copy('angular_files/_home.html', 'www/partials/home.html');

    this.mkdir('www/img');
    
    this.mkdir('www/css');
    this.copy('_css_includes.js', 'www/css/css_includes.js');
    this.copy('_core.css', 'www/css/core.css');


    this.mkdir('www/fonts');
    this.mkdir('www/data');
  

    //now lets start copying a base index html
    this.copy('_index.html', 'www/index.html');

    this.copy('_package.json', 'package.json');
    this.copy('_bowerrc.json','.bowerrc');
    this.copy('_bower.json', 'bower.json');
  },

  projectfiles: function () {
    this.copy('editorconfig', '.editorconfig');
    this.copy('jshintrc', '.jshintrc');
  }
});

module.exports = AngularMobileGeneratorGenerator;
