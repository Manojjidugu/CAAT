$(function() {
    $('#start-date-datetimepicker, #maturity-date').datetimepicker();
});

$('#buy-sell-drop-down').change(

function () {
    $('#buy-sell-drop-down').css("background", $("select option:selected").css("background-color"));
});
