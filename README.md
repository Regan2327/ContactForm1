# 📬 Contact Form with JavaScript Validation

This project is a simple, responsive **contact form** built with HTML, CSS, and **vanilla JavaScript**. It includes **client-side validation** for `Name`, `Email`, `Subject`, and `Message` fields, ensuring proper format and feedback before submission.

---

## 🎯 Objective

Build a contact form that:
- Validates user input on the **client side**
- Displays real-time **error messages**
- Shows a **success message** if all inputs are valid
- Prevents form submission if validation fails

---

## 🛠 Tools Used

- HTML5
- CSS3
- JavaScript (Vanilla)
- VS Code
- Chrome DevTools

---

## 📁 Project Structure
contact-form/
├── index.html # Form structure
├── style.css # Styling & layout
└── script.js # Validation logic


---

## ✨ Features

- 🔒 Validates required fields (`Name`, `Email`, `Message`, `Subject`)
- 📧 Validates email format using **regular expressions**
- ❌ Shows error messages below invalid fields
- ✅ Displays a success message if the form is valid
- 🔃 Resets the form on successful submission
- 📄 Dynamic placeholder updates based on subject selection

---

## 🧪 How to Test

1. Open `index.html` in a browser.
2. Leave fields blank and press **Submit** → error messages appear.
3. Enter an invalid email → “Invalid email format” appears.
4. Choose different subjects → message placeholder updates.
5. Fill in valid info → form resets and a success message appears.

---

## 📌 Input Rules

| Field   | Validation Rule                      |
|---------|--------------------------------------|
| Name    | Required                             |
| Email   | Required + Must match email pattern  |
| Subject | Must be selected from dropdown       |
| Message | Required                             |

---

## 🧠 Regex Used for Email Validation

```js
/^[^\s@]+@[^\s@]+\.[^\s@]+$/

