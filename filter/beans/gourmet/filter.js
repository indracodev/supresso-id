var defaultdir = "../../../";
applyPageCondition("Form:Beans");
applyPageCondition("Collection:Gourmet");
applyFixFilterFront();
closeLoad();
setTimeout(function(){
    navigationCart();
}, 1000);

removeFilterContainer("collection");
removeFilterContainer("type");
removeFilterContainer("form");
removeFilterContainer("packagingdrip");
removeFilterContainer("packagingcapsule");
removeFilterContainer("packagingbox");
removeFilterContainer("weight30g");
removeFilterContainer("weight50g");
removeFilterContainer("weight60g");
removeFilterContainer("weight100g");
