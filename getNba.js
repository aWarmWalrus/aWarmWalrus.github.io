function getToday() {
  var request = new XMLHttpRequest();
  request.open('GET', 'http://data.nba.net/10s/prod/v1/today.json', true);
  request.send(null);
  request.onreadystatechange = function () {
    if (request.readyState == 4 && request.status == 200) {
      var type = request.getResponseHeader('Content-Type');
      console.log(request.responseText);
    }
  }
}
