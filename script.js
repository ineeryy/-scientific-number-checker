function validateNumber() {
    let input = document.getElementById("numberInput").value;
    let result = document.getElementById("result");

    // Regex untuk validasi angka dalam format notasi ilmiah
    let scientificNotationRegex = /^-?\d+(\.\d+)?(e[-+]?\d+)?$/i;

    if (scientificNotationRegex.test(input)) {
        result.textContent = "Yes, it is a number";
        result.style.color = "green";
    } else {
        result.textContent = "No, it is not a number";
        result.style.color = "red";
    }
}
