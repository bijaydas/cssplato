<?php require '__includes/header.php'; get_header("box-shadow"); ?>

<div class="box-shadow" id="box-shadow">

	<div class="box-shadow-config">

		<div class="config-range">

			<div class="label-n-pexel">

				<div class="label">Horizontal shadow</div>

				<div class="pexel-container">
					<input type="text"
					  	   class="pixel-input"
						   id="horizontal-shadow-input"
						   maxlength="3"
						   value="10"> px
				</div>
			</div>

			<div class="box-shadow-slider"
				 id="horizontal-shadow"
				 data-attr="horizontal-shadow"></div>
		</div>
		<div class="config-range">

			<div class="label-n-pexel">

				<div class="label">Vertical Shadow</div>

				<div class="pexel-container">
					<input type="text"
						   class="pixel-input"
						   id="vertical-shadow-input"
						   maxlength="3"
						   value="10"> px
				</div>
			</div>

			<div class="box-shadow-slider"
				 id="vertical-shadow"
				 data-attr="vertical-shadow"></div>
		</div>
		<div class="config-range">

			<div class="label-n-pexel">

				<div class="label">Blur Radius</div>

				<div class="pexel-container">
					<input type="text"
						   class="pixel-input"
						   id="blur-radius-input"
						   maxlength="3"
						   value="24"> px
				</div>
			</div>

			<div class="box-shadow-slider blur-radius-range"
				 id="blur-radius"
				 data-attr="blur-radius"></div>
		</div>

		<div class="config-range">

			<div class="label-n-pexel">

				<div class="label">Space Radius</div>

				<div class="pexel-container">
					<input type="text"
						   class="pixel-input"
						   id="spread-radius-input"
						   maxlength="3"
						   value="0"> px
				</div>
			</div>

			<div class="box-shadow-slider"
				 id="spread-radius"
				 data-attr="spread-radius"></div>
		</div>

		<div class="config-range">

			<div class="label-n-pexel">

				<div class="label">Opacity</div>

				<div class="pexel-container">
					<input type="text"
						   class="pixel-input"
						   id="opacity-input"
						   maxlength="1">
				</div>
			</div>

			<div class="box-shadow-slider opacity-range" data-attr="opacity"></div>
		</div>


		<!-- Colors -->

		<div class="config-range">
			<div class="color-chooser-container">

				<div class="label">Shadow Color</div>

				<div class="color-chooser-input-container">
					<input type="text"
						   id="shadow-color"
						   class="box-shadow-color"
						   colorCodeR="209"
						   colorCodeG="209"
						   colorCodeB="209"
						   readonly>
				</div>
			</div>
		</div>

		<div class="config-range">
			<div class="color-chooser-container">

				<div class="label">Box Fill</div>

				<div class="color-chooser-input-container">
					<input type="text"
						   id="box-fill-color"
						   class="box-shadow-color"
						   colorCodeR="196"
						   colorCodeG="196"
						   colorCodeB="196"
						   readonly>
				</div>
			</div>
		</div>

		<div class="config-range">
			<div class="color-chooser-container">

				<div class="label">Box Background</div>

				<div class="color-chooser-input-container">
					<input type="text"
						   id="box-shadow-bg-color"
						   class="box-shadow-color"
						   colorCodeR="255"
						   colorCodeG="255"
						   colorCodeB="255"
						   readonly>
				</div>
			</div>
		</div>

	</div>

	<div class="box-shadow-preview-container">
		<div class="box-shadow-preview">

			<div class="box-shadow-css"></div>

			<button type="button" id="box-shadow-css">Click to copy CSS</button>
		</div>
	</div>
</div>

<?php require '__includes/footer.php'; ?>
