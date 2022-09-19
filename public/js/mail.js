const firebaseConfig = {
  apiKey: "AIzaSyA2rgCKocSZV5sUPVbQkRnzfBkRRi6BmpA",
  authDomain: "inventive-21c18.firebaseapp.com",
  databaseURL: "https://inventive-21c18-default-rtdb.firebaseio.com",
  projectId: "inventive-21c18",
  storageBucket: "inventive-21c18.appspot.com",
  messagingSenderId: "502448539784",
  appId: "1:502448539784:web:c6d19b8d0206b17f07b73d"
};

firebase.initializeApp(firebaseConfig)

var contactFormDB = firebase.database().ref("contactForm")

document.getElementById('contactForm').addEventListener('submit', submitForm)

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal('name')
  var email = getElementVal('email')
  var message = getElementVal('message')
  var phone = getElementVal('phone')
  // console.log(name, email, message, phone)

  saveMessages(name, email, message, phone)
  const clearInput = document.getElementsByClassName('input');
  clearInput.value = '';
}

const saveMessages = (name, email, message, phone) => {
  var newContactForm = contactFormDB.push()
  newContactForm.set({
    name: name,
    email: email,
    message: message,
    phone: phone,
  })
}

const getElementVal = (id) => {
  return document.getElementById(id).value
}