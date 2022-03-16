var x=0;
for(var i=1; i<=1000; i++){    //i=1 2 3 4 5 6 7 8 9 10
    if(i%3==0 | i%5==0){     //i=3 5 6 9 10
        // console.log(i);
        x+=i;                //x=0+3,3+5,5+6....
    }
}
console.log(x)
document.getElementById("a").innerHTML=x;