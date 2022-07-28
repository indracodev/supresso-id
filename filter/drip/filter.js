var defaultdir = "../../";
applyPageCondition("Form:Drip");
applyFixFilterFront();
closeLoad();
setTimeout(function(){
    navigationCart();
}, 1000);


removeFilterContainer("form");
removeFilterContainer("packaging");
removeFilterContainer("weight");

removeFilterContainer("collectionorganic");
removeFilterContainer("collectionrainforest");
removeFilterContainer("collectiongourmet");
removeFilterContainer("collectionassorted");
removeFilterContainer("collectionbundle");
