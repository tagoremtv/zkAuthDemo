ZK-Based Authentication System

This project is a front-end authentication system using the zkAuth Kit to implement a zero-knowledge (ZK) proof-based login system. The system uses a WebAssembly (WASM) module for password hashing and zero-knowledge proof generation and verification.

Features
Registration: Users can register by providing a username and password, which is hashed and stored in local storage.
Login: Users can log in by providing their username and password, which generates a ZK proof that verifies against the stored hashed password.
Zero-Knowledge Proof: The system leverages ZK proofs to authenticate users without directly revealing the password.
Setup
Prerequisites
Web Server: For security reasons, WebAssembly files may not load directly when opening the index.html file. It’s recommended to run a local server.
You can use any local server, such as:
Python (python -m http.server 8000)
Node.js (http-server)

Registration:
Hashes the user’s password with get_pass_hash and stores it in local storage.
Login:
Retrieves the stored hash for the given username.
Uses generate_proof to create a zero-knowledge proof.
Verifies the proof with verify_proof. If valid, it displays "Login successful."

Files

pkg/zk_wasm.js: Contains functions to initialize WASM, hash passwords, generate proofs, and verify proofs.
index.html: HTML structure and JavaScript logic for the registration and login flow.
styles.css: Styling for dark theme and responsive design.
Technologies Used
HTML, CSS, JavaScript: Front-end interface and logic.
WebAssembly (WASM): Provides ZK-based functions from the zkAuth Kit.

Troubleshooting

WASM Initialization Issues: Ensure you are running a local server; loading the index.html file directly may cause errors.
Console Errors: Check the browser console for any initialization or function-related errors.
Local Storage Check: Verify that the registration process stores the hashed password in local storage.

License

This project is for educational purposes and demonstrates the use of zero-knowledge proofs in a front-end authentication system under MIT License.
