let func = () =>
{
let name = document.getElementById('name').value;
let email = document.getElementById('email').value;
let password = document.getElementById('password').value;
let dob = document.getElementById('dob').value;
let idcard = document.getElementById('id-card-number').value;
let namePattern = /^\S+$/;
let emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
let passwordPattern = /^(?=[^\d_].*?\d)\w(\w|[!@#$%]){7,20}/;
let dobPattern = /(0[1-9]|1[012]).(0[1-9]|1[0-9]|2[0-9]|3[01]).([19]{2})?([1-9]{2})/gi;
let idCardPattern = /^[0-9]{5}-[0-9]{7}-[0-9]{1}/gi;
if (!namePattern.test(name))
  {
    alert("Name must be without spaces");
    event.preventDefault();
  }
  else if (!emailPattern.test(email))
  {
    alert("not a vaild email ");
    event.preventDefault();
  }
  else if (!passwordPattern.test(password))
  {
    alert("not valid password)");
    event.preventDefault();
  }
  else if (!dobPattern.test(dob))
  {
    alert("not valid dob");
    event.preventDefault();
  }
  else if (!idCardPattern.test(idcard))
  {
    alert("please enter valid card no or format");
    event.preventDefault();
  }
}