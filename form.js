function storeInput() {
    const inputAry = [];
    
    const name = document.getElementById("name").value;
    const uid = document.getElementById("uid").value;
    const pname = document.getElementById("pname").value;
    const pid = document.getElementById("pid").value;
    const pers = document.getElementById("pers").value;
    const rate = document.getElementById("rate").value;

    inputAry.push(name, uid, pname, pid, pers, rate);
    document.write(inputAry.toString());
  }