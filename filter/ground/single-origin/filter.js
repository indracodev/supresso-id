var defaultdir = "../../../";
applyPageCondition("Form:Ground");
applyPageCondition("Collection:Single Origin");
applyFixFilterFront();
closeLoad();
setTimeout(function(){
    navigationCart();
}, 1000);

removeFilterContainer("collection");
removeFilterContainer("form");
removeFilterContainer("packaging");
removeFilterContainer("weight");
removeFilterContainer("typeblend");
