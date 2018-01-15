jQuery(document).ready(function() {

	jQuery("#border-color").ColorPicker({

		color: "#6f737a",

		onChange: function(hsb, hex, rgb) {

			$("#border-color").css({backgroundColor: "#" + hex});

			$("#border-color").attr("colorCodeR", rgb.r);
			$("#border-color").attr("colorCodeG", rgb.g);
			$("#border-color").attr("colorCodeB", rgb.b);

			updateBorderRadius();
		}
	});

	jQuery(".border-radius-slider").slider({
		min   : 0,
		max   : 200,
		slide : function(e, u) {
			let d 	   = jQuery(this).attr("data-attr"),
				rawVal = u.value;

			jQuery("#" + d + "-input").val(rawVal);

			updateBorderRadius();
		}
	});

	/**
	 *
	 * Code needs to run on load
	 *
	 */

	 jQuery("body").on("click", "#border-radius-css", function() {

 		var $tmp_var = jQuery("<input type='text'>");

 		jQuery("body").append($tmp_var);

 		$tmp_var.val(jQuery(".border-radius-css").text()).select();
 		document.execCommand("copy");

 		$tmp_var.remove();

 		jQuery(this).html("CSS Copied");

 		setTimeout(function() {
 			jQuery("#box-shadow-css").html("Click to copy CSS");
 		}, 2500);

 	});

	jQuery("body").on("keyup", ".pixel-input", function() {
		updateBorderRadius();
	});

	jQuery(".perpx").checkboxradio();

});
