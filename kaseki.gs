function myFunction() {
 // spreadSheetオブジェクトの取得
 let spreadSheetByActive = SpreadsheetApp.getActive()
 
 // sheetオブジェクトの取得
 let sheetByName   = spreadSheetByActive.getSheetByName("問題データ")
 let sheetByName2   = spreadSheetByActive.getSheetByName("シート2")
​
 //get last row 
 let last_row = sheetByName.getLastRow()
  //文字の操作
  for(let i=3;i<=last_row;i++){
      let column = 2
      let range_B = sheetByName.getRange(i,column)
      let value_B =range_B.getValue()
      //Logger.log(value_B)
      if(range_B.isBlank()){
        sheetByName2.getRange(i, column).setValue("")
        sheetByName2.getRange(i, column+1).setValue("")
        sheetByName2.getRange(i, column+2).setValue("")
        sheetByName2.getRange(i, column+3).setValue("")
        continue;
      }
​
      let split_B = value_B.split("")
      let split_Bkey = value_B.split("")
      for(elem of split_Bkey){
        elme=kanaToroma(elem)
        //Logger.log(elme)
      }
​
      let  join_B= split_B.join("\",\"");
      let  join_Bkey= split_Bkey.join(",key");
      let s1 = "{{\""
      let s2 = "\"},{key"
      let s3 = "},"
      let str = s1+ join_B + s2 + join_Bkey + s3
​
      // // //文字列をシートに挿入
      sheetByName2.getRange(i, column).setValue(value_B)
      sheetByName2.getRange(i, column+1).setValue(str)
      Logger.log(str)
  }
}
​
function kanaToroma(x){
  let y
  switch(x){
    case "ぬ":
    case "1":
    y="N1"
    break;
    case "ふ":
    case "2":
    y="N2"
    break;
    case "あ":
    case "3":
    y="N3"
    break;
    case "う":
    case "4":
    y="N4"
    break;
    case "え":
    case "5":
    y="N5"
    break;
    case "お":
    case "6":
    y="N6"
    break;
    case "や":
    case "7":
    y="N7"
    break;
    case "ゆ":
    case "8":
    y="N8"
    break;
    case "よ":
    case "9":
    y="N9"
    break;
    case "わ":
    case "0":
    y="N0"
    break;
    case "ほ":
    y="-"
    break;
    case "へ":
    y="^"
    break;
    case "た":
    y="Q"
    break;
    case "て":
    y="W"
    break;      
    case "い":
    y="E"
    break;
    case "す":
    y="R"
    break;
    case "か":
    y="T"
    break;
    case "ん":
    y="Y"
    break;
    case "な":
    y="U"
    break;
    case "に":
    y="I"
    break;
    case "ら":
    y="O"
    break;
    case "せ":
    y="P"
    break;
    case "ち":
    y="A"
    break;
    case "と":
    y="S"
    break;
    case "し":
    y="D"
    break; 
    case "は":
    y="F"
    break;
    case "き":
    y="G"
    break;
    case "く":
    y="H"
    break;
    case "ま":
    y="J"
    break;
    case "の":
    y="K"
    break;
    case "り":
    y="L"
    break;
    case "れ":
    y=";"
    break;
    case "け":
    y=":"
    break;
    case "む":
    y="]"
    break;
    case "つ":
    y="Z"
    break;
    case "さ":
    y="X"
    break;      
    case "そ":
    y="C"
    break;
    case "ひ":
    y="V"
    break;
    case "こ":
    y="B"
    break;
    case "み":
    y="N"
    break;
    case "も":
    y="M"
    break;
    case "ね":
    y=","
    break;
    case "る":
    y="."
    break;
    case "め":
    y="/"
    break;
    case "ろ":
    y="\\"
    break;
    default:
    y=x.toUpperCase()
    break;
  }
  return y;
}