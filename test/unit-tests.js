test("a basic test example", function() {
	ok( true, "this test is fine" );
	var value = "hello";
	equal( value, "hello", "We expect value to be hello" );
});

test("Dynamic Form plugin exists and returns a juqery collection", function(){
	ok( $("<div />").dynamicForm,               "Plugin exists" )
	ok( $("<div />").dynamicForm().dynamicForm, "Plugin returns a collection" )
})

/* Test skelleton
test("", function(){
})
*/
