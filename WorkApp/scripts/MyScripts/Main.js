
function Initialization() {
    var requests = ko.observableArray([]);
    var user = ko.observable("");
    var isAutorization = ko.observable(false);
    var showError = ko.observable(false);
    var isAdmin = ko.observable(false);
    var description = ko.observable();
    var subject = ko.observable();

    function initForms() {
        $("#administration-form").show();
        $("#request-form").hide();
        $("#request-list-form").hide();
        $("#success-form").hide();
        $("#error-description").hide();
        $("#error-subject").hide();
    }

    $("#SendButton").click(function () {
        if (subject() == '' || description() == '') {
            if (subject() == '') {
                $("#error-subject").show();
            }
            if (description() == '') {
                $("#error-description").show();
            }
            return;

        }

        $.ajax({
            url: window.serverPath + "Home/SaveRequest",
            data: { subject: subject(), description: description(), user: user() },
            dataType: 'json',
            type: "POST",
            success: function (data) {
                if (data == true) {
                    $("#request-form").hide();
                    $("#success-form").show();
                }

            }
        });
    });

    $("#ShowRequestForm").click(function () {
        $("#request-form").show();
        $("#request-list-form").hide();
        $("#success-form").hide();
        description("");
        subject("");
    });

    $("#ShowAllRequest").click(function () {
        $("#request-list-form").show();
        $("#request-form").hide();
        $.ajax({
            url: window.serverPath + "Home/GetRequests",
            dataType: 'json',
            type: "POST",
            success: function (data) {
                requests(data);
                $("#request-form").hide();
                $("#request-list-form").show();
                $("#success-form").hide();
            }
        });
    });

    initForms();
    return {
        requests: requests,
        isAutorization: isAutorization,
        user: user,
        autorization: function () {
            isAdmin(false);
            if (user() == '' || user() == undefined) {
                showError(true);
                isAutorization(false);
            } else {
                if (user().toLowerCase() === 'admin') {
                    isAdmin(true)
                }
                isAutorization(true);
            }
        },
        showError: showError,
        isAdmin: isAdmin,
        description: description,
        subject: subject
    };
}


