let text;

function check() {
    text = document.getElementById("text").value;
    if(!text) {
        document.getElementById("result").textContent = `Please enter something in the text feild`;
        document.getElementById("text").focus()
        return;
    }

    for (let i = 0 ; i <  text.length ; i ++ ) {
        if (text[i] != text[text.length - 1 -i ]) {
        document.getElementById("result").textContent = `${text} is not a palindrome`;
        return ;
        } 

    }

    document.getElementById("result").textContent = `${text} is a palindrome`;

    return;

}