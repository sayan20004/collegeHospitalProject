const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true,
});


document.getElementById('book').addEventListener('click', function() {
    document.getElementById('appointmentForm').classList.toggle('show');
});
