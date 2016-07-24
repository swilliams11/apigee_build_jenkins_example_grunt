exports.searchAndReplaceFiles = function(env, grunt) {
  var config = {
    dev: {
      files: [{
        cwd: 'target/',
        src: ['**/*.js', '**/*.xml', '!node/node_modules/**/*.js'],
        dest: 'target/',
        expand: true,
      }],
      options: {
        replacements: [{
          pattern: '@@FRAG_Proxy_FaultRules-Frag.xml',
          replacement: "<%= grunt.file.read('../common/apiproxy/proxies/FaultRules-Frag.xml') %>"
        },
        {
          pattern: '@@FILE_CORS.xml',
          replacement: "<%= grunt.file.read('../common/apiproxy/policies/CORS.xml') %>"
        }, 
        {
          pattern: '@@FILE_Fault-Common-Error-Handler-JSON.xml',
          replacement: "<%= grunt.file.read('../common/apiproxy/policies/Fault-Common-Error-Handler-JSON.xml') %>"
        },  
        /*{ //fragment from common folder (Git submodule)
          pattern: '@@EXAMPLE-STEP-COMMON-XML-TO-JSON-GIT-SUBMODULE-FRAGMENT#1',
          replacement: "<%= grunt.file.read('common/apiproxy/proxies/xmltojson-js-steps-common-frag.xml') %>"
        }, { //fragment from common folder (Git submodule)
          pattern: '@@EXAMPLE-STEP-COMMON-XML-TO-JSON-GIT-SUBMODULE-FRAGMENT#2',
          replacement: "<%= grunt.file.read('common/apiproxy/proxies/xmltojson-js-steps-common-frag.xml') %>"
        }, { //fragment from common folder (Git submodule)
          pattern: '@@EXAMPLE-STEP-COMMON-XML-TO-JSON-GIT-SUBMODULE-FRAGMENT#3',
          replacement: "<%= grunt.file.read('common/apiproxy/proxies/xmltojson-js-steps-common-frag.xml') %>"
        }, {
          pattern: '@@XMLtoJSON-Common.xml',
          replacement: "<%= grunt.file.read('common/apiproxy/policies/XMLtoJSON-Common.xml') %>"
        }, { //fragment from common folder (Git submodule)
          pattern: '@@Script-External-Variables.xml',
          replacement: "<%= grunt.file.read('common/apiproxy/policies/Script-External-Variables.xml') %>"
        }, { //fragment from common folder (Git submodule)
          pattern: '@@js_external_vars.js',
          replacement: "<%= grunt.file.read('common/apiproxy/resources/jsc/js_external_vars.js') %>"
        }, {
          pattern: '@@JSON-to-XML.xml',
          replacement: "<%= grunt.file.read('common/apiproxy/policies/JSON-to-XML.xml') %>"
        },*/ ]
      }
    },
    test: {
      files: [{
        cwd: 'target/',
        src: ['**/*.js', '**/*.xml', '!node/node_modules/**/*.js'],
        dest: 'target/',
        expand: true,
      }],
      options: {
        replacements: [{
                  pattern: '@@FRAG_Proxy_FaultRules-Frag.xml',
                  replacement: "<%= grunt.file.read('../common/apiproxy/proxies/FaultRules-Frag.xml') %>"
        },
        {
          pattern: '@@FILE_CORS.xml',
          replacement: "<%= grunt.file.read('../common/apiproxy/policies/CORS.xml') %>"
        },
        {
          pattern: '@@FILE_Fault-Common-Error-Handler-JSON.xml',
          replacement: "<%= grunt.file.read('../common/apiproxy/policies/Fault-Common-Error-Handler-JSON.xml') %>"
        },   /*{ //fragment from common folder (Git submodule)
          pattern: '@@EXAMPLE-STEP-COMMON-XML-TO-JSON-GIT-SUBMODULE-FRAGMENT#1',
          replacement: "<%= grunt.file.read('common/apiproxy/proxies/xmltojson-js-steps-common-frag.xml') %>"
        }, { //fragment from common folder (Git submodule)
          pattern: '@@EXAMPLE-STEP-COMMON-XML-TO-JSON-GIT-SUBMODULE-FRAGMENT#2',
          replacement: "<%= grunt.file.read('common/apiproxy/proxies/xmltojson-js-steps-common-frag.xml') %>"
        }, { //fragment from common folder (Git submodule)
          pattern: '@@EXAMPLE-STEP-COMMON-XML-TO-JSON-GIT-SUBMODULE-FRAGMENT#3',
          replacement: "<%= grunt.file.read('common/apiproxy/proxies/xmltojson-js-steps-common-frag.xml') %>"
        }, {
          pattern: '@@XMLtoJSON-Common.xml',
          replacement: "<%= grunt.file.read('common/apiproxy/policies/XMLtoJSON-Common.xml') %>"
        }, { //fragment from common folder (Git submodule)
          pattern: '@@Script-External-Variables.xml',
          replacement: "<%= grunt.file.read('common/apiproxy/policies/Script-External-Variables.xml') %>"
        }, { //fragment from common folder (Git submodule)
          pattern: '@@js_external_vars.js',
          replacement: "<%= grunt.file.read('common/apiproxy/resources/jsc/js_external_vars.js') %>"
        }, {
          pattern: '@@JSON-to-XML.xml',
          replacement: "<%= grunt.file.read('common/apiproxy/policies/JSON-to-XML.xml') %>"
        },*/ ]
      }
    },
    prod: {
      files: [{
        cwd: 'target/',
        src: ['**/*.js', '**/*.xml', '!node/node_modules/**/*.js'],
        dest: 'target/',
        expand: true,
      }],
      options: {
        replacements: [{
            pattern: '@@FRAG_Proxy_FaultRules-Frag.xml',
            replacement: "<%= grunt.file.read('../common/apiproxy/proxies/FaultRules-Frag.xml') %>"
        },
        {
          pattern: '@@FILE_CORS.xml',
          replacement: "<%= grunt.file.read('../common/apiproxy/policies/CORS.xml') %>"
        },
        {
          pattern: '@@FILE_Fault-Common-Error-Handler-JSON.xml',
          replacement: "<%= grunt.file.read('../common/apiproxy/policies/Fault-Common-Error-Handler-JSON.xml') %>"
        },  /*, { //fragment from common folder (Git submodule)
          pattern: '@@EXAMPLE-STEP-COMMON-XML-TO-JSON-GIT-SUBMODULE-FRAGMENT#1',
          replacement: "<%= grunt.file.read('common/apiproxy/proxies/xmltojson-js-steps-common-frag.xml') %>"
        }, { //fragment from common folder (Git submodule)
          pattern: '@@EXAMPLE-STEP-COMMON-XML-TO-JSON-GIT-SUBMODULE-FRAGMENT#2',
          replacement: "<%= grunt.file.read('common/apiproxy/proxies/xmltojson-js-steps-common-frag.xml') %>"
        }, { //fragment from common folder (Git submodule)
          pattern: '@@EXAMPLE-STEP-COMMON-XML-TO-JSON-GIT-SUBMODULE-FRAGMENT#3',
          replacement: "<%= grunt.file.read('common/apiproxy/proxies/xmltojson-js-steps-common-frag.xml') %>"
        }, {
          pattern: '@@XMLtoJSON-Common.xml',
          replacement: "<%= grunt.file.read('common/apiproxy/policies/XMLtoJSON-Common.xml') %>"
        }, { //fragment from common folder (Git submodule)
          pattern: '@@Script-External-Variables.xml',
          replacement: "<%= grunt.file.read('common/apiproxy/policies/Script-External-Variables.xml') %>"
        }, { //fragment from common folder (Git submodule)
          pattern: '@@js_external_vars.js',
          replacement: "<%= grunt.file.read('common/apiproxy/resources/jsc/js_external_vars.js') %>"
        }, {
          pattern: '@@JSON-to-XML.xml',
          replacement: "<%= grunt.file.read('common/apiproxy/policies/JSON-to-XML.xml') %>"
        },*/ ]
      }
    },
  }
  if (!config[env]) grunt.fail.fatal('Environment ' + env + ' does not exist under grunt/search-and-replace-files.js')
  return (config[env])
}
