window.onload = function () { // Attend que la page internet charge complètement pour exécuter la fonction
    // Récupère la valeur du thème depuis le stockage local de la page du navigateur (light ou dark)
    const theme = localStorage.getItem('theme');
    // Si aucun thème, valeur light
    document.body.classList.add(theme || 'light');
    document.getElementById('switch').onclick = function () {
        const theme = localStorage.getItem('theme');
        if (theme === 'dark') {
            document.body.classList.remove('dark');
            document.body.classList.add('light');
            localStorage.setItem('theme', 'light');
        } else {
            document.body.classList.remove('light');
            document.body.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        }
    }
}