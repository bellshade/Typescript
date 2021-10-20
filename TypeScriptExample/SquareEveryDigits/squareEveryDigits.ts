export default function (num: number):number {
  const arrayNum:string = Array.from(String(num),Number).map((value)=>{
    return value ** 2;
  }).join('');
  return +arrayNum;
}