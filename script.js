// JavaScript for FarmChain Frontend

// Sample data to simulate blockchain records
const sampleProducts = {
    "FC001": {
        id: "FC001",
        crop: "Wheat",
        quantity: "500 kg",
        farmer: "Rajesh Kumar",
        farmLocation: "Pune, Maharashtra",
        harvestDate: "2025-07-15",
        quality: "Organic Certified",
        currentLocation: "Distributor Warehouse",
        price: "₹25/kg"
    },
    "FC002": {
        id: "FC002",
        crop: "Rice",
        quantity: "300 kg",
        farmer: "Priya Sharma", 
        farmLocation: "Nashik, Maharashtra",
        harvestDate: "2025-07-20",
        quality: "Grade A",
        currentLocation: "Retail Store",
        price: "₹35/kg"
    }
};

// Show role-specific interface
function showRole() {
    const role = document.getElementById('userRole').value;
    
    // Hide all role content
    const roleContents = document.querySelectorAll('.role-content');
    roleContents.forEach(content => content.style.display = 'none');
    
    // Show selected role content
    if (role) {
        document.getElementById(role).style.display = 'block';
    }
}

// Farmer Functions
document.addEventListener('DOMContentLoaded', function() {
    const farmerForm = document.getElementById('farmerForm');
    if (farmerForm) {
        farmerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            registerProduct();
        });
    }
});

function registerProduct() {
    const crop = document.getElementById('cropType').value;
    const quantity = document.getElementById('quantity').value;
    const harvestDate = document.getElementById('harvestDate').value;
    const location = document.getElementById('farmLocation').value;
    
    // Generate a simple product ID
    const productId = 'FC' + String(Math.floor(Math.random() * 1000)).padStart(3, '0');
    
    const result = `
        <div class="result-box">
            <h3 class="success">Product Successfully Registered!</h3>
            <p><strong>Product ID:</strong> ${productId}</p>
            <p><strong>Crop:</strong> ${crop}</p>
            <p><strong>Quantity:</strong> ${quantity} kg</p>
            <p><strong>Harvest Date:</strong> ${harvestDate}</p>
            <p><strong>Farm Location:</strong> ${location}</p>
            <p><strong>Status:</strong> Registered on Blockchain</p>
        </div>
    `;
    
    document.getElementById('farmerResult').innerHTML = result;
    
    // Clear form
    document.getElementById('farmerForm').reset();
}

// Distributor Functions
function verifyProduct() {
    const productId = document.getElementById('productId').value;
    
    if (!productId) {
        alert('Please enter a Product ID');
        return;
    }
    
    const product = sampleProducts[productId];
    
    if (product) {
        const result = `
            <div class="result-box">
                <h3 class="success">Product Verified!</h3>
                <p><strong>Product ID:</strong> ${product.id}</p>
                <p><strong>Crop:</strong> ${product.crop}</p>
                <p><strong>Farmer:</strong> ${product.farmer}</p>
                <p><strong>Origin:</strong> ${product.farmLocation}</p>
                <p><strong>Quality:</strong> ${product.quality}</p>
                <p><strong>Status:</strong> Authentic ✓</p>
            </div>
        `;
        document.getElementById('distributorResult').innerHTML = result;
    } else {
        document.getElementById('distributorResult').innerHTML = `
            <div class="result-box">
                <h3 style="color: red;">Product Not Found!</h3>
                <p>Please check the Product ID and try again.</p>
            </div>
        `;
    }
}

function updateLogistics() {
    const result = `
        <div class="result-box">
            <h3 class="success">Logistics Updated!</h3>
            <p><strong>Status:</strong> In Transit</p>
            <p><strong>Location:</strong> Distribution Center</p>
            <p><strong>Expected Delivery:</strong> 2 days</p>
            <p><strong>Temperature:</strong> 18°C (Optimal)</p>
        </div>
    `;
    document.getElementById('distributorResult').innerHTML = result;
}

// Retailer Functions
function checkAuthenticity() {
    const productId = document.getElementById('retailerProductId').value;
    
    if (!productId) {
        alert('Please enter a Product ID');
        return;
    }
    
    const product = sampleProducts[productId];
    
    if (product) {
        const result = `
            <div class="result-box">
                <h3 class="success">Product Authentic!</h3>
                <p><strong>Product ID:</strong> ${product.id}</p>
                <p><strong>Crop:</strong> ${product.crop}</p>
                <p><strong>Quality Grade:</strong> ${product.quality}</p>
                <p><strong>Current Price:</strong> ${product.price}</p>
                <p><strong>Verification:</strong> ✓ Blockchain Verified</p>
            </div>
        `;
        document.getElementById('retailerResult').innerHTML = result;
    } else {
        document.getElementById('retailerResult').innerHTML = `
            <div class="result-box">
                <h3 style="color: red;">Authentication Failed!</h3>
                <p>Product not found in blockchain records.</p>
            </div>
        `;
    }
}

function updateInventory() {
    const result = `
        <div class="result-box">
            <h3 class="success">Inventory Updated!</h3>
            <p><strong>Stock Status:</strong> In Stock</p>
            <p><strong>Quantity Available:</strong> 150 kg</p>
            <p><strong>Shelf Life:</strong> 6 months</p>
            <p><strong>Storage Conditions:</strong> Optimal</p>
        </div>
    `;
    document.getElementById('retailerResult').innerHTML = result;
}

// Consumer Functions
function scanProduct() {
    const qrCode = document.getElementById('qrCode').value;
    
    if (!qrCode) {
        alert('Please enter a QR Code or Product ID');
        return;
    }
    
    const product = sampleProducts[qrCode];
    
    if (product) {
        const result = `
            <div class="product-info">
                <h3 class="info">Product Information</h3>
                <p><strong>Product ID:</strong> ${product.id}</p>
                <p><strong>Crop:</strong> ${product.crop}</p>
                <p><strong>Quantity:</strong> ${product.quantity}</p>
                <p><strong>Farmer:</strong> ${product.farmer}</p>
                <p><strong>Farm Location:</strong> ${product.farmLocation}</p>
                <p><strong>Harvest Date:</strong> ${product.harvestDate}</p>
                <p><strong>Quality:</strong> ${product.quality}</p>
                <p><strong>Current Location:</strong> ${product.currentLocation}</p>
                <p><strong>Price:</strong> ${product.price}</p>
                <p><strong>Blockchain Status:</strong> ✓ Verified</p>
            </div>
        `;
        document.getElementById('consumerResult').innerHTML = result;
    } else {
        document.getElementById('consumerResult').innerHTML = `
            <div class="result-box">
                <h3 style="color: red;">Product Not Found!</h3>
                <p>Invalid QR Code. Please scan a valid product QR code.</p>
                <p><strong>Try these sample IDs:</strong> FC001, FC002</p>
            </div>
        `;
    }
}
