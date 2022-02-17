function replaceTextImp() {
  var target = document.getElementById("main");
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "partials/important.html", true);
  xhr.onreadystatechange = function () {
    console.log("readyState: " + xhr.readyState);
    if (xhr.readyState == 2) {
      target.innerHTML = "Loading...";
    }
    if (xhr.readyState == 4 && xhr.status == 200) {
      target.innerHTML = xhr.responseText;
    }
  };
  xhr.send();
}

var button = document.getElementById("important");
button.addEventListener("click", replaceTextImp);

function replaceText() {
  var target = document.getElementById("main");
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "partials/lvisa.html", true);
  xhr.onreadystatechange = function () {
    console.log("readyState: " + xhr.readyState);
    if (xhr.readyState == 2) {
      target.innerHTML = "Loading...";
    }
    if (xhr.readyState == 4 && xhr.status == 200) {
      target.innerHTML = xhr.responseText;
    }
  };
  xhr.send();
}

var button = document.getElementById("lvisa");
button.addEventListener("click", replaceText);

function replaceTextQ() {
  var target = document.getElementById("main");
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "partials/q1visa.html", true);
  xhr.onreadystatechange = function () {
    console.log("readyState: " + xhr.readyState);
    if (xhr.readyState == 2) {
      target.innerHTML = "Loading...";
    }
    if (xhr.readyState == 4 && xhr.status == 200) {
      target.innerHTML = xhr.responseText;
    }
  };
  xhr.send();
}

var button = document.getElementById("q1visa");
button.addEventListener("click", replaceTextQ);

var button = document.getElementById("lvisa");
button.addEventListener("click", replaceText);

function replaceTextQ2() {
  var target = document.getElementById("main");
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "partials/q2visa.html", true);
  xhr.onreadystatechange = function () {
    console.log("readyState: " + xhr.readyState);
    if (xhr.readyState == 2) {
      target.innerHTML = "Loading...";
    }
    if (xhr.readyState == 4 && xhr.status == 200) {
      target.innerHTML = xhr.responseText;
    }
  };
  xhr.send();
}

var button = document.getElementById("q2visa");
button.addEventListener("click", replaceTextQ2);

function replaceTextFees() {
  var target = document.getElementById("main");
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "partials/fees.html", true);
  xhr.onreadystatechange = function () {
    console.log("readyState: " + xhr.readyState);
    if (xhr.readyState == 2) {
      target.innerHTML = "Loading...";
    }
    if (xhr.readyState == 4 && xhr.status == 200) {
      target.innerHTML = xhr.responseText;
    }
  };
  xhr.send();
}

var button = document.getElementById("fees");
button.addEventListener("click", replaceTextFees);

function replaceTextvisa_multi() {
  var target = document.getElementById("main");
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "partials/visamulti.html", true);
  xhr.onreadystatechange = function () {
    console.log("readyState: " + xhr.readyState);
    if (xhr.readyState == 2) {
      target.innerHTML = "Loading...";
    }
    if (xhr.readyState == 4 && xhr.status == 200) {
      target.innerHTML = xhr.responseText;
    }
  };
  xhr.send();
}

var button = document.getElementById("visa_multi");
button.addEventListener("click", replaceTextvisa_multi);
