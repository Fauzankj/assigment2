// untuk menyembunyikan form saat web baru dibuka
let forms = document.querySelectorAll(".form");
for (let i = 0; i < forms.length; i++) {
forms[i].style.display = "none";
}

// untuk memunculkan form saat button edit diklik
const editBtn = document.querySelector("#button-edit");
const biodataForm = document.querySelector(".form");
editBtn.addEventListener("click", function () {
biodataForm.style.display = "block";
});

// mengambil data yang ada di section biodata
const form = document.querySelector("#contact");
const namaInput = document.querySelector("#nama-input");
const roleInput = document.querySelector("#role-input");
const avibilityInput = document.querySelector("#avibility-input");
const ageInput = document.querySelector("#age-input");
const lokasiInput = document.querySelector("#lokasi-input");
const experienceInput = document.querySelector("#experience-input");
const emailInput = document.querySelector("#email-input");

const nama = document.querySelector("#nama");
const role = document.querySelector("#role");
const avibility = document.querySelector("#avibility");
const age = document.querySelector("#age");
const lokasi = document.querySelector("#lokasi");
const experience = document.querySelector("#experience");
const email = document.querySelector("#email");

// untuk memunculkan data di section biodata
function editbiodata() {
namaInput.value = nama.textContent;
roleInput.value = role.textContent;
avibilityInput.value = avibility.textContent;
ageInput.value = age.textContent;
lokasiInput.value = lokasi.textContent;
experienceInput.value = experience.textContent;
emailInput.value = email.textContent;
}

// untuk mengaktifkan button submit
form.addEventListener("submit", (event) => {
event.preventDefault();

nama.textContent = namaInput.value;
role.textContent = roleInput.value;
avibility.textContent = avibilityInput.value;
age.textContent = ageInput.value;
lokasi.textContent = lokasiInput.value;
experience.textContent = experienceInput.value;
email.textContent = emailInput.value;

  // mengosongkan input form
namaInput.value = "";
roleInput.value = "";
avibilityInput.value = "";
ageInput.value = "";
lokasiInput.value = "";
experienceInput.value = "";
emailInput.value = "";

  // untuk menyembunyikan form setelah disumit
form.style.display = "none";
biodataHeading.style.display = "block";
});

// kondisi untuk bisa melakukan edit lebih dari sekali
editBtn.addEventListener("click", () => {
form.style.display = "block";
biodataHeading.style.display = "none";
});

// btn cancel
const cancelBtn = document.querySelector("#button-cancel");
cancelBtn.addEventListener("click", () => {
form.style.display = "none";
biodataHeading.style.display = "block";
});