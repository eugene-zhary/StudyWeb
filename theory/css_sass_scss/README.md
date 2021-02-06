```scss
//link .scss file
@import "_nullstyle.scss";

//variable
$fz: 20px;
$color_1: red;

//mixin
@mixin fontz($f) {
    font-size: $f;
}

//tamplate
%tplborder {
    border-bottom: 5px dashed $color_1;
}

.link {
    //inheritance
    @extend %tplborder;
    //use mixin
    @include fontz($fz);
}

.block {
    //math
    width: 300px/960px * 100%;

    //> - only first level properties
    > p {
        color: $color_1;
    }

    //& - parent class
    &__text {
        span {
            color: green;
        }
    }

    &:hover {
        background-color: gray;
    }
}
```