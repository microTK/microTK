###*
 # microTK - v0.0.2
 #
 # @author Todd Henderson <todd@todd-henderson.me>
 # @license The MIT License (MIT)
 #
 # Copyright (c) 2014-2016 Todd Henderson
 #
 # Permission is hereby granted, free of charge, to any person obtaining a copy
 # of this software and associated documentation files (the "Software"), to deal
 # in the Software without restriction, including without limitation the rights
 # to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 # copies of the Software, and to permit persons to whom the Software is
 # furnished to do so, subject to the following conditions:
 #
 # The above copyright notice and this permission notice shall be included in all
 # copies or substantial portions of the Software.
 #
 # THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 # IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 # FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 # AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 # LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 # OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 # SOFTWARE.
 #
###

###*
 # This action is triggered when the conditions are met.
 # 
 # @callback elementAction
 # @param {HTMLElement} element
###

root = exports ? this

class MicroTK
    constructor: (_selector, _scope = root.document)  -> 
        if not _selector
            return
            
        if typeof result is 'string'
            _selector = _selector.trim()

        if _selector instanceof Element 
            @[0] = _selector
            @.length = 1
        else if _selector[..._selector.length] is '#' and _selector.indexOf " " is -1 and _selector.indexOf "." is -1
            _node = _scope.getElementById _selector.replace /\#/g, ""
            if _node?
                @[0] = _node 
                @.length = 1
        else if _selector[..._selector.length] is "." and _selector.indexOf "#"  is -1 and _selector.indexOf ":"  is -1 and _selector.indexOf " " is -1
            _nodelist = _scope.getElementsByClassName _selector.replace /\./g, " "
            @.length = 0
            if _nodelist?
                for node, key in _nodelist
                    @[key] = node
                    @.length++
        else if  /^[a-zA-Z]+$/.test _selector
            _nodelist =  _scope.getElementsByTagName _selector 
            @.length = 0
            if _nodelist?
                for node, key in _nodelist
                    @[key] = node
                    @.length++
        else
            _nodelist =  _scope.querySelectorAll _selector
            @.length = 0
            if _nodelist?
                for node, key in _nodelist
                    @[key] = node
                    @.length++

    ###*
    # Adds an attribute to the selected elements.
    #
    # @param {string} name - The attribute to be added.
    # @param {string} value - The value of the attribute.
    # @returns {MicroTK} A copy of the microTK object.
    # @public
    ###
    addAttribute: (name, value) ->
        for _element in @
            _element.setAttribute name value

    ###*
    # Adds a class to the selected elements.
    #
    # @param {string} className - The class to be added.
    # @returns {microTK} A copy of the microTK object.
    # @public
    ###
    addClass: (className) ->
        for _element in @
            if _element?.classList
                _element.classList.add className
            else 
                classes = _element className.split " "
                if className not in classes
                    _element.className += ' ' + className;
        this

    ###*
    # Adds an event to the selected elements.
    #
    # @param {string} event - Event to be added.
    # @param {function} action - Function to be run on event.
    # @returns {microTK} A copy of the microTK object.
    # @public
    ###
    addEvent: (event, action) ->
        _contains = (object,  value) ->
            if object?
                for item in object
                    if item = value
                        return true
            return false
            
        for _element in @
            if not _contains _element?._mtk?.actions, {event: event, action: action} 
                if _element?.addEventListener? # Modern
                    _element.addEventListener event, action, false
                else if  _element?.attachEvent? # Internet Explorer
                    _element.attachEvent "on" + event, action
                else    # other
                    _element["on" + event] = action

                _element._mtk ?= {}
                _element._mtk.actions ?= []
                _element._mtk.actions.push 

        this

    ###*
    # Appends an HTMLElement into the selected elements.
    #
    # @param {HTMLElement} element - Element to be removed.
    # @returns {microTK} A copy of the microTK object.
    # @public
    ###
    append: (element) ->
        for _element in @
            _element.appendChild element
        this
    
    ###*
    # Performs an action on the selected elements
    #
    # @param {elementAction} action - Function to be run when the element has providec class.
    # @returns {microTK} A copy of the microTK object.
    # @public
    ###
    each: (action) ->
        for _element in @
            action element
        this

    ###*
    # Checks to see if elements contains provided class and performs provided action.
    #
    # @param {string} name - The attribute to be added.
    # @param {elementAction} action - Function to be run when the element has provided attribute.
    # @returns {microTK} A copy of the microTK object.
    # @public
    ###
    hasAttribute: (name, action) ->
        for _element in @
            if _element hasAttribute
                action element
        this

    ###*
    # Checks to see ff elements contains provided class and performs provided action.
    #
    # @param {string} className - Element to be tested for.
    # @param {elementAction} action - Function to be run when the element has providec class.
    # @returns {microTK} A copy of the microTK object.
    # @public
    ###
    hasClass: (className, action) ->
        for _element in @
            if _element classList?
                if _element classList.contains className
                    action element
            else
                if not _element className.match new RegExp '(\\s|^)' + className + '(\\s|$)'
                    action _element
        this 

    ###*
    # Prepends an HTMLElement into the selected elements.
    #
    # @param {HTMLElement} element - Element to be removed.
    # @returns {microTK} A copy of the microTK object.
    # @public
    ###
    prepend: (elements) ->
        for _element in @ 
            if _element.firstChild?
                _element.insertBefore elements, _element.firstChild 
            else 
                _element.appendChild elements
        this

    ###*
    # Removes the selected elements from the DOM.
    #
    # @returns {microTK} A copy of the microTK object.
    # @public
    ###
    remove: () ->
        for _element, key in @
            if _element.remove 
                _element.remove();
                delete @[key]
                @.length--
            else 
                _element.parentElement.removeChild(_element);
                delete @[key]
                @.length--
        this

    ###*
    # Removes an attribute from the selected elements.
    #
    # @param {string} name - The attribute to be added.
    # @returns {microTK} A copy of the microTK object.
    # @public
    ###
    removeAttribute: (name) ->
        for _element in @
            _element.removeAttribute name

    ###*
    # Removes a class from the selected elements.
    #
    # @param {string} className - Class to be removed.
    # @returns {microTK} A copy of the microTK object.
    # @public
    ###
    removeClass: (className) ->
        for _element in @
            if _element.classList?
                _element.classList.remove className
            else
                classes = _element.className.split " "
                classes.splice classes.indexOf className , 1
                _element.className = classes.join " "
        this

    ###*
    # Removes the id from the selected elements.
    #
    # @returns {microTK} A copy of the microTK object.
    # @public
    ###
    removeId: () ->
        for _element in @
            _element.removeAttribute 'id'
        this

    ###*
    # Toggles a class in selected elements.
    #
    # @param {string} className - Class to be toggled.
    # @returns {microTK} A copy of the microTK object.
    # @public
    ###
    toggleClass: (className) ->
        for _element in @
            if _element.classList?
                _element.classList.toggle className
            else 
                classes = _element.className.split " "
                indexOf = classes.indexOf className
                if indexOf > 0
                    classes.splice indexOfClass, 1
                else
                    classes.push className
                _element.className = classes.join " "
        this


root.MicroTK = MicroTK

root.microTK = (_selector, _scope) -> 
    new microTK(_selector, _scope)

###*
# Recursivly merges objects.
#
# @param {Object} object - The destination object.
# @param {Object} [sourse...] - The sourse objects.
# @param {errorOnlyCallback} [callback] - Passes an error if one occures. 
# @returns {Object} Returns the merged destination object.
# @public
###
root.microTK.merge = (object, sources...) ->
    _merge (destination, source) -> 
        for own key, val of source
            if val?.constructor is Object and destination[key]?.constructor is Object
                destination[key] = microTK::merge destination[key], val
            else
                destination[key] = val
        destination

    object ?= {}

    for source in sources by -1
        _merge object, source

    return object

root.µ = root.microTK