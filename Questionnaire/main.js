let form = document.querySelector('form');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    // Elements du formulaire
    let pseudo = document.querySelector('#pseudo');
    let email = document.querySelector('#email');
    let password = document.querySelector('#password');
    let password2 = document.querySelector('#password2');
    let errorContainer = document.querySelector('.message-error');
    let errorList = document.querySelector('.message-error ul');

    // Je vide les erreurs avant la nouvelle vérification et recache le message
    errorList.innerHTML = '';
    errorContainer.classList.remove('visible');

    // Vérification du Pseudo
    if (pseudo.value.trim() === '') {
        appendErrorMessage("Le champ Pseudo ne peut pas être vide");
    }

    // Vérification de l'email
    if (email.value.trim() === '') {
        appendErrorMessage("Le champ Email ne peut pas être vide");
    }

    // Vérification du mot de passe
    if (password.value.trim() === '') {
        appendErrorMessage("Le champ Mot de passe ne peut pas être vide");
    }

    // Vérification de l'entrée à nouveau du mot de passe
    if (password2.value.trim() === '' || password2.value !== password.value) {
        appendErrorMessage("Les champs Mot de passe et Entrer à nouveau le mot de passe doivent correspondre");
    }

    // Si aucune erreur, affiche le message de succès
    if (errorList.children.length === 0) {
        document.querySelector('.message-success').style.display = 'block';
    }
});

function appendErrorMessage(message) {
    // Je rends visible la zone d'erreur
    document.querySelector('.message-error').classList.add('visible');

    // Création du message d'erreur
    let err = document.createElement('li');
    err.innerText = message;

    // Ajout au container
    document.querySelector('.message-error ul').appendChild(err);
}