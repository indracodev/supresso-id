var defaultdir = "../../";
applyPageCondition("Form:Capsules");
applyFixFilterFront();
closeLoad();
setTimeout(function(){
    navigationCart();
}, 1000);

removeFilterContainer("form");
removeFilterContainer("packaging");
removeFilterContainer("collectionorganic");
removeFilterContainer("collectionrainforest");
removeFilterContainer("collectiongourmet");
removeFilterContainer("collectionworldblend");
removeFilterContainer("collectionbundle");
removeFilterContainer("weight50g");
removeFilterContainer("weight100g");
removeFilterContainer("weight200g");
removeFilterContainer("weight500g");
removeFilterContainer("weight1000g");
