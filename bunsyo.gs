function myFunction() {
 // spreadSheetオブジェクトの取得
 let spreadSheetByActive = SpreadsheetApp.getActive()
 
 // sheetオブジェクトの取得
 let sheetByName   = spreadSheetByActive.getSheetByName("問題データ")
 let sheetByName2   = spreadSheetByActive.getSheetByName("シート2")
 let last_row = sheetByName.getLastRow()
​
  //文字の操作
  for(let i=3;i<=last_row;i++){
    let column = 2
      let range_B = sheetByName.getRange(i,column)
      let value_B =range_B.getValue()
      if(range_B.isBlank()){
        continue;
      }     
    let len_B = value_B.length
    let split_B = value_B.split("")
    let array_B = Array()
    let index=0
    for(let elem of split_B){
      array_B[index] = kanaToromazi(elem)
      //Logger.log(array_B[index])
      index++
    }
    let join_B = array_B.join(", moji")
    //Logger.log(join_B)
    let s1 = "{\""
    let s2 = "\", {moji"
    let s3 = "}, "
    let s4 = "},"
    let str = s1 + value_B + s2 + join_B + s3 + len_B + s4
    //文字列をシートに挿入
    sheetByName2.getRange(i, column).setValue(value_B)
    sheetByName2.getRange(i, column+1).setValue(str)
    Logger.log(str)
  }
}
​
function replaceFullToHalf(str){
  return str.replace(/[！-～]/g, function(s){
    return String.fromCharCode(s.charCodeAt(0) - 0xFEE0);
  });
}
​
function kanaToromazi(x){
  let y
  let z = 0
  switch(x){
    case 'ア' : z=1
		case 'あ' : y = 'aa' 
    break;
    case 'イ' : z=1
		case 'い' : y ='ii'
    break;
    case 'ウ' : z=1
		case 'う' : y ='uu'
    break;
    case 'エ' : z=1
		case 'え' : y ='ee'
    break;
    case 'オ' : z=1
		case 'お' : y ='oo'
    break;
    case 'カ' : z=1
		case'か' : y ='ka'
    break;
    case 'キ' : z=1
		case'き' : y ='ki'
    break;
    case 'ク' : z=1
		case'く' : y ='ku'
    break;
    case 'ケ' : z=1
		case'け' : y ='ke'
    break;
    case 'コ' : z=1
		case'こ' : y ='ko'
    break;
    case 'サ' : z=1
		case'さ' : y ='sa'
    break;
    case 'シ' : z=1
		case'し' : y ='si'
    break;
    case 'ス' : z=1
		case'す' : y ='su'
    break;
    case 'セ' : z=1
		case'せ' : y ='se'
    break;
    case 'ソ' : z=1
		case'そ' : y ='so'
    break;
    case 'タ' : z=1
		case'た' : y ='ta'
    break;
    case 'チ' : z=1
		case'ち' : y ='ti'
    break;
    case 'ツ' : z=1
		case'つ' : y ='tu' 
    break;
    case 'テ' : z=1
		case'て' : y ='te'
    break;
    case 'ト' : z=1
		case'と' : y ='to'
    break;
    case 'ナ' : z=1
		case'な' : y ='na'
    break;
    case 'ニ' : z=1
		case'に' : y ='ni'
    break;
    case 'ヌ' : z=1
		case'ぬ' : y ='nu'
    break;
    case 'ネ' : z=1
		case'ね' : y ='ne'
    break;
    case 'ノ' : z=1
		case'の' : y ='no'
    break;
    case 'ハ' : z=1
		case'は' : y ='ha'
    break;
    case 'ヒ' : z=1
		case'ひ' : y ='hi'
    break;
    case 'フ' : z=1
		case'ふ' : y ='hu'
    break;
    case 'ヘ' : z=1
		case'へ' : y ='he'
    break;
    case 'ホ' : z=1
		case'ほ' : y ='ho'
    break;
    case 'マ' : z=1
		case'ま' : y ='ma'
    break;
    case 'ミ' : z=1
		case'み' : y ='mi'
    break;
    case 'ム' : z=1
		case'む' : y ='mu'
    break;
    case 'メ' : z=1
		case'め' : y ='me'
    break;
    case 'モ' : z=1
		case'も' : y ='mo'
    break;
    case 'ヤ' : z=1
		case'や' : y ='ya'
    break;
    case 'ユ' : z=1
		case'ゆ' : y ='yu'
    break;
    case 'ヨ' : z=1
		case'よ' : y ='yo'
    break;
    case 'ラ' : z=1
		case'ら' : y ='ra'
    break;
    case 'リ' : z=1
		case'り' : y ='ri'
    break;
    case 'ル' : z=1
		case'る' : y ='ru'
    break;
    case 'レ' : z=1
		case'れ' : y ='re'
    break;
    case 'ロ' : z=1
		case'ろ' : y ='ro'
    break;
    case 'ワ' : z=1
		case'わ' : y ='wa'
    break;
		case'ゐ' : y ='wi'
    break;
		case'ゑ' : y ='we'
    break;
    case 'ヲ' : z=1
		case'を' : y ='wo'
    break;
    case 'ン' : z=1
		case'ん' : y ='nn'
    break;
    case 'ガ' : z=1
		case'が' : y ='ga'
    break;
    case 'ギ' : z=1
		case'ぎ' : y ='gi'
    break;
    case 'グ' : z=1
		case'ぐ' : y ='gu'
    break;
    case 'ゲ' : z=1
		case'げ' : y ='ge'
    break;
    case 'ゴ' : z=1
		case'ご' : y ='go'
    break;
    case 'ザ' : z=1
		case'ざ' : y ='za'
    break;
    case 'ジ' : z=1
		case'じ' : y ='zi' 
    break;
    case 'ズ' : z=1
		case'ず' : y ='zu'
    break;
    case 'ゼ' : z=1
		case'ぜ' : y ='ze'
    break;
    case 'ゾ' : z=1
		case'ぞ' : y ='zo'
    break;
    case 'ダ' : z=1
		case'だ' : y ='da'
    break;
    case 'ヂ' : z=1
		case'ぢ' : y ='di'
    break;
    case 'ヅ' : z=1
		case'づ' : y ='du' 
    break;
    case 'デ' : z=1
		case'で' : y ='de'
    break;
    case 'ド' : z=1
		case'ど' : y ='do'
    break;
    case 'バ' : z=1
		case'ば' : y ='ba'
    break;
    case 'ビ' : z=1
		case'び' : y ='bi'
    break;
    case 'ブ' : z=1
		case'ぶ' : y ='bu'
    break;
    case 'ベ' : z=1
		case'べ' : y ='be'
    break;
    case 'ボ' : z=1
		case'ぼ' : y ='bo'
    break;
    case 'パ' : z=1
		case'ぱ' : y ='pa'
    break;
    case 'ピ' : z=1
		case'ぴ' : y ='pi'
    break;
    case 'プ' : z=1
		case'ぷ' : y ='pu'
    break;
    case 'ペ' : z=1
		case'ぺ' : y ='pe'
    break;
    case 'ポ' : z=1
		case'ぽ' : y ='po'
    break;
    case 'ァ' : z=1
    case'ぁ' : y ='laa'
    break;
    case 'ィ' : z=1
		case'ぃ' : y ='lii'
    break;
    case 'ゥ' : z=1
		case'ぅ' : y ='luu'
    break;
    case 'ェ' : z=1
		case'ぇ' : y ='lee'
    break;
    case 'ォ' : z=1
		case'ぉ' : y ='loo'
    break;
    case 'ャ' : z=1
		case'ゃ' : y ='lya'
    break;
    case 'ュ' : z=1
		case'ゅ' : y ='lyu'
    break;
    case 'ョ' : z=1
		case'ょ' : y ='lyo'
    break;
    case 'ッ' : z=1
		case'っ' : y ='ltu'
    break;
		case'ー' : y ='CENTERBER'
    break;
		case'、' : y =', '
    break;
		case'，' : y =', '
    break;
		case'。' : y ='.'
    break;
    default:
    y = replaceFullToHalf(x)
    break;
  }
  if(z==1){
    let str1 = "katakana"
    let str = str1 + y
    return str.toUpperCase()
  }
  return y.toUpperCase()
}