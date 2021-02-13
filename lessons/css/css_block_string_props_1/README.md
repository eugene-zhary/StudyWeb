```css
/*block properties*/
.example-block {
	/*top right bottom left*/
	padding: 10px 20px 30px 5px;
	margin: 10px 20px;

	width: 500px;
	max-width: 600px;
	min-width: 200px;

	height: 200px;
	min-height: 10px;
	max-height: 300px;

	/* visible - content visible out of block
	hidden - content doesnt visible out of block
	scroll - add scroll
	auto - add scroll if need
	*/
	overflow: auto;

	/*di - makes from block tag to string tag*/
	display: inline;

	/*dn - disable current block
	display: none;
	*/

	border: 1px solid #000;
}

/*string properties*/
.example-string {
	/*db makes from string tag to block tag*/
	display: block;
}

/*img is a string element
but it support some block properties*/
.example-img {
	width: 300px;
	max-width: 600px;
	min-width: 200px;

	height: 300px;
	max-height: 600px;
	min-height: 200px;
}
```