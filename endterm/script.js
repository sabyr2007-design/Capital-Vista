$(document).ready(function () {

    // 1. Аккордеон (страница «Услуги»)
    $(".accordion-header").click(function () {
        const body = $(this).next(".accordion-body");

        // закрываем остальные ответы
        $(".accordion-body").not(body).slideUp(300);
        $(".accordion-header").not(this).removeClass("open");

        // открываем или закрываем выбранный
        body.slideToggle(300);
        $(this).toggleClass("open");
    });

    // 2. Счётчик символов в сообщении (страница «Контакты»)
    $("#userMessage").on("keyup", function () {
        $("#charCount").text($(this).val().length);
    });

    // 3. Валидация формы (страница «Контакты»)
    $("#contactForm").on("submit", function (event) {
        event.preventDefault();

        this.classList.add("was-validated");

        if (this.checkValidity()) {
            // форма заполнена правильно: плавно показываем сообщение
            $("#formSuccess").hide().fadeIn(500);
            this.reset();
            this.classList.remove("was-validated");
            $("#charCount").text(0);
        } else {
            $("#formSuccess").hide();
        }
    });

    // 4. Кнопка «Очистить»
    $("#contactForm").on("reset", function () {
        this.classList.remove("was-validated");
        $("#formSuccess").hide();
        $("#charCount").text(0);
    });

    // 5. Плавное появление карточек при загрузке (страницы «Главная» и «Услуги»)
    $(".service-card").each(function (index) {
        $(this)
            .css("opacity", 0)
            .delay(index * 150)
            .animate({ opacity: 1 }, 600);
    });

});