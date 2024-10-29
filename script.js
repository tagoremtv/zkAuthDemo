// Load the WASM module
import init, { get_pass_hash, generate_proof, verify_proof } from './pkg/zk_wasm.js';

async function run() {
    await init(); // Initialize the WASM module
}

// Run the WASM initialization
run();

// Registration function
function register() {
    const username = document.getElementById("reg-username").value;
    const password = document.getElementById("reg-password").value;

    if (!username || !password) {
        alert("Please enter both username and password.");
        return;
    }

    // Hash the password using the WASM function
    const hashedPassword = get_pass_hash(password);
    
    // Simulate storing hashed password in local storage
    localStorage.setItem(username, hashedPassword);
    alert("Registration successful!");
}

// Login function
function login() {
    const username = document.getElementById("login-username").value;
    const password = document.getElementById("login-password").value;

    if (!username || !password) {
        alert("Please enter both username and password.");
        return;
    }

    // Retrieve the hashed password from local storage
    const hashedPassword = localStorage.getItem(username);

    if (!hashedPassword) {
        alert("Username not found.");
        return;
    }

    // Generate the zero-knowledge proof
    const proof = generate_proof(username, password);
    
    // Prepare public inputs: This could be the hashed password or any other public information needed for verification
    const pub_inputs = hashedPassword; // This is the hashed password; ensure it meets your verification logic

    // Verify the proof
    const isValid = verify_proof(proof, pub_inputs, username);

    if (isValid) {
        alert("Login successful!");
    } else {
        alert("Login failed: Invalid credentials.");
    }
}
