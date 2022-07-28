var defaultdir = "../../../";
applyPageCondition("Collection:World Blend")
applyPageCondition("Packaging:Drip");
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
