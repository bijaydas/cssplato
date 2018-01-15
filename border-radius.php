<?php require '__includes/header.php'; get_header("border-radius"); ?>

<div class="border-radius" id="border-radius">

	<div class="border-radius-config">

		<div class="config-range grid-half">

			<div>Border Radius in</div>

			<div>
				<label for="px">px</label>
				<input class="perpx" type="radio" name="perpx" id="px" checked>

				<label for="per">%</label>
				<input class="perpx" type="radio" name="perpx" id="per">
			</div>

		</div>

		<div class="config-range">

			<div class="label-n-pexel">

				<div class="label">Top Left</div>

				<div class="pexel-container">
					<input type="text"
					  	   class="pixel-input"
						   id="border-radius-top-left-input"
						   maxlength="2"
						   value="0"> <span class="delimeter">px</span>
				</div>
			</div>

			<div class="border-radius-slider" data-attr="border-radius-top-left"></div>
		</div>

		<div class="config-range">

			<div class="label-n-pexel">

				<div class="label">Top Right</div>

				<div class="pexel-container">
					<input type="text"
					  	   class="pixel-input"
						   id="border-radius-top-right-input"
						   maxlength="2"
						   value="0"> <span class="delimeter">px</span>
				</div>
			</div>

			<div class="border-radius-slider" data-attr="border-radius-top-right"></div>
		</div>

		<div class="config-range">

			<div class="label-n-pexel">

				<div class="label">Bottom Left</div>

				<div class="pexel-container">
					<input type="text"
					  	   class="pixel-input"
						   id="border-radius-bottom-left-input"
						   maxlength="2"
						   value="0"> <span class="delimeter">px</span>
				</div>
			</div>

			<div class="border-radius-slider" data-attr="border-radius-bottom-left"></div>
		</div>

		<div class="config-range">

			<div class="label-n-pexel">

				<div class="label">Bottom Right</div>

				<div class="pexel-container">
					<input type="text"
					  	   class="pixel-input"
						   id="border-radius-bottom-right-input"
						   maxlength="2"
						   value="0"> <span class="delimeter">px</span>
				</div>
			</div>

			<div class="border-radius-slider" data-attr="border-radius-bottom-right"></div>
		</div>

		<div class="config-range">

			<div class="label-n-pexel">

				<div class="label">Border Thickness</div>

				<div class="pexel-container">
					<input type="text"
					  	   class="pixel-input"
						   id="border-radius-thickness-input"
						   maxlength="2"
						   value="1"> <span class="delimeter">px</span>
				</div>
			</div>

			<div class="border-radius-slider" data-attr="border-radius-thickness"></div>
		</div>

		<div class="config-range">
			<div class="color-chooser-container">

				<div class="label">Border Color</div>

				<div class="color-chooser-input-container">
					<input type="text"
						   id="border-color"
						   class="box-border-color color-chooser"
						   colorCodeR="111"
						   colorCodeG="115"
						   colorCodeB="122"
						   readonly>
				</div>
			</div>
		</div>

	</div>

	<div class="border-radius-preview-container">

		<div class="border-radius-preview">

			<div class="border-radius-css"></div>

			<button type="button" id="border-radius-css">Click to copy CSS</button>
		</div>
	</div>

</div>

<?php require '__includes/footer.php'; ?>
