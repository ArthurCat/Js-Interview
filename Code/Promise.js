//Ajax with Promise 'GET'
const gstJSON = (url) => {
  const promise = new Promise((resolve, reject) => {
    const handler = () {
      if (this.readyState !==4) {
        return;
      }
      if (this.status === 200) {
        resolve(this.response);
      } else {
        reject(new Error(this.statusText));
      }
    };
    
    const client = new XMLHttpRequest();
    client.open('GET',url);
    client.onreadystatechange = handler;
    client.responseType = 'json';
    client.setRequestHeader('Accept', 'application/json');
    client.send();
  });
  
  return promise;
};

getJSON('/posts.json').then(
  (json) => {
    console.log('Constents: ' + json);
  },
  (error) => {
    console.log('Error!', error);
  });
//Ajax 'POST'
const clien = XMLHttpRequest();
client.open('post', url);
client.setRequestHeader('contentType','application/json');
client.send(JSON.stringfy({name:"Zheng", id:"123"});
  
//promise to async
function getProcessedData(url) {
  return downloadData(url) // returns a promise
    .catch(e => {
      return downloadFallbackData(url); // returns a promise
    })
    .then(v => {
      return processDataInWorker(v); // returns a promise
    });
}

async function getProcessedData(url) {
  let v;
  try {
    v = await downloadData(url); 
  } catch(e) {
    v = await downloadFallbackData(url);
  }
  return processDataInWorker(v);
}

//Load Image
const loadImageAsync(url) {
  return new Promise(function (resolve, reject) {
    const image = new Image();
    image.onload = function() {
      resolve(image);
    };
    
    image.onerror = function() {
      reject(new Error('Could not load image at' + url));
    };
    
    image.src = url;
  });
}
