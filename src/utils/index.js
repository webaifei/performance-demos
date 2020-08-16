function isTemplate() {

}

function sleep (timeout) {
  return new Promise(function (resolve) {
    setTimeout(()=> {
      resolve();
    }, timeout)
  })
}

exports.sleep = sleep;
