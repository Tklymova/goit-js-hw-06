const formlog=document.querySelector (".login-form");
formlog.addEventListener ("submit",pressSubmit);
function pressSubmit (event) {
    event.preventDefault();
  const infoObject=  {
    email:formlog.elements.email.value,
    password:formlog.elements.password.value,
    
  }
  if (infoObject.email==="" || infoObject.password==="" ) {
    return alert `Please fill in all fields`
  }
    console.log (infoObject);
    // FormLog.requestFullscreen();
}