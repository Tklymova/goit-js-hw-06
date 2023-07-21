const FormLog=document.querySelector (".login-form");
FormLog.addEventListener ("submit", pressSubmit);
function pressSubmit (event) {
    event.preventDefault();
  const infoObject=  {
    email:FormLog.elements.email.value,
    password:FormLog.elements.password.value,
    
  }
  if (infoObject.email==="" || infoObject.password==="" ) {
    return alert `Please fill in all fields`
  }
    console.log (infoObject);
    FormLog.requestFullscreen();
}