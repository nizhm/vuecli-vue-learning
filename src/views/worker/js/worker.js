self.addEventListener('message', function (e) {
  if(e.data === 'confirm') {
    console.log(window.localStorage.getItem('operation'))
    window.localStorage.setItem('operation', e.data)
  }else {
    console.log(window.localStorage.getItem('operation'))
    window.localStorage.setItem('operation', 'cancel')
  }
  self.postMessage('terminate');
}, false);
