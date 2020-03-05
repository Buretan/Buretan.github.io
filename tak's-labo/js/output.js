////////////////////////////////////
// table要素の出力機能
////////////////////////////////////

// テーブル要素の出力に必要な要素を定義
var output_btn=document.getElementById("output_btn");
var col_num=document.getElementById("count_disp");
var row_num=document.getElementById("count_disp_r");
var output_area=document.getElementById("table_output_area");

var th_area=document.getElementById("th_output_area");
var tbody_area=document.getElementById("tbody_output_area");
var td_area=document.getElementById("td_output_area");

// テーブル出力ボタン
output_btn.onclick=function(){
  th_area.innerHTML=null;
  tbody_area.innerHTML=null;
  // tr_area.innerHTML=null;
  // 列カウンターの数だけヘッダー要素を生成
  for(let i=1;i<=col_num.innerHTML;i++){
    // var th = '<th><input class="head'+i+'" type="text" value="th'+i+'"></th>';
    var th = '<th>th'+i+'</th>';
    th_area.innerHTML+=th;
  }
// 2行目以降はボディ要素を生成
if (2<=row_num.innerHTML) {
  // trエリアを生成
  for(let ii=1;ii<row_num.innerHTML;ii++){
    var tr = '<tr id="tr_output_area'+ii+'"></tr>';
    tbody_area.innerHTML+=tr;
    for(let i=1;i<=col_num.innerHTML;i++){
      // var td = '<td id="td_output_area'+i+'"><input class="td'+i+'" type="text" value="td'+i+'"></td>';
      var td = '<td id="td_output_area'+i+'">td'+i+'</td>';
      document.getElementById('tr_output_area'+ii).insertAdjacentHTML('beforeend',td);
    }
  }
  // 確認用
  console.log(col_num.innerHTML);
  console.log(col_num,row_num,output_area);
  console.log("行カウンターは2以上です");
} else {
  console.log("行カウンターは2より小さいです");
  // なにもしない
}
}

// テーブル消去ボタン
dlt_btn.onclick=function(){
  th_area.innerHTML=null;
  tbody_area.innerHTML=null;
  console.log(col_num.innerHTML)
  console.log(col_num,row_num,output_area);
}
