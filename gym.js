function home(){
  document.getElementById("homes").style.color="green"
  document.getElementById("programs").style.color="white"
  document.getElementById("blogs").style.color="white"
  document.getElementById("plans").style.color="white"
  document.getElementById("contacts").style.color="white"
}

function program(){
  document.getElementById("homes").style.color="white"
  document.getElementById("programs").style.color="green"
  document.getElementById("blogs").style.color="white"
  document.getElementById("plans").style.color="white"
  document.getElementById("contacts").style.color="white"
}

function blog(){
  document.getElementById("homes").style.color="white"
  document.getElementById("programs").style.color="white"
  document.getElementById("blogs").style.color="green"
  document.getElementById("plans").style.color="white"
  document.getElementById("contacts").style.color="white"
}

function plan(){
  document.getElementById("homes").style.color="white"
  document.getElementById("programs").style.color="white"
  document.getElementById("blogs").style.color="white"
  document.getElementById("plans").style.color="green"
  document.getElementById("contacts").style.color="white"
}

function contact(){
  document.getElementById("homes").style.color="white"
  document.getElementById("programs").style.color="white"
  document.getElementById("blogs").style.color="white"
  document.getElementById("plans").style.color="white"
  document.getElementById("contacts").style.color="green"
}

// submit

function submit(){
  let name = document.getElementById("name")
  let number = document.getElementById("number")

  if(name.value==""){
    alert("please enter your name")
  }else if(number.value==""){
    alert("please enter number")
  }else{
    alert("Thanks for join"+ name.value)
  }
}