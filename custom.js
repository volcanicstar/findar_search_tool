(function($) {
	$(document).ready(function(){
		$.getJSON('./data/terms.json', function(data) {
            window.termsData = data;
		});
	});
}(jQuery));