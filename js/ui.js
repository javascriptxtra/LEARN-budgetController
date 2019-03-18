let ui = (function(){
   let DOMstrings = {
       inputType: '.add__type',
       inputDescription: '.add__description',
       inputValue: '.add__value'
   };

   return {
       getInput: function(){
           return {
               type: document.querySelector(DOMstrings.inputType),
               description: document.querySelector(DOMstrings.inputDescription),
               value: document.querySelector(DOMstrings.inputValue).value
           }
       },
       getDOMstrings: function(){
           return DOMstrings;
       }
   }
})();