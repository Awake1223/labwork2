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

        // Добавляем обработчик события 'click' на кнопку
loginButton.addEventListener('click', function() {
            // Считываем значения из полей ввода
    const login = loginInput.value;
    const password = passwordInput.value;

            // Выводим данные в консоль (или можете использовать их по своему усмотрению)
    console.log('Логин:', login);
    console.log('Пароль:', password);

            // Здесь можно добавить дополнительные действия:
            // например, проверку логина и пароля, отправку данных на сервер и т.д.
    const regex = /^[a-zA-Z0-9_]+$/;
    if (regex.test(login)) {
        console.log("Login соответствует требованиям.");
    } else {
        alert("Так нельзя")
        console.log("Login не соответствует требованиям.");
    }

    if (regex.test(password)) {
        console.log("Все норм!");
    } else {
        alert ("Так нельзя!");
    }
}
});
