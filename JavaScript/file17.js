//closure
function main(){
    let a = 1;
    function sub(){    // sub function is accessing the outer scope(main function(parent variable)) as a clouser funtion
        return a++;
    }
    return sub;
}
const f1=main()
console.log(f1())
console.log(f1())
console.log(f1())