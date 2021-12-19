var fname = document.getElementById('fname')
var lname = document.getElementById('lname')
var number = document.getElementById('number')
var email = document.getElementById('email')
    

  form.addEventListener('submit', (e) => {
    if(fname.value === '' || fname.value == null) {
     return false
    }

    if(lname.value === '' ||  lname.value == null){
      return false
    }

    if(number.value.length >= 12 &&  (number.value.range(0,9))){
      return false
    }

    if(email.value === '' && email.value == null){
      return false
    } 
    else {
      alert('Your infromation has been submitted successfully. Thank you!')
      console.log('Your infromation has been submitted successfully. Thank you!')
    }
    e.preventDefault()
    }) 


   