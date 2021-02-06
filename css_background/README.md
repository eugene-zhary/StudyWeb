```css
.block {
	/*color*/
	background-color: #1188bb;
	
	/*img (supports multi images)*/
	background: url("../img/goku_icon.png");
	
	/*repeat-x, repeat-y*/
	background-repeat: no-repeat;

	/*center left...
	50% 25%
	10px 50px*/
	background-position: 50px 50px;

	/*scroll settings*/
	background-attachment: fixed;

	/*contain - fill the parent, 
	auto - original size
	cover - fill the bigger side of parent*/
	background-size: 300px 100px;
	
	/*gradient*/
	background: linear-gradient(90deg, rgba(121, 9, 113, 1) -12%, 
	rgba(255, 0, 0, 1) 0%, 
	rgba(25, 0, 255, 1) 100%);
}
```