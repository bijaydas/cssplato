jQuery(document).ready(function() {

	jQuery("body").on("click", "#submit-btn", function(e) {

		e.preventDefault();

		let name    = jQuery("#name").val(),
			email   = jQuery("#email").val(),
			message = jQuery("#message").val(),

			work_with_us  = jQuery("#work_with_us").prop("checked"),
			advertisement = jQuery("#advertisement").prop("checked"),
			bug 		  = jQuery("#bug").prop("checked"),
			question 	  = jQuery("#question").prop("checked"),
			other 		  = jQuery("#other").prop("checked");

			contact_reason = "";

		if (work_with_us) contact_reason  = "work_with_us";
		if (advertisement) contact_reason = "advertisement";
		if (bug) contact_reason 		  = "bug";
		if (question) contact_reason 	  = "question";
		if (other) contact_reason 		  = "other";

		if (!is_empty() && is_email(email)) {

			$.ajax({
				url: "process/general.php",
				type: "post",
				data: {
					"name" : name,
					"email" : email,
					"message" : message,
					"contact_reason" : contact_reason
				},
				success: function(e) {

					let json = JSON.parse(e);

					if (json.status == "200") {

						jQuery("#name").val("");
						jQuery("#email").val("");
						jQuery("#message").val("");
						jQuery("#" + contact_reason).prop("checked", false);

						alert("Request submitted, we'll contact you soon");
					}
					else if (json.status == "201") {
						alert("Form not Uploaded, try again");
					}
				}
			});
		}
		else {
			alert("Please fill the details");
		}
	});




	// colors.php

	jQuery("body").on("click", ".color-container > a, .__home-fixed", function(e) {
		e.preventDefault();

		let hash = this.hash;

		jQuery("html, body").animate({
			scrollTop: jQuery(hash).offset().top
		}), 800, function() {
			window.location.hash = hash;
		};
	})

	jQuery("body").on("click", ".colContainer", function() {

		let bgColor  = jQuery(this).siblings().children(".alignRight").html(),
			$tmp_var = jQuery("<input type='text'>");

		jQuery("body").append($tmp_var);

		$tmp_var.val();
		$tmp_var.val(bgColor).select();
		document.execCommand("copy");

		$tmp_var.remove();

		$(this).addClass("copiedBGColor");

		setTimeout(function() {
			$(".colContainer").removeClass("copiedBGColor");
		}, 1200);
	});

	jQuery("body").on("click", ".__colors_btn i", function() {

		let bgColor = jQuery(".color-text").val();

		jQuery(".preview-color").css({backgroundColor: bgColor});

		jQuery(".colorShadesContainer").eq(0).css({display: "none"});
		jQuery(".colorShadesContainer").eq(1).css({display: "block"});

		$(".__color_tabs i").css({display: "block"});

		preview_color(bgColor);
	});

	// Color preview button on colors.php

	jQuery("body").on("click", ".__color_tabs i", function() {

		$(this).css({display: "none"});
		jQuery(".colorShadesContainer").eq(0).css({display: "block"});
		jQuery(".colorShadesContainer").eq(1).css({display: "none"});
	});

	function preview_color(color) {

		var percent = 10;

		for (let i = 0; i < 10; i++) {

			let bgColor = shadeColor(color, percent);

			if (i < 5) {
				jQuery(".__bgcolor").eq(0).children(".partiColor").eq(i).children(".colContainer").css({backgroundColor: bgColor});
				jQuery(".__bgcolor").eq(0).children(".partiColor").eq(i).children(".labelContainer").children(".alignRight").html(bgColor);
				jQuery(".__bgcolor").eq(0).children(".partiColor").eq(i).children(".labelContainer").children(".alignLeft").html("Shade " + (i + 1));
			}

			if (i >= 5) {
				jQuery(".__bgcolor").eq(1).children(".partiColor").eq(i-5).children(".colContainer").css({backgroundColor: bgColor});
				jQuery(".__bgcolor").eq(1).children(".partiColor").eq(i-5).children(".labelContainer").children(".alignRight").html(bgColor);
				jQuery(".__bgcolor").eq(1).children(".partiColor").eq(i-5).children(".labelContainer").children(".alignLeft").html("Shade " + (i + 1));
			}

			percent += 10;
		}
	}
});
