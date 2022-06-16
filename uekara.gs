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
      let range_C = sheetByName.getRange(i,column+1)
      let value_C =range_C.getValue()
      let range_D = sheetByName.getRange(i,column+2)
      let value_D =range_D.getValue()
      let range_E = sheetByName.getRange(i,column+3)
      let value_E =range_E.getValue()      
      let range_F = sheetByName.getRange(i,column+4)
      let value_F =range_F.getValue()
      let range_G = sheetByName.getRange(i,column+5)
      let value_G =range_G.getValue()
      let range_H = sheetByName.getRange(i,column+6)
      let value_H =range_H.getValue() 
      let range_I = sheetByName.getRange(i,column+7)
      let value_I =range_I.getValue()
      let range_J = sheetByName.getRange(i,column+8)
      let value_J =range_J.getValue()
​
      let s1 = "{ "
      let s2 = ", {"
      let s3 = "}, "
      let s4 = ", {"
      let s5 = "}, "
      let s6 = ", {"
      let s7 = "}, "
      let s8 = ", {"
      let s9 = "}, "
      let s10 = "},"
​
      let str = s1 + value_B + s2 + value_C + s3 + value_D + s4 + value_E + s5 + value_F + s6 + value_G + s7 + value_H + s8 + value_I + s9 + value_J + s10
​
      // //文字列をシートに挿入
      sheetByName2.getRange(i, column).setValue(value_B)
      sheetByName2.getRange(i, column+1).setValue(value_C)     
      sheetByName2.getRange(i, column+2).setValue(value_D)
      sheetByName2.getRange(i, column+3).setValue(value_E)   
      sheetByName2.getRange(i, column+4).setValue(value_F)
      sheetByName2.getRange(i, column+5).setValue(value_G)     
      sheetByName2.getRange(i, column+6).setValue(value_H)
      sheetByName2.getRange(i, column+7).setValue(value_I)    
      sheetByName2.getRange(i, column+8).setValue(value_J)    
      sheetByName2.getRange(i, column+9).setValue(str)
      Logger.log(str)
  }
}