var x = 149;
var ans = 0;
var d;

while(x != 0){
	d = x % 10;
  ans = ans * 10 + d;
  x = Math.floor(x/10);
}

console.log("The Reverse number is : "+ans);
