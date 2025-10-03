r = Math.random()
console.log(r)
const m = document.getElementById('vid1')
m.style.display = "none";

if (r < 0.1){
    m.style.display = "block";
}else{
    m.style.display = "none";
    console.log("noo!")
} 