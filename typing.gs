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
      let j = 2
      let range_hira = sheetByName.getRange(i,j)
      let value_hira =range_hira.getValue()
      //Logger.log(value_hira)
      if(range_hira.isBlank()){
        sheetByName2.getRange(i, j).setValue("")
        sheetByName2.getRange(i, j+1).setValue("")
        sheetByName2.getRange(i, j+2).setValue("")
        sheetByName2.getRange(i, j+3).setValue("")
        continue;
      }
      let range_len = sheetByName.getRange(i,j+2)
      let value_len = range_len.getValue()
      //Logger.log(value_len)
      if(value_len == "文字数（ひらがな）"){
        sheetByName2.getRange(i, j).setValue("")
        sheetByName2.getRange(i, j+1).setValue("")
        sheetByName2.getRange(i, j+2).setValue("")
        sheetByName2.getRange(i, j+3).setValue("")
        continue;
      }
​
​
      let range_roma = sheetByName.getRange(i,j+1)
      let value_roma = range_roma.getValue()
      //Logger.log(value_len)
      //Logger.log(range_roma.getValue())
      if(value_roma.match(/ローマ字/)){
        sheetByName2.getRange(i, j).setValue("")
        sheetByName2.getRange(i, j+1).setValue("")
        sheetByName2.getRange(i, j+2).setValue("")
        sheetByName2.getRange(i, j+3).setValue("")
        continue;
      }
​
      let value_romak = value_roma.toUpperCase()
      //Logger.log(value_roma.toUpperCase())
​
      let split_roma = value_roma.split("")
      let split_romak = value_romak.split("")
      //Logger.log(split_roma)
      //Logger.log(split_romak)
​
      let  join_roma= split_roma.join("\",");
      let  join_romak= split_romak.join(",key");
      let s1 = "{\""
      let s2 = "\",{\""
      let s3 = "\"},{key"
      let s4 = "},"
      let s5 = "},"
      let str = s1+ value_hira + s2 + join_roma + s3 + join_romak + s4 + value_len + s5
​
      //文字列をシートに挿入
      sheetByName2.getRange(i, j).setValue(value_hira)
      sheetByName2.getRange(i, j+1).setValue(value_roma)
      sheetByName2.getRange(i, j+2).setValue(value_len)
      sheetByName2.getRange(i, j+3).setValue(str)
      Logger.log(str)
  }
}