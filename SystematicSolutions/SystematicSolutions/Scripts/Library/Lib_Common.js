/// <reference path="../toastr.min.js" />

var ati_common = {
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

    //Slider Edit
    openRecordEditSlide: function (recordid) {
        if (typeof recordid === 'undefined') {
            recordid = 0;
        }

        ati_common.closeCreateNewModal();
        ajaxHelper.ajaxGetHtml("/Record/_Main?recordid=" + recordid + "", function (data) {
            $("#record-view-sliderContent_ID").html('');
            $("#record-view-sliderContent_ID").html(data);
            var _element = document.getElementById("record-view-slider");
            _element.style.right = "0";
            $(_element).addClass("MobileViewSlider");
            $('body').css("overflow", "hidden");
            $(".content-wrapper").append("<div class='sliderOverlay'></div>");
            ati_common.sliderDifferntiate("New"); // Slider differentiate event puropse
        }, true);
    },

    // Slider View
    openRecordViewSlide: function (recordid, canEdit) {
        if (typeof recordid === 'undefined') {
            recordid = 0;
        }
        ajaxHelper.ajaxGetHtml("/Record/_MainView?recordid=" + recordid + "", function (data) {
            $("#record-view-sliderContent_ID").html('');
            $("#record-view-sliderContent_ID").html(data);
            var _element = document.getElementById("record-view-slider");
            _element.style.right = "0";
            $(_element).addClass("MobileViewSlider");
            $('body').css("overflow", "hidden");
            $(".content-wrapper").append("<div class='sliderOverlay'></div>");
            debugger;
            if (canEdit == false) {
                $('#btnEdit').remove();
            }
            ati_common.sliderDifferntiate("View"); // Slider differentiate event puropse
        }, true);
    },

    //Slider Edit Conversion
    convertRecordEditSlide: function (recordid) {
        if (typeof recordid === 'undefined') {
            recordid = 0;
        }
        ajaxHelper.ajaxGetHtml("/Record/_Main?recordid=" + recordid + "", function (data) {
            $("#record-view-sliderContent_ID").html('');
            $("#record-view-sliderContent_ID").html(data);
            ati_common.sliderDifferntiate("Edit"); // Slider differentiate event puropse
        }, true);
    },

    // Slider View Conversion
    convertRecordViewSlide: function (recordid) {
        if (typeof recordid === 'undefined') {
            recordid = 0;
        }
        ajaxHelper.ajaxGetHtml("/Record/_MainView?recordid=" + recordid + "", function (data) {
            $("#record-view-sliderContent_ID").html('');
            $("#record-view-sliderContent_ID").html(data);
            ati_common.sliderDifferntiate("View"); // Slider differentiate event puropse
        }, true);
    },

    sliderDifferntiate: function (editOrView) {
        $('#btnCancel').removeClass("btnCancelMain").addClass("sliderBtnCancel");
        $('#btnSave').removeClass("btnSaveMain").addClass("sliderBtnSave");
        $('#btnEdit').removeClass("btnEditMain").addClass("sliderBtnEdit");
        if (editOrView == "View") {
            $('#sliderRedirectBtn').attr("href", "/record/view?recordid=((CurrentRecordID))")
            $('#slider-title').html("View Record");
        }
        else {
            $('#sliderRedirectBtn').attr("href", "/record/new?recordid=((CurrentRecordID))")
            if (editOrView == "New") {
                $('#slider-title').html("New Record");
            }
            else {
                $('#slider-title').html("Edit Record");
            }
        }
    },

    redirectBtn: function () {
        var _recID = $('#recordid').val();
        var _href = $('#sliderRedirectBtn').attr("href");
        _href = _href.replace(/\(\(CurrentRecordID\)\)/g, _recID);
        $('#sliderRedirectBtn').attr("href", _href);
    },

    closeRecorViewSlide: function () {
        var _element = document.getElementById("record-view-slider");
        _element.style.right = "-50%";
        $(_element).removeClass("MobileViewSlider");
        $('body').removeAttr("style");
        $(".sliderOverlay").hide();
    },
    // End Slider

    openFolderModal: function () {
        ati_common.closeCreateNewModal();
        ajaxHelper.ajaxGetHtml("/Folder/CreateFolder", function (response) {
            $("#folderPartialView").html('');
            $("#folderPartialView").html(response);
            $("#folderCreate").modal('show');
        });
    },
    CallReloadRecordTreeList: function () {
        if ($("#recordTreeView").length == 1) {
            ati_common.ReloadRecordTreeList();
        }

    },
    ReloadRecordTreeList: function () {

        var myTree = $("#recordTreeView").dxTreeList('instance');
        var expandedRows = myTree.option('expandedRowKeys');

        var jsonData;
        ajaxHelper.ajaxGetJson('/Home/ReloadRecordTreeList', function (data) {
            jsonData = data;
        }, false, false);

        $.each(jsonData, function (i, el) {
            if (this.parentid == -1 || this.parentid == 0) {
                delete this.parentid;
            }
        });

        debugger;
        ati_dxHelper.createTreeList("recordTreeView", jsonData, "folderid", "folderName", "parentid", expandedRows);
    },
    showLoader: function () {
        $("#overlay").show();
    },
    hideLoader: function () {
        $("#overlay").hide();
    },

    createNew: function () {
        $('#CreateNewModal').modal('show');
    },

    closeCreateNewModal: function () {
        $('#CreateNewModal').modal('hide');
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

function bsShowConfirmDialog(title, message, actionKey, clickEvent) {
    $("#confirmDialogCustom").html('');
    var myDialog = '<div class="modal fade" id="modalDeleteCustom" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">';
    myDialog += '<div class="modal-dialog tms-model">';
    myDialog += '<div class="modal-content">';
    myDialog += '<div class="modal-header">';
    myDialog += '<h6 class="modal-title" id="myModalLabel">' + title + '</h6>';
    myDialog += '<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>';
    myDialog += '</div>';
    myDialog += '<div class="modal-body">';
    myDialog += '<input type="hidden">';
    myDialog += '<p style="font-size: 14px;">Are you sure you want to ' + message + ' the selected record?</p>';
    myDialog += '</div>';
    myDialog += '<div class="modal-footer">';
    myDialog += '<button type="button" id="btnConfirm' + actionKey + '" data-loading-text="<i class=\'fa fa-spinner fa-spin\'></i> Confirming" onclick="' + clickEvent + '(' + actionKey + ');" class="btn btn-cstm btn-orange btn-sm"><i class="fa fa-check-square-o" aria-hidden="true"></i> Yes</button>';
    myDialog += '<button type="button" id="btnModalClose" data-dismiss="modal" aria-label="Close" class="btn btn-cstm btn-gray btn-sm btn-cancel"><i class="fa fa-times" aria-hidden="true"></i> No</button>';
    myDialog += '</div>';
    myDialog += '</div>';
    myDialog += '</div>';
    myDialog += '</div>';

    $("#confirmDialogCustom").append(myDialog);
    $("#modalDeleteCustom").modal('show');
}

function bsRemoveConfirmDialog() {
    //$("#modaldeletecustom").modal('hide');
    //$('#modaldeletecustom').remove();
    //$('.modal-backdrop').remove();
    //$('body').removeclass("modal-open").removeattr("style");
    $("#modalDeleteCustom").modal("hide");
}

// Collapse SideMenu
$('#sidebarCollapse').click(function () {
    $(".collapse_side_menu").toggleClass("smallSideMenu");
    $(".right-sidecontent").toggleClass("fullContentWidth");
});
// End Collapse SideMenu

// New Record hide by url
$(function () {
    var getUrl = window.location.href.split('/')[3] + "/" + window.location.href.split('/')[4];
    if (getUrl.toLowerCase().includes("record/new") || getUrl.toLowerCase().includes("record/view")) {
        $('.CreateNewBtn').css("display", "none");
    }
    else {
        $('.CreateNewBtn').css("display", "block");
    }

});
