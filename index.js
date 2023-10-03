

//take a callback function as an argument
//call the callback function
function spy(){
    return 0;
}

function receivesAFunction(cbf = spy){
    cbf()
}

//return a named function
function returnsANamedFunction(){
    return receivesAFunction;
}


//return an anonymous function
function returnsAnAnonymousFunction(){
    return ()=>{};
}