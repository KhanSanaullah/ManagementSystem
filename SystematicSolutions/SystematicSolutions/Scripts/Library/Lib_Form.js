﻿$('.select2').on('change', function () {
    if ($('.needs-validation').hasClass('was-validated')) {
        if (this.value) {
            $(this).siblings('.select2').children('.selection').children('.select2-selection').addClass('selectonsuccess');
        }
        else {
            $(this).siblings('.select2').children('.selection').children('.select2-selection').addClass('selectonerror');
        }
    }
});

//$('.select2-selection__clear:contains("x")').click(function () {
//    alert(1)
//});

//$('.myclass li.active .short-text:contains("someText")').click();
//$(document).click('.select2-selection__clear', function () {
//    alert(1)
//})

var FormHelpher = {

    InitSelect2: function (select, Placeholder, IsAllowClear) {
        $(select).select2({
            placeholder: Placeholder,
            allowClear: IsAllowClear
        });
        debugger;
    },

    InitDatePicker: function (Date, IsAutoClose, IsTodayHighlight) {
        $(Date).datepicker({
            autoclose: IsAutoClose,
            todayHighlight: IsTodayHighlight
        });
    },

    FormValidate: function (Form) {
        Form = Form[0];
        debugger;
        if (Form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
            $(Form).find('.form-control').each(function () {
                if ($(this).attr('type') == "text" || this.tagName.toLowerCase() == "select" || this.tagName.toLowerCase() == "textarea") {
                    let attr = $(this).attr('required');
                    if (typeof attr !== typeof undefined && attr !== false) {
                        if (!$(this).siblings().hasClass('invalid-feedback')) {
                            if(!this.value)
                                $(this).parent().append('<div class="invalid-feedback">This field is required.</div >');

                            if (this.tagName.toLowerCase() == "select") {
                                if ($(this).val() == "") {
                                    $('.select2-selection').removeClass('selectonsuccess');
                                    $(this).siblings('.select2').children('.selection').children('.select2-selection').addClass('selectonerror');
                                }
                                else {
                                    $('.select2-selection').removeClass('selectonerror');
                                    $(this).siblings('.select2').children('.selection').children('.select2-selection').addClass('selectonsuccess');
                                }
                            }
                        }
                    }
                }
            });
        }
        Form.classList.add('was-validated');
    },
};