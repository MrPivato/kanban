$(document).ready(function()
        {
                function idGenerator() 
                {
                        var S4 = function() {
                                return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
                        };
                        return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
                }


                $('#add').click(function()
                        {
                                var tarefa = $('textarea').val();

                                if (tarefa.length === 0 || !tarefa.trim())
                                {
                                        $('#error').show();
                                        $('textarea').val("");
                                } else {

                                        $('#error').hide();
                                        $('textarea').val("");

                                        var post_it = $("<div></div>")
                                                .attr('id', idGenerator())
                                                .addClass("alert")
                                                .addClass("alert-warning")
                                                .append($("<p></p>")
                                                        .text(tarefa))
                                                .append($("<button>Mover</button>")
                                                        .addClass('btn btn-warning')
                                                        .addClass('moveFazendo'));

                                        $("#fazer").append(post_it);

                                        $('.moveFazendo').unbind().click(function()
                                                {
                                                        $(this).parent()
                                                                .removeClass("alert-warning")
                                                                .addClass("alert-primary")
                                                                .append($("<br>"))
                                                                .append($('<div></div>')
                                                                        .attr('id', "error2")
                                                                        .append($('<strong></strong>'))
                                                                        .text('Digite um nome válido!')
                                                                        .addClass('alert')
                                                                        .addClass('alert-danger'))
                                                                .append($('<input name="nome" maxlength="15" type="text" placeholder="Digite seu nome">')
                                                                        .attr('id', idGenerator())
                                                                        .addClass('nome'))
                                                                .append($("<br>"))
                                                                .append($("<button>Adicionar</button>")
                                                                        .addClass('btn')
                                                                        .addClass('badge')
                                                                        .addClass('badge-pill')
                                                                        .addClass('badge-light')
                                                                        .addClass('addNome'));

                                                        $('.addNome').unbind().click(function()                                                                {

                                                                var texto = $(this).parent().find('input:text[name="nome"]').val();

                                                                if (texto.length === 0 || !texto.trim())
                                                                {
                                                                        $('#error2').show();
                                                                } 
                                                                else 
                                                                {
                                                                        $('#error2').hide();

                                                                        $(this).parent().find('p').append("<br>--<br>" + texto);

                                                                        $(this).hide();

                                                                        $(this).parent().find('input:text[name="nome"]').hide();
                                                                }
                                                        })

                                                        $(this).removeClass("moveFazendo")
                                                                .removeClass("btn-warning")
                                                                .addClass("btn-info")
                                                                .addClass("moveFeito");

                                                        $('#fazendo').append(document.getElementById($(this).parent().attr('id')));

                                                        $('.moveFeito').click(function()
                                                                {
                                                                        $(this).hide();

                                                                        $('#error2').hide();

                                                                        $(this).parent()
                                                                                .removeClass("alert-warning")
                                                                                .addClass("alert-success");

                                                                        if ($(this).parent().find('input:text[name="nome"]').val() == '')
                                                                        {
                                                                                $(this).parent().find('p').append("<br>--<br>Anônimo");
                                                                        }

                                                                        $(this).parent().find('input:text[name="nome"]').hide();
                                                                        $(this).parent().find('.addNome').hide();

                                                                        $('#feito').append(document.getElementById($(this).parent().attr('id')));
                                                                })
                                                })
                                }
                        })

        })
