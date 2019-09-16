//Ajax with Promise
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
