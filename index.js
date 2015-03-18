#!/usr/bin/env node

var directory = process.cwd();
var prompt = require('prompt');
var fs = require('fs');
var read = fs.readFileSync;
var mkdirp = require('mkdirp');

var template = read(__dirname + '/componentTemplate.js', 'utf8');
var filename; 
var componentName;
var styleExists = false;

var init = function(){
    prompt.start();

    var schema = {
        properties: {
            name : {
                description: 'What would you like to name your component?',
                type: 'string',
                pattern: /^[$A-Z_][0-9A-Z_$]*$/i,
                message: 'Name must start with a letter and have no spaces',
                default: 'Component',
                required: true
            },
        }
    };

    prompt.get(schema, function (err, result) {
        if (err) { return onErr(err) }
        componentName = result.name;
        write(componentName);
    });

    function onErr(err){
        console.log(err);
        return 1;
    }


    function capitalize(s) {
        return s[0].toUpperCase() + s.slice(1);
    }

    function write(componentName){
        var componentName = capitalize(componentName);

        // check if component already exists in current directory
        if (fs.existsSync(componentName)) {
            console.error('Component: ' + componentName + ' already exists, aborting!');
            return;
        }

        mkdirp.sync(componentName + '/styles');

        console.log('writing style directory');
        fs.writeFile(componentName + '/styles/' + componentName + '.scss', '', function (err) {
            if (err) return console.log(err);
            console.log(componentName + ' > style/' + componentName + '.scss');
        });

        template = template.replace(/{{displayName}}/g,capitalize(componentName));

        fs.writeFile(componentName + '/' + componentName + '.js', template, function (err) {
            if (err) return console.log(err);
            console.log(componentName + ' > ' + componentName + '.js');
        });
    }
}

module.exports = init(); 
