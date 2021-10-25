export default function (str:string):boolean  {
  const strArr: string[] = str.toLowerCase().split(''); //mengubah string ke lowercase dan memisahkan string menjadi array
  let xTerhitung = 0;
  let oTerhitung = 0;

  for (let x = 0 ;x < strArr.length; x++ ) {
    if (strArr[x] === 'x') {
      xTerhitung += 1;
    } else if (strArr[x] === 'o') {
      oTerhitung += 1;
    }
  }

  if (xTerhitung === oTerhitung) {
    return true;
  } else {
    return false;
  }
}