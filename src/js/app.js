$(document).ready(function () {
    handleTextarea(true);
    $('#add').click(function () {
        var tarefa = $('textarea').val();

        if (tarefa.length === 0 || !tarefa.trim()) {
            handleTextarea(false);
        } else {
            handleTextarea(true);

            var post_it = createPostIt(tarefa);

            $("#fazer").append(post_it);

            $('.moveFazendo').unbind().click(function () {

                $(this).parent()
                    .removeClass("todo")
                    .addClass("doing");

                $(this).removeClass("moveFazendo").addClass("moveFeito");

                $('#fazendo').append(document.getElementById($(this).parent().attr('id')));

                $('.moveFeito').click(function () {
                    $(this).hide();

                    $(this).parent()
                        .removeClass("doing")
                        .addClass("done");

                    $('#feito').append(document.getElementById($(this).parent().attr('id')));
                })
            })
        }
    })
})

function createPostIt(tarefa) {
    var card = $("<div></div>")
        .attr('id', idGenerator())
        .addClass("todo")
        .append($("<p></p>")
            .text(tarefa))
        .append($("<button></button>")
            .addClass('moveFazendo fas fa-chevron-right fa-2x'));
    return card;
}

function idGenerator() {
    var stg = function () {
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    return (stg() + stg() + "-" + stg() + "-" + stg() + "-" + stg() + "-" + stg() + stg() + stg());
}

function handleTextarea(status) {
    if (status) {
        $('#error').hide();
    } else {
        $('#error').show();
    }
    
    $('textarea').val("");
    $('textarea').focus();
}