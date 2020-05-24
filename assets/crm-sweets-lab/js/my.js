jQuery(document).ready(function($) {
	$(".phone").inputmask({
		mask: "89999999999",
		showMaskOnHover: false
	});

	$(document).on('keyup', '.phone', function() {
		event.preventDefault();
		
		var str = $(this).val();

		if (str.indexOf('89') != 0) {
			$(this).val("8");
		}
	});
});