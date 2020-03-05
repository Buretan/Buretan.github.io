<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<title>サンプルテンプレート</title>
    <meta name="description" content="サンプルテンプレート">
    <meta name="keywords" content="レストラン,フレンチ,原宿">
    <meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no">
    <link href="/css/reset.css" rel="stylesheet" type="text/css">
    <link href="/css/font.css" rel="stylesheet" type="text/css">
		<!-- <link href="/css/common.css" rel="stylesheet" type="text/css"> -->
    <!-- <link href="/css/animate.css" rel="stylesheet" type="text/css"> -->
    <!-- <link href="/css/font-awesome/css/font-awesome.min.css" rel="stylesheet"> -->
	<script type="text/javascript" src="/js/jquery.js"></script>
	<!-- <script src="/js/respond.src.js"></script> -->
	<!--[if lt IE 9]>
	<script src="js/html5shiv-printshiv.js"></script>
	<![endif]-->
</head>
<body>
	<h1>編集フォーム</h1>
	<form method="post" action="">
		<input type="text" name="mail" placeholder="メールアドレス" value="<?php echo $mail; ?>" /><br/>
		<!--もし$mailresultがfalseの場合はエラー表示。-->
		<?php if($mailresult == "false"){echo "メールアドレスにエラーがあります。<br/>";}; ?>
		<input type="password" name="password" placeholder="パスワード" value="" /><br/>
		<!--もし$passresultがfalseの場合はエラー表示。-->
		<?php if($passresult == "false"){echo "パスワードにエラーがあります。<br/>";}; ?>
		<input type="text" name="name" placeholder="お名前" value="<?php echo $name; ?>" /><br/>
		<input type="text" name="age" placeholder="年齢" value="<?php echo $age; ?>" /><br/>
		<input type="text" name="skill" placeholder="スキル" value="<?php echo $skill; ?>" /><br/>
		<div class="upBtn">
			<input type="submit" name="submitBtn" value="更新"/>
		</div>
	</form>
	<input class="editBtn" type="button" value="hennsyuu"/>

	<script>
		//編集ボタン押された時
		$(".editBtn").click(function(){
			$('.upBtn').toggle();
		});
// 		$(function() {
//     $('.editBtn').click(function(){
//     });
// });
	</script>

</body>
</html>
