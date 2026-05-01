* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, sans-serif;
}

body {
    background: #f4f6f8;
    display: flex;
    justify-content: center;
    padding: 20px;
}

.container {
    width: 100%;
    max-width: 600px;
    background: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0,0,0,0.1);
}

header {
    text-align: center;
    margin-bottom: 20px;
}

h1 {
    color: #2e7d32;
}

.role-selector {
    margin-bottom: 20px;
}

select, input, button {
    width: 100%;
    padding: 10px;
    margin-top: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
}

button {
    background: #2e7d32;
    color: white;
    border: none;
    cursor: pointer;
}

button:hover {
    background: #1b5e20;
}

.btn-group {
    display: flex;
    gap: 10px;
}

.hidden {
    display: none;
}

.result {
    margin-top: 15px;
    padding: 10px;
    background: #e8f5e9;
    border-radius: 5px;
}
