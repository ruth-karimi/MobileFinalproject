<?php

include "adb.php";

class transaction extends adb{

    /**
     * @param $username
     * @return bool
     */
	function getTransactionByPhone($tphone){
		$str_sql = "SELECT * from  xx_transaction where t_phone='$tphone' order by t_date desc";
        return $this->query($str_sql);
	}
     function addTransaction($tphone,$tproduct,$tquantity,$tcost)
    {
         if($tcost>=500){
            include "smsGateway.php";
            $smsGateway = new SmsGateway('wbenmurimi@gmail.com', 'murimi2015');

            $deviceID = 14246;
            $number = '+'.$tphone;
            $message = 'Cogratulation, you have earned a 10% discount on your next purchase.Thank you for shopping with us!';

            $result = $smsGateway->sendMessageToNumber($number, $message, $deviceID);
            
         }
         
         $transac_id= rand(1000,99999);
     $str_sql = "INSERT into xx_transaction set 
        t_phone='$tphone', t_product='$tproduct',t_quantity='$tquantity', t_id='$transac_id', t_cost='$tcost'";
       return $this->query($str_sql);   
    }
    
    //transaction with discount
    function addDisTransaction($tphone,$tproduct,$tquantity,$tcost,$discount)
    {
         if($tcost>=500){
            include "smsGateway.php";
            $smsGateway = new SmsGateway('wbenmurimi@gmail.com', 'murimi2015');

            $deviceID = 14246;
            $number = '+'.$tphone;
            $message = 'Cogratulation, you have earned a 10% discount on your next purchase.Thank you for shopping with us!';

            $result = $smsGateway->sendMessageToNumber($number, $message, $deviceID);
            
         }
         
         $transac_id= rand(1000,99999);
     $str_sql = "INSERT into xx_transaction set 
        t_phone='$tphone', t_product='$tproduct',t_quantity='$tquantity', t_id='$transac_id',t_discount='$discount', t_cost='$tcost'";
       return $this->query($str_sql);   
    }
}
