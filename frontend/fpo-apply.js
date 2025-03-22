document.addEventListener("DOMContentLoaded", function () {
    const fpoApplyForm = document.getElementById("fpoApplyForm");
    const confirmationMessage = document.getElementById("confirmationMessage");

    fpoApplyForm?.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("name").value;
        const phone = document.getElementById("phone").value;
        const location = document.getElementById("location").value;
        const crop = document.getElementById("crop").value;

        confirmationMessage.textContent = `Thank you, ${name}! Your application for FPO membership has been submitted successfully.`;

        fpoApplyForm.reset();
    });
});
