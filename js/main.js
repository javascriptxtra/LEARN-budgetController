let controller = (function(budgetCtrl,UICtrl){
    console.log("started");   
    let DOM = UICtrl.getDOMstrings; 

    let ctrlAddItem = function(){
        // 1. Get the filed input data
        let input = UICtrl.getInput();
        console.log(input);
        // 2. Add the item to the budget controller

        // 3. Add the item to the UI

        // 4. Calcualte the budget

        // 5. Display the budget on the UI
    
    }

    document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);

    document.addEventListener('keypress', function(e){
        if (e.keyCode === 13 || e.which === 13 ) {
            ctrlAddItem();
        }
    })

})(data,ui);


