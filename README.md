🩵 Donation Management System (DMS)
📍 Internship Project – Inforios Software Technologies, Thanjavur
📘 Project Overview

The Donation Management System (DMS) is a web-based application developed during my internship at Inforios Software Technologies, Thanjavur.
The project is built using FastAPI, Python, PostgreSQL, and follows the CRS (Client–Repository–Service) architecture.

This system helps organizations manage donations efficiently by allowing users to register, donate, and interact through a secure, user-friendly interface. It also provides an admin panel for managing donors, feedback, and donation records.

🚀 Features

🔐 User Authentication – Login & registration with validation.

🏠 Home Page – Displays donation activities and organization info.

📊 Dashboard – Admin and user dashboard for managing data.

👤 Profile Page – View and edit user information.

💬 Feedback Section – Submit and manage donor feedback.

📨 Contact Us – Send messages or queries to the organization.

🧩 CRUD Operations – Create, Read, Update, and Delete functionalities for donations, feedback, and users.

🗄️ PostgreSQL Database – Stores all user and donation data securely.

🧱 Tech Stack
Component	Technology Used
Frontend	HTML, CSS, JavaScript
Backend	FastAPI (Python)
Architecture	CRS (Client–Repository–Service)
Database	PostgreSQL
Server	Uvicorn
🗂️ Project Structure
donation-management-system/
│
├── app/
│   ├── main.py              # Application entry point
│   ├── models/              # Database models
│   ├── schemas/             # Pydantic schemas
│   ├── services/            # Business logic
│   ├── repository/          # Database queries
│   ├── routes/              # API routes
│   └── templates/ & static/ # HTML, CSS, JS files
│
├── requirements.txt         # Dependencies
└── README.md                # Project documentation

⚙️ Installation & Setup
1️⃣ Clone the repository
git clone https://github.com/your-username/donation-management-system.git
cd donation-management-system

2️⃣ Create and activate virtual environment
python -m venv venv
venv\Scripts\activate     # For Windows
# OR
source venv/bin/activate  # For Mac/Linux

3️⃣ Install dependencies
pip install -r requirements.txt

4️⃣ Configure PostgreSQL connection

In app/database/config.py, set your connection string:

DATABASE_URL = "postgresql://username:password@localhost:5432/donation_db"

5️⃣ Run the server
uvicorn app.main:app --reload


Visit http://127.0.0.1:8000
 to view the app.

🧩 CRUD Operations
Operation	Description
Create	Add new donors or donation records
Read	View all donations and feedback
Update	Modify donation details or user profiles
Delete	Remove records or feedback
👨‍💻 Internship Details

Organization: Inforios Software Technologies, Thanjavur

Role: Intern (Web Developer)

Project Title: Donation Management System (DMS)

Duration: [13.10.2025 to 30.10.2025]

Technologies Used: FastAPI, Python, PostgreSQL, HTML, CSS, JavaScript

📸 Screenshots




🏁 Conclusion

This project enhanced my practical understanding of web development, API design, and database integration using FastAPI and PostgreSQL.
It was a valuable internship experience where I learned how to build scalable, real-world web applications with CRUD functionalities and clean architecture.

🧾 License

This project is developed for academic and learning purposes during my internship.
You may use or modify it with proper credit.
