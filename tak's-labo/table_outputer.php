<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Tak's-labo</title>
  <meta name="description" content="blog_tema">
  <meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no">
  <link rel="stylesheet" href="style.css">
  <link href="https://fonts.googleapis.com/css?family=Noto+Sans+JP:100,300,400,500,700,900&display=swap&subset=japanese" rel="stylesheet">
  <script src="https://code.jquery.com/jquery-3.4.1.js" integrity="sha256-WpOohJOqMqqyKL9FccASB9O0KwACQJpFTUBLTYOVvVU=" crossorigin="anonymous"></script>
  <script src="https://kit.fontawesome.com/ae083c0722.js"></script>
</head>
<body>
  <header>
    <a href="index.php">
      <h1 class="title f-50">Tak's-labo</h1>
    </a>
  </header>
  <main class="l_main_area clearfix">
    <section class="clearfix">
      <h1 class="title">table要素出力機</h1>
      <p>列と行の数を指定しoutputを押すとテーブル要素が出力されます</p>
      <div  class="l_main_input_area">
        <p>列(column)</p>
        <div class="cnt-area">
          <p class="counter" id="count_disp">1</p>
          <input class="btn_sub btn" type="button" value="-" id="btn_count_down"onclick="count_down_btn()">
          <input class="btn_add btn" type="button" value="+" id="btn_count_up" onclick="count_up_btn()">
          <input class="btn" type="button" value="クリア" id="btn_reset"onclick="reset_btn()">
        </div>
      </div>

      <div  class="l_main_input_area">
        <p>行(row)</p>
        <div class="cnt-area">
          <p class="counter" id="count_disp_r">1</p>
          <input class="btn_sub btn" type="button" value="-" id="btn_count_down_r"onclick="count_down_btn_r()">
          <input class="btn_add btn" type="button" value="+" id="btn_count_up_r" onclick="count_up_btn_r()">
          <input class="btn" type="button" value="クリア" id="btn_reset_r" onclick="reset_btn_r()">
        </div>
      </div>
      <br>
      <input class="output btn l_btn" type="button" value="output" id="output_btn" onclick="output_btn()">
      <br>
      <input class="dlt btn l_btn" type="button" value="dlt" id="dlt_btn" onclick="dlt_btn()">
      <br>
    </section>
    <section id="table_output_area">
      <table>
        <thead>
          <tr id="th_output_area">
          </tr>
        </thead>
        <tbody id="tbody_output_area">
        </tbody>
      </table><br>
    </section>

  </main>
  <script src="js/counter.js"></script>
  <script src="js/output.js"></script>
  <footer>
    <p class="copy l_f_copy">©2020 Tak's-labo allwrite reserved.</p>
  </footer>
</body>
</html>
