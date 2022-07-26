<?php
$do = $_GET["do"];
$status = "failed";
$pesan = "";
$daJson = array();

if($do == "getcart"){
  if(!isset($_POST["iduser"])){
    $pesan = "Sorry! no user input detected!";
  } else {
    $inputIdUser = $_POST["iduser"];
    if($inputIdUser == ""){
      $pesan = "Sorry! user cannot be empty!";
    } else {
      include "../../config.php";
      $getCartNav = $conn->query("SELECT * FROM draftcart WHERE iduser = '".$inputIdUser."' ");
      $countCartNav = $getCartNav->num_rows;
      if($countCartNav == 0){
        $daJson["cartnav"] = "0";
      } else {
        $cartnavTotal = 0;
        while($fetchCartNav = $getCartNav->fetch_assoc()){
          $cartnavQty = $fetchCartNav["qty"];
          $cartnavTotal = $cartnavTotal + $cartnavQty;
        }
        $daJson["cartnav"] = $cartnavTotal;
      }
      $status = "Success";
      $pesan = "Cart nav loaded";
    }
  }
} else if($do == "getitems"){
  if(!isset($_POST["iduser"])){
    $pesan = "Sorry! security input not found!";
  } else if(!isset($_POST["filter"])){
    $pesan = "Sorry! filter input not found!";
  } else if(!isset($_POST["sortby"])){
    $pesan = "Sorry! sort by input not found!";
  } else {
    $inputIdUser = $_POST["iduser"];
    $inputFilter = $_POST["filter"];
    $inputSortBy = $_POST["sortby"];
    if($inputIdUser == ""){
      $pesan = "Sorry! security input cannot be empty!";
    } else {
      include "../../config.php";
      //Declare Filter
      $filterCollection = "";
      $filterType = "";
      $filterForm = "";
      $filterPackaging = "";
      $filterWeight = "";
      $filterPromo = "";
      //Explode And Assembly Filter
      $filterArr = json_decode($inputFilter);
      $countArray = count($filterArr);
      $pidArray = 0;
      while($pidArray < $countArray){
        $thisArray = $filterArr[$pidArray];
        $thisArrayExplode = explode(":",$thisArray);
        $thisArrayCat = $thisArrayExplode[0];
        $thisArrayValue = $thisArrayExplode[1];

        if($thisArrayCat == "Collection"){
          if($filterCollection == ""){
            $filterCollection = $thisArrayValue;
          } else {
            $filterCollection = $filterCollection."|".$thisArrayValue;
          }
        } else if($thisArrayCat == "Type"){
          if($filterType == ""){
            $filterType = $thisArrayValue;
          } else {
            $filterType = $filterType."|".$thisArrayValue;
          }
        } else if($thisArrayCat == "Form"){
          if($filterForm == ""){
            $filterForm = $thisArrayValue;
          } else {
            $filterForm = $filterForm."|".$thisArrayValue;
          }
        } else if($thisArrayCat == "Packaging"){
          if($filterPackaging == ""){
            $filterPackaging = $thisArrayValue;
          } else {
            $filterPackaging = $filterPackaging."|".$thisArrayValue;
          }
        } else if($thisArrayCat == "Weight"){
          if($filterWeight == ""){
            $filterWeight = $thisArrayValue;
          } else {
            $filterWeight = $filterWeight."|".$thisArrayValue;
          }
        } else if($thisArrayCat == "Promo"){
          if($filterPromo == ""){
            $filterPromo = $thisArrayValue;
          } else {
            $filterPromo = $filterPromo."|".$thisArrayValue;
          }
        }
        $pidArray++;
      }
      //Assembly SQL
      $sql = "SELECT * FROM masterproduk WHERE status = 'aktif' ";
      if($filterCollection != ""){
        $sql = $sql."AND categoryname REGEXP '".$filterCollection."' ";
      }
      if($filterType != ""){
        $sql = $sql."AND tipekopi REGEXP '".$filterType."' ";
      }
      if($filterForm != ""){
        $sql = $sql."AND kind REGEXP '".$filterForm."' ";
      }
      if($filterPackaging != ""){
        $sql = $sql."AND kemasan REGEXP '".$filterPackaging."' ";
      }
      if($filterWeight != ""){
        $sql = $sql."AND gramature REGEXP '".$filterWeight."' ";
      }
      if($filterPromo != ""){
        $sql = $sql."AND hargadiskon IS NOT NULL ";
      }
      //Sort By
      if($inputSortBy != ""){
        if($inputSortBy == "spe:latest"){
          $sql = $sql."ORDER BY idproduk DESC";
        } else if($inputSortBy == "spe:popular"){
          $sql = $sql."ORDER BY idcustomurutan ASC";
        } else if($inputSortBy == "price:high"){
          $sql = $sql."ORDER BY harga DESC";
        } else if($inputSortBy == "price:low"){
          $sql = $sql."ORDER BY harga ASC";
        } else {
          $sql = $sql."ORDER BY rand()";
        }
      } else {
        $sql = $sql."ORDER BY rand()";
      }
      /*
      echo "SQL : ".$sql;
      echo "<br>==================<br>";
      echo "Collection : ".$filterCollection;
      echo "<br>===========<br>";
      echo "Type : ".$filterType;
      echo "<br>===========<br>";
      echo "Form : ".$filterForm;
      echo "<br>===========<br>";
      echo "Packaging : ".$filterPackaging;
      echo "<br>===========<br>";
      echo "Weight : ".$filterWeight;
      echo "<br>===========<br>";
      echo "Promo : ".$filterPromo;
      echo "<br>===========<br>";
      */

      $getProducts = $conn->query($sql);
      $countProducts = $getProducts->num_rows;
      if($countProducts == 0){
        $daJson["products"] = "";
      } else {
        $pid = 0;
        while($fecthProducts = $getProducts->fetch_assoc()){
          $daJson["products"][$pid]["code"]           = $fecthProducts["idproduk"];
          $daJson["products"][$pid]["img"]            = $fecthProducts["gambar"];
          $daJson["products"][$pid]["name"]           = $fecthProducts["namaproduk"];
          $daJson["products"][$pid]["undername"]      = $fecthProducts["bawahnama"];
          $daJson["products"][$pid]["stock"]          = $fecthProducts["jumlahstock"];
          $daJson["products"][$pid]["price"]          = $fecthProducts["harga"];
          $daJson["products"][$pid]["discountprice"]  = $fecthProducts["hargadiskon"];
          $daJson["products"][$pid]["discountcalls"]  = $fecthProducts["diskon"];
          $pid++;
        }
      }
      $status = "Success";
      $pesan = "Data loaded!";
    }
  }
} else {
  $pesan = "Sorry! no action detected!";
}

$daJson["message"] = $pesan;
$daJson["status"] = $status;
$printJson = json_encode($daJson);
echo $printJson;
exit();
?>
