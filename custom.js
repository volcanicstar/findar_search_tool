(function($) {
	$(document).ready(function(){
		$.getJSON('/wp-content/themes/area-theme-live/assets/vue/js/data/terms.json', function(data) {
            window.termsData = data;
			$('body').append('<script src="/wp-content/themes/area-theme-live/assets/vue/js/area-research.chunk-vendors.js"></script><script src="/wp-content/themes/area-theme-live/assets/vue/js/area-research.app.js"></script>');
		});
	});
}(jQuery));