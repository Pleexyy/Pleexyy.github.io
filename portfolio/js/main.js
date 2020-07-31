function validation() {
  var nom = document.getElementById("contact-name");
  var email = document.getElementById("contact-email");
  var sujet = document.getElementById("contact-subject");
  var message = document.getElementById("contact-message");

  // vérification de saisie pour le nom
  if (nom.value == "") {
    window.alert("Veuillez saisir un nom valide");
    prenom.focus();
    return false;
  }
  // vérification de saisie pour l'email
  if (email.value == "") {
    window.alert("Veuillez saisir une adresse e-mail valide");
    email.focus();
    return false;
  }
  // verification de saisie pour le sujet
  if (sujet.value == "") {
    window.alert("Veuillez saisir un sujet valide");
    nom.focus();
    return false;
  }
  // verification de saisie pour le message
  if (message.value == "") {
    window.alert("Veuillez saisir un message valide");
    nom.focus();
    return false;
  }
  alert("Votre message a bien été envoyé");
  // Recharge la page actuelle une fois le message envoyé
  document.location.reload(true);
}