function sendReview() {
  if(document.getElementById('reviewtext').value != '' && document.getElementById('departments').value != 'none'){
    var text = document.getElementById('reviewtext').value
    var depo = document.getElementById('departments').value
    document.getElementById('reviewtext').value = ''

    writeReview(depo, text)
  }
}

function writeReview(d, t){
  var add = document.getElementById('content').innerHTML
  add = add + "<div id='reviewbox'>"

   add = add + "<h id='reviewhead'>" + d + ":</h> <br>"
   add = add + "<h id='reviewprompt' rows='4'>" + t + "</h>"


  add = add + "</div>"
  document.getElementById('content').innerHTML = add
}