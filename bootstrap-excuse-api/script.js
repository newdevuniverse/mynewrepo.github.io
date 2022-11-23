const clg = document.getElementById("college");
const office = document.getElementById("office");
const child = document.getElementById("children");
const party = document.getElementById("party");
const clgdiv = document.getElementById("collegeexcues");
const officediv = document.getElementById("officeexcuse");
const childdiv = document.getElementById("childrenexcuse");
const partydiv = document.getElementById("partyexcuse");

//********************************college Excuse*****************************//
clg.addEventListener("click", function () {
    getclgexcuse();
  });
  
  function getclgexcuse() {
   const ajax = new XMLHttpRequest();
   ajax.open("GET", 'https://excuser.herokuapp.com/v1/excuse/college/1', true);
    ajax.onload = function () {
      if (this.status === 200 && this.readyState == 4) {
        console.log(this.responseText);
        let data = JSON.parse(this.responseText);
        clgdiv.innerText = `${data[0].excuse}`;
      } else {
        this.onerror = this.onerror();
      }
    };
    ajax.send();
  }
  function onerror() {
    clgdiv.textContent = "Something went wrong!!! Click the below button for next Excuse!!!";
  }


//********************************office Excuse*****************************//
  office.addEventListener("click", function () {
    getofficeexcuse();
  });
  
  function getofficeexcuse() {
    const ajax = new XMLHttpRequest();
    const url = "https://excuser.herokuapp.com/v1/excuse/office/1";
    ajax.open("GET", url, true);
    ajax.onreadystatechange = function () {
      if (this.status === 200 && this.readyState == 4) {
        console.log(this.responseText);
        let data = JSON.parse(this.responseText);
        officediv.innerHTML = `${data[0].excuse}`;
      } else {
        this.onerror = onerror();
      }
    };
    ajax.send();
  }
  function onerror() {
    officediv.textContent = "Something went wrong!!! Click the below button for next Excuse!!!";
  }

  
//********************************Children Excuse*****************************//
child.addEventListener("click", function () {
  getchildexcuse();
});

function getchildexcuse() {
  const ajax = new XMLHttpRequest();
  const url = "https://excuser.herokuapp.com/v1/excuse/children/1";
  ajax.open("GET", url, true);
  ajax.onreadystatechange = function () {
    if (this.status === 200 && this.readyState == 4) {
      console.log(this.responseText);
      let data = JSON.parse(this.responseText);
      childdiv.innerHTML = `${data[0].excuse}`;
    } else {
      this.onerror = onerror();
    }
  };
  ajax.send();
}
function onerror() {
  childdiv.textContent = "Something went wrong!!! Click the below button for next Excuse!!!";
}


//********************************Party Excuse*****************************//
party.addEventListener("click", function () {
  getpartyexcuse();
});

function getpartyexcuse() {
  const ajax = new XMLHttpRequest();
  const url = "https://excuser.herokuapp.com/v1/excuse/party/1";
  ajax.open("GET", url, true);
  ajax.onreadystatechange = function () {
    if (this.status === 200 && this.readyState == 4) {
      console.log(this.responseText);
      let data = JSON.parse(this.responseText);
      partydiv.innerHTML = `${data[0].excuse}`;
    } else {
      this.onerror = onerror();
    }
  };
  ajax.send();
}
function onerror() {
  partydiv.textContent = "Something went wrong!!! Click the below button for next Excuse!!!";
}
