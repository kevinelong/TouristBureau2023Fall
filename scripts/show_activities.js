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

    const categoriesSelect = select("categories", categories);
    document.body.appendChild(categoriesSelect);

    function objectSelect(id, list, display, value, filterOn, filterValue){
        const e = document.createElement("select");
        e.id = id;
        
        const defaultOption = document.createElement("option");
        defaultOption.innerText = "Select One";
        e.appendChild(defaultOption); // put it in the list
        e.selectedIndex = 0; //SELECT FIRST ITEM AS DEFAULT

        for(let i = 0; i < list.length; i++){
            if( list[i][filterOn] == filterValue){
                const o = document.createElement("option");
                o.innerText = list[i][display];
                o.value = list[i][value];
                e.appendChild(o);    
            }
        }

        return e;
    }
    function displayActivity(id, list){
        for(let i = 0; i < list.length; i++){
            const item = list[i];
            if( item.id == id){
                let d = document.getElementById("display");
                if( d != undefined){
                    d.remove();
                }
                d = document.createElement("pre");
                d.id = "display";
                d.innerHTML = `
                    ${item.id}
                    ${item.name}
                    ${item.description}
                    ${item.location}
                    ${item.price}
                `;
                document.body.appendChild(d);
            }
        }
    }
    categoriesSelect.addEventListener("change", (e)=>{
        const items = document.getElementById("items");
        if( items != undefined){
            items.remove();
        }
        const activitiesSelect = objectSelect("items", activities, "name", "id", "category", e.target.value)
        document.body.appendChild(activitiesSelect);
        
        activitiesSelect.addEventListener("change", (e)=>{
            displayActivity(e.target.value, activities);
        })// SECOND LIST CHANGE

    });//END CHANGE

}); //END DOM CONTENT LOADED
