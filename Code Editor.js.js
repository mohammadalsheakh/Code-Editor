let codes = document.getElementById(`code`)
let play_Button = document.getElementById(`play`)
let delete_Button = document.getElementById(`delete`)
let last_results = document.getElementById(`codeResults`)

play_Button.onclick = () =>{
    last_results.innerHTML = codes.value 
    localStorage.setItem(`last_Load`,codes.value)
}

delete_Button.onclick = () =>{
    last_results.innerHTML = ``
}

onload = ()=>{
    codes.value = localStorage.getItem(`last_Load`)
}
