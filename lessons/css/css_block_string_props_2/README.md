```css
/*block properties*/
.example-block {
	/*border props: width style color
	border styles:
	-solid
	-dotted
	-dashed
	display one side border-top/bottom/left/right;
	disable one border side border-top: none;
	*/
	border: 10px dashed #000;
	border-radius: 30px;

	/*box-shadow properties:
	vertical indent, 
	horizontal indent, 
	shadow radius, 
	shadow size
	box-shadow supports multipay shadows
	insent make shadow internal*/
	box-shadow: 5px 5px 5px 5px rgb(0, 0, 0), inset 5px 5px 5px 5px rgb(255, 0, 0);

	opacity: 0.8;

	/*if visibility hidden can't interact with element*/
	visibility: visible;
}

/*string properties*/
.example-string {
	/*trimmed border with only width, style and color
	but works stably unlike border
	create line out of block
	*/
	outline: 8px solid #000;
}

/*img is a string element
but it support some block properties*/
.example-img {
	border: 10px dashed #000;
	border-radius: 100px;
	overflow: hidden;
}
```