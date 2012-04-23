/*
 * Resources:
 *   http://stackoverflow.com/questions/1184624/convert-form-data-to-js-object-with-jquery
 *
 */

; (function( $ ) { $.fn.dynamicForm = function( settings_ ) {

	// Defaults
	var settings = $.extend( { // 'schema-things'    : 'schema-values'
	}, settings_ )

	// Download schema
	if( settings['schema-url'] ) {

	// Use existing schema
	} else if( settings['schema-object'] ) {

	// Invalid use
	} else {
		$.error("Please provide a schema option when calling dynamicForm")
	}

	return this.each(function(){
		var nn = this.nodeName
		console.log(nn)
		if( nn != "FORM" ) {
			$.error("Please use this plugin on a collection of FORM element. You provided a [" + nn + "].")
		}
	})

}})( jQuery );
