let DATA = [];
var counter;
function addAnything() {
    document.getElementById('container').innerHTML = '';
    let input = document.getElementById('input').value;
    DATA.push(input);
    
    for(var i = 0; i<DATA.length; i++) {
        document.getElementById('container').innerHTML += "<div><input type='checkbox' id="+i+" onclick='strikeItem(this.id)'><span> " +DATA[i]+ " </span><button onclick='edit(this.id)'> edit </button><button onclick='change(this.id)'> change </button><button onclick='delete(this.id)'> delete </button></div><br>";
    }
}
function edit(id){
    document.getElementById('container').nextSibling.innerHTML += "<input type='text' value="+document.getElementById(id).nextSibling.textContent+" id=00"+id+"><button onclick='editElement("+id+")'>lattest edit</button>"; 

}