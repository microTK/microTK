###*
 # microTK - v0.0.2
 #
 # @author Todd Henderson <todd@todd-henderson.me>
 # @license The MIT License (MIT)
 # @copyright Copyright (c) 2014-2016 Todd Henderson
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

###*
 # Creates a new instance of MicroTK with specified query paremeters or element(s)
 #
 # @function microTK
 # @param {string|HTMLElement} selector - The selector to be queried for or the HTMLElement(s) to be added.
 # @param {HTMLElement} [scope=document] - The scope of the query selection.
 # @returns {microTK} An instance of the MicroTK object.
 # @public
 # @example
 # var menu = µ("#menu");
###

root = exports ? this

###*
 # The main class of the microTK library, it is a list of selected HTMLElement 
 # that various actions be performed on.
 # 
 # @class MicroTK
###
class MicroTK
    constructor: (selector, scope = root.document)  -> 
        ###*
         # @member int length - The current number of selected elements.
        ### 
        @.length = 0

        ###*
         # @member string version - The current version.
        ### 
        @.version = '0.0.1'

        if not selector
            return
            
        if typeof result is 'string'
            selector = selector.trim()

        if selector instanceof Element 
            @[0] = selector
            @.length = 1
        else if selector[...selector.length] is '#' and selector.indexOf " " is -1 and selector.indexOf "." is -1
            _node = scope.getElementById selector.replace /\#/g, ""
            if _node?
                @[0] = _node 
                @.length = 1
        else if selector[...selector.length] is "." and selector.indexOf "#"  is -1 and selector.indexOf ":"  is -1 and selector.indexOf " " is -1
            _nodelist = scope.getElementsByClassName selector.replace /\./g, " "
            @.length = 0
            if _nodelist?
                for node, key in _nodelist
                    @[key] = node
                    @.length++
        else if  /^[a-zA-Z]+$/.test selector
            _nodelist =  scope.getElementsByTagName selector 
            @.length = 0
            if _nodelist?
                for node, key in _nodelist
                    @[key] = node
                    @.length++
        else
            _nodelist =  scope.querySelectorAll selector
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
     # @returns {MicroTK} A copy of the MicroTK object.
     # @public
     # @example
     # µ("#menu").addAttribute("title", "test");
    ###
    addAttribute: (name, value) ->
        for _element in @
            _element.setAttribute name, value
        this

    ###*
     # Adds a class to the selected elements.
     #
     # @param {string} className - The class to be added.
     # @returns {microTK} A copy of the MicroTK object.
     # @public
     # @example
     # µ("#menu").addClass("active");
    ###
    addClass: (className) ->
        for _element in @
            _element?.classList?.add className
        this

    ###*
     # Adds an event to the selected elements.
     #
     # @param {string} event - Event to be added.
     # @param {function} action - Function to be run on event.
     # @returns {microTK} A copy of the MicroTK object.
     # @public
     # @example
     # µ("#menu").addEvent("click", function (e){
     #     µ(e).toggleClass("active");   
     # });
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
     # @returns {microTK} A copy of the MicroTK object.
     # @public
     # @example
     # var element = document.createElement("div")
     # µ("#menu").append(element); 
    ###
    append: (element) ->
        for _element in @
            _element?.appendChild element.cloneNode true
        this
    
    ###*
     # Performs an action on the selected elements
     #
     # @param {elementAction} action - Function to be run when the element has providec class.
     # @returns {microTK} A copy of the MicroTK object.
     # @public
     # @example
     # µ("#menu").each(function (e){
     #     e.classList.add("active");   
     # });
    ###
    each: (action) ->
        for _element in @
            action _element
        this

    ###*
     # Checks to see if elements contains provided class and performs provided action.
     #
     # @param {string} name - The attribute to be added.
     # @param {elementAction} action - Function to be run when the element has provided attribute.
     # @returns {microTK} A copy of the MicroTK object.
     # @public
     # @example
     # µ("#menu").hasAttribute("title", function (e){
     #     e.title = "woohoo"; 
     # });
    ###
    hasAttribute: (name, action) ->
        for _element in @
            if _element.hasAttribute name
                action _element
        this

    ###*
     # Checks to see ff elements contains provided class and performs provided action.
     #
     # @param {string} className - Element to be tested for.
     # @param {elementAction} action - Function to be run when the element has providec class.
     # @returns {microTK} A copy of the MicroTK object.
     # @public
     # @example
     # µ("#menu").hasClass("active", function (e){
     #     e.classList.remove("active");   
     # });
    ###
    hasClass: (className, action) ->
        for _element in @
                if _element?.classList?.contains className
                    action _element
        this 

    ###*
     # Prepends an HTMLElement into the selected elements.
     #
     # @param {HTMLElement} element - Element to be removed.
     # @returns {microTK} A copy of the MicroTK object.
     # @public
     # @example
     # var element = document.createElement("div")
     # µ("#menu").prepend(element); 
    ###
    prepend: (element) ->
        for _element in @ 
            if _element.firstChild?
                _element.insertBefore element.cloneNode(true), _element.firstChild 
            else 
                _element.appendChild element.cloneNode true
        this

    ###*
     # Removes the selected elements from the DOM.
     #
     # @returns {microTK} A copy of the MicroTK object.
     # @public
     # @example
     # µ("#menu").remove();
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
     # @returns {microTK} A copy of the MicroTK object.
     # @public
     # @example
     # µ("#menu").removeAttribute("id");
    ###
    removeAttribute: (name) ->
        for _element in @
            _element.removeAttribute name
        this

    ###*
     # Removes a class from the selected elements.
     #
     # @param {string} className - Class to be removed.
     # @returns {microTK} A copy of the MicroTK object.
     # @public
     # @example
     # µ("#menu").removeClass("active");
    ###
    removeClass: (className) ->
        for _element in @
            _element?.classList?.remove className

        this

    ###*
     # Toggles a class in selected elements.
     #
     # @param {string} className - Class to be toggled.
     # @returns {microTK} A copy of the MicroTK object.
     # @public
     # @example
     # µ("#menu").toggleClass("active");
    ###
    toggleClass: (className) ->
        for _element in @
            _element?.classList?.toggle className
        this

root.MicroTK = MicroTK
root.µ = root.microTK = (selector, scope) -> 
    new MicroTK(selector, scope)