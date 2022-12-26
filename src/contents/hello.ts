export {}

console.log("HELLO")

document.onclick = function (e) {
  var x = e.pageX
  var y = e.pageY

  console.log("HELLO", x, " and ", y)
}
