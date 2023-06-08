
let shop_amt = +prompt("enter :"+0);

var disc=0;
if(shop_amt>=5000){
    disc=10;
    var discount= shop_amt/disc;

    var total_amt=total_amt-discount;
    
    document.write("<h1>Total Shopping amount : </h1>" )
}

// `` - back tick Symbol

var c = "Hello"
alert(`Hello Welcome ${c}`);