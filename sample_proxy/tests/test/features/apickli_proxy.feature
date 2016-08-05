@core
Feature:
	Httpbin.org exposes various resources for HTTP request testing
	As Httpbin client I want to verify that all API resources are working as they should

	Scenario: Setting headers in GET request
		Given I set User-Agent header to apickli
		When I GET /apigee
		Then response header content-type should be text/html
		And response code should be 404
        
    Scenario: checking values of headers passed as datatable in get request
		Given I set headers to 
		|name|value|
		|User-Agent|apickli|
		|Accept|application/json|
		When I GET /apigee
		Then response header Content-type should be text/html
        And response code should be 404

    Scenario: combine headers passed as table and Given syntax
        Given I set Custom-Header header to abcd
        And I set headers to 
        |name|value|
        |User-Agent|apickli|
        |Accept|application/json|
        When I GET /forecastweather_node
        Then response header Content-Type should be text/html
        And response code should be 404
        
    Scenario: Same header field with multiple values
        Given I set Custom-Header header to A
        And I set Custom-Header header to B
        And I set headers to
        |name|value|
        |Custom-Header|C|
        |Custom-Header|D|
        When I GET /images
     	Then response code should be 403

	Scenario: Setting body payload in POST request
		Given I set body to {"key":"hello-world"}
		When I POST to /javacallout
		Then response header Content-Type should be text/html

	Scenario: Setting body payload in PUT request
		Given I set body to {"key":"hello-world"}
		When I PUT /javacallout
		Then response header Content-Type should be text/html

	