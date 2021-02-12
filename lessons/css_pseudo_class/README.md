```css
/*only even p*/
.block p:nth-child(even) {
	background-color: yellow;
}

/*only odd p*/
.block p:nth-child(odd) {
	background-color: #eee;
}

/*number of element*/
.block p:nth-child(3):hover {
	background-color: green;
}

/*visited style*/
.link:visited {
	color: green;
}

/*hover*/
.link:hover {
	text-decoration: underline;
	color: blue;
}

/*active*/
.link:active {
	color: yellow;
}

/*on focus*/
.textinput:focus {
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.8);
}

/*only first child*/
.list li:first-child {
	color: green;
}

/*only last child*/
.list li:last-child {
	color: blue;
	font-weight: 800;
}

```