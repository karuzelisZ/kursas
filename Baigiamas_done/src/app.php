<?php 
    if(isset($_POST['submit'])) {
        $vardas = trim($_POST['name']);
        $email = trim($_POST['email']);
        

        if(!empty($vardas) && !empty($email)) {
            if(filter_var($email, FILTER_VALIDATE_EMAIL)){
                include 'db.php';
                $from = "$email";
                $to = "labas696@gmail.com.lt";
                $subject = "Nauja zinute";
                $autorius = 'Nuo: ' . $vardas . ', ' . $email;
                //mail($to, $subject, $autorius, $zinute, $from);
                //echo "<script>alert('Dekojame. Jusu zinute gauta. Netrukus susisieksime.');</script>";
            }
        }
        
    }
?>   
    