import './hw_9.scss';

function notificationBar () {

    const notificationBarElement = document.querySelector('.notification-bar');
    const control = document.querySelector('.notification-bar__btn');


    console.log(control);
    console.log(notificationBarElement);

    function toggleMessage() {
        notificationBarElement.classList.toggle('notification-bar_active');
    }
    control.addEventListener('click', toggleMessage);
}

notificationBar();

function notificationBarYellow() {
    const notificationBarYellowElement = document.querySelector('.notification-bar-yellow');
    const control = document.querySelector('.notification-bar-yellow__btn');

    console.log(control);
    console.log(notificationBarYellowElement);

    function toggleMessage() {
        notificationBarYellowElement.classList.toggle('notification-bar-yellow_active');
    }
    control.addEventListener('click', toggleMessage);

}

notificationBarYellow();

function notificationBarGreen() {
    const notificationBarGreenElement = document.querySelector('.notification-bar-green');
    const control = document.querySelector('.notification-bar-green__btn');

    console.log(control);
    console.log(notificationBarGreenElement);

    function toggleMessage() {
        notificationBarGreenElement.classList.toggle('notification-bar-green_active');
    }
    control.addEventListener('click', toggleMessage);

}

notificationBarGreen();