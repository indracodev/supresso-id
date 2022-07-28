var defaultdir = "../../";
applyPageCondition("Form:Beans");

applyFixFilterFront();
closeLoad();
setTimeout(function(){
    navigationCart();
}, 1000);


removeFilterContainer("collectionworldblend");
removeFilterContainer("collectionassorted");
removeFilterContainer("collectionbundle");
removeFilterContainer("form");
removeFilterContainer("packagingdrip");
removeFilterContainer("packagingcapsule");
removeFilterContainer("packagingbox");
removeFilterContainer("weight30g");
removeFilterContainer("weight50g");
removeFilterContainer("weight60g");
