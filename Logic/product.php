<?php

include "adb.php";

class product extends adb{

    /**
     * @return bool
     */
	function fetchProducts(){
		$str_sql = "SELECT * from xx_product";
        return $this->query($str_sql);
        
	}
    
    //shopping products
    function fetchShoppingProducts(){
       $str_sql = "SELECT * from xx_product";
        return $this->query($str_sql); 
    }
    
    function boughtProducts($name){
        $str_sql = "SELECT * from xx_product where p_name='$name'";
        return $this->query($str_sql); 
    }
    /**
    *Inserting product
    */
     function addProduct($name,$price,$qty,$pide)
    {
     $str_sql = "INSERT into xx_product set 
        p_name='$name', p_price='$price',p_quantity='$qty', p_id='$pide'";
       return $this->query($str_sql);   
    }
}
