let passwordLenght = document.getElementById('passwordLength')
let password = document.getElementById("password")
let saveButton = document.getElementById("saveButton")

function generatePassword(len) {
    const lowerAlfabet = "abcdefghijklmnopqrstuvwxyz";
    const upperAlfabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numeric = "123456789"
    const symbol = "!@#$%^&*()"

    const data = lowerAlfabet + upperAlfabet + numeric + symbol
    let generator = '';
    for (index = 0; index < len; index++) {
        generator += data[~~(Math.random() * data.length)];
    }

    return generator

}

function getPassword() {
    const newPassword = generatePassword(passwordLenght.value)
    password.value = newPassword
    setTimeout(() => {
        alert('password has been generated')
    }, 1000)
}





const savePassword = () => {
    document.title = password.value
    saveButton.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(`password saya : ${document.title}`))
    saveButton.setAttribute('download', 'MyPasswordGeneratorLOG.txt')
    setTimeout(() => {
        alert('password berhasil disimpan')
    }, 1000)
}