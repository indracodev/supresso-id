var webdir = "http://192.168.1.92/sgpoin/";
var apidir = "http://192.168.1.92/sgpoin/filterbeta22/";
var imgdir = "http://192.168.1.92/sgpoin/";
var keyword = "";

printNavbar();
printFooter();

//navbar
function printNavbar(){
  navbarHTML = `
  <div class="container">
		<a class="navbar-brand non-menu" href="${webdir}index.php">
			<img src="${webdir}img/ikon-supresso.svg" width="60" height="auto">
		</a>

		<!-- <div class="ml-auto d-xl-none">
			<a class="btn btn-user-mobile" href="${webdir}login">
				<img src="${webdir}img/ikon-user-dark.svg" class="nav-ikon img-fluid" width="19">
			</a>
			<a class="btn btn-cart-mobile position-relative" href="${webdir}cart">
				<img src="${webdir}img/ikon-shopcart.svg" class="nav-ikon img-fluid" width="19">
				<small id="cartval1" class="badge position-absolute text-white rounded-pill" style="top: 0; right: 0; background-color: #fd4f00;">0</small>
			</a>
		</div>
		<button class="navbar-toggler border-0 pr-0" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" style="width: 45px; height: 38px;">
			<span></span>
			<span></span>
			<span></span>
		</button> -->

		<div class="ml-auto d-xl-none">
			<a class="btn px-2 btn-user-mobile" href="${webdir}login">
				<img src="${webdir}img/ikon-user-dark.svg" class="nav-ikon img-fluid" width="16" height="16">
			</a>
			<a class="btn px-2 btn-cart-mobile position-relative mr-2" href="${webdir}cart">
				<img src="${webdir}img/tombolbaru/tombol-cart.svg" class="nav-ikon img-fluid" width="16" height="16">
				<small id="cartval1" class="badge position-absolute text-white rounded-pill" style="top: 0; right: 0; background-color: #fd4f00;">0</small>
			</a>
		</div>
		<button class="navbar-toggler border-0 pr-0" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
			<img src="${webdir}img/tombolbaru/tombol-menu.svg" class="nav-ikon img-fluid" width="16" height="16">
		</button>

		<div class="collapse navbar-collapse" id="navbarSupportedContent">
			<ul class="navbar-nav ml-auto mr-xl-3 align-items-xl-center mb-4 mb-xl-0">
				<li class="nav-item  d-xl-flex align-items-center menu">
					<a class="nav-link main-nav-link" href="${webdir}filter/all" data-toggle="collapse" data-target="#coffeeMenu">COFFEE</a>
					<ul class="list-unstyled collapse collapse-menu pl-4 pl-xl-0 d-xl-flex align-items-center" id="coffeeMenu">
						<li class="nav-item submenu">
							<a class="nav-link submenu-link" data-toggle="collapse" data-target="#menuBeans" href="${webdir}filter/beans/">BEANS</a>
							<ul class="list-unstyled collapse collapse-submenu pl-4 pl-xl-0" id="menuBeans" data-parent="#coffeeMenu">
								<li class="nav-item">
									<a class="nav-link" href="${webdir}filter/beans/single-origin/">Single Origin</a>
								</li>
								<li class="nav-item">
									<a class="nav-link" href="${webdir}filter/beans/luwak-prestige/">Luwak Prestige</a>
								</li>
								<li class="nav-item">
									<a class="nav-link" href="${webdir}filter/beans/organic/">Organic</a>
								</li>
								<li class="nav-item">
									<a class="nav-link" href="${webdir}filter/beans/rainforest/">Rainforest</a>
								</li>
								<li class="nav-item">
									<a class="nav-link" href="${webdir}filter/beans/gourmet/">Gourmet</a>
								</li>
									<li class="nav-item">
									<a class="nav-link" href="${webdir}filter/beans/balicafe/">BaliCafe</a>
								</li>
							</ul>
						</li>
						<li class="nav-item submenu">
							<a class="nav-link submenu-link" data-toggle="collapse" data-target="#menuGround" href="${webdir}filter/ground/">GROUND</a>
							<ul class="list-unstyled collapse collapse-submenu pl-4 pl-xl-0" id="menuGround" data-parent="#coffeeMenu">
								<li class="nav-item">
									<a class="nav-link" href="${webdir}filter/ground/single-origin/">Single Origin</a>
								</li>
							</ul>
						</li>
						<li class="nav-item submenu">
							<a class="nav-link submenu-link" data-toggle="collapse" data-target="#menuDrip" href="${webdir}filter/drip/">DRIP</a>
							<ul class="list-unstyled collapse collapse-submenu pl-4 pl-xl-0" id="menuDrip" data-parent="#coffeeMenu">
								<li class="nav-item">
									<a class="nav-link" href="${webdir}filter/drip/single-origin/">Single Origin</a>
								</li>
								<li class="nav-item">
									<a class="nav-link" href="${webdir}filter/drip/luwak-prestige/">Luwak Prestige</a>
								</li>
								<li class="nav-item">
									<a class="nav-link" href="${webdir}filter/drip/world-blend/">World Blend</a>
								</li>
								<li class="nav-item">
									<a class="nav-link" href="${webdir}filter/drip/balicafe/">BaliCafe</a>
								</li>
							</ul>
						</li>
						<li class="nav-item submenu">
							<a class="nav-link submenu-link" data-toggle="collapse" data-target="#menuCapsules" href="${webdir}filter/capsules/">CAPSULES</a>
							<ul class="list-unstyled collapse collapse-submenu pl-4 pl-xl-0" id="menuCapsules" data-parent="#coffeeMenu">
								<li class="nav-item">
									<a class="nav-link" href="${webdir}filter/capsules/single-origin/">Single Origin</a>
								</li>
								<li class="nav-item">
									<a class="nav-link" href="${webdir}filter/capsules/luwak-prestige/">Luwak Prestige</a>
								</li>
								<li class="nav-item">
									<a class="nav-link" href="${webdir}filter/capsules/balicafe/">BaliCafe</a>
								</li>
							</ul>
						</li>

					</ul>
				</li>
				<li class="nav-item non-menu">
					<a class="nav-link main-nav-link" href="${webdir}kraton">MACHINES</a>
				</li>
				<li class="nav-item non-menu">
					<a class="nav-link main-nav-link" href="${webdir}filter/explore">EXPLORE</a>
				</li>
				<!--
				<li class="nav-item non-menu">
					<a class="nav-link main-nav-link" href="partnershipsbeta">PARTNERSHIP</a>
				</li>
				<li class="nav-item non-menu">
					<a class="nav-link main-nav-link" href="cafebeta">CAFE</a>
				</li> -->
				<li class="nav-item non-menu">
					<a class="nav-link main-nav-link" href="${webdir}cafe">CAFE</a>
				</li>

				<li class="nav-item non-menu">
					<a class="nav-link main-nav-link" href="${webdir}gallery">GALLERY</a>
				</li>
			</ul>
			<form class="form-inline input-group cari border-bottom border-secondary justify-content-xl-end non-menu" action="https://www.supresso.com/id/search/index.php" method="get" style="flex-wrap: nowrap;">
				<input class="form-control rounded-0 border-0 bg-transparent px-0" type="search" name="search" placeholder="Search" aria-label="Search" onmouseover="this.select()">
				<button class="btn" type="submit">
					<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
						<path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
					</svg>
				</button>
			</form>
			<a class="btn btn-user-desktop non-menu" href="${webdir}login">
				<img src="${webdir}img/ikon-user-dark.svg" class="nav-ikon img-fluid" width="16">
			</a>
			<a class="btn btn-cart-desktop position-relative non-menu" href="${webdir}cart">
				<img src="${webdir}img/ikon-shopcart.svg" class="nav-ikon img-fluid" width="16">
				<small id="cartval0" class="badge position-absolute text-white rounded-pill" style="top: 0; right: 0; background-color: #fd4f00; font-size: 65%;">0</small>
			</a>
		</div>
	</div><!-- end container -->
  `;
  document.getElementById("navbar").innerHTML = navbarHTML;
}

//navbar
var mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


//footer
function printFooter(){
  var yearNow = new Date().getFullYear();
  var footerHTML = `
  <section class="pt-5" style="border-top: solid 1px rgba(0,0,0,.25)">
    <div class="container">
      <p class="mb-5" style="display:none;">
        <a href="index.php">
          <img src="${webdir}img/logo-supresso.svg" class="img-fluid" width="120px">
        </a>
      </p>
      <p class="mb-5 footer-menu">
        <a href="${webdir}filter/beans/" class="d-inline-block mb-3 mb-lg-0">BEANS</a>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <a href="${webdir}filter/ground/" class="d-inline-block mb-3 mb-lg-0">GROUND</a>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <a href="${webdir}filter/drip/" class="d-inline-block mb-3 mb-lg-0">DRIP</a>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <a href="${webdir}filter/capsules/" class="d-inline-block mb-3 mb-lg-0">CAPSULES</a>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <a href="${webdir}dashboard" class="d-inline-block mb-3 mb-lg-0">MEMBERSHIP</a>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <a href="${webdir}contact.php" class="d-inline-block mb-3 mb-lg-0">CONTACT</a>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <a href="${webdir}brosur/Supresso brochure SG 2103.pdf" target="_blank" class="d-inline-block mb-3 mb-lg-0">BROCHURE</a>
      </p>
      <p class="mb-5">
        <a href="https://twitter.com/supressocoffee" target="_blank" style="text-decoration: none;">
          <img src="${webdir}img/ikon-twitter.svg" class="img-fluid" width="30px">
        </a>&nbsp;&nbsp;&nbsp;
        <a href="https://www.facebook.com/supresso.sg" target="_blank" style="text-decoration: none;">
          <img src="${webdir}img/ikon-facebook.svg" class="img-fluid" width="30px">
        </a>&nbsp;&nbsp;&nbsp;
        <a href="https://www.instagram.com/supresso.sg/" target="_blank" style="text-decoration: none;">
          <img src="${webdir}img/ikon-instagram.svg" class="img-fluid" width="30px">
        </a>&nbsp;&nbsp;&nbsp;
        <a href="https://youtu.be/B4neOXusn2k" target="_blank" style="text-decoration: none;">
          <img src="${webdir}img/ikon-youtube.svg" class="img-fluid" width="30px">
        </a>
      </p>
    </div>
  </section>

  <section class="pt-3" style="border-top: solid 1px rgba(0,0,0,.25); color: rgba(0,0,0,.65);">
    <div class="container text-xl-left small">
      <div class="d-lg-flex justify-content-between">
        <p>
          <!-- <select class="text-capitalize border-0" style="background-color: transparent;"><option>English</option></select>&nbsp;&nbsp;&nbsp; -->
          <a style="color: rgba(0,0,0,.65)" href="${webdir}pp.php" target="_blank">Privacy Policy</a>
          &nbsp;&nbsp;&nbsp;
          <a style="color: rgba(0,0,0,.65)" href="${webdir}tnc.php" target="_blank">Terms & Conditions</a>
          &nbsp;&nbsp;&nbsp;
          <!-- <a href="#">Help!</a> -->
        </p>
        <p>
          Copyright &copy; ${yearNow} Indraco. All Rights Reserved
        </p>
      </div>
    </div>
  </section>
  `;
  document.getElementById("footer").innerHTML = footerHTML;
}


//Navbar
var mybutton = document.getElementById("myBtn");
	window.onscroll = function() {scrollFunction()};
	function scrollFunction() {
		if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
			mybutton.style.display = "block";
		} else {
			mybutton.style.display = "none";
		}
	}
	function topFunction() {
		document.body.scrollTop = 0;
		document.documentElement.scrollTop = 0;
	}

//Custom Beta
$(document).ready(function() {



	if ( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		$(".trigger-navbar-collapse").click(function() {
			$(this).toggleClass("slide");
			$("html, body").toggleClass("slide");
			$('.navbar').toggleClass("slide");
			$(".konten").toggleClass("slide");
		});
	} else {
		// nonaktifkan dropdown saat klik
		$("#navbarDropdown1, #navbarDropdown2, #navbarDropdown3, #navbarDropdown4").click(function(event) {
			event.stopImmediatePropagation();
		});

			// efek hover slide width
			$(".navbar").mouseleave(function() {
				$(".dropdown").removeClass("aktif");
			});
			$("#nonDropdown").mouseenter(function() {
				$(".dropdown").removeClass("aktif");
			});
			// beans
			$("#navbarDropdown1").mouseenter(function() {
				$(this).addClass("aktif");
				$("#navbarDropdown2, #navbarDropdown3, #navbarDropdown4").removeClass("aktif");
			});
			// ground
			$("#navbarDropdown2").mouseenter(function() {
				$(this).addClass("aktif");
				$("#navbarDropdown1, #navbarDropdown3, #navbarDropdown4").removeClass("aktif");
			});
			// drip
			$("#navbarDropdown3").mouseenter(function() {
				$(this).addClass("aktif");
				$("#navbarDropdown2, #navbarDropdown1, #navbarDropdown4").removeClass("aktif");
			});
			// capsules
			$("#navbarDropdown4").mouseenter(function() {
				$(this).addClass("aktif");
				$("#navbarDropdown2, #navbarDropdown3, #navbarDropdown1").removeClass("aktif");
			});
			// bundle
			$("#navbarDropdown5").mouseenter(function() {
				$(this).addClass("aktif");
				$("#navbarDropdown2, #navbarDropdown3, #navbarDropdown1, #navbarDropdown4").removeClass("aktif");
			});

		}/*END ELSE*/
	});

//Navbar Styling

$(document).ready(function(){
		// JUMLAH CART
		$('#cartval0').html("0");

		// TOMBOL SEE ALL
		$('.tombol-seeall').click(function() {
			$(this).toggleClass('active');
		})

		// FUNGSI NAVBAR
		$('.navbar-toggler').click(function() {
			$('.navbar').toggleClass('bg-white');
			$('.navbar').toggleClass('shadow-lg');
		})

		if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {} else {
			$('.collapse-menu, .collapse-submenu').removeClass('collapse');
			$('.nav-link').removeAttr('data-toggle');
			$('.nav-link').removeAttr('data-target');

			$('.menu').mouseenter(function() {
				$('.collapse-menu').addClass('aktif');
				$('.cari, .btn-user-desktop, .btn-cart-desktop').hide(300);
			});
			$('.collapse-menu').mouseenter(function() {
				$(this).addClass('overflow-inherit')
			});

			$('.non-menu').mouseenter(function() {
				$('.collapse-menu').removeClass('aktif');
				$('.collapse-menu').removeClass('overflow-inherit')
				$('.cari, .btn-user-desktop, .btn-cart-desktop').show(300);
			});

			$('.navbar').mouseleave(function() {
				$('.collapse-menu').removeClass('aktif');
				$('.collapse-menu').removeClass('overflow-inherit')
				$('.cari, .btn-user-desktop, .btn-cart-desktop').show(300);
			});
		}

});

function showMsg(msg){
  if(msg != ""){
    document.getElementById("headmessagemsg").innerHTML = msg;
  }
  var headmessage = document.getElementById("headmessage");
  var headmessagecore = document.getElementById("headmessagecore");
  headmessage.style.opacity = "1";
  headmessage.style.visibility = "visible";
  headmessagecore.style.transform = "translateY(0px)";
}

function closeMsg(){
  var headmessage = document.getElementById("headmessage");
  var headmessagecore = document.getElementById("headmessagecore");
  headmessage.style.opacity = "0";
  headmessage.style.visibility = "hidden";
  headmessagecore.style.transform = "translateY(-50px)";
  setTimeout(function(){
    document.getElementById("headmessagecore").innerHTML = `
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
    `;
  }, 500);
}

function closeLoad(){
  var cyload = document.getElementById("cyload");
  var cyloadcore = document.getElementById("cyloadcore");
  cyload.style.opacity = "0";
  cyload.style.visibility = "hidden";
  cyloadcore.style.transform = "translateY(-50px)";
}

function reopenLoad(){
  var cyload = document.getElementById("cyload");
  var cyloadcore = document.getElementById("cyloadcore");
  cyload.style.opacity = "1";
  cyload.style.visibility = "visible";
  cyloadcore.style.transform = "translateY(0px)";
}
