for (var i = 0; i < 21; ++i) {

    var isPrime = true;

    for(var j = 2; j <= Math.round(i/2); ++j){
        if ( i % j == 0){
            isPrime = false;
        }
    }

    if (isPrime) {
        document.write(i + "<br>");
    }
}

