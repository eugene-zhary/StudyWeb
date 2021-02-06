```html
<form action="#" method="POST" enctype="multipart/form-data">
    <!--inputs-->
    <!--tabindex - set the order-->
	
    <div>
        <input tabindex="1" type="text" name="username" placeholder="username">
    </div>
	
    <div>
        <input tabindex="2" type="password" name="userpass" placeholder="password">
    </div>

    <div>
        <input tabindex="3" name="userphone" type="tel" placeholder="phone number">
    </div>

    <div>
        <p>Sex</p>
        <div>
            <input tabindex="4" checked type="radio" name="gender" value="male"> male
        </div>
        <div>
            <input tabindex="4" type="radio" name="gender" value="female"> female
        </div>
    </div>

    <div>
        <p>Property</p>
        <div>
            <input tabindex="5" checked type="checkbox" name="bike" value="yes">bike
        </div>
        <div>
            <input tabindex="6" type="checkbox" name="car" value="yes">car
        </div>
        <div>
            <input tabindex="7" disabled type="checkbox" name="house" value="yes">house
        </div>
    </div>


    <div>
        <p>Additional information</p>
        <!--multi line entry-->
        <textarea tabindex="8" name="text"></textarea>
    </div>
    <div>
        <p>Attach photo</p>
        <input tabindex="10" type="file" name="foto">
    </div>

    <div>
        <p>Favorite color</p>
        <!--multiply - multi selection-->
        <select name="color">
            <option value="red">Red</option>
            <option value="green">Green</option>
            <option selected value="Blue">Blue</option>
        </select>
    </div>

    <div>
        <p>Action</p>
        <!--reset - reset form, submit - send form-->
        <button type="submit">Send</button>
        <button type="reset">Reset</button>
    </div>
</form>
```