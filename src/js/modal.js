/*
const modal = document.getElementById("#myModal");
modal.onclick("shown.bs.modal", () => modal.trigger("focus"));
*/

$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
})