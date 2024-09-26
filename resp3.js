burger=document.querySelector('.burger')
navbar=document.querySelector('.navbar')
navlist=document.querySelector('.nav-list')
rightnav=document.querySelector('.rightnav')



burger.addEventListener('click', ()=>{
    rightnav.classList.toggle('v-class-resp');
    navlist.classList.toggle('v-class-resp');
    navbar.classList.toggle('hnav-resp');


})

function emailSend(){
    var emailMr=document.getElementById('email2').value;
    var userName=document.getElementById('name2').value;
    var texArea=document.getElementById('textarea2').value;
    
    var messageBody="Email: " + emailMr +
    "<br> Name: " + userName +
    "<br/> Meessage: " + texArea;

Email.send({
    Host : "smtp.elasticemail.com",
    Username : "maneeshthinker@gmail.com",
    Password : "46D87C990221CA3D20EDDBFCC47932327803",
    To : 'manishvish244@gmail.com',
    From : "maneeshthinker@gmail.com",
    Subject : "This is the subject",
    Body : messageBody,
}).then(
  message => {
    if(message=='OK'){
        swal( "success",
             "You clicked the button!",
             "success",
        );
            
          }
          else{
            swal(
                "faild",
                "You clicked the button!",
                "somthing wrong",
                
              );
          
    }
  }
);
}