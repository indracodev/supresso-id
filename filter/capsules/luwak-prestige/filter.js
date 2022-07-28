var defaultdir = "../../../";
applyPageCondition("Collection:Luwak Prestige");
applyPageCondition("Packaging:Capsule");
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
