<?php

    if(isset($_POST['send'])){
        $server = '127.0.0.1';
        $user = 'root';
        $pass = '';
        $db_name = 'loan_buddy';

        echo 'Hello world';
    
        $conn = mysqli_connect($server,$user, $pass, $db_name);

        if($conn){
            echo 'Connected to database';

            $fname = $_POST['f_name'];
            $lname = $_POST['l_name'];
            $email = $_POST['email'];
            $reg = $_POST['reg_no'];
            $tel = $_POST['tel'];
            $pwd = $_POST['pwd'];
            $cpwd = $_POST['c_pwd'];
            $fullname = $fname . ' ' . $lname;
            $pwd_encrypt = md5($pwd);

            $insert_data = "INSERT INTO account(NAME, EMAIL, REG_NO, PHONE_NUMBER, PASSWORD)VALUES('$fullname', '$email', '$reg', '$tel', '$pwd_encrypt')";

            $execute = mysqli_query($conn, $insert_data);

            if($execute){
                echo 'Data submitted';
            }else{
                echo 'Error while submittting data';
            }
        }else{
            echo 'Not connected to the database';
        }


    }

    
?>