$(document).ready(() => {
  new ClipboardJS('#copy-output');

  let str = 'this is a test';

  $('#encode-submit').click(() => {
    let raw_in = $('#input').val();
    // let salt = $('#salt').val();
    let result = encodeValues(JSON.parse(raw_in));
    result.obfuscated = true;
    let output = JSON.stringify(result, null, 2);
    $('#encoded-output').html(output);
  });

  $('#decode-submit').click(() => {
    let raw_in = $('#input').val();
    let result = encodeValues(JSON.parse(raw_in), 'decode');
    result.obfuscated = false;
    let output = JSON.stringify(result, null, 2);
    $('#encoded-output').html(output);
  });
});

function encodeValues(obj, action = 'encode') {
  let salt = 'SuperSekrit';
  if (typeof obj === 'object') {
    // iterating over the object using for..in
    for (var keys in obj) {
      //checking if the current value is an object itself
      if (typeof obj[keys] === 'object') {
        // if so then again calling the same function
        encodeValues(obj[keys], action);
      } else {
        // else getting the value and transforming
        let initialString = obj[keys];
        if (action == 'encode') {
          obj[keys] = btoa(obj[keys]);
          // obj[keys] = CryptoJS.AES.encode(obj[keys], salt).toString();
        } else {
          obj[keys] = atob(obj[keys]);
          // obj[keys] = CryptoJS.AES.decode(obj[keys], salt).toString();
        }
      }
    }
  }
  return obj;
}
