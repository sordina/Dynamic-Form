// Using http://docs.jquery.com/QUnit

module("Normal Dynamic Form interactions")

test("Plugin exists", function(){
	ok( $("<form />").dynamicForm, "Plugin exists" )
})

test("Plugin returns a jquery collection", function(){
	ok( $("<form />").dynamicForm({'schema-url' : "http://schema.com"}).dynamicForm, "Plugin returns a jQuery collection" )
})


module("Dynamic Form interactions that throw errors")

test("Must be called on a form element", function(){
	var error = function() { $("<div />").dynamicForm() }
	raises( error, "Plugin must be called on a collection of forms" )
})

test("Requires a schema", function(){
	var error = function() { $("<form />").dynamicForm() }
	raises( error, "Plugin requires a schema or it throws an error" )
})
