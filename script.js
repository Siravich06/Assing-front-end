function confirmData() {
    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const idCard = document.getElementById("idCard").value.trim();
    
    if (!firstName || !lastName || !idCard) {
        alert("กรุณาระบุชื่อ นามสกุล และเลขบัตรประชาชนให้ครบถ้วน");
        return;
    }
    
    document.getElementById("popup").style.display = "block";
}

function checkEligibility() {
    document.getElementById("popup").style.display = "none";

    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const idCard = document.getElementById("idCard").value;
    const gender = document.getElementById("gender").value;
    const birthDate = new Date(document.getElementById("birthDate").value);
    const today = new Date();
    const age = today.getFullYear() - birthDate.getFullYear();

    document.getElementById("result-name").textContent = `ชื่อ: ${firstName} ${lastName}`;
    document.getElementById("result-idCard").textContent = `เลขบัตรประชาชน: ${idCard}`;
    document.getElementById("result-gender").textContent = `เพศ: ${gender}`;
    document.getElementById("result-birthDate").textContent = `วัน/เดือน/ปีเกิด: ${birthDate.toLocaleDateString('th-TH')}`;

    let statusMessage = "";
    let statusClass = "";

    if ((age >= 65) || (age >= 0.5 && age <= 2)) {
        statusMessage = "สามารถเข้ารับบริการได้";
        statusClass = "green";
    } else {
        statusMessage = "ไม่สามารถเข้ารับบริการได้";
        statusClass = "red";
    }

    const resultStatus = document.getElementById("result-status");
    resultStatus.textContent = statusMessage;
    resultStatus.className = statusClass;

    document.getElementById("result-container").classList.remove("hidden");
    document.getElementById("form-container").classList.add("hidden");
}

function goBack() {
    document.getElementById("result-container").classList.add("hidden");
    document.getElementById("form-container").classList.remove("hidden");
    clearForm();
}

function clearForm() {
    document.getElementById("firstName").value = "";
    document.getElementById("lastName").value = "";
    document.getElementById("idCard").value = "";
    document.getElementById("birthDate").value = "";
    document.getElementById("gender").selectedIndex = 0;
}

document.getElementById("birthDate").max = new Date().toISOString().split("T")[0];

