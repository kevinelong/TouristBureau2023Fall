document.addEventListener("DOMContentLoaded", ()=>{
    
    function select(id, list){
        const e = document.createElement("select");
        e.id = id;
        
        const defaultOption = document.createElement("option");
        defaultOption.innerText = "Select One";
        e.appendChild(defaultOption); // put it in the list
        e.selectedIndex = 0; //SELECT FIRST ITEM AS DEFAULT

        for(let i = 0; i < list.length; i++){
            const o = document.createElement("option");
            o.innerText = list[i];
            e.appendChild(o);
        }
        
        return e;
    }

    document.body.appendChild(select("categories", categories));

}); //END DOM CONTENT LOADED
