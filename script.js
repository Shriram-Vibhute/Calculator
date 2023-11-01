let input = document.getElementById("input");
let solution = document.getElementById("ans");
let updateInput = (i) => {
    input.value += i;
}

let findAns = (value, callback) => {
    let str = input.value;
    if (str[str.length - 1] == '*' || str[str.length - 1] == '/' || str[0] == '/' || str[0] == '*') {
        alert("Please change youe expression - Error : You might started or ended your expression with * or / operator");
        return;
    }
    if (str.includes('+*') || str.includes('-*') || str.includes('+/') || str.includes('-/') || str.includes('/*') || str.includes('*/')) {
        alert("Please change youe expression - Error : You might combined the * or / operator")
        return;
    }
    let ans = eval(document.getElementById('input').value);
    if (String(ans).length > 12) {
        let newAns = String(ans);
        newAns = Number(newAns.slice(0, 12));
        solution.innerHTML = newAns;
    }
    else {
        solution.innerHTML = ans;
    }
}