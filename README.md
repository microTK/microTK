# microTk
A tiny javascript library

[![Build Status](https://drone.io/github.com/thenderson21/microTK/status.png)](https://drone.io/github.com/thenderson21/microTK/latest)

# Global






### microTK(selector, scope) 

Creates a new instance of MicroTK with specified query paremeters or element(s)

**Parameters**

**selector**: `string | HTMLElement`, The selector to be queried for or the HTMLElement(s) to be added.

**scope**: `HTMLElement`, The scope of the query selection.

**Returns**: `microTK`, An instance of the MicroTK object.


### merge(object) 

Recursively merges objects.

**Parameters**

**object**: `Object`, The destination object.

 - **sourse...**: `Object`, The sourse objects.

**Returns**: `Object`, Returns the merged destination object.


## Class: MicroTK
The main class of the microTK library, it is a list of selected HTMLElement 
that various actions be performed on.

### MicroTK.addAttribute(name, value) 

Adds an attribute to the selected elements.

**Parameters**

**name**: `string`, The attribute to be added.

**value**: `string`, The value of the attribute.

**Returns**: `MicroTK`, A copy of the MicroTK object.

### MicroTK.addClass(className) 

Adds a class to the selected elements.

**Parameters**

**className**: `string`, The class to be added.

**Returns**: `microTK`, A copy of the MicroTK object.

### MicroTK.addEvent(event, action) 

Adds an event to the selected elements.

**Parameters**

**event**: `string`, Event to be added.

**action**: `function`, Function to be run on event.

**Returns**: `microTK`, A copy of the MicroTK object.

### MicroTK.append(element) 

Appends an HTMLElement into the selected elements.

**Parameters**

**element**: `HTMLElement`, Element to be removed.

**Returns**: `microTK`, A copy of the MicroTK object.

### MicroTK.each(action) 

Performs an action on the selected elements

**Parameters**

**action**: `elementAction`, Function to be run when the element has providec class.

**Returns**: `microTK`, A copy of the MicroTK object.

### MicroTK.hasAttribute(name, action) 

Checks to see if elements contains provided class and performs provided action.

**Parameters**

**name**: `string`, The attribute to be added.

**action**: `elementAction`, Function to be run when the element has provided attribute.

**Returns**: `microTK`, A copy of the MicroTK object.

### MicroTK.hasClass(className, action) 

Checks to see ff elements contains provided class and performs provided action.

**Parameters**

**className**: `string`, Element to be tested for.

**action**: `elementAction`, Function to be run when the element has providec class.

**Returns**: `microTK`, A copy of the MicroTK object.

### MicroTK.prepend(element) 

Prepends an HTMLElement into the selected elements.

**Parameters**

**element**: `HTMLElement`, Element to be removed.

**Returns**: `microTK`, A copy of the MicroTK object.

### MicroTK.remove() 

Removes the selected elements from the DOM.

**Returns**: `microTK`, A copy of the MicroTK object.

### MicroTK.removeAttribute(name) 

Removes an attribute from the selected elements.

**Parameters**

**name**: `string`, The attribute to be added.

**Returns**: `microTK`, A copy of the MicroTK object.

### MicroTK.removeClass(className) 

Removes a class from the selected elements.

**Parameters**

**className**: `string`, Class to be removed.

**Returns**: `microTK`, A copy of the MicroTK object.

### MicroTK.removeId() 

Removes the id from the selected elements.

**Returns**: `microTK`, A copy of the MicroTK object.

### MicroTK.toggleClass(className) 

Toggles a class in selected elements.

**Parameters**

**className**: `string`, Class to be toggled.

**Returns**: `microTK`, A copy of the MicroTK object.




#Author

 - Todd Henderson (thenderson21, Origional Author)

#License

Copyright (c) 2014-2016 Todd Henderson

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
