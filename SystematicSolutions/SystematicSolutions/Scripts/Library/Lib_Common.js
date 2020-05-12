/// <reference path="../Js/toastr.min.js" />

var SS_Common = {

    notify: function (msg, msgType) {
        var options = {
            "closeButton": false,
            "debug": false,
            "newestOnTop": false,
            "progressBar": false,
            "positionClass": "toast-top-right",
            "preventDuplicates": false,
            "onclick": null,
            "showDuration": "5000000",
            "hideDuration": "1000",
            "timeOut": "5000",
            "extendedTimeOut": "1000",
            "showEasing": "swing",
            "hideEasing": "linear",
            "showMethod": "fadeIn",
            "hideMethod": "fadeOut"
        };
        toastr.options = options;
        switch (msgType) {
            case 1:
                toastr["success"](msg, "Success");
                break;
            case 2:
                toastr["error"](msg, "Error");
                break;
            case 3:
                toastr["warning"](msg, "Warning");
                break;
            default:
        }
    },

    ajaxError: function (jqXHR, exception) {
        var msg = '';
        if (jqXHR.status === 0 && exception === 'error') {
            msg = 'Not connect.\n Verify Network.';
        } else if (jqXHR.status == 404) {
            msg = 'Requested page not found. [404]';
        } else if (jqXHR.status == 500) {
            msg = 'Internal Server Error [500].';
        } else if (exception === 'parsererror') {
            msg = 'Requested JSON parse failed.';
        } else if (exception === 'timeout') {
            msg = 'Time out error.';
        } else if (jqXHR.status === 0 && exception === 'abort') {
            msg = 'Ajax request aborted.';
        } else {
            msg = 'Uncaught Error.\n' + jqXHR.responseText;
        }
        var html = $(jqXHR.responseText);
        var srvErr = $(html[1]).text();
        msg += ' Server Error : ' + srvErr;
        return msg;
    },

    validateForm: function (frm) {
        var form = Object.prototype.toString.call(frm) == '[object String]' ? document.getElementById(frm) : $(frm);
        return _validate(form);
    },

    showLoader: function () {
        $("#overlay").show();
    },
    hideLoader: function () {
        $("#overlay").hide();
    },
    showModal: function (modalID) {
        $("#" + modalID).modal('show');
    },

    hideModal: function (modalID) {
        $("#" + modalID).modal('hide');
    },
    isEmpty: function (obj) {
        var result = typeof obj === 'undefined' || obj === null || obj.length === 0 || obj === "";
        return result;
    }
};

function _validate(form) {
    debugger;
    if (form == null || form == undefined) {
        //throw "Invalid Form object to validate.";
        return false;
    }
    $(form).validate({
        rules: {
            password: "required",
            confimPassword: {
                equalTo: "#password"
            }
        }
    });

    if (!$(form).valid()) {
        //bem_common.showStatusMsg(false, "Error occured- need to update this msg later.", 2);
        return false;
    }
    return true;
}


