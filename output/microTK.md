# Global

* * *

### addAttribute(name, value) 

Adds an attribute to the selected elements.

**Parameters**

**name**: `string`, The attribute to be added.

**value**: `string`, The value of the attribute.

**Returns**: `microTK`, A copy of the microTK object.


### addClass(className) 

Adds a class to the selected elements.

**Parameters**

**className**: `string`, The class to be added.

**Returns**: `microTK`, A copy of the microTK object.


### addEvent(event, action) 

Adds an event to the selected elements.

**Parameters**

**event**: `string`, Event to be added.

**action**: `function`, Function to be run on event.

**Returns**: `microTK`, A copy of the microTK object.


### append(element) 

Appends an HTMLElement into the selected elements.

**Parameters**

**element**: `HTMLElement`, Element to be removed.

**Returns**: `microTK`, A copy of the microTK object.


### each(action) 

Performs an action on the selected elements

**Parameters**

**action**: `elementAction`, Function to be run when the element has providec class.

**Returns**: `microTK`, A copy of the microTK object.


### hasAttribute(name, action) 

Checks to see if elements contains provided class and performs provided action.

**Parameters**

**name**: `string`, The attribute to be added.

**action**: `elementAction`, Function to be run when the element has provided attribute.

**Returns**: `microTK`, A copy of the microTK object.


### hasClass(className, action) 

Checks to see ff elements contains provided class and performs provided action.

**Parameters**

**className**: `string`, Element to be tested for.

**action**: `elementAction`, Function to be run when the element has providec class.

**Returns**: `microTK`, A copy of the microTK object.


### merge(object, callback) 

Recursivly merges objects.

**Parameters**

**object**: `Object`, The destination object.

 - **sourse...**: `Object`, The sourse objects.

**callback**: `errorOnlyCallback`, Passes an error if one occures.

**Returns**: `Object`, Returns the merged destination object.


### prepend(element) 

Prepends an HTMLElement into the selected elements.

**Parameters**

**element**: `HTMLElement`, Element to be removed.

**Returns**: `microTK`, A copy of the microTK object.


### remove() 

Removes the selected elements from the DOM.

**Returns**: `microTK`, A copy of the microTK object.


### removeAttribute(name) 

Removes an attribute from the selected elements.

**Parameters**

**name**: `string`, The attribute to be added.

**Returns**: `microTK`, A copy of the microTK object.


### removeClass(className) 

Removes a class from the selected elements.

**Parameters**

**className**: `string`, Class to be removed.

**Returns**: `microTK`, A copy of the microTK object.


### removeId() 

Removes the id from the selected elements.

**Returns**: `microTK`, A copy of the microTK object.


### toggleClass(className) 

Toggles a class in selected elements.

**Parameters**

**className**: `string`, Class to be toggled.

**Returns**: `microTK`, A copy of the microTK object.



* * *










