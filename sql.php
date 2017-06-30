<?php
    $conn=new mysqli("127.0.0.1","root","","mydb");
    if($conn->connect_error){
        echo("链接失败");
    }echo{
    echo "链接成功！";
}
?>