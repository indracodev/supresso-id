<?php 
session_start();
include '../../vardat/const.php';
include '../../config.php';

$fullname = $_SESSION["Fullnamenya"];
$idnyauser = $_SESSION["Idusernya"];

$actual_link = (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? "https" : "http") . "://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";

date_default_timezone_set('Asia/Jakarta');
$tanggal = date('Ymd');
$jam = date('his');

 
 
 if(!empty($_SERVER['HTTP_CLIENT_IP'])){
      $ip=$_SERVER['HTTP_CLIENT_IP'];
    }
    if(!empty($_SERVER['HTTP_X_FORWARDED_FOR'])){
      $ip=$_SERVER['HTTP_X_FORWARDED_FOR'];
    }
    else{
      $ip=$_SERVER['REMOTE_ADDR'];
    }

$data = explode("." , $ip);
$ip = $data[0].$data[1].$data[2].$data[3];
$noiduser = $ip.$tanggal.$jam;


if(!empty($idnyauser)){
    
$idusercart = $idnyauser;
    
}else{
    
$_SESSION["Idusercart"] = session_id();
$sessioniduser = $_SESSION["Noiduser"];
$idusercart = $_SESSION["Idusercart"];

}



$ambilbeans = 'SELECT * FROM masterproduk WHERE kind = "beans"';
$querybeans = $conn->query($ambilbeans);
$arraybeans = mysqli_fetch_all($querybeans, MYSQLI_ASSOC);

$ambilground = 'SELECT * FROM masterproduk WHERE kind = "ground"';
$queryground = $conn->query($ambilground);
$arrayground = mysqli_fetch_all($queryground, MYSQLI_ASSOC);

$ambildrip = 'SELECT * FROM masterproduk WHERE kind = "drip"';
$querydrip = $conn->query($ambildrip);
$arraydrip = mysqli_fetch_all($querydrip, MYSQLI_ASSOC);

$ambilcapsules = 'SELECT * FROM masterproduk WHERE kind = "capsules"';
$querycapsules = $conn->query($ambilcapsules);
$arraycapsules = mysqli_fetch_all($querycapsules, MYSQLI_ASSOC);

$ambilcart = 'SELECT * FROM draftcart WHERE iduser = "'.$idusercart.'"';
$querycart = $conn->query($ambilcart);
$arraycart = mysqli_fetch_all($querycart, MYSQLI_ASSOC); 
//echo $idusercart;

$jumlahhqty;                              
for($x = 0; $x < sizeof($arraycart); $x++){ 
$jumlahhqty = $jumlahhqty + $arraycart[$x]["qty"];
}
?>
<!doctype html>
<html lang="en">
<head>
	<title>Supresso - Explore</title>
	<link rel="stylesheet icon" href="<?php echo $awalalamat;?>img/ikon-supresso.png">
    <?php echo $keyword; ?>
	<!-- Required meta tags -->
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

	<!-- Optional CSS -->
	<link rel="stylesheet" href="<?php echo $awalalamat;?>vendor/css/bootstrap.min.css">
	<link rel="stylesheet" type="text/css" href="<?php echo $awalalamat;?>stylebaru.css">
	
	<!-- Optional JavaScript -->
	<script src="<?php echo $awalalamat;?>vendor/js/jquery-3.5.1.js"></script>
	<script src="<?php echo $awalalamat;?>vendor/js/popper.min.js"></script>
	<script src="<?php echo $awalalamat;?>vendor/js/bootstrap.min.js"></script>

	<style type="text/css">
		#nonDropdown7 .nav-link {color: rgba(0,0,0,1)!important;}


	</style>

</head>
<body>
	

		
		<?php include "../../navbarbetax.php" ?>
		
		<main class="konten text-center text-xl-left">


			<!-- ----------------------- section1 ----------------------- -->
			<section id="header-page" class="d-flex justify-content-center align-items-center mb-5 d-xl-none">
				<div class="container">
					<header class="text-capitalize gotham-medium" style="font-size: 1.25rem; color: #787878;">
						
					</header>
				</div><!-- end container -->
			</section>
			<style type="text/css">
				#header-page {height: 57px;}
				@media(min-width: 768px) {
					#header-page {height: 77px;}
				}
			</style>


			<!-- ----------------------- section2 ----------------------- -->
			<section id="produk" class="text-lg-left">
				<div class="container">
					<div class="row justify-content-between">

						<div class="col-lg bagi1 mb-5">
							<div class="peta">
								<img src="<?php echo $awalalamat;?>img/map-indo.png" class="img-fluid">
							</div>
						</div>

						<div class="col-lg bagi2" style="display: flex; align-items: center; justify-content: center; margin-bottom: 100px;">
							<div class="varian text-center text-lg-left">
								<h5 class="gotham-bold mb-3">Select your variant</h5>
								<select onchange="window.location.href=this.value" class="w-100" style="max-width: 300px; padding: .5em; ">
									<option style="padding: .5em;">Select your variant</option>
									<option value="<?php echo $awalalamat;?>filter/all">All Variants</option>
									<option value="<?php echo $awalalamat;?>region/aceh">Aceh Gayo</option>
									<option value="<?php echo $awalalamat;?>region/sumatra">Sumatra Mandheling</option>
									<option value="<?php echo $awalalamat;?>region/rainforest">Sumatra Mandheling Rainforest</option>
									<option value="<?php echo $awalalamat;?>region/lampung">Lampung</option>
									<option value="<?php echo $awalalamat;?>region/peaberry">Peaberry</option>
									<option value="<?php echo $awalalamat;?>region/manglayang">Manglayang</option>
									<option value="<?php echo $awalalamat;?>region/westjava">West Java</option>
									<option value="<?php echo $awalalamat;?>region/java">Java</option>
									<option value="<?php echo $awalalamat;?>region/bali">Bali Kintamani</option>
									<option value="<?php echo $awalalamat;?>region/flores">Flores Bajawa</option>
									<option value="<?php echo $awalalamat;?>region/toraja">Toraja Kalosi</option>
									<option value="<?php echo $awalalamat;?>region/papua">Papua</option>
								</select>
							</div>
						</div>

				

						
					</div><!-- end row -->
				</div><!-- end container -->
			</section>
			<style type="text/css">
				@media(min-width: 992px) {
					#produk .bagi1 {max-width: 70%;}
					#produk .bagi2 {max-width: 30%;}
					#produk .bagi3, #produk .bagi4 {max-width: 46%;}
				}
			</style>




			<?php include "../../footerbaru.php" ?>

			
		</main><!-- end konten -->
	<style type="text/css">
			.carousel-inner {
				width: calc(100% - 50px);
				margin-left: auto;
				margin-right: auto;
			}
			.kolom-produk .nama-produk {height: 57px;}
			@media(min-width: 768px) {
				.kolom-produk .nama-produk {height: 70px;}
			}
			@media(min-width: 1200px) {
				.kolom-produk .nama-produk {height: 67px;}
			}
		</style>



<div class="modal fade" id="popCart" data-backdrop="static" data-keyboard="false" tabindex="-1" role="dialog" aria-labelledby="popCartLabel" aria-hidden="true" style="background-color: rgba(0,0,0,.35);"> 
	<div class="modal-dialog modal-dialog-centered modal-dialog-scrollable mx-md-3 mx-lg-auto" style="max-width: 860px;">
		<div class="modal-content">
			<div class="modal-header border-0">
				<!-- <h5 class="modal-title" id="popCartLabel">Modal title</h5> -->
				<button type="button" class="close" data-dismiss="modal" aria-label="Close">
					<span aria-hidden="true">&times;</span>
				</button>
			</div>
			<div class="modal-body text-center px-md-5">
			

		      <div class="fetched-datad"></div>

				
					
				
			</div>
			<div class="modal-footer border-0"></div>
		</div>
	</div>
</div>
<style type="text/css">
	.modal.fade .modal-dialog {
		transform: scale(.5);
	}
	.modal.fade.show .modal-dialog {
		transform: scale(1);
	}
	@media(min-width: 1200px) {
		.modal {font-size: 16px;}
	}
</style>

	<script>

$(document).ready(function(){
    
     $('#jumlahcart').html(<?php echo $jumlahhqty; ?>);
    
}); 
    
    </script>
	
	
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  
<script>
    $(document).ready(function(){
        $('#popCart').on('show.bs.modal', function (e) {
            var rowid = $(e.relatedTarget).data('id');
              var quantity = parseInt($('#jumlahcart').html());
               $('#jumlahcart').html(quantity + 1);
               var idcart = "<?php echo $idusercart; ?>";
              var alamaturl = "<?php echo $actual_link;?>";
            //alert("hello");
            //menggunakan fungsi ajax untuk pengambilan data
            $.ajax({
                type : 'post',
                url : '<?php echo $awalalamat ?>modaldetail.php',
                data :  'rowid='+ rowid + '&alamaturl='+ alamaturl + '&idcart='+ idcart,
                success : function(data){
                $('.fetched-datad').html(data);//menampilkan data ke dalam modal
                }
            });
            
            
            
         });
$('#popCart').on('hidden.bs.modal', function () {
document.getElementById("addttcart").click();
})
    });
</script> 



<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
   


</body>
</html>