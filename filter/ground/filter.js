var defaultdir = "../../";
applyPageCondition("Form:Ground");
applyFixFilterFront();
closeLoad();
setTimeout(function(){
    navigationCart();
}, 1000);

removeFilterContainer("collection");
removeFilterContainer("form");
removeFilterContainer("packaging");
removeFilterContainer("weight");
