'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var fs = require('fs');

var PhonegapInitGenerator = yeoman.generators.NamedBase.extend({
  init: function () {
   // console.log('You called the phonegap_init subgenerator with the argument ' + this.name + '.');
  },

  files: function () {
  //  this.copy('somefile.js', 'somefile.js');
  },
  askFor: function () {
    var done = this.async();

    // have Yeoman greet the user
    this.log(this.yeoman);

    // replace it with a short and sweet description of your generator
    this.log(chalk.magenta('You\'re using the awesome Phonegap Plugin generator.'));

   var prompts = [];
   var file  = this.read("plugin_list.json");
  
   var available_plugins = eval ("(" + file + ")");
   this.available_plugins=available_plugins;
   for (var i=0;i<available_plugins.length;i++)
   {

    var prompt_obj={type: 'confirm',
      name: available_plugins[i].plugin_id,
      message: "Should I install the "+available_plugins[i].Description+'?',
      default: true
  	};
  		prompts.push(prompt_obj);
   }	


    this.prompt(prompts, function (props) {
      //this.someOption = props.someOption;

    this.plugin_list=props;


      done();
    }.bind(this));
  },
  generatePhonegapPluginFile:function()
  {

  	console.log(this.plugin_list);
  	var plugins=["org.apache.cordova.device",
    "https://github.com/whiteoctober/cordova-plugin-app-version.git",
    "https://git-wip-us.apache.org/repos/asf/cordova-plugin-splashscreen.git",
    "https://git-wip-us.apache.org/repos/asf/cordova-plugin-console.git"
    ];

    	var selected_plugins=[];	
    	for (var key in this.plugin_list) {
    	
    		if (this.plugin_list[key]==true)
    		{
    			selected_plugins.push(key);
    		}

		}

		for (var i=0;i<this.available_plugins.length;i++)
		{
			if (in_array(this.available_plugins[i].plugin_id,selected_plugins))
			{
				plugins.push(this.available_plugins[i].url);
			}	

		}
    
		var plugin_string='"'+implode('",\n\t"',plugins)+'"';
	//console.log(plugin_string);
		var plugin_template = this.read("_plugins.js");

	    var context = {
            plugin_list: plugin_string
        };
   
        var plugin_text = this.engine(plugin_template , context);
var options={mode:"0755"};
		//this.write(path.join(process.cwd(), '.cordova/hooks/after_platform_add/010_install_plugins.js'), plugin_text);
    fs.mkdir(path.join(process.cwd(), '.cordova/'),"0755");
    fs.mkdir(path.join(process.cwd(), '.cordova/hooks/'),"0755");
    fs.mkdir(path.join(process.cwd(), '.cordova/hooks/after_platform_add'), "0755", function(){

    fs.writeFile(path.join(process.cwd(), '.cordova/hooks/after_platform_add/010_install_plugins.js'), plugin_text, options,function(){});


    });
  
//     var filepath= path.join(process.cwd(), '.cordova/hooks/after_platform_add/010_install_plugins.js');
 //   fs.chmodSync(filepath, 755);




  }
});

module.exports = PhonegapInitGenerator;
function in_array(needle, haystack, argStrict) {

  var key = '',
    strict = !! argStrict;

  //we prevent the double check (strict && arr[key] === ndl) || (!strict && arr[key] == ndl)
  //in just one for, in order to improve the performance 
  //deciding wich type of comparation will do before walk array
  if (strict) {
    for (key in haystack) {
      if (haystack[key] === needle) {
        return true;
      }
    }
  } else {
    for (key in haystack) {
      if (haystack[key] == needle) {
        return true;
      }
    }
  }

  return false;
}


function implode(glue, pieces) {

  var i = '',
    retVal = '',
    tGlue = '';
  if (arguments.length === 1) {
    pieces = glue;
    glue = '';
  }
  if (typeof pieces === 'object') {
    if (Object.prototype.toString.call(pieces) === '[object Array]') {
      return pieces.join(glue);
    }
    for (i in pieces) {
      retVal += tGlue + pieces[i];
      tGlue = glue;
    }
    return retVal;
  }
  return pieces;
}