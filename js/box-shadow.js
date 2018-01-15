jQuery(document).ready(function() {

	jQuery(".box-shadow-slider").slider({
		min   : -100,
		max   : 200,
		slide : function(e, u) {
			let d 	   = jQuery(this).attr("data-attr"),
				rawVal = u.value,
				v 	   = parseFloat(rawVal);

			if (d == "opacity") {
				jQuery("[id=" + d + "-input]").val(v / 10);
			}
			else {
				jQuery("[id=" + d + "-input]").val(v);
			}
			updateBoxShadow();
		}
	});

	jQuery("body").on("click", "#box-shadow-css", function() {

		var $tmp_var = jQuery("<input type='text'>");

		jQuery("body").append($tmp_var);

		$tmp_var.val(jQuery(".box-shadow-css").text()).select();
		document.execCommand("copy");

		$tmp_var.remove();

		jQuery(this).html("CSS Copied");

		setTimeout(function() {
			jQuery("#box-shadow-css").html("Click to copy CSS");
		}, 2500);

	});

	jQuery("#shadow-color").ColorPicker({

		color: "#D1D1D1",

		onChange: function(hsb, hex, rgb) {

			$("#shadow-color").css({backgroundColor: "#" + hex});

			$("#shadow-color").attr("colorCodeR", rgb.r);
			$("#shadow-color").attr("colorCodeG", rgb.g);
			$("#shadow-color").attr("colorCodeB", rgb.b);

			updateBoxShadow();
		}
	});

	jQuery("#box-fill-color").ColorPicker({

		color: "#C4C4C4",

		onChange: function(hsb, hex, rgb) {

			$("#box-fill-color").css({backgroundColor: "#" + hex});

			$("#box-fill-color").attr("colorCodeR", rgb.r);
			$("#box-fill-color").attr("colorCodeG", rgb.g);
			$("#box-fill-color").attr("colorCodeB", rgb.b);

			updateBoxShadow();
		}
	});

	jQuery("#box-shadow-bg-color").ColorPicker({

		color: "#FFF",

		onChange: function(hsb, hex, rgb) {

			$("#box-shadow-bg-color").css({backgroundColor: "#" + hex});

			$("#box-shadow-bg-color").attr("colorCodeR", rgb.r);
			$("#box-shadow-bg-color").attr("colorCodeG", rgb.g);
			$("#box-shadow-bg-color").attr("colorCodeB", rgb.b);

			updateBoxShadow();
		}
	});

	jQuery(".pixel-input").on("keydown", function() {

		updateBoxShadow();
	});

	/**
	 *
	 * Code needs to run on load
	 *
	 */

	jQuery("#opacity-input").val(1);

	jQuery(".opacity-range").slider({
		min: 0,
		max: 10,
		value: 10
	});

	jQuery(".blur-radius-range").slider({
		min: 0,
		max: 100,
		value: 24
	})

	updateBoxShadow();
});
