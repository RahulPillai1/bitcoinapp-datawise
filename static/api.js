const Http = new XMLHttpRequest();
const url = 'https://api.coindesk.com/v1/bpi/currentprice.json';
Http.open("GET", url);
Http.send();

Http.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var d = new Date();
        var tzoffset = d.getTimezoneOffset();
        resp = JSON.parse(Http.responseText);
        console.log(Object.keys(resp));
        document.getElementById("time").innerHTML = Date(
            Date.parse(resp.time.updated) - tzoffset
        );
        document.getElementById("BPI").innerHTML = resp.bpi.USD.symbol + resp.bpi.USD.rate;
        document.getElementById("disclaimer").innerHTML = resp.disclaimer;
    }
}