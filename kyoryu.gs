function myFunction() {
 // spreadSheetオブジェクトの取得
 let spreadSheetByActive = SpreadsheetApp.getActive()
 
 // sheetオブジェクトの取得
 let sheetByName   = spreadSheetByActive.getSheetByName("問題データ")
 let sheetByName2   = spreadSheetByActive.getSheetByName("シート2")
 let last_row = sheetByName.getLastRow()
 let last_column = sheetByName.getLastColumn()
  //文字の操作
  for(let i=3;i<=last_row;i++){
    let column = 2
      let range_B = sheetByName.getRange(i,column)
      let value_B =range_B.getValue()
      if(range_B.isBlank()){
        continue;
      }      
      let range_C = sheetByName.getRange(i,column+1)
      let value_C = range_C.getValue()
      let range_D = sheetByName.getRange(i,column+2)
      let value_D = range_D.getValue() 
      let range_E = sheetByName.getRange(i,column+3)
      let value_E = range_E.getValues()     
      let array = new Array();
        for(let j=6;j<=last_column;j+=2){
          if(sheetByName.getRange(i,j).isBlank()){
            break;
          }else{
          let num = sheetByName.getRange(i,j).getValue()
          let pos = sheetByName.getRange(i,j+1).getValue()
          let numpos = "{" + num + "," + pos + "}"
          array[(j-6)/2] = numpos
          }
      }
      let  join_numpos= array.join(",");
      //Logger.log(join_numpos)
​
      let s1 = "{"
      let s2 = ","
      let s3 = ",\""
      let s4 = "\",{"
      let s5 = "}},"
      let str = s1+ value_B + s2 + value_C + s2 + value_D + s3 + value_E + s4 + join_numpos +s5
      // //文字列をシートに挿入
      sheetByName2.getRange(i, column).setValue(value_B)
      sheetByName2.getRange(i, column+1).setValue(value_C)
      sheetByName2.getRange(i, column+2).setValue(value_D)
      sheetByName2.getRange(i, column+3).setValue(value_E)
      sheetByName2.getRange(i, column+4).setValue(join_numpos)
      sheetByName2.getRange(i, column+5).setValue(str)
      Logger.log(str)
  }
}