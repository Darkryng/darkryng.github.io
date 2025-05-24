let input  = $("#text-input");
let output = $("#text-output");
let word   = $("#word-input");

function changeText() {
    let text = input.val();
    let regex = new RegExp(`(\\d+)\\s+${word.val()}`, 'g');

    let match;
    let results = [];

    output.empty();
    while ((match = regex.exec(text)) !== null) {
        results.push(match[1]);
    }

    if (results.length > 0) {
        output.val(results.join('\n'));
    }
    else {
        output.val("Nenhum resultado encontrado");
    }
}

    output.on('click', function() {
        this.select();
        document.execCommand('copy');
    });

input.on('input', changeText);
