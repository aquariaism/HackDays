document.addEventListener("DOMContentLoaded", function () {
    const cropForm = document.getElementById("cropForm");
    const cropList = document.getElementById("cropList");

    cropForm?.addEventListener("submit", function (e) {
        e.preventDefault();

        const cropName = document.getElementById("cropName").value;
        const plantingDate = document.getElementById("plantingDate").value;
        const harvestDate = document.getElementById("harvestDate").value;
        const quantity = document.getElementById("quantity").value;

        const cropItem = document.createElement("div");
        cropItem.classList.add("crop-item");
        cropItem.innerHTML = `<strong>${cropName}</strong><br>Planted on: ${plantingDate}<br>Expected harvest: ${harvestDate}<br>Quantity: ${quantity} kg`;

        cropList.appendChild(cropItem);

        cropForm.reset();
    });
});
