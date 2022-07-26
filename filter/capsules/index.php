<?php
session_start();
?>

<!DOCTYPE html>
<html>
<head lang="en" id="head">
	<title>Filters | Supresso</title>
	<link rel="stylesheet icon" href="../../../img/ikon-supresso.png">
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.3/font/bootstrap-icons.css">
	<link rel="stylesheet" href="../component/bootstrap.min.css">
	<link rel="stylesheet" href="../head.css">
	<link rel="stylesheet" href="../filter.css">
</head>
<body>

	<div class="cyloadbar" id="cyload" style="opacity:1; visibility:visible;">
		<div class="cyloadbar_core" id="cyloadcore" style="transForm:translateY(0px)">
			<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin: auto; background: rgb(255, 255, 255,0); display: block; shape-rendering: auto;" width="50px" height="50px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
			  <circle cx="50" cy="50" fill="none" stroke="#fd4f00" stroke-width="10" r="35" stroke-dasharray="164.93361431346415 56.97787143782138">
			    <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1s" values="0 50 50;360 50 50" keyTimes="0;1"></animateTransform>
			  </circle>
			</svg>
		</div>
	</div>

	<nav class="navbar navbar-expand-xl navbar-light text-left text-xl-center" style="z-index: 1000; transition: all .5s;" id="navbar"></nav>
	<div class="sep"></div>
	<button id="myBtn" onclick="topFunction()" style="z-index: 1500; display: none; position: fixed; bottom: 60px; right: 30px; z-index: 1000; font-size: 18px; border: none; outline: none; background-color: #fd4f00; color: white; cursor: pointer; border-radius: .25rem; padding: 0;">
		<div class="d-flex justify-content-center align-items-center" style="width: 60px; height: 60px;">
			<ul class="list-unstyled m-0" style="transForm: scale(.75);">
				<li>
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-chevron-up" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"/></svg>
				</li>
				<li>TOP</li>
			</ul>
		</div>
	</button>
	<main class="konten">

		<section id="products-filter" class="mb-5">
			<div class="container">
				<header>
					<div class="row align-items-center">
						<div class="col">
							<h4 class="gotham-bold m-0">Coffee Collection</h4>
						</div>

						<div class="col-12 hasil-filter order-lg-2">
							<div class="pt-3" id="filterselectedlistfront">

							</div>
						</div>

						<div class="col-lg-auto pt-3 pt-lg-0">
							<a data-toggle="collapse" href="#procol1" class="text-dark collapsed" id="tombol-filter">
								Filter | Sort by <i class="bi bi-chevron-down"></i><i class="bi bi-chevron-up"></i>
							</a>
						</div>
					</div>
				</header>

				<div class="collapse" id="procol1">
					<div class="pt-3">
						<div class="border border-secondary rounded">
							<div class="container-fluid py-3">
								<div class="row">
									<div class="col-lg">
										<div class="hasil-filter" id="filterselectedlistinside">

										</div>
										<hr class="d-lg-none">
									</div>

									<div class="col-lg-auto mb-4 mb-xl-0">
										<div class="d-flex">
											<button onclick='resetFilter()' class="btn w-50 btn-light active px-5 mr-1">Reset</button>
											<button onclick='applyFixFilter()' class="btn w-50 btn-orange px-5 ml-1">Apply</button>
										</div>
									</div>
								</div>

								<hr class="d-none d-lg-block">

								<div class="row justify-content-md-between justify-content-xl-around">
									<div class="col-6 col-md-auto col-lg-auto">
										<h6 class="gotham-bold mb-3">Collection</h6>
										<div class="form-group">
											<div class="form-check">
												<input class="form-check-input" type="checkbox" onclick='applyFilter("Collection:Single Origin")' id="CollectionSingleOrigin">
												<label class="form-check-label" for="defaultCheck1">
													Single Origin
												</label>
											</div>
											<div class="form-check">
												<input class="form-check-input" type="checkbox" onclick='applyFilter("Collection:Luwak Prestige")' id="CollectionLuwakPrestige">
												<label class="form-check-label" for="defaultCheck2">
													Luwak Prestige
												</label>
											</div>
											<div class="form-check">
												<input class="form-check-input" type="checkbox" onclick='applyFilter("Collection:Organic")' id="CollectionOrganic">
												<label class="form-check-label" for="defaultCheck3">
													Organic
												</label>
											</div>
											<div class="form-check">
												<input class="form-check-input" type="checkbox" onclick='applyFilter("Collection:Rainforest")' id="CollectionRainforest">
												<label class="form-check-label" for="defaultCheck4">
													Rainforest
												</label>
											</div>
											<div class="form-check">
												<input class="form-check-input" type="checkbox" onclick='applyFilter("Collection:Gourmet")' id="CollectionGourmet">
												<label class="form-check-label" for="defaultCheck5">
													Gourmet
												</label>
											</div>
											<div class="form-check">
												<input class="form-check-input" type="checkbox" onclick='applyFilter("Collection:World Blend")' id="CollectionWorldBlend">
												<label class="form-check-label" for="defaultCheck6">
													World Blend
												</label>
											</div>
											<div class="form-check">
												<input class="form-check-input" type="checkbox" onclick='applyFilter("Collection:Balicafe")' id="CollectionBalicafe">
												<label class="form-check-label" for="defaultCheck25">
													Balicafé
												</label>
											</div>
											<div class="form-check">
												<input class="form-check-input" type="checkbox" onclick='applyFilter("Collection:Assorted")' id="CollectionAssorted">
												<label class="form-check-label" for="defaultCheck26">
													Assorted
												</label>
											</div>
											<div class="form-check">
												<input class="form-check-input" type="checkbox" onclick='applyFilter("Collection:Bundle")' id="CollectionAssorted">
												<label class="form-check-label" for="defaultCheck26">
													Bundles
												</label>
											</div>
										</div>
									</div>

									<div class="col-6 col-md-auto col-lg-auto">
										<h6 class="gotham-bold mb-3">Type</h6>
										<div class="form-group">
											<div class="form-check">
												<input class="form-check-input" type="checkbox" onclick='applyFilter("Type:Arabica")' id="TypeArabica">
												<label class="form-check-label" for="defaultCheck7">
													Arabica
												</label>
											</div>
											<div class="form-check">
												<input class="form-check-input" type="checkbox" onclick='applyFilter("Type:Robusta")' id="TypeRobusta">
												<label class="form-check-label" for="defaultCheck8">
													Robusta
												</label>
											</div>
											<div class="form-check">
												<input class="form-check-input" type="checkbox" onclick='applyFilter("Type:Blend")' id="TypeBlend">
												<label class="form-check-label" for="defaultCheck9">
													Blend
												</label>
											</div>
										</div>
									</div>

									<div class="col-6 col-md-auto col-lg-auto">
										<h6 class="gotham-bold mb-3">Form</h6>
										<div class="form-group">
											<div class="form-check">
												<input class="form-check-input" type="checkbox" onclick='applyFilter("Form:Beans")' id="FormBeans">
												<label class="form-check-label" for="defaultCheck10">
													Beans
												</label>
											</div>
											<div class="form-check">
												<input class="form-check-input" type="checkbox" onclick='applyFilter("Form:Ground")' id="FormGround">
												<label class="form-check-label" for="defaultCheck11">
													Ground
												</label>
											</div>
											<div class="form-check">
												<input class="form-check-input" type="checkbox" onclick='applyFilter("Form:Drip")' id="FormDrip">
												<label class="form-check-label" for="defaultCheck12">
													Drip
												</label>
											</div>
											<div class="form-check">
												<input class="form-check-input" type="checkbox" onclick='applyFilter("Form:Capsules")' id="FormCapsules">
												<label class="form-check-label" for="defaultCheck13">
													Capsules
												</label>
											</div>
										</div>
									</div>

									<div class="col-6 col-md-auto col-lg-auto">
										<h6 class="gotham-bold mb-3">Packaging</h6>
										<div class="form-group">
											<div class="form-check">
												<input class="form-check-input" onclick='applyFilter("Packaging:Can")' type="checkbox" id="PackagingCan">
												<label class="form-check-label" for="defaultCheck14">
													Can
												</label>
											</div>
											<div class="form-check">
												<input class="form-check-input" onclick='applyFilter("Packaging:Pouch")' type="checkbox" id="PackagingPouch">
												<label class="form-check-label" for="defaultCheck15">
													Pouch
												</label>
											</div>
											<div class="form-check">
												<input class="form-check-input" onclick='applyFilter("Packaging:Drip")' type="checkbox" id="PackagingDrip">
												<label class="form-check-label" for="defaultCheck16">
													Drip
												</label>
											</div>
											<div class="form-check">
												<input class="form-check-input" onclick='applyFilter("Packaging:Capsule")' type="checkbox" id="PackagingCapsule">
												<label class="form-check-label" for="defaultCheck17">
													Capsule
												</label>
											</div>
											<div class="form-check">
												<input class="form-check-input" onclick='applyFilter("Packaging:Box")' type="checkbox" id="PackagingBox">
												<label class="form-check-label" for="defaultCheck18">
													Box
												</label>
											</div>
										</div>
									</div>

									<div class="col-6 col-md-auto col-lg-auto">
										<h6 class="gotham-bold mb-3">Weight</h6>
										<div class="form-group">
											<div class="form-check">
												<input class="form-check-input" type="checkbox" onclick='applyFilter("Weight:50g")' id="Weight50g">
												<label class="form-check-label" for="defaultCheck19">
													50g
												</label>
											</div>
											<div class="form-check">
												<input class="form-check-input" type="checkbox" onclick='applyFilter("Weight:60g")' id="Weight60g">
												<label class="form-check-label" for="defaultCheck20">
													60g
												</label>
											</div>
											<div class="form-check">
												<input class="form-check-input" type="checkbox" onclick='applyFilter("Weight:100g")' id="Weight100g">
												<label class="form-check-label" for="defaultCheck21">
													100g
												</label>
											</div>
											<div class="form-check">
												<input class="form-check-input" type="checkbox" onclick='applyFilter("Weight:200g")' id="Weight200g">
												<label class="form-check-label" for="defaultCheck22">
													200g
												</label>
											</div>
											<div class="form-check">
												<input class="form-check-input" type="checkbox" onclick='applyFilter("Weight:500g")' id="Weight500g">
												<label class="form-check-label" for="defaultCheck23">
													500g
												</label>
											</div>
											<div class="form-check">
												<input class="form-check-input" type="checkbox" onclick='applyFilter("Weight:1000g")' id="Weight1000g">
												<label class="form-check-label" for="defaultCheck24">
													1000g
												</label>
											</div>
										</div>
									</div>

									<div class="col-6 col-md-auto col-lg-auto">
										<h6 class="gotham-bold mb-3">Promo</h6>
										<div class="form-group">
											<div class="form-check">
												<input class="form-check-input" type="checkbox" onclick='applyFilter("Promo:Offer")' id="PromoOffer">
												<label class="form-check-label" for="defaultCheck27">
													Offer
												</label>
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
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>


		<!-- ---------------------------- produk list -->
		<section>
			<div class="container">
				<div class="row" id="fetchproduct">

					<svg class="filterloading" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin: auto; background: none; display: block; shape-rendering: auto;" width="50px" height="50px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
						<rect x="17.5" y="30" width="15" height="40" fill="#ffa075">
						  <animate attributeName="y" repeatCount="indefinite" dur="1s" calcMode="spline" keyTimes="0;0.5;1" values="18;30;30" keySplines="0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.2s"></animate>
						  <animate attributeName="height" repeatCount="indefinite" dur="1s" calcMode="spline" keyTimes="0;0.5;1" values="64;40;40" keySplines="0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.2s"></animate>
						</rect>
						<rect x="42.5" y="30" width="15" height="40" fill="#ff5000">
						  <animate attributeName="y" repeatCount="indefinite" dur="1s" calcMode="spline" keyTimes="0;0.5;1" values="20.999999999999996;30;30" keySplines="0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.1s"></animate>
						  <animate attributeName="height" repeatCount="indefinite" dur="1s" calcMode="spline" keyTimes="0;0.5;1" values="58.00000000000001;40;40" keySplines="0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.1s"></animate>
						</rect>
						<rect x="67.5" y="30" width="15" height="40" fill="#ffccb5">
						  <animate attributeName="y" repeatCount="indefinite" dur="1s" calcMode="spline" keyTimes="0;0.5;1" values="20.999999999999996;30;30" keySplines="0 0.5 0.5 1;0 0.5 0.5 1"></animate>
						  <animate attributeName="height" repeatCount="indefinite" dur="1s" calcMode="spline" keyTimes="0;0.5;1" values="58.00000000000001;40;40" keySplines="0 0.5 0.5 1;0 0.5 0.5 1"></animate>
						</rect>
					</svg>

				</div>
			</div>
		</section>

		<div class="headmessage" id="headmessage" style="opacity:0; visibility:hidden;">
			<div class="headmessage_core" id="headmessagecore" style='transForm: translateY(-50px)'>
				<div class="headmessage_core_logo" id="headmessagelogo">
					<svg xmlns="http://www.w3.org/2000/svg" width="60px" height="60px" fill="currentColor" class="bi bi-exclamation-triangle-fill" viewBox="0 0 16 16">
					  <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
					</svg>
				</div>
				<div class="headmessage_core_message" id="headmessagemsg">
					There was an error!
				</div>
				<div class="headmessage_core_button">
					<button onclick='closeMsg()' class="gotham">
						<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
						  <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
						</svg>
						Close
					</button>
				</div>
			</div>
		</div>

	</main>
	<footer class="text-center small" style="padding-top:80px" id="footer"></footer>
    <?php
	if(!isset($_SESSION["Idusernya"]) || $_SESSION["Idusernya"] == ""){
        $cacheid = session_id();
    } else {
        $cacheid = $_SESSION["Idusernya"];
    }
	?>
	<script>
	var userid = '<?php echo $cacheid ?>';
	</script>

	<script type="text/javascript" src="../component/jquery.js"></script>
	<script type="text/javascript" src="../component/bootstrap.min.js"></script>
	<script type="text/javascript" src="../head.js"></script>
	<script type="text/javascript" src="filter.js"></script>
	<script type="text/javascript">
		// [].forEach.cal(ldocument.querySelectorAll("*"), function(a){a.style.outline="1px solid green";})
	</script>
</body>
</html>
