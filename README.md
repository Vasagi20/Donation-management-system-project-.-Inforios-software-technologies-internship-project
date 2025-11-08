Donation Management System 

📍 Internship Project – Inforios Software Technologies, Thanjavur

📘 Project Overview

The Donation Management System  is a web-based application developed during my internship at Inforios Software Technologies, Thanjavur.
It is built using FastAPI, Python, PostgreSQL, and follows the CRS (Client–Repository–Service) architecture.

The system is designed to streamline the process of managing donations and donors by providing a secure, easy-to-use platform. It enables users to register, donate, send feedback, and view their profiles, while administrators can manage all records efficiently.

🚀 Features

🔐 User Authentication – Secure login and registration system.

🏠 Home Page – Displays donation activities and organization details.

📊 Dashboard – Provides a summary of donations and users.

👤 Profile Page – Allows users to view and edit personal details.

💬 Feedback Section – Collects and manages user feedback.

📨 Contact Us Page – Enables users to send messages to the organization.

🧩 CRUD Operations – Perform Create, Read, Update, and Delete functions for donors, feedback, and donations.

🗄️ PostgreSQL Database – Securely stores and manages data.

🧱 Tech Stack

Component	Technology
Frontend	HTML, CSS, JavaScript
Backend	FastAPI (Python)
Architecture	CRS (Client–Repository–Service)
Database	PostgreSQL
Server	Uvicorn

⚙️ Installation & Setup
1️⃣ Clone the repository
git clone https://github.com/your-username/donation-management-system.git
cd donation-management-system

2️⃣ Create and activate a virtual environment
python -m venv venv
venv\Scripts\activate     # For Windows
# OR
source venv/bin/activate  # For Mac/Linux

3️⃣ Install dependencies
pip install -r requirements.txt

4️⃣ Configure PostgreSQL connection

Update your database connection string in the configuration file:

DATABASE_URL = "postgresql://username:password@localhost:5432/donation_db"

5️⃣ Run the server
uvicorn app.main:app --reload


Open your browser and visit http://127.0.0.1:8000

🧩 CRUD Operations
Operation	Description
Create	Add new donors or donation details
Read	View all donations and feedback
Update	Modify existing user or donation records
Delete	Remove outdated or incorrect data
👨‍💻 Internship Details

Organization: Inforios Software Technologies, Thanjavur

Role: Foundation of Python Intern

Project Title: Donation Management System 

Duration: [13.10.2025 to 30.10.2025]

Technologies Used: FastAPI, Python, PostgreSQL, HTML, CSS, JavaScript

🏁 Conclusion

This internship project helped me gain hands-on experience in FastAPI, backend development, and database integration.
It improved my understanding of CRUD operations, user authentication, and structured web application design using the CRS architecture.

🧾 License

This project was created as part of my internship at Inforios Software Technologies for academic and learning purposes.
You may use or modify it with proper credit.
