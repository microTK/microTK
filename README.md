# microTk
A tiny JavaScript library for basic dom manipulation. 

[![Build Status](https://drone.io/github.com/thenderson21/microTK/status.png)](https://drone.io/github.com/thenderson21/microTK/latest)

# Usage

```html
<script src="microTK.min.js"></script>

<script>
 var µMenu= µ(".menu"); // or microTk(".menu")

 //toggles the 'active' class
 µMenu.toggleClass("active");

 //prints each element to console.
 µMenu.each(function(element){
     console.Loge(element);
 });

 //Chainable
 µMenu.addClass('sample').addEvent('click', function(e){
            //NOTE: all action pass the HTMLElement not the MicroTK object.
            µ(e).removeClass('sample');
        });
</script>
```

# Global

### microTK(selector, scope) 

Creates a new instance of MicroTK with specified query paremeters or element(s)

**Parameters**

 - **selector**: `string | HTMLElement`, The selector to be queried for or the HTMLElement(s) to be added.

 - **scope**: `HTMLElement`, The scope of the query selection.

**Returns**: `microTK`, An instance of the MicroTK object.

**Example**:
```js
var menu = µ("#menu");
```


## Class: MicroTK
The main class of the microTK library, it is a list of selected HTMLElement 
that various actions can be performed on.

### MicroTK.length
`int`, The current number of selected elements.

### MicroTK.version
`string`, The current version. 

### MicroTK.addAttribute(name, value) 

Adds an attribute to the selected elements.

**Parameters**

 - **name**: `string`, The attribute to be added.

 - **value**: `string`, The value of the attribute.

**Returns**: `MicroTK`, A copy of the MicroTK object.

**Example**:
```js
µ("#menu").addAttribute("title", "test");
```

### MicroTK.addClass(className) 

Adds a class to the selected elements.

**Parameters**

 - **className**: `string`, The class to be added.

**Returns**: `microTK`, A copy of the MicroTK object.

**Example**:
```js
µ("#menu").addClass("active");
```

### MicroTK.addEvent(event, action) 

Adds an event to the selected elements.

**Parameters**

 - **event**: `string`, Event to be added.

 - **action**: `function`, Function to be run on event.

**Returns**: `microTK`, A copy of the MicroTK object.

**Example**:
```js
µ("#menu").addEvent("click", function (e){
    µ(e).toggleClass("active");   
});
```

### MicroTK.append(element) 

Appends an HTMLElement into the selected elements.

**Parameters**

 - **element**: `HTMLElement`, Element to be removed.

**Returns**: `microTK`, A copy of the MicroTK object.

**Example**:
```js
var element = document.createElement("div")
µ("#menu").append(element);
```

### MicroTK.each(action) 

Performs an action on the selected elements

**Parameters**

 - **action**: `elementAction`, Function to be run when the element has providec class.

**Returns**: `microTK`, A copy of the MicroTK object.

**Example**:
```js
µ("#menu").each(function (e){
    e.classList.add("active");   
});
```

### MicroTK.hasAttribute(name, action) 

Checks to see if elements contains provided class and performs provided action.

**Parameters**

 - **name**: `string`, The attribute to be added.

 - **action**: `elementAction`, Function to be run when the element has provided attribute.

**Returns**: `microTK`, A copy of the MicroTK object.

**Example**:
```js
µ("#menu").hasAttribute("title", function (e){
    e.title = "woohoo"; 
});
```

### MicroTK.hasClass(className, action) 

Checks to see ff elements contains provided class and performs provided action.

**Parameters**

 - **className**: `string`, Element to be tested for.

 - **action**: `elementAction`, Function to be run when the element has providec class.

**Returns**: `microTK`, A copy of the MicroTK object.

**Example**:
```js
µ("#menu").hasClass("active", function (e){
    e.classList.remove("active");   
});
```

### MicroTK.prepend(element) 

Prepends an HTMLElement into the selected elements.

**Parameters**

 - **element**: `HTMLElement`, Element to be removed.

**Returns**: `microTK`, A copy of the MicroTK object.

**Example**:
```js
var element = document.createElement("div")
µ("#menu").prepend(element);
```

### MicroTK.remove() 

Removes the selected elements from the DOM.

**Returns**: `microTK`, A copy of the MicroTK object.

**Example**:
```js
µ("#menu").remove();
```

### MicroTK.removeAttribute(name) 

Removes an attribute from the selected elements.

**Parameters**

 - **name**: `string`, The attribute to be added.

**Returns**: `microTK`, A copy of the MicroTK object.

**Example**:
```js
µ("#menu").removeAttribute("id");
```

### MicroTK.removeClass(className) 

Removes a class from the selected elements.

**Parameters**

 - **className**: `string`, Class to be removed.

**Returns**: `microTK`, A copy of the MicroTK object.

**Example**:
```js
µ("#menu").removeClass("active");
```

### MicroTK.toggleClass(className) 

Toggles a class in selected elements.

**Parameters**

 - **className**: `string`, Class to be toggled.

**Returns**: `microTK`, A copy of the MicroTK object.

**Example**:
```js
µ("#menu").toggleClass("active");
```

# Author

 - Todd Henderson (thenderson21)

# License

The MIT License

Copyright (c) 2014-2016 Todd Henderson. http://microtk.io

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
