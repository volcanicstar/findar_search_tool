(function($) {
	$(document).ready(function(){
		$.getJSON('/wp-content/themes/area-theme-live/assets/vue/js/data/topics.json', function(data) {
            window.topicsData = data;
		});
		$.getJSON('/wp-content/themes/area-theme-live/assets/vue/js/data/terms.json', function(data) {
            window.termsData = data;
		});
		$.getJSON('/wp-content/themes/area-theme-live/assets/vue/js/data/category.json', function(data) {
            window.categoryData = data;
		});
		/*
		$.get('/wp-content/themes/area-theme-live/assets/vue/js/data/data.json', function(data) {
            window.mainData = require('./data/data.json');
			setTimeout(function(){
				$('body').append('<script src="/wp-content/themes/area-theme-live/assets/vue/js/area-research.app.js"></script>');
			}, 1000);
		});
		*/
		//window.mainData = require('./data/data.json');
		fetch('/wp-content/themes/area-theme-live/assets/vue/js/data/data.json').then(response => window.mainData = response.json());
	});
}(jQuery));