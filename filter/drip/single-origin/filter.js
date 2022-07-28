var defaultdir = "../../../";
applyPageCondition("Collection:Single Origin");
applyPageCondition("Packaging:Drip");
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
