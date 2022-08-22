// code your solution here
function saturdayFun(activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`
}
function mondayWork(work = "go to the office"){
    return `This Monday, I will ${work}.`
}
function wrapAdjective(adj="*"){
    const inner = function (adjx = "special"){
        return `You are ${adj}${adjx}${adj}!`;
    }
    return inner;
}

console.log(wrapAdjective("|")('clever'))