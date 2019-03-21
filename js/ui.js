let ui = (function(){
   let DOMstrings = {
       inputType: '.add__type',
       inputDescription: '.add__description',
       inputValue: '.add__value',
       inputBtn: '.add__btn',
       incomeContainer: '.income__list',
       expensesContainer: '.expenses__list',
       budgetLabel: '.budget__value',
       incomeLabel: '.budget__income--value',
       expensesLabel: '.budget__expenses--value',
       percentageLabel: '.budget__expenses--percentage'
   };

   return {
       getInput: function(){
           return {
               type: document.querySelector(DOMstrings.inputType).value,
               description: document.querySelector(DOMstrings.inputDescription).value,
               value: parseFloat(document.querySelector(DOMstrings.inputValue).value)
           }
       },

       addListItem: function(obj, type) {
            let html,newHtml,element;

            if ( type == 'inc' ) {
                element = DOMstrings.incomeContainer;

                html = '<div class="item clearfix" id="income-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            } else if ( type == 'exp' ) {
                element = DOMstrings.expensesContainer;

                html = '<div class="item clearfix" id="expense-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            }

            newHtml = html.replace('%id%', obj.id);
            newHtml = newHtml.replace('%description%', obj.description);
            newHtml = newHtml.replace('%value%', obj.value);

            // insert the HTML into the DOM
            document.querySelector(element).insertAdjacentHTML('beforeend',newHtml);
       },
       clearFields: function(){
           let fields, fieldsArr;

           fields = document.querySelectorAll(DOMstrings.inputDescription + ', ' + DOMstrings.inputValue);

           fieldsArr = Array.prototype.slice.call(fields);
           fieldsArr.forEach(function(current,index,array){
               current.value = '';
           });

           fieldsArr[0].focus();
       },

       displayBudget: function(obj){
           document.querySelector(DOMstrings.budgetLabel).textContent = obj.budget;
           document.querySelector(DOMstrings.incomeLabel).textContent = obj.totalInc;
           document.querySelector(DOMstrings.expensesLabel).textContent = obj.totalExp;

           if (obj.percentage > 0 ) {
                document.querySelector(DOMstrings.percentageLabel).textContent = obj.percentage + '%';
           } else {
                document.querySelector(DOMstrings.percentageLabel).textContent = '---'; 
           }
       },

/*       budget: data.budget,
       totalInc: data.totals.inc,
       totalExp: data.totals.exp,
       percentage: data.percentage
       */

       getDOMstrings: function(){
           return DOMstrings;
       }
   }
})();