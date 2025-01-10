<html>
    <head>
        <title></title>
    </head>
    <body>
        <?php
            echo"<b>Array sorting</b>";
            echo "<br>";
            $students=array("Hari", "Sufi", "Pranav", "Akita", "Midhun");
            print_r($students);
            echo"<br>";
            echo"<b>Ascending order </b><br>";
            arsort($students);
            print_r($students);
            echo"<b><br> Descending order</b><br>";
            arsort($students);
            print_r($students);
            echo"<br>";
            $height=array("Hari"=>149, "Sufi"=>145, "Pranav"=>153, "Akita"=>155, "Midhun"=>150);
            echo"<b><br>Associate array<br>Array sorted by value and print<br>Ascending order</b><br>";
            asort($height);
            print_r($height);
            echo"<b><br> Descending order</b><br>";
            arsort($height);
            print_r($height);
            echo "<br>";
            echo"<b>Sorting array by key and print</b><br><b>Ascending order</b>";
            ksort($height);
            print_r($height);
            krsort($height);
            echo"<b><br>Descending order</b>";
            print_r($height);
        ?>
    </body>
</html>
