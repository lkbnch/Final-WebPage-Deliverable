function openChat(){
  document.getElementById('chatbox').style.display='block';   
}
  
function closeChat(){
  document.getElementById('chatbox').style.display='none';
}

function sendMessage(){
  if(document.getElementById('textarea').value != ''){
    alert(document.getElementById('textarea').value + "    ... is your message. Currently no database to store message.")
    document.getElementById('textarea').value = '';
  }
  
}