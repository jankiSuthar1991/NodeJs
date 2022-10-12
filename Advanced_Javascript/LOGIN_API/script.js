
//login
loginData = document.querySelector('#btn-login');

useridlocalstorage = localStorage.getItem('userid');
console.log(useridlocalstorage);
if(loginData != null)
{
    loginData.addEventListener('click',function(){
        let uname = document.getElementById('uname').value;
        let pwd = document.getElementById('pwd').value;
    fetch("http://localhost/api/login_get_method?username="+uname+"&password="+pwd).then(res=>res.json())
    .then((Response)=>{
        if(Response.Code == 1)
        {
            localStorage.setItem('userid',Response.Data.id);
            window.location.href = "dashboard.html";
            console.log("Login Done");
        }
    })
    })
}
//reg
function regapi()
{
    let unamevar = document.getElementById('uname').value;
    let passvar = document.getElementById('pwd').value;
    let emailvar = document.getElementById('email').value;
    let mobilevar =document.getElementById('mobile').value;

    const data = {username:unamevar,password:passvar,email:emailvar,mobile:mobilevar}
    console.log(data);
    fetch('http://localhost/api/registration_api',{method:'POST',headers:{
        'Content-Type':'application/json','Accept':'application/json',
    },body:JSON.stringify({allData:data})}).then(res=>res.json()).then(Response=>{
        console.log(Response);
        if(Response.Code == 1)
        {
            localStorage.setItem('userid',Response.Data);
        }
        else
        {
            console.log("something went wrong");
        }
    
})
}