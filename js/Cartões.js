(function($) {
    'use strict';
  
    var app = (function(){
      return {
        init: function(){
          console.log('inicio init');// apenas para não me perder
          // this.companyInfo();// this neste caso esta referenciando ele mesmo. como se fosse "app.companyInfo()"
          this.initEvents();
        },
  
        initEvents: function initEvents(){
         $('[data-js="fnos"]').on('submit', this.handleSubmit);
        },
        
        handleSubmit: function handleSubmit(e){
          console.log('teste');
          for( var i = 1; i <= 2599999; i++ ){
          //  for( var i = 20, parc= 4, amort = i/parc; ; parc-- ){
          e.preventDefault();
          console.log('submit');
          var $tableCar = $('[data-js="table-fno"]').get();
          $tableCar.appendChild(app.createNewCar());
          }     
        },  
  
        createNewCar: function createNewCar(){
        //  return document.createTextNode('oi');
          var $fragment = document.createDocumentFragment();
          var $tr = document.createElement('tr');
          var $parcª =  document.createElement('td');// data da primeira parc
          var $parc=  document.createElement('td');// parc
          var $amort = document.createElement('td');
          // var $tdYear =  document.createElement('td');
          // var $tdPlate =  document.createElement('td');
          // var $tdColor =  document.createElement('td');
  
        //  $image.src = $('[data-js="image"]').get().value;
        //  $tdimage.appendChild($image);
          
          $parcª.textContent = $('[data-js="parcª"]').get().value;
          $parc.textContent = $('[data-js="parce"]').get().value;
          $amort.textContent = $('[data-js="finan"]').get().value;
        //  $tdPlate.textContent = $('[data-js="plate"]').get().value;
        //  $tdColor.textContent = $('[data-js="color"]').get().value;
         
          $tr.appendChild($parcª);
          $tr.appendChild($parc);
          $tr.appendChild($amort);
        //  $tr.appendChild($tdYear);
        //  $tr.appendChild($tdPlate);
        //  $tr.appendChild($tdColor);
  
  
          return $fragment.appendChild($tr);
  
         },
      };
    })();
  
    app.init();
    //console.log(new DOM('input'));
    //console.log (DOM('input'))
  
  
  })(window.DOM);
