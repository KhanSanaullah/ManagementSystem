// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict';
    window.addEventListener('load', function () {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                    $(form).find('.form-control').each(function () {
                        if ($(this).attr('type') == "text") {
                            let attr = $(this).attr('required');
                            if (typeof attr !== typeof undefined && attr !== false) {
                                $(this).parent().append('<div class="invalid-feedback">Please choose a username.</div >');
                            }
                        }
                    });
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
})();