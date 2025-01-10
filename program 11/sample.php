<html>
<head>
    <title>Cricket</title>
</head>
<body>
    <center>
        <h1 style="color: red;">INDIAN CRICKET PLAYERS</h1>
        <table border="1">
            <tr>
                <th>Name</th>
                <th>Number</th>
            </tr>
            <?php
            $cricket = array(
                "Sachin" => 10,
                "Dravid" => 19,
                "Sourav" => 24,
                "Sehwag" => 44,
                "Yuvraj" => 12,
                "Kumble" => 2,
                "Dhoni" => 7,
                "Kaif" => 33,
                "Irfan" => 77,
                "Rohit" => 45,
                "Virat" => 18
            );

            foreach ($cricket as $key => $value) {
                echo "<tr>";
                echo "<td>$key</td>";
                echo "<td>$value</td>";
                echo "</tr>";
            }
            ?>
        </table>
    </center>
</body>
</html>
