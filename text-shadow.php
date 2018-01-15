<?php require '__includes/header.php'; get_header("text-shadow"); ?>

<div class="text-shadow" id="text-shadow">

	<div class="text-shadow-config">

		<div class="config-range">

			<div class="label-n-pexel">

				<div class="label">Horizontal shadow</div>

				<div class="pexel-container">
					<input type="text"
					  	   class="pixel-input"
						   id="text-shadow-horizontal-shadow-input"
						   maxlength="2"
						   value="1"> px
				</div>
			</div>

			<div class="text-shadow-slider"
				 data-attr="text-shadow-horizontal-shadow"></div>
		</div>

		<div class="config-range">

			<div class="label-n-pexel">

				<div class="label">Vertical Shadow</div>

				<div class="pexel-container">
					<input type="text"
						   class="pixel-input"
						   id="text-shadow-vertical-shadow-input"
						   maxlength="2"
						   value="1"> px
				</div>
			</div>

			<div class="text-shadow-slider"
				 data-attr="text-shadow-vertical-shadow"></div>
		</div>

		<div class="config-range">

			<div class="label-n-pexel">

				<div class="label">Blur Radius</div>

				<div class="pexel-container">
					<input type="text"
						   class="pixel-input"
						   id="text-shadow-blur-radius-input"
						   maxlength="2"
						   value="1"> px
				</div>
			</div>

			<div class="text-shadow-slider blur-radius-slider"
				 data-attr="text-shadow-blur-radius"></div>
		</div>

		<div class="config-range">

			<div class="label-n-pexel">

				<div class="label">Font Size</div>

				<div class="pexel-container">
					<input type="text"
						   class="pixel-input"
						   id="text-shadow-font-size-input"
						   maxlength="2"
						   value="50"> px
				</div>
			</div>

			<div class="text-shadow-slider slider-font-size"
				 data-attr="text-shadow-font-size"></div>
		</div>

		<div class="config-range">

			<div class="label-n-pexel">

				<div class="label">Font Family</div>

				<div class="pexel-container">

					<select id="text-family">
						<option value="Abel">Abel</option>
						<option value="Ubuntu">Ubuntu</option>
						<option value="Titillium Web">Titillium Web</option>
						<option value="Raleway">Raleway</option>
						<option value="PT Sans">PT Sans</option>
						<option value="Mukta Malar">Mukta Malar</option>
					</select>
				</div>
			</div>
		</div>

		<!-- Colors -->

		<div class="text-shadow-row">

			<div class="text-shadow-color-container">

				<div class="label">Shadow Color</div>

				<div class="text-shadow-color-input-container">
					<input type="text"
					id="text-shadow-color"
					class="color-input"
					colorCode="888888"
					readonly>
				</div>
			</div>

			<div class="text-shadow-color-container">

				<div class="label">Font Color</div>

				<div class="text-shadow-color-input-container">
					<input type="text"
					id="font-color"
					class="color-input"
					colorCode="555555"
					readonly>
				</div>
			</div>

		</div>
	</div>

	<div class="text-shadow-preview-container">
		<div class="text-shadow-preview">

			<div class="text-shadow-css"></div>

			<div class="sample-text" contenteditable="true">Sample Text</div>
			<button type="button" id="text-shadow-css">Click to copy CSS</button>
		</div>
	</div>

</div>

<?php require '__includes/footer.php'; ?>
