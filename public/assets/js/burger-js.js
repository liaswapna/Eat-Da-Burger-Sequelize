// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {

    // send post request for the burgers
    $('.add-btn').on('click', function (e) {
        e.preventDefault()
        let burger = {
            burger_name: $('#bur').val().trim(),
        }
        console.log(burger)
        $.ajax('/api/burgers',{
            type:"POST",
            data: burger
        }).then(function(){
            console.log('created new burger!!')
            location.reload()
        })
    })

    $(document).on("click", ".devour-btn", function(){
    
        var input = "#"+ $(this).data("input");
        var name = $(input).val().trim()
        if(name === ''){
            name = "NO_NAME"
        }
        let customer = {
            customer_name: name,
            BurgerId: $(this).data('id')
        }
        console.log(customer)
        let burger = {
            id: $(this).data('id'),
            devoured: true
        }
        console.log(burger)
        $.ajax('/api/burger',{
            type:"PUT",
            data: burger
        }).then(function(){
            $.ajax('/api/customers',{
                type:"POST",
                data: customer
            }).then(function(){
            console.log('burger updated!!')
            location.reload()
        })
        })
    })
    $(".delete-btn").on("click", function(e) {
        e.preventDefault()
        let burger = {
            id: $(this).data('id')
        }
        
        $.ajax('/api/burger',{
            type: "DELETE",
            data: burger
        }).then(function(){
            console.log('burger deleted!!')
            location.reload()
        })
    })
});