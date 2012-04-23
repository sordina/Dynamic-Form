(function( $ ) {
	$.fn.dynamicForm = function( options ) {

		var settings = $.extend( {
			'location'         : 'top',
			'background-color' : 'blue'
		}, options);

		return this;

	};
})( jQuery );
