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



	for (let i = 10; i <= 100; i+=10) {
		console.log(shadeColor("#a2000d", i));
	}
});
