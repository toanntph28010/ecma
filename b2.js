var h1 = document.querySelector('h1')

var text = h1.innerHTML
text = text.toLowerCase()
text = text.replaceAll("cho","meo")
console.log(text[0].toUpperCase()+text.slice(1));

var test = "sdsfjhh"
//Giá trị trả về của hàm sau từ khóa return
function reverString1(str){
  console.log(str);
  return str
}
 console.log("reverString1", reverString1(test));