

function sum(a,b){
    if(arguments.length === 0){
        return "No argument provided"
    }
    else if(arguments.length === 1){
        return "Need one more argument"
    }

    return a + b
}


module.exports = sum