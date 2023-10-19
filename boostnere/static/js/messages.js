$(document).ready(function() {
    var myModal = new bootstrap.Modal(document.getElementById('messageModal'), {});
    if ({{ messages|length }} > 0) {
        myModal.show();
    }
    if ({{ form.errors.name|length }} > 0 || {{ form.errors.email|length }} > 0 || {{ form.errors.subject|length }} > 0 || {{ form.errors.message|length }} > 0) {
        $('html, body').animate({
            scrollTop: $("#contact").offset().top
        }, 1000);
    }
});