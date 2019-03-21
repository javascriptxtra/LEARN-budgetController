let data = (function(){
    let Expense = function(id,description,value){
        this.id = id;
        this.description = description;
        this.value = value;
    };

    let Income = function(id,description,value){
        this.id = id;
        this.description = description;
        this.value = value;
    };

    let calculateTotal = function(type){
        let sum = 0;
        data.allItems[type].forEach(function(cur){
            sum += cur.value;
        });
        data.totals[type] = sum;
    };

    let data = {
        allItems: {
            exp: [],
            inc: []
        },
        totals: {
            exp: 0,
            inc: 0
        },
        budget: 0,
        percentage: -1
    };

    return {
        addItem: function(type,desc,val){
            let newItem, ID;
            if (data.allItems[type].length > 0 ) {
                ID = data.allItems[type][data.allItems[type].length -1].id +1;
            } else {
                ID = 0;
            }

            if (type === 'exp'){
                newItem = new Expense(ID,desc,val);
            } else if ( type === 'inc'){
                newItem = new Income(ID,desc,val);
            }
            data.allItems[type].push(newItem);
            return newItem;
        },
        calculateBudget: function(){
            //calculate total income expenses
            calculateTotal('exp');
            calculateTotal('inc');

            //calculate the budget: income - expenses
            data.budget = data.totals.inc - data.totals.exp;

            // calculate the percentage of income that we spent
            data.percentage =  Math.round((data.totals.exp / data.totals.inc) * 100);
        },
        getBudget: function(){
            return {
                budget: data.budget,
                totalInc: data.totals.inc,
                totalExp: data.totals.exp,
                percentage: data.percentage
            }
        },
        testing: function() {
            console.log(data);
        }
    }
})();