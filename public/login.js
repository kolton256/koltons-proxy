var attempt = 3;
function validate() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  if (username == "administrator" && password == "7i#26v+qfba8") {
    alert("Logged in as Admin");
    window.location = "proxy.html";
    return false;
  }
  if (username == "giovanni.yoder" && password == "!giovanni07") {
    alert("Logged in as Giovanni Yoder");
    window.location = "proxy.html";
    return false;
  }
   if (username == "izaiah.richardson" && password == "!izaiah12") {
    alert("Logged in as Izaiah Richardson");
    window.location = "proxy.html";
    return false;
  }
  if (username == "keiaudre.cannon" && password == "!keiaudre07") {
    alert("Logged in as Keiaudre Cannon ");
    window.location = "proxy.html";
    return false;
  }
  if (username == "joshua.biehle" && password == "chickennugget") {
    alert("Logged in as Joshua Biehle");
    window.location = "proxy.html";
    return false;
  }
   if (username == "cameron.roupe" && password == "022007") {
    alert("Logged in as Cameron Roupe ");
    window.location = "proxy.html";
    return false;
  }
  else {
    attempt--;
    alert(
      "WRONG FUCKING PASSWORD IDIOT You have " + attempt + " attempt(s) left"
    );
    if (attempt == 0) {
      document.getElementById("username").disabled = true;
      document.getElementById("password").disabled = true;
      document.getElementById("submit").disabled = true;
      return false;
    }
  }
}
