let b=[3,6,8,10,15,12]//find number 8
let index = b.indexOf(8);
console.log(index)
//let c=["cat","bus","rat"]

for (let w=0;w<=b.length;w++)
{
  if(b[w]==8)
  {
    console.log("found the number");
console.log(w);
break;
  }
  console.log(b[w]);
}
