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

	function prodPlus(el) {
    	el.click(function () {
			var $input = $(this).parent().find('input');
			if ($input.val() == $input.attr("max")) {
				var res = '<div class="uk-flex-top" data-uk-modal><div class="uk-modal-dialog uk-modal-body uk-margin-auto-vertical"><button class="uk-modal-close-default" type="button" data-uk-close></button><p class="uk-text-center">Вы выбрали максимальное количество товара</p></div></div>';
				UIkit.modal(res).toggle();
				return false;
			}
			$input.val(parseInt($input.val()) + 1);
			$input.change();
			return false;
		});
    }

	function prodMinus(el) {
		el.click(function () {
			var $input = $(this).parent().find('input');
			var count = parseInt($input.val()) - 1;
			count = count < 1 ? 1 : count;
			$input.val(count);
			$input.change();
			return false;
		});
	}

	prodPlus($('.prodQuant .plus'));
    prodMinus($('.prodQuant .minus'));

    $(document).on('change', '.quatityChange', function(event) {
    	event.preventDefault();
    	var price = $(this).parents("tr").find('.price').text();
    	var summ = price*$(this).val();

    	$(this).parents("tr").find('.summ').text(summ);
    });
});