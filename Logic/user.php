<?php

include "adb.php";

class user extends adb{
    /**
     * @param $email
     * @param $user_password
     * @return bool
     */
    function Login($email, $user_password)
    {
        $str_sql = "SELECT * from user where user_name = '$email' AND user_pass = '$user_password'";
       return $this->query($str_sql);
    }
    function signUp($name,$email,$password,$phonenumber,$age,$org)
    {
        $str_sql = "INSERT into user set 
        name='$name', email='$email', password='$password',phonenumber='$phonenumber',age=$age,organization=$org";
       return $this->query($str_sql);
    }
   
}

?>
