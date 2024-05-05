$(document).ready(function () {
    const nato = {
        // NATO mappings
        "A": "Alpha", "B": "Bravo", "C": "Charlie", "D": "Delta", "E": "Echo", "F": "Foxtrot",
        "G": "Golf", "H": "Hotel", "I": "India", "J": "Juliett", "K": "Kilo", "L": "Lima",
        "M": "Mike", "N": "November", "O": "Oscar", "P": "Papa", "Q": "Quebec", "R": "Romeo",
        "S": "Sierra", "T": "Tango", "U": "Uniform", "V": "Victor", "W": "Whiskey", "X": "X-ray",
        "Y": "Yankee", "Z": "Zulu", "1": "One", "2": "Two", "3": "Three", "4": "Four",
        "5": "Five", "6": "Six", "7": "Seven", "8": "Eight", "9": "Nine", "0": "Zero"
    };

    const civilian = {
        // Civilian mappings
        "A": "Adam", "B": "Boy", "C": "Charles", "D": "David", "E": "Edward", "F": "Frank",
        "G": "George", "H": "Henry", "I": "Ida", "J": "John", "K": "King", "L": "Lincoln",
        "M": "Mary", "N": "Nora", "O": "Ocean", "P": "Paul", "Q": "Queen", "R": "Robert",
        "S": "Sam", "T": "Tom", "U": "Union", "V": "Victor", "W": "William", "X": "Xander",
        "Y": "Yvonne", "Z": "Zach", "1": "One", "2": "Two", "3": "Three", "4": "Four",
        "5": "Five", "6": "Six", "7": "Seven", "8": "Eight", "9": "Nine", "0": "Zero"
    };


    const developer = {
        ".": "dot", "!": "bang", "*": "star",
        "@": "at", "#": "hash", "$": "dollar",
        "%": "percent", "^": "caret", "&": "ampersand",
        "+": "plus", "-": "dash", "=": "equals",
        "<": "less than", ">": "greater than",
        "(": "left parenthesis", ")": "right parenthesis",
        "{": "left curly brace", "}": "right curly brace",
        "[": "left square bracket", "]": "right square bracket",
        "|": "pipe", ":": "colon", ";": "semicolon",
        ",": "comma", "_": "underscore", "/": "slash",
        "?": "question mark", "~": "tilde", "`": "backtick",
        "'": "single quote", '"': "double quote"
    };

    $('#convertButton').click(function () {
        let input = $('#textInput').val().toUpperCase();
        let output = input.split('').map(char => {
            if ($('#toggleDeveloper').is(':checked')) {
                return developer[char] || char;
            } else if ($('#toggleCivilian').is(':checked')) {
                return civilian[char] || char;
            } else {
                return nato[char] || char;
            }
        }).join(' '); // Join the characters into a single string separated by spaces

        // Update the output area with the generated phonetic transcription
        $('#outputArea').text(output);
    });
    $('#clearButton').click(function () {
        // Clear the input and output area
        $('#textInput').val('');
        $('#outputArea').text('');
    });
});
