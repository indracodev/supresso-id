$(document).ready(function() {

	var windowWidth = $(window).width();
	$(window).resize(function() {
		if(windowWidth != $(window).width()) {
			location.reload();
			return;
		}
	});

	if ($(window).width() >= 992){ /*responsive desktop*/
		// $('.padding-packaging.show').css({ 'padding-top': ($('#decol1 .table-responsive').height()) });
	} else { /*responsive mobile*/
	}

	$('#tombol-filter').click(function() {
		if ($('#procol1').hasClass('show')) {
			$('#products-filter header .hasil-filter').slideDown();
		} else {
			$('#products-filter header .hasil-filter').slideUp();
		}
	});

});

//Declared Variables
const filterarr = [];
const filterarrfix = [];
var sortby = "";
var defaultdir = "../../";
//Auto Load Functions
applyFilter("Form:Drip");
setTimeout(function(){
    navigationCart();
}, 1000);



//Functions
function navigationCart(){
	if(userid == "" || userid == 0){
		showMsg("No user detected!");
		setTimeout(function(){
			window.location.href = defaultdir;
		},500);
	} else {
		try{
			$.ajax({
        url: apidir + 'filter-api.php?do=getcart',
        type: 'POST',
        headers: {
        },
        data : {
          iduser : userid
        },
        success: function(result){
					var resultParse = JSON.parse(result);
          var resultStatus = resultParse.status;
          var resultMessage = resultParse.message;
					if(resultStatus === "Success"){
						var cartnavval = resultParse.cartnav;
						document.getElementById("cartval1").innerHTML = cartnavval;
						document.getElementById("cartval0").innerHTML = cartnavval;
					} else {
						showMsg(resultMessage);
					}
				},
				error: function(error){
            console.log(error);
        }
      });
		} catch(e){
			console.log(e);
		}
	}
}

function applyFilter(code){
	if(code == ""){
		showMsg("Illegal input");
	} else {
		var index = filterarr.indexOf(code);
		var idtarget = code.replace(':', '');
		var idtarget = idtarget.replace(' ', '');
		if(index == -1){
			filterarr.push(code);
			document.getElementById(idtarget).checked = true;
		} else {
			filterarr.splice(index, 1);
			document.getElementById(idtarget).checked = false;
		}
	}
	printFilterInside();
}


function applyOrderby(code){
	sortby = code;
}

function printFilterFront(){
	var frontHTML = ``;
	var totalfilterarray = filterarrfix.length;
	var pid = 0;
	while(pid < totalfilterarray){
		var thisshow = filterarrfix[pid];
		var frontCache = `
		<button onclick='removeFilter("${thisshow}")' class="btn btn-sm btn-light my-1">${thisshow} <i class="bi bi-x-circle"></i></button>
		`;
		frontHTML = frontHTML + frontCache;
		pid++;
	}
	document.getElementById("filterselectedlistfront").innerHTML = frontHTML;
}

function printFilterInside(){
	var insideHTML = ``;
	var totalfilterarray = filterarr.length;
	var pid = 0;
	while(pid < totalfilterarray){
		var thisshow = filterarr[pid];
		var insideCache = `
		<button onclick='applyFilter("${thisshow}")' class="btn btn-sm btn-light my-1">${thisshow} <i class="bi bi-x-circle"></i></button>
		`;
		insideHTML = insideHTML + insideCache;
		pid++;
	}
	document.getElementById("filterselectedlistinside").innerHTML = insideHTML;
}

function resetFilter(){
	var totalfilterarray = filterarr.length;
	var pid = 0;
	while(pid < totalfilterarray){
		var idtarget = "";
		var thiscode = filterarr[pid];
		var thiscodemod = filterarr[pid];
		idtarget = thiscodemod;
		idtarget = idtarget.replace(':', '');
		idtarget = idtarget.replace(' ', '');
		document.getElementById(idtarget).checked = false;
		//filterarr.splice(thiscode, 1);
		pid++;
	}
	filterarr.length = 0;
	printFilterInside();
}


function removeFilter(code){
	applyFilter(code);
	applyFixFilterFront();
}

function applyFixFilter(){
	filterarrfix.length = 0;
	var cpfilterarrval = filterarr.length;
	var pidcp = 0;
	while(pidcp < cpfilterarrval){
		var cpfiltervar = filterarr[pidcp];
		filterarrfix.push(cpfiltervar);
		pidcp++;
	}
	//Trigger click
	var triggerclick = document.getElementById("tombol-filter");
	triggerclick.click();
	printFilterFront();
	filterSendAjax();
}

function applyFixFilterFront(){
	filterarrfix.length = 0;
	var cpfilterarrval = filterarr.length;
	var pidcp = 0;
	while(pidcp < cpfilterarrval){
		var cpfiltervar = filterarr[pidcp];
		filterarrfix.push(cpfiltervar);
		pidcp++;
	}
	printFilterFront();
	filterSendAjax();
}

function filterSendAjax(){
	document.getElementById("fetchproduct").innerHTML = `
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
	`;

	if(userid == ""){
		showMsg("Sorry un-authorized access!");
	} else {
		var filtertojson = JSON.stringify(filterarrfix);
		try{
			$.ajax({
				url: apidir + 'filter-api.php?do=getitems',
				type: 'POST',
				headers: {
				},
				data : {
					iduser : userid,
					filter : filtertojson,
					sortby : sortby
				},
				success: function(result){
					var resultParse = JSON.parse(result);
	        var resultStatus = resultParse.status;
	        var resultMessage = resultParse.message;
					if(resultStatus === "Success"){
						var productcount = resultParse.products.length;
						if(productcount == 0){
							document.getElementById("fetchproduct").innerHTML = `<div style="width:100%; text-align:center;font-size:1.5rem; animation: 1s ease-out 0s 1 slideInFromLeft;"><i class="bi bi-search"></i> No Result</div>`;
						} else {
							var productsHTML = ``;
							var pid = 0;
							while(pid < productcount){
								//Harga view
						    var hargaproductori = resultParse.products[pid].price;
						    var hargaproduct = parseFloat(hargaproductori);
						    if(hargaproduct >= 1000){
									var hargaview = formatMoney(hargaproduct);
						    } else {
									var hargaview = hargaproduct;
						    }


								var hargadiskon = resultParse.products[pid].discountprice;
								var thisstock = resultParse.products[pid].stock;
								var thisstockdoub = parseFloat(thisstock);
								if(hargadiskon != null){
									//Discount Conversion
								    var hargadiskondouble = parseFloat(hargadiskon);
								    if(hargadiskondouble >= 1000){
								        var hargadiskonview =  hargadiskon;
								    } else {
								        var hargadiskonview =  formatMoney(hargadiskon);
								    }
									if(thisstockdoub == 0){
										//If discount is not null and stock is empty
										var productCache = `
										<div class="col-6 col-md-4 col-lg-3 filterprodukcore">
										  <div class="kolom-produk mb-4 mb-lg-0">
										    <div class="foto-produk d-block" style="position: relative; min-height:166px;">
													<a href="${defaultdir}detail/?idpro=${resultParse.products[pid].code}" class="foto-produk d-block" style="position: relative;  min-height:166px;">
										      	<img loading="lazy" src="https://www.supresso.com/id/img/${resultParse.products[pid].img}" class="img-fluid" style = "opacity:.5">
													</a>
										      <div class="area-promo" style="position: absolute;  bottom: 8.5%; right: 14%;">
										        <div class="diskon rounded-circle text-light d-flex justify-content-center align-items-center gotham-medium" style="width: 38px; height: 38px; background: #fd4f00; transForm: scale(1);">
										          ${resultParse.products[pid].discountcalls}
										          <ul class="list-unstyled m-0" style="font-size: 60%; line-height: 1;">
										          </ul>
										        </div>
										      </div>
										    </div>
										    <ul class="spesifikasi-produk">
										      <li class="nama-produk">${resultParse.products[pid].name}
										      </li>
										      <li class="kemasan-produk">${resultParse.products[pid].undername}
										      </li>
										      <li + displaybiasa + class="harga-produk">
										        <span class="kurs">Rp</span>
										        <span class="nominal">${hargaview},-</span>
										      </li>
										      <li class="harga-promo d-sm-flex justify-content-center align-items-center">
										        <p class="mb-0 mr-sm-2" style="color: #fd4f00;"><span  class="mr-1">$</span><span>${hargadiskonview}</span></p>
										        <div style="position: relative; display: inline-flex;">
										          <span class="mr-1">Rp</span><span>${hargaview}</span>
										          <hr class="border-danger m-0 w-100" style="position: absolute; top: 50%; left: 50%; transForm: translate(-50%, -50%);">
										        </div>
										      </li>
										    </ul>
										  </div>
										</div>
										`;
									} else {
										//If discount is not null and stock is okay
										var productCache = `
										<div class="col-6 col-md-4 col-lg-3 filterprodukcore">
										  <div class="kolom-produk mb-4 mb-lg-0">
										    <div class="foto-produk d-block" style="position: relative; min-height:166px;">
													<a href="${defaultdir}detail/?idpro=${resultParse.products[pid].code}" class="foto-produk d-block" style="position: relative;  min-height:166px;">
										      	<img loading="lazy" src="https://www.supresso.com/id/img/${resultParse.products[pid].img}" class="img-fluid">
													</a>
										      <div class="area-promo" style="position: absolute;  bottom: 8.5%; right: 14%;">
										        <div class="diskon rounded-circle text-light d-flex justify-content-center align-items-center gotham-medium" style="width: 38px; height: 38px; background: #fd4f00; transForm: scale(1);">
										          ${resultParse.products[pid].discountcalls}
										          <ul class="list-unstyled m-0" style="font-size: 60%; line-height: 1;">
										          </ul>
										        </div>
										      </div>
										    </div>
										    <ul class="spesifikasi-produk">
										      <li class="nama-produk">${resultParse.products[pid].name}
										      </li>
										      <li class="kemasan-produk">${resultParse.products[pid].undername}
										      </li>
										      <li + displaybiasa + class="harga-produk">
										        <span class="kurs">Rp</span>
										        <span class="nominal">${hargaview},-</span>
										      </li>
										      <li class="harga-promo d-sm-flex justify-content-center align-items-center">
										        <p class="mb-0 mr-sm-2" style="color: #fd4f00;"><span  class="mr-1">Rp</span><span>${hargadiskonview},-</span></p>
										        <div style="position: relative; display: inline-flex;">
										          <span class="mr-1">Rp</span><span>${hargaview},-</span>
										          <hr class="border-danger m-0 w-100" style="position: absolute; top: 50%; left: 50%; transForm: translate(-50%, -50%);">
										        </div>
										      </li>
										    </ul>
										    <button class="tombol-cart btn" data-toggle="modal" data-target="#popCart" data-id="">
										      <img src="https://www.supresso.com/sg/img/ikon-shopcart-light.svg" class="img-fluid">
										    </button>
										  </div>
										</div>
										`;
									}
								} else {
									if(thisstockdoub == 0){
										//If discount is null and stock is empty
										var productCache = `
										<div class="col-6 col-md-4 col-lg-3 filterprodukcore">
										  <div class="kolom-produk mb-4 mb-lg-0">
										    <div class="foto-produk d-block" style="position: relative; min-height:166px; opacity:0.5;">
													<a href="${defaultdir}detail/?idpro=${resultParse.products[pid].code}" class="foto-produk d-block" style="position: relative;  min-height:166px;">
										      	<img loading="lazy" src="https://www.supresso.com/id/img/${resultParse.products[pid].img}" class="img-fluid">
													</a>
										    </div>
										    <ul class="spesifikasi-produk">
										      <li class="nama-produk">${resultParse.products[pid].name}
										      </li>
										      <li class="kemasan-produk">${resultParse.products[pid].undername}
										      </li>
										      <li + displaybiasa + class="harga-produk">
										        <span class="kurs">Rp</span>
										        <span class="nominal">${hargaview},-</span>
										      </li>
										    </ul>
										  </div>
										</div>
										`;
									} else {
										//If discount is null and stock is not empty
										var productCache = `
										<div class="col-6 col-md-4 col-lg-3 filterprodukcore">
										  <div class="kolom-produk mb-4 mb-lg-0">
										    <a href="${defaultdir}detail/?idpro=${resultParse.products[pid].code}" class="foto-produk d-block" style="position: relative;  min-height:166px;">
										      <img loading="lazy" src="https://www.supresso.com/id/img/${resultParse.products[pid].img}" class="img-fluid">
										    </a>
										    <ul class="spesifikasi-produk">
										      <li class="nama-produk">${resultParse.products[pid].name}
										      </li>
										      <li class="kemasan-produk">${resultParse.products[pid].undername}
										      </li>
										      <li + displaybiasa + class="harga-produk">
										        <span class="kurs">Rp</span>
										        <span class="nominal">${hargaview},-</span>
										      </li>
										    </ul>
										    <button class="tombol-cart btn" data-toggle="modal" data-target="#popCart" data-id="">
										      <img src="https://www.supresso.com/sg/img/ikon-shopcart-light.svg" class="img-fluid">
										    </button>
										  </div>
										</div>
										`;
									}
								}
								productsHTML = productsHTML + productCache;
								pid++;
							}
							document.getElementById("fetchproduct").innerHTML = productsHTML;
						}
					} else {
						showMsg(resultMessage);
					}
				},
				error: function(error){
						console.log(error);
				}
			});
		} catch(e){
			console.log(e);
		}
	}
}

function formatMoney(angka) {
    var rupiah = '';
	var angkarev = angka.toString().split('').reverse().join('');
	for(var i = 0; i < angkarev.length; i++) if(i%3 == 0) rupiah += angkarev.substr(i,3)+'.';
	return rupiah.split('',rupiah.length-1).reverse().join('');
}

//Custom Request
setTimeout(function(){
    applyFixFilterFront();
}, 1000);

closeLoad();