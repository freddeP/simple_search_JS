const stuff = ["Hello", "world", "ajax", "php", "node"];
document.getElementById("input").addEventListener("keyup",search);
document.getElementById("add").addEventListener("click",add);

function search(ev)
{  
    if(ev.keyCode === 13) add();
    const result = [];
    if(this.value.trim() == ""){
        print(result);
        return false;
    }
    
    const seek = this.value;
    const exp = new RegExp(seek, "i");
    stuff.forEach(el=>{
        let index = el.search(exp);
        if(index > -1) result.push(el);
    });
    console.table(result);
    console.log(result.length);
    print(result);
}

function print(data)
{
    document.getElementsByClassName("result")[0].innerHTML = data.join("<hr>");
}

function add()
{
    stuff.push(document.getElementById("input").value);
    console.log(stuff[stuff.length - 1] + " was added");
}
