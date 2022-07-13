function add (a,b){
    function sum(){
        return a + b
    }

    function sub (){
        return a-b;
    }
    function multiplay(){
        return a*b
    }

    function divided(){
        return a/b
    }

    let result = sum() + sub() + multiplay() + divided();
    return result;

}


console.log(add(10, 5))



