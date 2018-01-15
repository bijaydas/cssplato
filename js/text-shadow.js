jQuery(document).ready(function() {

	jQuery(".text-shadow-slider").slider({
		min   : -100,
		max   : 100,
		slide : function(e, u) {
			let d 	   = jQuery(this).attr("data-attr"),
				rawVal = u.value,
				v 	   = parseFloat(rawVal);

			jQuery("#" + d + "-input").val(rawVal);

			updatetextShadow();
		}
	});

	jQuery("body").on("click", "#text-shadow-css", function() {

		var $tmp_var = jQuery("<input type='text'>");

		jQuery("body").append($tmp_var);

		$tmp_var.val(jQuery(".text-shadow-css").text()).select();
		document.execCommand("copy");

		$tmp_var.remove();

		jQuery(this).html("CSS Copied");

		setTimeout(function() {
			jQuery("#text-shadow-css").html("Click to copy CSS");
		}, 2500);
	});

	jQuery("#font-color").ColorPicker({

		color: "#555555",

		onChange: function(hsb, hex, rgb) {

			$("#font-color").css({backgroundColor: "#" + hex});
			$("#font-color").attr("colorCode", hex);

			updatetextShadow();
		}
	});

	jQuery("#text-shadow-color").ColorPicker({

		color: "#888888",

		onChange: function(hsb, hex, rgb) {

			$("#text-shadow-color").css({backgroundColor: "#" + hex});
			$("#text-shadow-color").attr("colorCode", hex);

			updatetextShadow();
		}
	});

	jQuery("#text-family").on("change", function() {
		updatetextShadow(jQuery(this).val());
	});

	jQuery("body").on("keyup", "#text-shadow-horizontal-shadow-input, #text-shadow-vertical-shadow-input, #text-shadow-blur-radius-input, #text-shadow-font-size-input", function() {
		updatetextShadow();
	});

	/**
	 *
	 * Code needs to run on load
	 *
	 */

	updatetextShadow();

	jQuery(".slider-font-size").slider({
		min: 45,
		max: 80,
		value: 50
	});

	jQuery(".blur-radius-slider").slider({
		min: 00,
		max: 40,
		value: 10
	});

});
