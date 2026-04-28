// ===================== DATA (SIMULATED DB) =====================
const ProductDB = (() => {
    const products = {
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
        }
    };

    return {
        get: (id) => products[id],
        add: (product) => products[product.id] = product,
        exists: (id) => !!products[id]
    };
})();

// ===================== UTILITIES =====================
const Utils = {
    getEl: (id) => document.getElementById(id),

    showMessage: (id, content) => {
        const el = document.getElementById(id);
        if (el) el.innerHTML = content;
    },

    validate: (fields) => {
        for (let [value, message] of fields) {
            if (!value) {
                alert(message);
                return false;
            }
        }
        return true;
    },

    generateId: () => {
        return 'FC' + Math.floor(1000 + Math.random() * 9000); // safer
    }
};

// ===================== UI COMPONENTS =====================
const UI = {
    successBox: (title, content) => `
        <div class="result-box success">
            <h3>✅ ${title}</h3>
            ${content}
        </div>
    `,

    errorBox: (msg) => `
        <div class="result-box error">
            <h3 style="color:red;">❌ ${msg}</h3>
        </div>
    `
};

// ===================== ROLE HANDLING =====================
function showRole() {
    const role = Utils.getEl('userRole').value;

    document.querySelectorAll('.role-content')
        .forEach(el => el.style.display = 'none');

    if (role) Utils.getEl(role).style.display = 'block';
}

// ===================== FARMER =====================
function registerProduct() {
    const crop = Utils.getEl('cropType').value.trim();
    const quantity = Utils.getEl('quantity').value.trim();
    const harvestDate = Utils.getEl('harvestDate').value;
    const location = Utils.getEl('farmLocation').value.trim();

    if (!Utils.validate([
        [crop, "Enter crop type"],
        [quantity, "Enter quantity"],
        [harvestDate, "Enter harvest date"],
        [location, "Enter location"]
    ])) return;

    const id = Utils.generateId();

    ProductDB.add({
        id,
        crop,
        quantity,
        farmer: "You",
        farmLocation: location,
        harvestDate,
        quality: "Pending",
        currentLocation: "Farm",
        price: "Not set"
    });

    Utils.showMessage('farmerResult',
        UI.successBox("Product Registered", `
            <p><b>ID:</b> ${id}</p>
            <p><b>Crop:</b> ${crop}</p>
            <p><b>Quantity:</b> ${quantity} kg</p>
        `)
    );

    Utils.getEl('farmerForm').reset();
}

// ===================== DISTRIBUTOR =====================
function verifyProduct() {
    const id = Utils.getEl('productId').value.trim();

    if (!Utils.validate([[id, "Enter Product ID"]])) return;

    const product = ProductDB.get(id);

    if (!product) {
        return Utils.showMessage('distributorResult', UI.errorBox("Product Not Found"));
    }

    Utils.showMessage('distributorResult',
        UI.successBox("Verified", `
            <p><b>${product.crop}</b> by ${product.farmer}</p>
            <p>Origin: ${product.farmLocation}</p>
            <p>Quality: ${product.quality}</p>
        `)
    );
}

function updateLogistics() {
    Utils.showMessage('distributorResult',
        UI.successBox("Logistics Updated", `
            <p>Status: In Transit</p>
            <p>ETA: 2 days</p>
        `)
    );
}

// ===================== RETAILER =====================
function checkAuthenticity() {
    const id = Utils.getEl('retailerProductId').value.trim();

    if (!Utils.validate([[id, "Enter Product ID"]])) return;

    const product = ProductDB.get(id);

    if (!product) {
        return Utils.showMessage('retailerResult', UI.errorBox("Authentication Failed"));
    }

    Utils.showMessage('retailerResult',
        UI.successBox("Authentic", `
            <p>${product.crop} - ${product.quality}</p>
            <p>Price: ${product.price}</p>
        `)
    );
}

function updateInventory() {
    Utils.showMessage('retailerResult',
        UI.successBox("Inventory Updated", `
            <p>Stock: 150 kg</p>
        `)
    );
}

// ===================== CONSUMER =====================
function scanProduct() {
    const id = Utils.getEl('qrCode').value.trim();

    if (!Utils.validate([[id, "Enter QR/Product ID"]])) return;

    const product = ProductDB.get(id);

    if (!product) {
        return Utils.showMessage('consumerResult', UI.errorBox("Invalid QR Code"));
    }

    Utils.showMessage('consumerResult', `
        <div class="product-info">
            <h3>📦 Product Details</h3>
            <p><b>${product.crop}</b> (${product.quantity} kg)</p>
            <p>Farmer: ${product.farmer}</p>
            <p>Location: ${product.farmLocation}</p>
            <p>Status: ✅ Verified</p>
        </div>
    `);
}

// ===================== INIT =====================
document.addEventListener('DOMContentLoaded', () => {
    const form = Utils.getEl('farmerForm');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            registerProduct();
        });
    }
});
