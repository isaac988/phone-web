$(document).ready(function(){

    $('.list').click(function(){
        $(".list").removeClass('active');
        $(this).addClass('active');
    });
    
    let elements = document.querySelectorAll(".product-box");
    let buttons = document.querySelectorAll(".btn-filter");
    $('.btn-filter').click(function(){
        $(".btn-filter").removeClass('active');
        $(this).addClass('active');
        // return false;
        
        buttons.forEach((button) => {
            // check if value equals innerText
            if(value == button.innerText){
                button.classList.add("active");
            } else {
                button.classList.remove("active");
            }
        });

        // select all cards
        

        elements.forEach((element) => {
            //display all cards on 'all' button click
            if(value == "all"){
                element.classList.remove("hide");
            }
            else{
                //check if element contains category class
                if(element.classList.contains(value)){
                    //display element based on category
                    element.classList.remove("hide");
                }
                else{
                    //hide other elements
                    element.classList.add("hide");
                }
            }
        });
    });
    
    window.onload = () => {
        filterProduct("all");
    }
    //   });



    

    // filter items on button click
    $(".button-grp").on("click", "button", function(){
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue});
    });


    // product qty section   
    let $qty_up = $(".qty-up");
    let $qty_down = $(".qty-down");
    // let $input = $(".qty_input");



    //click on qty up button
    $qty_up.click(function(e){
        let $input = $(`.qty_input[data-id='${$(this).data("id")}']`);
        if($input.val() >= 1 && $input.val()<=9){
            $input.val(function(i,oldval){
                return ++oldval;
            })
        }
    });

    //click on qty down button
    $qty_down.click(function(e){
        let $input = $(`.qty_input[data-id='${$(this).data("id")}']`);
        if($input.val() > 1 && $input.val()<=10){
            $input.val(function(i,oldval){
                return --oldval;
            })
        }
    });
});
