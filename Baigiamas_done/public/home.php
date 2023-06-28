<?php
    require __DIR__ . '/../src/app.php';
?>
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>VšĮ "Naminukai"</title>
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,200;1,300;1,400&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css">
        <link rel="stylesheet" href="../css/normalizes.css">
        <link rel="stylesheet" href="../css/styles.css">
        <script>
            function myFunction() {
                var x = document.getElementById('mMenu');
                if (x.style.display === "block") {
                    x.style.display = "none";
                } else{
                    x.style.display = "block";
                }
            }
        </script>
    </head>
    <body>
        <?php
            include '../const/header.php';
            include '../content/home_cont.php';
            include '../const/footer.php';
        ?>
    </body>
</html>