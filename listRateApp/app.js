$("document").ready(() => {
    let $form = $("#row-form");
    let $list = $("#list")
    //retrieving saved element 
    let listElems = JSON.parse(localStorage.getItem("listElems")) || [];
    //adding retrieved elements on the list
    listElems.forEach((e, i, a) => {
        let newRow = newRows(e.item, e.rating);
        $list.append(newRow);
    })
    //listener in the form to create a new row
    $form.on("submit", (e) => {
        e.preventDefault();
        //get the info from form
        let item = $("#name").val();
        let rating = $("#rating").val();
        //create new row
        //let newRow = $(`<tr><th>${item}</th><th>${rating}</th><th><button>Remove</button></th></tr>`);
        let newRow = newRows(item, rating);
        //append to the list
        $list.append(newRow);
        //adding to the local storage
        listElems.push({ 'item': item, 'rating': rating });
        localStorage.setItem('listElems', JSON.stringify(listElems))
        $form.trigger('reset');
    });
    //eventListener to delete rows
    $list.on("click", "button", (e) => {
        $target = $(e.target);
        $target.parent().parent().remove();
        let text = $target.parent().parent().text()
        //text = text.split("").slice(0, text.length - 8).join("");
        console.log(text);
        //removing the item from local storage
        let indexToRemove = listElems.map((e) => {
            return e.item;
        }).indexOf(text);
        //resolver o salve
        listElems.splice(indexToRemove, 1);

        localStorage.setItem('listElems', JSON.stringify(listElems))
    });
    // filter the list
    $('#filters').on("click", 'button', (e) => {
        $tgt = $(e.target);
        let id = $tgt.attr("id")
        //empty the list
        $(".listItem").each((i, e) => {
            e.remove();
        });
        //selecting the button and ordening the array
        if (id === "buttonA-Z") {
            console.log(listElems);
            listElems.sort((a, b) => {
                if (a.item > b.item)
                    return 1;
                if (a.item < b.item)
                    return -1;
                return 0;
            });
        }
        else if (id === "buttonZ-A") {
            listElems = listElems.sort((a, b) => {
                if (a.item > b.item)
                    return -1;
                if (a.item < b.item)
                    return 1;
                return 0;
            })
        }
        else if (id === "button10-0") {
            listElems.sort((a, b) => {
                if (a.rating < b.rating)
                    return 1
                if (a.rating > b.rating)
                    return -1
                return 0
            })
        }
        else if (id === "button0-10") {
            listElems.sort((a, b) => {
                if (a.rating < b.rating)
                    return -1
                if (a.rating > b.rating)
                    return 1
                return 0
            })
        }
        localStorage.setItem('listElems', JSON.stringify(listElems));

        //ading the elements
        listElems.forEach((e, i, a) => {
            let newRow = newRows(e.item, e.rating);
            $list.append(newRow);
        })
    })
});
function newRows(item, rating) {
    return $(`<tr class="listItem" ><th>${item}</th><th>${rating}</th><th><button>Remove</button></th></tr>`);
}