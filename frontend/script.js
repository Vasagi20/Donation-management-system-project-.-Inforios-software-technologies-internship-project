// const API_URL = "http://127.0.0.1:8000/api/donations/";

// // 🔹 Load all donations (Read All)
// async function loadDonations() {
//     const response = await fetch(API_URL);
//     const donations = await response.json();

//     const table = document.getElementById("donationList");
//     table.innerHTML = "";

//     donations.forEach(donation => {
//         const date = new Date(donation.date).toLocaleString();
//         const row = `
//             <tr>
//                 <td>${donation.id}</td>
//                 <td>${donation.donor_name}</td>
//                 <td>${donation.donation_type}</td>
//                 <td>${donation.amount}</td>
//                 <td>${date}</td>
//                 <td>${donation.remarks || ""}</td>
//                 <td>
//                     <button onclick="viewDonation(${donation.id})" class="view-btn">View</button>
//                     <button onclick="editDonation(${donation.id})" class="edit-btn">Edit</button>
//                     <button onclick="deleteDonation(${donation.id})" class="delete-btn">Delete</button>
//                 </td>
//             </tr>`;
//         table.innerHTML += row;
//     });
// }

// // 🔹 Add a new donation (Create)
// async function addDonation() {
//     const donor_name = document.getElementById("donor_name").value;
//     const donation_type = document.getElementById("donation_type").value;
//     const amount = parseFloat(document.getElementById("amount").value);
//     const remarks = document.getElementById("remarks").value;

//     if (!donor_name || !donation_type || !amount) {
//         alert("Please fill all required fields!");
//         return;
//     }

//     await fetch(API_URL, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ donor_name, donation_type, amount, remarks })
//     });

//     document.getElementById("donor_name").value = "";
//     document.getElementById("donation_type").value = "";
//     document.getElementById("amount").value = "";
//     document.getElementById("remarks").value = "";

//     loadDonations();
// }

// // 🔹 View single donation (Read)
// async function viewDonation(id) {
//     const res = await fetch(`${API_URL}${id}`);
//     const donation = await res.json();

//     alert(
//         `Donation Details:\n\n` +
//         `Donor: ${donation.donor_name}\n` +
//         `Type: ${donation.donation_type}\n` +
//         `Amount: ${donation.amount}\n` +
//         `Date: ${new Date(donation.date).toLocaleString()}\n` +
//         `Remarks: ${donation.remarks || "None"}`
//     );
// }

// // 🔹 Edit and Update donation (Update)
// async function editDonation(id) {
//     const res = await fetch(`${API_URL}${id}`);
//     const donation = await res.json();

//     // Prefill the form fields
//     document.getElementById("donor_name").value = donation.donor_name;
//     document.getElementById("donation_type").value = donation.donation_type;
//     document.getElementById("amount").value = donation.amount;
//     document.getElementById("remarks").value = donation.remarks || "";

//     // Change button to Update mode
//     const btn = document.querySelector(".form-container button");
//     btn.innerText = "Update Donation";
//     btn.style.background = "linear-gradient(90deg, #007bff, #00c6ff)";
//     btn.onclick = async () => {
//         const donor_name = document.getElementById("donor_name").value;
//         const donation_type = document.getElementById("donation_type").value;
//         const amount = parseFloat(document.getElementById("amount").value);
//         const remarks = document.getElementById("remarks").value;

//         await fetch(`${API_URL}${id}`, {
//             method: "PUT",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify({ donor_name, donation_type, amount, remarks })
//         });

//         // Reset form after update
//         document.getElementById("donor_name").value = "";
//         document.getElementById("donation_type").value = "";
//         document.getElementById("amount").value = "";
//         document.getElementById("remarks").value = "";
//         btn.innerText = "Add Donation";
//         btn.style.background = "linear-gradient(90deg, #ff6a00, #ee0979)";
//         btn.onclick = addDonation;

//         loadDonations();
//     };
// }

// // 🔹 Delete a donation (Delete)
// async function deleteDonation(id) {
//     if (!confirm("Are you sure you want to delete this donation?")) return;
//     await fetch(`${API_URL}${id}`, { method: "DELETE" });
//     loadDonations();
// }

// window.onload = loadDonations;

const API_URL = "http://127.0.0.1:8000/api/donations/";

// 🔹 Load all donations (Read All)
async function loadDonations() {
    const response = await fetch(API_URL);
    const donations = await response.json();

    const table = document.getElementById("donationList");
    table.innerHTML = "";

    // Use continuous serial numbers
    donations.forEach((donation, index) => {
        const date = new Date(donation.date).toLocaleString();
        const row = `
            <tr>
                <td>${index + 1}</td> <!-- Serial number -->
                <td>${donation.donor_name}</td>
                <td>${donation.donation_type}</td>
                <td>${donation.amount}</td>
                <td>${date}</td>
                <td>${donation.remarks || ""}</td>
                <td>
                    <button onclick="viewDonation(${donation.id})" class="view-btn">View</button>
                    <button onclick="editDonation(${donation.id})" class="edit-btn">Edit</button>
                    <button onclick="deleteDonation(${donation.id})" class="delete-btn">Delete</button>
                </td>
            </tr>`;
        table.innerHTML += row;
    });
}

// 🔹 Add a new donation (Create)
async function addDonation() {
    const donor_name = document.getElementById("donor_name").value;
    const donation_type = document.getElementById("donation_type").value;
    const amount = parseFloat(document.getElementById("amount").value);
    const remarks = document.getElementById("remarks").value;

    if (!donor_name || !donation_type || !amount) {
        alert("Please fill all required fields!");
        return;
    }

    await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ donor_name, donation_type, amount, remarks })
    });

    document.getElementById("donor_name").value = "";
    document.getElementById("donation_type").value = "";
    document.getElementById("amount").value = "";
    document.getElementById("remarks").value = "";

    loadDonations();
}

// 🔹 View single donation (Read)
async function viewDonation(id) {
    const res = await fetch(`${API_URL}${id}`);
    const donation = await res.json();

    alert(
        `Donation Details:\n\n` +
        `Donor: ${donation.donor_name}\n` +
        `Type: ${donation.donation_type}\n` +
        `Amount: ${donation.amount}\n` +
        `Date: ${new Date(donation.date).toLocaleString()}\n` +
        `Remarks: ${donation.remarks || "None"}`
    );
}

// 🔹 Edit and Update donation (Update)
async function editDonation(id) {
    const res = await fetch(`${API_URL}${id}`);
    const donation = await res.json();

    // Prefill form fields
    document.getElementById("donor_name").value = donation.donor_name;
    document.getElementById("donation_type").value = donation.donation_type;
    document.getElementById("amount").value = donation.amount;
    document.getElementById("remarks").value = donation.remarks || "";

    const btn = document.querySelector(".form-container button");
    btn.innerText = "Update Donation";
    btn.style.background = "linear-gradient(90deg, #007bff, #00c6ff)";
    btn.onclick = async () => {
        const donor_name = document.getElementById("donor_name").value;
        const donation_type = document.getElementById("donation_type").value;
        const amount = parseFloat(document.getElementById("amount").value);
        const remarks = document.getElementById("remarks").value;

        await fetch(`${API_URL}${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ donor_name, donation_type, amount, remarks })
        });

        // Reset form
        document.getElementById("donor_name").value = "";
        document.getElementById("donation_type").value = "";
        document.getElementById("amount").value = "";
        document.getElementById("remarks").value = "";
        btn.innerText = "Add Donation";
        btn.style.background = "linear-gradient(90deg, #ff6a00, #ee0979)";
        btn.onclick = addDonation;

        loadDonations();
    };
}

// 🔹 Delete a donation (Delete)
async function deleteDonation(id) {
    if (!confirm("Are you sure you want to delete this donation?")) return;
    await fetch(`${API_URL}${id}`, { method: "DELETE" });
    loadDonations();
}

// Load donations when page loads
window.onload = loadDonations;

