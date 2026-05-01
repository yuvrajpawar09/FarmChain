const roleSelector = document.getElementById("userRole");
const sections = document.querySelectorAll(".role-content");

roleSelector.addEventListener("change", () => {
    sections.forEach(sec => sec.classList.add("hidden"));

    const selected = roleSelector.value;
    if (selected) {
        document.getElementById(selected).classList.remove("hidden");
    }
});

// Farmer Form
document.getElementById("farmerForm").addEventListener("submit", (e) => {
    e.preventDefault();

    const crop = document.getElementById("cropType").value;
    const qty = document.getElementById("quantity").value;

    document.getElementById("farmerResult").innerHTML =
        `✅ Product Registered: ${crop} (${qty} kg)`;
});

// Distributor
document.getElementById("verifyBtn").onclick = () => {
    document.getElementById("distributorResult").innerText =
        "✔ Product Verified on Blockchain";
};

document.getElementById("logisticsBtn").onclick = () => {
    document.getElementById("distributorResult").innerText =
        "🚚 Logistics Updated";
};

// Retailer
document.getElementById("authBtn").onclick = () => {
    document.getElementById("retailerResult").innerText =
        "🔒 Product is Authentic";
};

document.getElementById("inventoryBtn").onclick = () => {
    document.getElementById("retailerResult").innerText =
        "📦 Inventory Updated";
};

// Consumer
document.getElementById("scanBtn").onclick = () => {
    document.getElementById("consumerResult").innerText =
        "📄 Product details fetched successfully";
};
