```scss
/*flex - line up elements
inline-flex*/
display: flex;

/*set align-items:
flex-start
flex-end
center*/
align-items: flex-start;

/*nowrap - disable wrapping
wrap - allow wrapping
wrap-reverse*/
flex-wrap: wrap;

/*flex-start
flex-end
space-between - equal space between elements
space-around*/
justify-content: space-between;

/*row-reverse
column
column-reverse*/
flex-direction: column;


//main size of a flex item
flex-basis: 250px;
//1(true), 0(false)
flex-grow: 1;
flex-shrink: 1;

//shrink, grow, basis
flex: 1 1 auto;

//justify-content for it self
align-self: stretch;

//element order in flex
order: 4;
```