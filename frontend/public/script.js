// Modal controls
const loginModal = document.getElementById("loginModal");
const registerModal = document.getElementById("registerModal");

document.getElementById("getStartedBtn").onclick = () => loginModal.style.display = "flex";
document.getElementById("closeModal").onclick = () => loginModal.style.display = "none";
document.getElementById("closeRegister").onclick = () => registerModal.style.display = "none";

document.getElementById("openRegister").onclick = (e) => {
  e.preventDefault();
  loginModal.style.display = "none";
  registerModal.style.display = "flex";
};

// Close when clicking outside
window.onclick = (e) => {
  if (e.target === loginModal) loginModal.style.display = "none";
  if (e.target === registerModal) registerModal.style.display = "none";
};

// Handle login
document.getElementById("loginForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const res = await fetch("http://localhost:5000/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password })
  });

  const data = await res.json();
  alert(data.message);
});

// Handle register
document.getElementById("registerForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const username = document.getElementById("regUsername").value;
  const password = document.getElementById("regPassword").value;

  const res = await fetch("http://localhost:5000/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password })
  });

  const data = await res.json();
  alert(data.message);
  if (data.message.includes("success")) {
    registerModal.style.display = "none";
    loginModal.style.display = "flex";
  }
});