<?php
header('content-type:text/html;charset=utf-8');
define('HOST', '10.31.158.18');
define('USERNAME', 'root');
define('PASSWORD', '123456');
define('DBNAME', 'registry');
$conn = @new mysqli(HOST, USERNAME, PASSWORD, DBNAME); //@:容错的
if ($conn->connect_error) {
    die('数据库连接失败：' . $conn->connect_error);
}
$conn->query('SET NAMES UTF8');