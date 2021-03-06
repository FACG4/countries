let dataNode = document.querySelector('#dataList');

input.addEventListener('input', function(x){
  x.preventDefault();
  dataNode.innerHTML = '';
  if(input.value)
  getData();
});

function fetch(url, callback){
    let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function(){
    if(xhr.readyState === 4 && xhr.status === 200){
      let response = JSON.parse(xhr.responseText);
      callback(response);
    }
  }
  xhr.open('POST', url);
  xhr.send(input.value);
}

function getData(){
 fetch('/input', function(response){
   response.forEach(x => {
     let option = document.createElement('option');
     option.value = x;
     dataNode.appendChild(option);
   })
 })
}
