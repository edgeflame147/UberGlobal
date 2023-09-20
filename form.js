function storeInput() {
    const input = [];
    
    const name = document.getElementById("name");
    const uid = document.getElementById("uid");
    const pname = document.getElementById("pname");
    const pid = document.getElementById("pid");
    const pers = document.getElementById("pers");
    const rate = document.getElementById("rate");

    const val1 = name.value;
    const val2 = uid.value;
    const val3 = pname.value;
    const val4 = pid.value;
    const val5 = pers.value;
    const val6 = rate.value;
    input.push(val1, val2, val3,val4,val5,val6);
    console.log(input);
  }