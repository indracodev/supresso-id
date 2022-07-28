var defaultdir = "../../";
applyPageCondition("Collection:Bundle");
applyFixFilterFront();
closeLoad();
setTimeout(function(){
    navigationCart();
}, 1000);

removeFilterContainer("form");
removeFilterContainer("weight");
removeFilterContainer("collectionorganic");
removeFilterContainer("collectionrainforest");
removeFilterContainer("collectiongourmet");
removeFilterContainer("collectionbalicafe");
removeFilterContainer("collectionassorted");
removeFilterContainer("collectionbundle");
removeFilterContainer("packagingpouch");
