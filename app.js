let btn = document.querySelector(".chk_btn");

btn.addEventListener("click", ()=>{
    let get_laptop = parseInt(document.querySelector("#laptop").value);
    let get_clock = parseInt(document.querySelector("#clock").value);
    let get_phone = parseInt(document.querySelector("#phone").value);

    function get_bills(item_1, item_2, item_3) {
        return item_1 + item_2 + item_3;
    }

    let body_field_select = document.querySelector(".register");
    body_field_select.style.height = "350px";

    let result = document.querySelector(".totoal_amount");
    result.innerHTML = "Your total bills are: " + get_bills(get_laptop, get_clock, get_phone) + "Tk";
})