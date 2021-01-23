(function(win, document){
    'use strict';
  
      function DOM(elements){
        if(!(this instanceof DOM))
          return  new DOM(elements);  
        this.element = document.querySelectorAll(elements);
      }
      
      DOM.isArray = function isArray( paraN ) {
        return Object.prototype.toString.call( paraN ) === '[object Array]';
      };
  
      DOM.isObject = function isObject( paraN ) {
        return Object.prototype.toString.call( paraN ) === '[object Object]';
      };
  
      DOM.isFunction = function isFunction( paraN ) {
        return Object.prototype.toString.call( paraN ) === '[object Function]';
      };
  
      DOM.isNumber = function isNumber( paraN ) {
        return Object.prototype.toString.call( paraN ) === '[object Number]';
      };
  
      DOM.isString = function isString( paraN ) {
        return Object.prototype.toString.call( paraN ) === '[object String]';
      };
  
      DOM.isBoolean = function isBoolean( paraN ) {
        return Object.prototype.toString.call( paraN ) === '[object Boolean]';
      };
  
      DOM.isNull = function isNull( paraN ) {
        return Object.prototype.toString.call( paraN ) === '[object Null]'
        || Object.prototype.toString.call( paraN ) === '[object undefined]';
      };
  
      DOM.prototype.on = function on(eventType, callback){
        Array.prototype.forEach.call(this.element, function(element){
          element.addEventListener(eventType, callback, false);     
        });
      };
  
      DOM.prototype.off = function off(eventType, callback){
        Array.prototype.forEach.call(this.element, function(element){
          element.removeEventListener(eventType, callback, false);
        });     
      };
  
      DOM.prototype.get = function get(index){
        if(!index) 
          return this.element[0];
        return this.element[index];
      };
  
      DOM.prototype.forEach = function forEach(){
        return Array.prototype.forEach.apply( this.element, arguments);
      };
  
      DOM.prototype.map = function map(){
        return Array.prototype.map.apply( this.element, arguments);
      };
  
      DOM.prototype.filter = function filter(){
        return Array.prototype.filter.apply( this.element, arguments);
      };
  
      DOM.prototype.reduce = function reduce(){
        return Array.prototype.reduce.apply( this.element, arguments);
      };
  
      DOM.prototype.reduceRight = function reduceRight(){
        return Array.prototype.reduceRight.apply( this.element, arguments);
      };
  
      DOM.prototype.every = function every(){
        return Array.prototype.every.apply( this.element, arguments);
      };
  
      DOM.prototype.some = function some(){
        return Array.prototype.some.apply( this.element, arguments);
      };
  
      
  
      win.DOM = DOM;
  })(window, document);