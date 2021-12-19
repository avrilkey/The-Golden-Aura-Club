const form = document.getElementById('form')
const fname = document.getElementById('fname')
const lname = document.getElementById('lname')
const phone_number = document.getElementById('phone_number')
const email = document.getElementById('email')
    

  form.addEventListener('submit', (e) => {
    if(fname.value === '' || fname.value == null) {
     return false
    }

    if(lname.value === '' ||  lname.value == null){
      return false
    }

    if(phone_number.value.length < 9 || (phone_number.value.length > 10 )){
      alert('Try Again')
      return false
    } 
    if(email.value === '' && email.value == null){
      return false

    } else{
      alert('Your information has been accepted, Thank you!')
      console.log('information accepted')
    }

    e.preventDefault()
    }) 

   
