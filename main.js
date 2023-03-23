function ForLoop(event){

    {
        event.preventDefault()
    }

    let Value1 = document.getElementById('value1').value
        Value1 = Number(Value1)
    let Value2 = document.getElementById('value2').value
        Value2 = Number(Value2)
    let result = ""

for (let i = Value1 ; i <= Value2 ; i++){

result += i + ""

console.log("mumbes", i)

}

document.getElementById('result').innerHTML = result


}
