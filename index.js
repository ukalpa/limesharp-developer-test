
console.log(
    repeat([1,2,3]), "\n\n",
    reformat("liMeSHArp DeveLoper TEST"), "\n\n",
    next_binary_number([1,0])
);

function repeat(arr){
    const ret = [];
    for(let i = 0; i < arr.length * 3; i++) {
        ret.push(arr[i % arr.length]);
    }
    return ret;
}

function reformat(s){
    let str = s.replace(/[aeiou]/gi, '');
    return str[0].toUpperCase() + str.substr(1).toLowerCase();
}

function next_binary_number(arr){
    for(let i = arr.length - 1; i >= 0; i--){
        if(arr[i]){
            arr[i] = 0;
        }
        else{
            arr[i] = 1;
            break;
        }
    }
    if(arr[0] === 0)    arr.unshift(1);
    return arr;
}