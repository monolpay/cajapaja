var Email = { send: function (a) { return new Promise(function (n, e) { a.nocache = Math.floor(1e6 * Math.random() + 1), a.Action = "Send"; var t = JSON.stringify(a); Email.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?", t, function (e) { n(e) }) }) }, ajaxPost: function (e, n, t) { var a = Email.createCORSRequest("POST", e); a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), a.onload = function () { var e = a.responseText; null != t && t(e) }, a.send(n) }, ajax: function (e, n) { var t = Email.createCORSRequest("GET", e); t.onload = function () { var e = t.responseText; null != n && n(e) }, t.send() }, createCORSRequest: function (e, n) { var t = new XMLHttpRequest; return "withCredentials" in t ? t.open(e, n, !0) : "undefined" != typeof XDomainRequest ? (t = new XDomainRequest).open(e, n) : t = null, t } };


function sendEmail() {
  let message = document.getElementById("message").value
  let name = document.getElementById("firstName").value
  let place = document.getElementById("place").value
  let phone = document.getElementById("phone").value


  Email.send({
    Host : "smtp.elasticemail.com",
    Username : "jan.naprstek@kcentrum.eu",
    Password : "899AC3D03B707426E71CF276492168501D7B",
    To : 'jan.naprstek@kcentrum.eu',
    From : "jan.naprstek@kcentrum.eu",
    Subject : "Čaj se řítí",
    Body : "Jméno:<br>"+name+"<hr>Tel. číslo<br>"+phone+"<hr>Místo pro doručení<br>"+place+"<hr>Objednávka<br>"+message,
    
})
alert("Email se odeslal úspěšně")
}
