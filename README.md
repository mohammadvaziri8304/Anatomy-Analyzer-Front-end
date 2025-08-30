# 🧬 Anatomy Analyzer (Front-end)

[![Vercel Deployment](https://img.shields.io/badge/Deployed%20on-Vercel-black?logo=vercel)](https://anatomy-analyzer-front-end.vercel.app/)  
[![GitHub Repo](https://img.shields.io/badge/Repository-GitHub-blue?logo=github)](https://github.com/mohammadvaziri8304/Anatomy-Analyzer-Front-end)

## 📌 Overview
**Anatomy Analyzer** is a web application that allows users to analyze anatomical images in two different ways:
1. **Automatic Analysis (AI-powered):** Upload an image and let the backend AI model detect and process anatomical points automatically.  
2. **Manual Analysis (User-defined):** Upload an image and manually select specific points on the image. These coordinates are then sent to the backend for custom processing. 

This project is the **frontend** part of the system, built with **React** and connected to a FastAPI backend.

🔗 **Live Demo:** [Anatomy Analyzer on Vercel](https://anatomy-analyzer-front-end.vercel.app/)  
🔗 **Repository:** [GitHub Project](https://github.com/mohammadvaziri8304/Anatomy-Analyzer-Front-end)  
🔗 **Backend Repository (FastAPI):** [Anatomy Backend](https://github.com/ParsaExact/Anatomy)

---

## 🚀 Features
- 📤 Upload anatomical images.
- ✨ **AI-based automatic point detection** and analysis.
- 🎯 **Manual point selection** on uploaded images.
- 📊 Sends selected points to backend API for analysis.
- 🖼️ Interactive image preview with point markers.
- 🎨 Modern and responsive UI with custom styles.

---

## 🛠️ Tech Stack
- **Frontend:** React (CRA), Axios, React Router  
- **Styling:** Custom CSS with modern UI design  
- **Backend (connected):** FastAPI (deployed separately)  
- **Deployment:** Vercel  

---

## 📂 Project Structure
src/  
├── components/ # React components (Upload forms, etc.)  
├── pages/ # App pages  
├── services/ # Axios API services  
├── styles/ # Custom CSS styles  
├── App.js # Main app entry  
└── index.js # React entry point  

---

## ⚡ Installation & Development
Clone the repository and install dependencies:

```bash
git clone https://github.com/mohammadvaziri8304/Anatomy-Analyzer-Front-end.git
cd Anatomy-Analyzer-Front-end
npm install
```

Run the development server:

```bash
npm start
```

Build for production:

```bash
npm run build
```