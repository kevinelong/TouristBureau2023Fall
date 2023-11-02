document.addEventListener("DOMContentLoaded", () => {

    function select(id, list) {
        const e = document.createElement("select");
        e.id = id;

        const defaultOption = document.createElement("option");
        defaultOption.innerText = "Select One";
        e.appendChild(defaultOption); // put it in the list
        e.selectedIndex = 0; //SELECT FIRST ITEM AS DEFAULT

        for (let i = 0; i < list.length; i++) {
            const o = document.createElement("option");
            o.innerText = list[i];
            e.appendChild(o);
        }

        return e;
    }

    const categoriesSelect = select("categories", categories);
    document.body.appendChild(categoriesSelect);

    function objectSelect(id, list, display, value, filterOn, filterValue) {
        const e = document.createElement("select");
        e.id = id;

        const defaultOption = document.createElement("option");
        defaultOption.innerText = "Select One";
        e.appendChild(defaultOption); // put it in the list
        e.selectedIndex = 0; //SELECT FIRST ITEM AS DEFAULT

        for (let i = 0; i < list.length; i++) {
            if (list[i][filterOn] == filterValue) {
                const o = document.createElement("option");
                o.innerText = list[i][display];
                o.value = list[i][value];
                e.appendChild(o);
            }
        }

        return e;
    }

    function submitForm(e){
        e.preventDefault();
        let div = document.getElementById("message");
        if(div != undefined){
            div.remove();
        }
        const amount = Number(quantity.value) * Number(price.value);
        div = document.createElement("div");
        div.id="message";
        div.innerText = `
            Your credit card has been charged $${amount} 
            for ${quantity.value} 
            to ${itemName.value}. 
            A confirmation email has been sent to ${email.value}.
        `;
        document.body.appendChild(div);
    }//END submit form

    function displayForm(item){
        let f = document.getElementById("form");

        if (f != undefined) {
            f.remove();
        } 

        if(item.price == 0){
            return; //EXIT WE ARE DONE
        }

        //NOT ZERO
        f = document.createElement("form");
        f.id = "form";

        f.innerHTML = `
            <fieldset>
                <legend> E-Ticket Purchase Form </legend><br>
                <label>number of tickets <input type="number" id="quantity" value="2"></label><br>
                <label>credit card number <input></label><br>
                <label>email address <input type="email" id="email"></label><br>
                <input type="submit" value="Purchase"><br>
                <input type="reset" value="Clear"><br>
            </fieldset>
            <input type="hidden" id="price" value="${item.price}">
            <input type="hidden" id="itemName" value="${item.name}">
        `;
        f.addEventListener("submit", submitForm);

        document.body.appendChild(f);
    }//END displayForm

    function displayActivity(id, list) {
        for (let i = 0; i < list.length; i++) {
            const item = list[i];
            if (item.id == id) {
                let d = document.getElementById("display");
                if (d != undefined) {
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
                displayForm(item)
            }
        }
    }
    categoriesSelect.addEventListener("change", (e) => {
        const items = document.getElementById("items");
        if (items != undefined) {
            items.remove();
        }
        const activitiesSelect = objectSelect("items", activities, "name", "id", "category", e.target.value)
        document.body.appendChild(activitiesSelect);

        activitiesSelect.addEventListener("change", (e) => {
            displayActivity(e.target.value, activities);
        })// SECOND LIST CHANGE

    });//END CHANGE

}); //END DOM CONTENT LOADED
