function updateBoxShadow() {

	let horizontal_shadow     = jQuery("#horizontal-shadow-input").val(),
		vertical_shadow       = jQuery("#vertical-shadow-input").val();
		blur_radius   	      = jQuery("#blur-radius-input").val(),
		spread_radius         = jQuery("#spread-radius-input").val(),
		opacity 		      = jQuery("#opacity-input").val(),

		shadow_color_code_R   = jQuery("#shadow-color").attr("colorCodeR"),
		shadow_color_code_G   = jQuery("#shadow-color").attr("colorCodeG"),
		shadow_color_code_B   = jQuery("#shadow-color").attr("colorCodeB"),

		box_fill_color_R 	  = jQuery("#box-fill-color").attr("colorCodeR"),
		box_fill_color_G 	  = jQuery("#box-fill-color").attr("colorCodeG"),
		box_fill_color_B 	  = jQuery("#box-fill-color").attr("colorCodeB"),

		box_shadow_bg_color_R = jQuery("#box-shadow-bg-color").attr("colorCodeR"),
		box_shadow_bg_color_G = jQuery("#box-shadow-bg-color").attr("colorCodeG"),
		box_shadow_bg_color_B = jQuery("#box-shadow-bg-color").attr("colorCodeB");

	let s = horizontal_shadow + "px ";
	s += 	vertical_shadow   + "px ";
	s += 	blur_radius 	  + "px ";
	s += 	spread_radius     + "px ";

	s += 	"rgba(" + shadow_color_code_R + "," + shadow_color_code_G + "," + shadow_color_code_B + "," + opacity + ")";

	let boxShadow_CSS = s;

	jQuery(".box-shadow-css").html("box-shadow: " + boxShadow_CSS);

	jQuery(".box-shadow-preview").css({
		boxShadow       : s,
		border	        : "1px solid " + "rgb(" + box_fill_color_R + "," + box_fill_color_G + "," + box_fill_color_B + ")",
		backgroundColor : "rgb(" + box_fill_color_R + "," + box_fill_color_G + "," + box_fill_color_B + ")"
	});

	jQuery(".box-shadow-preview-container").css({
		backgroundColor: "rgb(" + box_shadow_bg_color_R + "," + box_shadow_bg_color_G + "," + box_shadow_bg_color_B + ")"
	});
}

function updateBorderRadius() {

	let top_left         = jQuery("#border-radius-top-left-input").val(),
		top_right        = jQuery("#border-radius-top-right-input").val(),
		bottom_left      = jQuery("#border-radius-bottom-left-input").val(),
		bottom_right     = jQuery("#border-radius-bottom-right-input").val(),
		border_thickness = jQuery("#border-radius-thickness-input").val() + "px ",

		delimeter 	 	 = "px",
		percent 	 	 = jQuery("#per").is(":checked"),

		/**
		 * Border Color
		 */

		border_colorR   = jQuery("#border-color").attr("colorCodeR"),
		border_colorG   = jQuery("#border-color").attr("colorCodeG"),
		border_colorB   = jQuery("#border-color").attr("colorCodeB");

	if (percent) {
		delimeter = "%";
		jQuery(".delimeter").html(delimeter);
	}
	else {
		jQuery(".delimeter").html(delimeter);
	}

	let css = "";

	css += top_left     + delimeter + " ";
	css += top_right    + delimeter + " ";
	css += bottom_right + delimeter + " ";
	css += bottom_left  + delimeter;

	jQuery(".border-radius-css").html("border-radius: " + css);

	jQuery(".border-radius-preview").css({
			borderRadius: css,
			borderWidth: border_thickness,
			border: border_thickness + " solid rgb(" + border_colorR + ", " + border_colorG + ", " + border_colorB + ")"
		}
	);
}

function updatetextShadow(font_family='Abel') {

	let horizontal_shadow   = jQuery("#text-shadow-horizontal-shadow-input").val(),
		vertical_shadow     = jQuery("#text-shadow-vertical-shadow-input").val(),
		blur_radius   	    = jQuery("#text-shadow-blur-radius-input").val(),
		font_size   	    = jQuery("#text-shadow-font-size-input").val(),

		font_color   		= "#" + jQuery("#font-color").attr("colorCode"),
		font_shadow_color   = jQuery("#text-shadow-color").attr("colorCode");

	let s = horizontal_shadow + "px ";
	s    += vertical_shadow   + "px ";
	s    += blur_radius   	  + "px #" + font_shadow_color;

	jQuery(".text-shadow-css").html("text-shadow: " + s);

	jQuery(".sample-text").css({
		fontSize: font_size + "px",
		color: font_color,
		textShadow : s,
		fontFamily: font_family
	});
}

function is_email(email='') {

    let atpos  = email.indexOf("@");
    	dotpos = email.lastIndexOf(".");

    if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= email.length) {
        return false;
    }
	else {
		return true;
	}
}

function is_empty() {

	let name    = jQuery("#name").val(),
		email   = jQuery("#email").val(),
		message = jQuery("#message").val();

	if (name == "" || email == "" || message == "") return true;
	else return false;
}

function shadeColor(color, percent) {

    let R = parseInt(color.substring(1,3),16),
    	G = parseInt(color.substring(3,5),16),
    	B = parseInt(color.substring(5,7),16);

    R = parseInt(R * (100 + percent) / 100);
    G = parseInt(G * (100 + percent) / 100);
    B = parseInt(B * (100 + percent) / 100);

    R = (R < 255) ? R : 255;
    G = (G < 255) ? G : 255;
    B = (B < 255) ? B : 255;

    var RR = ((R.toString(16).length == 1) ? "0" + R.toString(16) : R.toString(16)),
    	GG = ((G.toString(16).length == 1) ? "0" + G.toString(16) : G.toString(16)),
    	BB = ((B.toString(16).length == 1) ? "0" + B.toString(16) : B.toString(16));

    return "#" + RR + GG + BB;
}
