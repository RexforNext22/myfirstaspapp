$("#btnsend").click(function () {

    sFrom = $("#from").val();
    sSubject = $("#subject").val();
    sMessage = $("#message").val();

    alert("From: " + sFrom + ", Subject: " + sSubject + ", Message: " + sMessage);

    $("#picand").fadeOut("slow")
})