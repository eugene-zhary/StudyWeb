```css
/*style only for first line*/
.text::first-line {
	color: green;
}

/*only first letter*/
.text::first-letter {
	color: red;
	font-size: 50px;
}

/*before element*/
.list li::before{
	content: "<<";
}
/*after element*/
.list li::after{
	content: ">>";
}

/*hover before element*/
.list li:hover::before {
	background-color: yellow;
}
```