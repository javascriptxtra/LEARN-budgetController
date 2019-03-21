let controller = (function(budgetCtrl,UICtrl){
console.log("loaded");
    let setupEventListeners = function(){
        let DOM = UICtrl.getDOMstrings; 
        document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);

        document.addEventListener('keypress', function(e){
            if (e.keyCode === 13 || e.which === 13 ) {
                console.log("pressed");
                ctrlAddItem();
            }
        });
    };


    let updateBudget = function(){
        //1. Calculate the budget
        budgetCtrl.calculateBudget();

        //2. Return the budget
        let budget = budgetCtrl.getBudget();
        console.log("from updateBudget");
        console.dir(budget);
        //3. Display the buget on the UI
        UICtrl.displayBudget(budget);
    };

    let ctrlAddItem = function(){
        // 1. Get the filed input data
        let input = UICtrl.getInput();

        if ( input.description !== "" && !isNaN(input.value) && input.value > 0 ) {
            // 2. Add the item to the budget controller
            let newItem = budgetCtrl.addItem(input.type, input.description, input.value);

            // 3. Add the item to the UI
            UICtrl.addListItem(newItem,input.type);

            // 3a.clear fields
            UICtrl.clearFields(); 

            // 4. Calcualte the budget
            UICtrl.clearFields();

            // 5. Display the budget on the UI
            updateBudget();

        }
    };

    return {
        init: function(){
            UICtrl.displayBudget({
                budget: 0,
                totalInc: 0,
                totalExp: 0,
                percentage: 0
            });
            setupEventListeners();
        }
    }

})(data,ui);

controller.init();

