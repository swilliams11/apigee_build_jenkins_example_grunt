exports.profiles = function(grunt){
	return	{
			env : grunt.option('env'),     // replace with environment
			'dev' : {
				apiproxy : 'sample-api',
					org : 'seanwilliams', // replace with organization
					env : 'dev',     // replace with environment
					url_mgmt : 'https://api.enterprise.apigee.com',  // for cloud environments, leave as is
					username : grunt.option('username'), //|| process.env.ae_username, // pass credentials as arguments as grunt task --username=$ae_username --password=$ae_password
					password : grunt.option('password'), //|| process.env.ae_password, // use ae_username and ae_password are defined as environment variables and no arguments are passed
					revision : grunt.option('revision'), // provide revision to be undeployed by passing argument as --revision=X
          override : grunt.option('override') || true,
          delay : grunt.option('delay') || 10
				},
				'test' : {
					apiproxy : 'sample-api',
					org : 'seanwilliams', // replace with organization
					env : 'test',     // replace with environment
					url_mgmt : 'https://api.enterprise.apigee.com',  // for cloud environments, leave as is
					username : grunt.option('username'), //|| process.env.ae_username, // pass credentials as arguments as grunt task --username=$ae_username --password=$ae_password
					password : grunt.option('password'), //|| process.env.ae_password, // use ae_username and ae_password are defined as environment variables and no arguments are passed
					revision : grunt.option('revision'), // provide revision to be undeployed by passing argument as --revision=X
          override : grunt.option('override') || true,
          delay : grunt.option('delay') || 10
				},
				'prod' : {
					apiproxy : 'sample-api',
					org : 'seanwilliams', // replace with organization
					env : 'prod',     // replace with environment
					url_mgmt : 'https://api.enterprise.apigee.com',  // for cloud environments, leave as is
					username : grunt.option('username'), //|| process.env.ae_username, // pass credentials as arguments as grunt task --username=$ae_username --password=$ae_password
					password : grunt.option('password'), //|| process.env.ae_password, // use ae_username and ae_password are defined as environment variables and no arguments are passed
					revision : grunt.option('revision'), // provide revision to be undeployed by passing argument as --revision=X
          override : grunt.option('override') || true,
          delay : grunt.option('delay') || 10
				}
			}
}

exports.xmlconfig = function(env, grunt){
	config = { "dev" : [
		{//sets description within API proxy for tracking purposes with this format 'git commit: 8974b5a by dzuluaga on Diegos-MacBook-Pro-2.local'
		 //see grunt/tasks/saveGitRevision.js for further customization
			"options": {
				"xpath": "//APIProxy/Description",
				"value": "<%= grunt.option('gitRevision') %>"
			},
			"files": {
				"target/apiproxy/<%= apigee_profiles[grunt.option('env')].apiproxy %>.xml": "apiproxy/*.xml"
			}
		},
		{
			"options": {
				"xpath": "//TargetEndpoint/HTTPTargetConnection/URL",
				"value": "https://weather.yahooapis.com/forecastrss"
			},
			"files": {
				"target/apiproxy/targets/default.xml": "apiproxy/targets/default.xml"
			}
		},
		{
			"options": {
				"xpath": "//ProxyEndpoint/HTTPProxyConnection/BasePath",
				"value": "/basepath"
			},
			"files": {
				"target/apiproxy/proxies/default.xml": "apiproxy/proxies/default.xml"
			}
		},
		{
			"files": { "target/apiproxy/policies/CORS.xml": "apiproxy/policies/CORS.xml" },
			"options": {
				"replacements" : [
				{
					"xpath": "//AssignMessage/Add/Headers/Header[@name=\"Access-Control-Allow-Origin\"]",
					"value": "https://a3s.sas.com"
				},
				{
					"xpath": "//AssignMessage/Add/Headers/Header[@name=\"Access-Control-Allow-Headers\"]",
					"value": "origin, x-requested-with, accept, authorization, content-type"
				},
				{
					"xpath": "//AssignMessage/Add/Headers/Header[@name=\"Access-Control-Max-Age\"]",
					"value": "86400" //24hours				
				},
				{
					"xpath": "//AssignMessage/Add/Headers/Header[@name=\"Access-Control-Allow-Methods\"]",
					"value": "GET, PUT, POST, DELETE"
				}
				]
			}			
		}
		],
		"test" : [
		{//sets description within API proxy for tracking purposes with this format 'git commit: 8974b5a by dzuluaga on Diegos-MacBook-Pro-2.local'
		 //see grunt/tasks/saveGitRevision.js for further customization
			"options": {
				"xpath": "//APIProxy/Description",
				"value": "<%= grunt.option('gitRevision') %>"
			},
			"files": {
				"target/apiproxy/<%= apigee_profiles[grunt.option('env')].apiproxy %>.xml": "apiproxy/*.xml"
			}
		},
		{
			"options": {
				"xpath": "//TargetEndpoint/HTTPTargetConnection/URL",
				"value": "https://weather.yahooapis.com/forecastrss"
			},
			"files": {
				"target/apiproxy/targets/default.xml": "apiproxy/targets/default.xml"
			}
		},
		{
			"options": {
				"xpath": "//ProxyEndpoint/HTTPProxyConnection/BasePath",
				"value": "/basepath"
			},
			"files": {
				"target/apiproxy/proxies/default.xml": "apiproxy/proxies/default.xml"
			}
		},
		{
			"files": { "target/apiproxy/policies/CORS.xml": "apiproxy/policies/CORS.xml" },
			"options": {
				"replacements" : [
				{
					"xpath": "//AssignMessage/Add/Headers/Header[@name=\"Access-Control-Allow-Origin\"]",
					"value": "https://a3s.sas.com"
				},
				{
					"xpath": "//AssignMessage/Add/Headers/Header[@name=\"Access-Control-Allow-Headers\"]",
					"value": "origin, x-requested-with, accept, authorization, content-type"
				},
				{
					"xpath": "//AssignMessage/Add/Headers/Header[@name=\"Access-Control-Max-Age\"]",
					"value": "86400" //24hours				
				},
				{
					"xpath": "//AssignMessage/Add/Headers/Header[@name=\"Access-Control-Allow-Methods\"]",
					"value": "GET, PUT, POST, DELETE"
				}
				]
			}			
		}
		],
	 "prod" : [
		{//sets description within API proxy for tracking purposes with this format 'git commit: 8974b5a by dzuluaga on Diegos-MacBook-Pro-2.local'
		 //see grunt/tasks/saveGitRevision.js for further customization
			"options": {
				"xpath": "//APIProxy/Description",
				"value": "<%= grunt.option('gitRevision') %>"
			},
			"files": {
				"target/apiproxy/<%= apigee_profiles[grunt.option('env')].apiproxy %>.xml": "apiproxy/*.xml"
			}
		},
		{
			"options": {
				"xpath": "//TargetEndpoint/HTTPTargetConnection/URL",
				"value": "https://weather.yahooapis.com/forecastrss"
			},
			"files": {
				"target/apiproxy/targets/default.xml": "apiproxy/targets/default.xml"
			}
		},
		{
			"options": {
				"xpath": "//ProxyEndpoint/HTTPProxyConnection/BasePath",
				"value": "/basepath"
			},
			"files": {
				"target/apiproxy/proxies/default.xml": "apiproxy/proxies/default.xml"
			}
		},
		{
			"files": { "target/apiproxy/policies/CORS.xml": "apiproxy/policies/CORS.xml" },
			"options": {
				"replacements" : [
				{
					"xpath": "//AssignMessage/Add/Headers/Header[@name=\"Access-Control-Allow-Origin\"]",
					"value": "https://a3s.sas.com"
				},
				{
					"xpath": "//AssignMessage/Add/Headers/Header[@name=\"Access-Control-Allow-Headers\"]",
					"value": "origin, x-requested-with, accept, authorization, content-type"
				},
				{
					"xpath": "//AssignMessage/Add/Headers/Header[@name=\"Access-Control-Max-Age\"]",
					"value": "86400" //24hours				
				},
				{
					"xpath": "//AssignMessage/Add/Headers/Header[@name=\"Access-Control-Allow-Methods\"]",
					"value": "GET, PUT, POST, DELETE"
				}
				]
			}			
		}
		]}
		if(!config[env])grunt.fail.fatal('Environment '+ env +' does not exist under grunt/apigee-config.js')
		return config[env];
}
