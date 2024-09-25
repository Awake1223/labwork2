document.addEventListener("DOMContentLoaded", () => {
    loadSettings();
});

function updatePrice() {
    const prices = {
        'flexSwitchCheckDefault1': 30000,
        'flexSwitchCheckDefault2': 45000,
        'flexSwitchCheckDefault3': 50000,
        'flexSwitchCheckDefault4': 25000,
        'flexSwitchCheckDefault5': 30000
    };

    let totalPrice = 100000;

    // Проходим в цикле по всем ключам и считаем общую стоимость
    for (let key in prices) {
        const checkbox = document.getElementById(key);
        if (checkbox.checked) {
            totalPrice += prices[key];
        }
    }

    // Обновляем цену на странице
    document.getElementById('totalPrice').innerText = totalPrice + '₽';

    // Сохраняем состояние чекбоксов и цену в cookies
    saveSettings(totalPrice);
}

function saveSettings(totalPrice) {
    let settings = {
        totalPrice: totalPrice,
        checkboxes: {}
    };

    // Сохраняем состояние каждого чекбокса
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        settings.checkboxes[checkbox.id] = checkbox.checked;
    });

    // Сохраняем объект в куки
    document.cookie = "settings=" + JSON.stringify(settings) + "; path=/; max-age=" + 60; // срок действия 1 минута
}

function loadSettings() {
    const cookieArr = document.cookie.split("; ");
    let settingsCookie = cookieArr.find(row => row.startsWith("settings="));

    if (settingsCookie) {
        const settings = JSON.parse(settingsCookie.split("=")[1]);

        // Восстанавливаем состояние чекбоксов
        for (const [key, value] of Object.entries(settings.checkboxes)) {
            const checkbox = document.getElementById(key);
            if (checkbox) {
                checkbox.checked = value;
            }
        }

        // Обновляем цену на основе восстановленных значений
        document.getElementById('totalPrice').innerText = settings.totalPrice + '₽';
    }
}




const loginInput = document.getElementById('myLogin');
        const passwordInput = document.getElementById('myPassword');
        const loginButton = document.getElementById('myButton');
        const statusText = document.getElementById('status');

loginButton.addEventListener('click', function() {
            const login = loginInput.value.trim();
            const password = passwordInput.value.trim();

            // Регулярное выражение для проверки недопустимых символов
            const invalidChars = /[^a-zA-Z0-9]/;

            if (invalidChars.test(login) || invalidChars.test(password)) {
                alert('Логин и пароль могут содержать только латинские буквы и цифры.');
                return;
            } else {
                document.cookie = `login=${login}; path=/; max-age=60`; // Куки на 1 минуту
                statusText.textContent = "Активирован"; // Обновляем статус
            }


});

    const cookie = document.cookie.match(/login=([^;]*)/);
    if (cookie) {
        const login = cookie[1];
        statusText.textContent = "Активирован"; // Обновляем статус
    }