var defaultdir = "../../../";
applyPageCondition("Form:Beans");
applyPageCondition("Collection:Organic");
applyFixFilterFront();
closeLoad();
setTimeout(function(){
    navigationCart();
}, 1000);

removeFilterContainer("collection");
removeFilterContainer("type");
removeFilterContainer("form");
removeFilterContainer("packaging");
removeFilterContainer("weight");
