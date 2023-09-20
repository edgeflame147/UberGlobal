function surveyInput() {
  alert("Your response has been successfully recorded! Thank you for your feedback!");  
  const inputAry = [];

  const name = document.getElementById("name").value;
  const uid = document.getElementById("uid").value;
  const pname = document.getElementById("pname").value;
  const pid = document.getElementById("pid").value;
  const pers = document.getElementById("pers").value;
  const rate = document.getElementById("rate").value;
  const feedback = document.getElementById("feedback").value;
  inputAry.push(name, uid, pname, pid, pers, rate, feedback);

  sessionStorage.setItem("perspective", JSON.stringify(pers));
  //sessionStorage.setItem("star-rating", JSON.stringify(rate));
  sessionStorage.setItem("feedback", JSON.stringify(feedback));

  console.log(inputAry.toString());

  sessionStorage.setItem("new rating", rate);
  console.log(sessionStorage.getItem("new rating"));

  //console.log(document.getElementById("review1").innerHTML);
}
