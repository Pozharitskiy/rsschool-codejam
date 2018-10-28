var sumOfOther=function(arr) {
  var ar=[],sum=0,buf;
  for (let i=0;i<arr.length;i++) {
   sum+=arr[i];
  }
for (let i=0;i<arr.length;i++) {
  buf=sum-arr[i];
  ar.push(buf);
} console.log (ar);
}