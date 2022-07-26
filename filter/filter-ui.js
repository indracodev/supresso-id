var filterHTML = `
<div class="col-6 col-md-auto col-lg-auto">
  <h6 class="gotham-bold mb-3">Collection</h6>
  <div class="form-group">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" onclick='applyFilter("Collection:Single Origin")' id="CollectionSingleOrigin">
			<label class="form-check-label" for="CollectionSingleOrigin">
				Single Origin
			</label>
			<label for="CollectionSingleOrigin" class="checkmark"></label>
    </div>
    <div class="form-check">
      <input class="form-check-input" type="checkbox" onclick='applyFilter("Collection:Luwak Prestige")' id="CollectionLuwakPrestige">
			<label class="form-check-label" for="CollectionLuwakPrestige">
				Luwak Prestige
			</label>
			<label for="CollectionLuwakPrestige" class="checkmark"></label>
    </div>
    <div class="form-check">
      <input class="form-check-input" type="checkbox" onclick='applyFilter("Collection:Organic")' id="CollectionOrganic">
			<label class="form-check-label" for="CollectionOrganic">
				Organic
			</label>
			<label for="CollectionOrganic" class="checkmark"></label>
    </div>
    <div class="form-check">
      <input class="form-check-input" type="checkbox" onclick='applyFilter("Collection:Rainforest")' id="CollectionRainforest">
			<label class="form-check-label" for="CollectionRainforest">
				Rainforest
			</label>
			<label for="CollectionRainforest" class="checkmark"></label>
    </div>
    <div class="form-check">
      <input class="form-check-input" type="checkbox" onclick='applyFilter("Collection:Gourmet")' id="CollectionGourmet">
			<label class="form-check-label" for="CollectionGourmet">
				Gourmet
			</label>
			<label for="CollectionGourmet" class="checkmark"></label>
    </div>
    <div class="form-check">
      <input class="form-check-input" type="checkbox" onclick='applyFilter("Collection:World Blend")' id="CollectionWorldBlend">
			<label class="form-check-label" for="CollectionWorldBlend">
				World Blend
			</label>
			<label for="CollectionWorldBlend" class="checkmark"></label>
    </div>
    <div class="form-check">
      <input class="form-check-input" type="checkbox" onclick='applyFilter("Collection:Balicafe")' id="CollectionBalicafe">
			<label class="form-check-label" for="CollectionBalicafe">
				Balicafé
			</label>
			<label for="CollectionBalicafe" class="checkmark"></label>
    </div>
    <div class="form-check">
      <input class="form-check-input" type="checkbox" onclick='applyFilter("Collection:Assorted")' id="CollectionAssorted">
			<label class="form-check-label" for="CollectionAssorted">
				Assorted
			</label>
			<label for="CollectionAssorted" class="checkmark"></label>
    </div>
    <div class="form-check">
      <input class="form-check-input" type="checkbox" onclick='applyFilter("Collection:Bundle")' id="CollectionBundle">
			<label class="form-check-label" for="CollectionBundle">
				Bundles
			</label>
			<label for="CollectionBundle" class="checkmark"></label>
    </div>
  </div>
</div>

<div class="col-6 col-md-auto col-lg-auto">
  <h6 class="gotham-bold mb-3">Type</h6>
  <div class="form-group">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" onclick='applyFilter("Type:Arabica")' id="TypeArabica">
			<label class="form-check-label" for="TypeArabica">
				Arabica
			</label>
			<label for="TypeArabica" class="checkmark"></label>
    </div>
    <div class="form-check">
      <input class="form-check-input" type="checkbox" onclick='applyFilter("Type:Robusta")' id="TypeRobusta">
			<label class="form-check-label" for="TypeRobusta">
				Robusta
			</label>
			<label for="TypeRobusta" class="checkmark"></label>
    </div>
    <div class="form-check">
      <input class="form-check-input" type="checkbox" onclick='applyFilter("Type:Blend")' id="TypeBlend">
			<label class="form-check-label" for="TypeBlend">
				Blend
			</label>
			<label for="TypeBlend" class="checkmark"></label>
    </div>
  </div>
</div>

<div class="col-6 col-md-auto col-lg-auto">
  <h6 class="gotham-bold mb-3">Form</h6>
  <div class="form-group">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" onclick='applyFilter("Form:Beans")' id="FormBeans">
			<label class="form-check-label" for="FormBeans">
				Beans
			</label>
			<label for="FormBeans" class="checkmark"></label>
    </div>
    <div class="form-check">
      <input class="form-check-input" type="checkbox" onclick='applyFilter("Form:Ground")' id="FormGround">
			<label class="form-check-label" for="FormGround">
				Ground
			</label>
			<label for="FormGround" class="checkmark"></label>
    </div>
    <div class="form-check">
      <input class="form-check-input" type="checkbox" onclick='applyFilter("Form:Drip")' id="FormDrip">
      <label class="form-check-label" for="FormDrip">
        Drip
      </label>
      <label for="FormDrip" class="checkmark"></label>
    </div>
    <div class="form-check">
      <input class="form-check-input" type="checkbox" onclick='applyFilter("Form:Capsules")' id="FormCapsules">
      <label class="form-check-label" for="FormCapsules">
        Capsules
      </label>
      <label for="FormCapsules" class="checkmark"></label>
    </div>
  </div>
</div>

<div class="col-6 col-md-auto col-lg-auto">
  <h6 class="gotham-bold mb-3">Packaging</h6>
  <div class="form-group">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" onclick='applyFilter("Packaging:Can")' id="PackagingCan">
      <label class="form-check-label" for="PackagingCan">
        Can
      </label>
      <label for="PackagingCan" class="checkmark"></label>
    </div>
    <div class="form-check">
      <input class="form-check-input" type="checkbox" onclick='applyFilter("Packaging:Pouch")' id="PackagingPouch">
      <label class="form-check-label" for="PackagingPouch">
        Pouch
      </label>
      <label for="PackagingPouch" class="checkmark"></label>
    </div>
    <div class="form-check">
      <input class="form-check-input" type="checkbox" onclick='applyFilter("Packaging:Drip")' id="PackagingDrip">
      <label class="form-check-label" for="PackagingDrip">
        Drip
      </label>
      <label for="PackagingDrip" class="checkmark"></label>
    </div>
    <div class="form-check">
      <input class="form-check-input" type="checkbox" onclick='applyFilter("Packaging:Capsule")' id="PackagingCapsule">
      <label class="form-check-label" for="PackagingCapsule">
        Capsule
      </label>
      <label for="PackagingCapsule" class="checkmark"></label>
    </div>
    <div class="form-check">
      <input class="form-check-input" type="checkbox" onclick='applyFilter("Packaging:Box")' id="PackagingBox">
      <label class="form-check-label" for="PackagingBox">
        Box
      </label>
      <label for="PackagingBox" class="checkmark"></label>
    </div>
  </div>
</div>

<div class="col-6 col-md-auto col-lg-auto">
  <h6 class="gotham-bold mb-3">Weight</h6>
  <div class="form-group">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" onclick='applyFilter("Weight:50g")' id="Weight50g">
      <label class="form-check-label" for="Weight50g">
        50g
      </label>
      <label for="Weight50g" class="checkmark"></label>
    </div>
    <div class="form-check">
      <input class="form-check-input" type="checkbox" onclick='applyFilter("Weight:60g")' id="Weight60g">
      <label class="form-check-label" for="Weight60g">
        60g
      </label>
      <label for="Weight60g" class="checkmark"></label>
    </div>
    <div class="form-check">
      <input class="form-check-input" type="checkbox" onclick='applyFilter("Weight:100g")' id="Weight100g">
      <label class="form-check-label" for="Weight100g">
        100g
      </label>
      <label for="Weight100g" class="checkmark"></label>
    </div>
    <div class="form-check">
      <input class="form-check-input" type="checkbox" onclick='applyFilter("Weight:200g")' id="Weight200g">
      <label class="form-check-label" for="Weight200g">
        200g
      </label>
      <label for="Weight200g" class="checkmark"></label>
    </div>
    <div class="form-check">
      <input class="form-check-input" type="checkbox" onclick='applyFilter("Weight:500g")' id="Weight500g">
      <label class="form-check-label" for="Weight500g">
        500g
      </label>
      <label for="Weight500g" class="checkmark"></label>
    </div>
    <div class="form-check">
      <input class="form-check-input" type="checkbox" onclick='applyFilter("Weight:1000g")' id="Weight1000g">
      <label class="form-check-label" for="Weight1000g">
        1000g
      </label>
      <label for="Weight1000g" class="checkmark"></label>
    </div>
  </div>
</div>

<div class="col-6 col-md-auto col-lg-auto">
  <h6 class="gotham-bold mb-3">Promo</h6>
  <div class="form-group">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" onclick='applyFilter("Promo:Offer")' id="PromoOffer">
      <label class="form-check-label" for="PromoOffer">
        Offer
      </label>
      <label for="PromoOffer" class="checkmark"></label>
    </div>
  </div>
</div>

<div class="col-auto border-right d-none d-xl-block"></div>

<div class="col-12 col-xl-auto">
  <hr class="d-xl-none">
  <h6 class="gotham-bold mb-3">Sortby</h6>
  <div class="form-group">
    <div class="form-check">
      <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" onclick='applyOrderby("spe:latest")'>
      <label class="form-check-label" for="inlineRadio1">Latest Products</label>
    </div>
    <div class="form-check">
      <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" onclick='applyOrderby("spe:popular")'>
      <label class="form-check-label" for="inlineRadio2">Popular Products</label>
    </div>
    <div class="form-check">
      <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" onclick='applyOrderby("price:high")'>
      <label class="form-check-label" for="inlineRadio3">Highest Prices</label>
    </div>
    <div class="form-check">
      <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio4" onclick='applyOrderby("price:low")'>
      <label class="form-check-label" for="inlineRadio4">Lowes Prices</label>
    </div>
  </div>
</div>
`;
document.getElementById("filterdiv").innerHTML = filterHTML;
