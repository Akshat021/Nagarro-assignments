// adding Todo
$('input[type="button"]').click(function(event){
    let todoText = $('input[type="text"]').val();
    const todo = `<li>${todoText} <button id="update">update</button> <button id="done">X</button> </li>` 
    $('ul').append(todo);
    $('input[type="text"]').val("");
})

$('input[type="text"]').keypress(function(event){
    if(event.which == 13){
        let todoText = $(this).val();
        const todo = `<li><span>${todoText}</span><button id="update">update</button> <button id="done">X</button> </li>` 
    $('ul').append(todo);
    $(this).val("");
    }
})

// remove todo
$('ul').on('click','#done',function(){
    let li = $(this).parent().remove();
})

// update todo
$('ul').on('click','#update',function(){
    let liElement = $(this).parent().children()[0];
    console.log(liElement.innerText);
    $('input[type="text"]').val(liElement.innerText);
    $(this).parent().remove();
})