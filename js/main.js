$('#cpf').mask('000.000.000-00')

$('#cep').mask('00000-000')

$('#telefone').mask('(00) 00000-0000')

$('form').validate({
    rules: {
        nome: {
            required: true
        },
        email: {
            required: true,
            email: true
        },
        telefone: {
            required: true,
        },
        cpf: {
            required: true,
        },
        cep: {
            required: true,
        },
        endereco: {
            required: true,
        }
    },

    messages: {
        nome: 'Por favor, insira o seu nome'
    },
    submitHandler: function (form) {
        console.log(form)
    },
    invalidHandler: function (evento, validador) {
        let camposIncorretos = validador.numberOfInvalids();
        if (camposIncorretos) {
            alert(`Existem ${camposIncorretos} campos incorretos`)
        }
    }
})

$('form').on('submit', function (e) {
    e.preventDefault();
    $('#cpf').val(' ')
    $('#cep').val(' ')
    $('#telefone').val(' ')
    $('#endereco').val(' ')
    $('#nome').val(' ')
    $('#email').val(' ')
})