<?php require '__includes/header.php'; get_header("home"); ?>

<div class="contact">

	<div class="wrapper">

		<div class="left">
			<div class="form_headings">
				<h1>Contact Us</h1>
				<h4>Have any questions or suggestions?</h4>
				<h3>Reach out here</h3>
			</div>

			<form class="contact-form" method="post">
				<div class="row">
					<div class="input-container">
						<div class="form-label">Name</div>
						<input type="text" class="input-text" placeholder="Your name">
					</div>
					<div class="input-container">
						<div class="form-label">Email</div>
						<input type="text" class="input-text" placeholder="Your Email">
					</div>
				</div>

				<div class="row">
					<div class="input-container">
						<div class="form-label">Why are you contacting?</div>
						<ul>
							<li>
								<input type="radio" id="work_with_us" value="work_with_us" name="re-contact">
								<label for="work_with_us">Work with us</label>
							</li>

							<li>
								<input type="radio" id="advertisement" value="advertisement" name="re-contact">
								<label for="advertisement">Advertisement</label>
							</li>

							<li>
								<input type="radio" id="bug" value="bug" name="re-contact">
								<label for="bug">Found Bug(s)</label>
							</li>

							<li>
								<input type="radio" id="question" value="question" name="re-contact">
								<label for="question">Question about CSSPlato</label>
							</li>

							<li>
								<input type="radio" id="other" value="other" name="re-contact">
								<label for="other">Other</label>
							</li>
						</ul>
					</div>
					<div class="input-container">
						<div class="form-label">Your Message</div>
						<textarea rows="6"></textarea>
					</div>
				</div>

				<div class="row">
					<button type="button" class="submit-btn">
						send message
						<i class="fa fa-angle-right fa-1x" aria-hidden="true"></i>
					</button>
				</div>
			</form>


		</div>

		<div class="right">
			Or mail at bijaydas@outlook.com
		</div>
	</div><!-- .wrapper -->
</div>

<?php require '__includes/footer.php'; ?>
