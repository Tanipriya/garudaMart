/*
const btn = document.querySelector('button')
const inputs = document.querySelector('form')
btn.addEventListener('click', () => {

    const firstname = (document.getElementById("firstName").value)
    const lastname = (document.getElementById("lastName").value)
    const contact = (document.getElementById("contactNumber").value.trim())
    const pincode = (document.getElementById("pinCode").value).trim()
    const email = (document.getElementById("email").value.trim())
    const height = (document.getElementById("height").value).trim()
    const width = (document.getElementById("width").value.trim())
    const length = (document.getElementById("Length").value).trim()
    const message = (document.getElementById("message").value).trim()
    if (!firstname.length > 0 || !lastname.length > 0 || !contact.length > 0 || !pincode.length > 0 || !email.length > 0 || 
        !width.length > 0 || !length.length > 0 || !message.length > 0 ||
        !height.length > 0 ) {
        alert("All fields are mandatory")
        return
    }
    Email.send({
        SecureToken : "3d3ec73b-3e1b-4f97-8299-b4ea9efd683d", 
        To: "ucctanisha15@gmail.com",
        From: email,
        Subject: "Contact Us Query By the Customer",
        Body: "this is body"
    }).then(msg => alert("The email successfully sent"))
})
*/


