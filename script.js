// ===================== DATA =====================
const sampleProducts = {
    FC001: {
        id: "FC001",
        crop: "Wheat",
        quantity: 500,
        farmer: "Rajesh Kumar",
        farmLocation: "Pune, Maharashtra",
        harvestDate: "2025-07-15",
        quality: "Organic Certified",
        currentLocation: "Distributor Warehouse",
        price: "₹25/kg"
    },
    FC002: {
        id: "FC002",
        crop: "Rice",
        quantity: 300,
        farmer: "Priya Sharma",
        farmLocation: "Nashik, Maharashtra",
        harvestDate: "2025-07-20",
        quality: "Grade A",
        currentLocation: "Retail Store",
        price: "₹35/kg"
    }
};

// ===================== UTIL FUNCTIONS =====================
const getEl = (id) => document.getElementById(id);

const showMessage = (elementId, content) => {
    getEl(elementId).innerHTML = content;
};

const generateProductId = () => {
    return 'FC' + Date.now().toString().slice(-3);
};

const validateInput = (value, message) => {
    if (!value) {
        alert(message);
        return false;
    }
    return true;
};

// ===================== ROLE HANDLING =====================
function showRole() {
    const role = getEl('userRole').value;

    document.querySelectorAll('.role-content')
        .forEach(el => el.style.display = 'none');

    if (role) getEl(role).style.display = 'block';
}

// ===================== FARMER =====================
document.addEventListener('DOMContentLoaded', () => {
    const farmerForm = getEl('farmerForm');
    if (farmerForm) {
        farmerForm.addEventListener('submit', (e) => {
            e.preventDefault();
            registerProduct();
        });
    }
});

function registerProduct() {
    const crop = getEl('cropType').value;
    const quantity = getEl('quantity').value;
    const harvestDate = getEl('harvestDate').value;
    const location = getEl('farmLocation').value;

    if (!validateInput(crop, "Enter crop type") ||
        !validateInput(quantity, "Enter quantity") ||
        !validateInput(harvestDate, "Enter harvest date") ||
        !validateInput(location, "Enter location")) return;

    const productId = generateProductId();

    sampleProducts[productId] = {
        id: productId,
        crop,
        quantity,
        farmer: "You",
        farmLocation: location,
        harvestDate,
        quality: "Pending",
        currentLocation: "Farm",
        price: "Not set"
    };

    showMessage('farmerResult', `
        <div class="result-box success">
            <h3>✅ Product Registered</h3>
            <p><b>ID:</b> ${productId}</p>
            <p><b>Crop:</b> ${crop}</p>
            <p><b>Quantity:</b> ${quantity} kg</p>
        </div>
    `);

    getEl('farmerForm').reset();
}

// ===================== DISTRIBUTOR =====================
function verifyProduct() {
    const id = getEl('productId').value.trim();

    if (!validateInput(id, "Enter Product ID")) return;

    const product = sampleProducts[id];

    if (!product) {
        return showMessage('distributorResult', errorBox("Product Not Found"));
    }

    showMessage('distributorResult', `
        <div class="result-box success">
            <h3>✅ Verified</h3>
            <p><b>${product.crop}</b> by ${product.farmer}</p>
            <p>Origin: ${product.farmLocation}</p>
            <p>Quality: ${product.quality}</p>
        </div>
    `);
}

function updateLogistics() {
    showMessage('distributorResult', `
        <div class="result-box success">
            <h3>🚚 Logistics Updated</h3>
            <p>Status: In Transit</p>
            <p>ETA: 2 days</p>
        </div>
    `);
}

// ===================== RETAILER =====================
function checkAuthenticity() {
    const id = getEl('retailerProductId').value.trim();

    if (!validateInput(id, "Enter Product ID")) return;

    const product = sampleProducts[id];

    if (!product) {
        return showMessage('retailerResult', errorBox("Authentication Failed"));
    }

    showMessage('retailerResult', `
        <div class="result-box success">
            <h3>✅ Authentic</h3>
            <p>${product.crop} - ${product.quality}</p>
            <p>Price: ${product.price}</p>
        </div>
    `);
}

function updateInventory() {
    showMessage('retailerResult', `
        <div class="result-box success">
            <h3>📦 Inventory Updated</h3>
            <p>Stock: 150 kg</p>
        </div>
    `);
}

// ===================== CONSUMER =====================
function scanProduct() {
    const id = getEl('qrCode').value.trim();

    if (!validateInput(id, "Enter QR/Product ID")) return;

    const product = sampleProducts[id];

    if (!product) {
        return showMessage('consumerResult', errorBox("Invalid QR Code"));
    }

    showMessage('consumerResult', `
        <div class="product-info">
            <h3>📦 Product Details</h3>
            <p><b>${product.crop}</b> (${product.quantity} kg)</p>
            <p>Farmer: ${product.farmer}</p>
            <p>Location: ${product.farmLocation}</p>
            <p>Status: ✅ Verified</p>
        </div>
    `);
}

// ===================== COMMON UI =====================
const errorBox = (msg) => `
    <div class="result-box error">
        <h3 style="color:red;">❌ ${msg}</h3>
    </div>
`;
