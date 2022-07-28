var defaultdir = "../../../";
applyPageCondition("Form:Beans");
applyPageCondition("Collection:Single Origin");
applyFixFilterFront();
closeLoad();
setTimeout(function(){
    navigationCart();
}, 1000);

removeFilterContainer("collection");
removeFilterContainer("form");

removeFilterContainer("typeblend");
removeFilterContainer("packagingdrip");
removeFilterContainer("packagingcapsule");
removeFilterContainer("packagingbox");
removeFilterContainer("weight30g");
removeFilterContainer("weight50g");
removeFilterContainer("weight60g");
removeFilterContainer("weight100g");
