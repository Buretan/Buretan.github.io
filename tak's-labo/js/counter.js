// ページが読み込まれたら実行
window.onload = function() {

  ///////////////////////
  // 列カウンターの処理
  ///////////////////////

  // オブジェクトと変数の準備
  var count_disp = document.getElementById("count_disp");
  var count_up_btn = document.getElementById("btn_count_up");
  var count_down_btn = document.getElementById("btn_count_down");
  var reset_btn = document.getElementById("btn_reset");
  var count_value = 1;



  // カウントアップボタンクリック処理
  count_up_btn.onclick = function (){
    if (count_disp.innerHTML>=9) {
      console.log(count_disp);
      console.log("現在の列の値は"+count_disp.innerHTML+"です。\n入力は9以下でお願いします");
    } else {
    count_value += 1;
    count_disp.innerHTML = count_value;
    console.log(count_disp);

  }
  };
  // カウントアップボタンのマウスダウン処理
  count_up_btn.onmousedown = function() {
    count_up_btn.style.backgroundColor = "#00FF00";
  }
  // カウントアップボタンのマウスアップ処理
  count_up_btn.onmouseup = function() {
    count_up_btn.style.backgroundColor = "";
  }
  // カウントダウンボタンクリック処理
  count_down_btn.onclick = function (){
    if (count_disp.innerHTML<=1) {
      console.log("現在の列の値は"+count_disp.innerHTML+"です。\n1より小さい数は使用できません。")
    } else {
      count_value -= 1;
      count_disp.innerHTML = count_value;
      console.log(count_disp);
  }
  };
  // カウントダウンボタンのマウスダウン処理
  count_down_btn.onmousedown = function() {
    count_down_btn.style.backgroundColor = "#FF0000";
  }
  // カウントダウンボタンのマウスアップ処理
  count_down_btn.onmouseup = function() {
    count_down_btn.style.backgroundColor = "";
  }
  // リセットボタンのクリック処理
  reset_btn.onclick = function (){
    count_value = 1;
    count_disp.innerHTML = count_value;
  }
  // リセットボタンのマウスダウン処理
  reset_btn.onmousedown = function() {
    reset_btn.style.backgroundColor = "#00FF00";
  }
  // リセットボタンのマウスアップ処理
  reset_btn.onmouseup = function() {
    reset_btn.style.backgroundColor = "";
  }

///////////////////////
// 行カウンターの処理
///////////////////////
  var count_disp_r = document.getElementById("count_disp_r");
  var count_up_btn_r = document.getElementById("btn_count_up_r");
  var count_down_btn_r = document.getElementById("btn_count_down_r");
  var reset_btn_r = document.getElementById("btn_reset_r");
  var count_value_r = 1;

  // rカウントアップボタンクリック処理
    count_up_btn_r.onclick = function (){
      if (count_disp_r.innerHTML>=9) {
        console.log(count_disp_r);
        console.log("現在の行の値は"+count_disp_r.innerHTML+"です。\n入力は9以下でお願いします");
      } else {
      count_value_r += 1;
      count_disp_r.innerHTML = count_value_r;
      console.log(count_disp_r);
    }
    };
    // カウントアップボタンのマウスダウン処理
    count_up_btn_r.onmousedown = function() {
      count_up_btn_r.style.backgroundColor = "#00FF00";
    }
    // カウントアップボタンのマウスアップ処理
    count_up_btn_r.onmouseup = function() {
      count_up_btn_r.style.backgroundColor = "";
    }
  // rカウントダウンボタンクリック処理
  count_down_btn_r.onclick = function (){
    if (count_disp_r.innerHTML<=1) {
      console.log("現在の行の値は"+count_disp_r.innerHTML+"です。\n1より小さい数は使用できません。")
    } else {
    count_value_r -= 1;
    count_disp_r.innerHTML = count_value_r;
  }
  };
  // カウントダウンボタンのマウスダウン処理
  count_down_btn_r.onmousedown = function() {
    count_down_btn_r.style.backgroundColor = "#FF0000";
  }
  // カウントダウンボタンのマウスアップ処理
  count_down_btn_r.onmouseup = function() {
    count_down_btn_r.style.backgroundColor = "";
  }
  // rリセットボタンのクリック処理
  reset_btn_r.onclick = function (){
    count_value_r = 1;
    count_disp_r.innerHTML = count_value_r;
  }
  // リセットボタンのマウスダウン処理
  reset_btn_r.onmousedown = function() {
    reset_btn_r.style.backgroundColor = "#00FF00";
  }
  // リセットボタンのマウスアップ処理
  reset_btn_r.onmouseup = function() {
    reset_btn_r.style.backgroundColor = "";
  }
};
