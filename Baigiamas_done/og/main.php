
<?php
    
    include_once 'const/header.php'
    
?>

    <section class="hero">
        <div class="container">
            <h1>Prisidėk prie pokyčių Skirk 1,2% GPM</h1>
            <p>Ši parama jums visišaki nekainuoja </p>
            <a href="http://127.0.0.1:5500/Baigiamas/parama.html">Sužinok kaip</a>
        </div>
    </section>
    <section class="info">
        <div class="container">
            <div class="section-content flex-container">
                <div class="service">
                    <a href="http://127.0.0.1:5500/Baigiamas/ie%C5%A1kantys_nam%C5%B3.html">
                        <div class="slider-cointainer">
                            </div>
                                <img src="images/cat_1.jpg" alt="cat_1">
                            <div>    
                        </div>
                    </a>
                    <h3> Ieškantys namų</h3>
                </div>
                <div class="service">
                    <a href="http://127.0.0.1:5500/Baigiamas/ding%C4%99.html"><img src="images/dog_1.jpg" alt="dog_1"></a>
                    <h3> Dingę</h3>
                </div>
            </div>
        </div>
    </section>

    <section class="contact">
        <div class="container">
            <div class="section-heading">
                <h2>Gaukite naujienas</h2>
                
            </div>
            <div class="section-content flex-container">
                <div class="section-content">
                    <form class="contact-form" id="contact" action="index.php" method="post">
                        <div class="input-row">
                            <input type="text" placeholder="Jusų vardas" name="name" required>
                            <input type="email" placeholder="Jusų el. paštas" name="email" required>
                        </div>
                        <button  class="btn" name="submit" type="submit" id="news-submit">Siųsti</button>
                    </form>
                </div>
            </div>
        </div>
    </section>
<?php
    include_once 'const/footer.php'
?> 