# Dev Design Studio 🚀  
Modern Creative Agency Website

🔗 **Live Website:** https://devdesignstudio.vercel.app/

---

## 📌 Project Overview

**Dev Design Studio** is a modern, visually engaging **creative agency website** designed to showcase services, portfolio, and brand identity.  
The main focus of this project is to deliver a **smooth user experience**, **high-quality animations**, and a **clean, premium UI**.

The website is built using **TypeScript** and **GSAP (GreenSock Animation Platform)** to create smooth animations and scroll-based interactions that enhance user engagement.

---

## 🧱 Website Structure / Pages

This website follows a **single-page, scroll-based agency layout**, divided into multiple animated sections:

1. **Home / Hero Section**  
   - Eye-catching hero layout  
   - Animated headings and elements  

2. **About Section**  
   - Agency introduction  
   - Mission & creative approach  

3. **Services Section**  
   - Service cards  
   - Scroll-triggered animations  

4. **Portfolio / Work Section**  
   - Project showcase  
   - Parallax & reveal effects  

5. **Contact / Call-To-Action Section**  
   - Contact information or CTA  
   - Smooth entry animations  

> ⚡ The website is a single page but contains multiple animated sections.

---

## 🧠 Tech Stack

| Technology | Purpose |
|-----------|--------|
| **Next.js / React** | Frontend framework |
| **TypeScript** | Type-safe and scalable code |
| **GSAP (GreenSock)** | Advanced animations |
| **GSAP ScrollTrigger** | Scroll-based animation control |
| **Smooth Scrolling** | Enhanced user experience |
| **CSS / Tailwind / SCSS** | Styling |
| **Vercel** | Deployment & hosting |

---

## ✨ Animations (GSAP)

GSAP is used to create modern and smooth animations throughout the website, including:

- Fade-in and slide-up effects  
- Stagger animations for text and cards  
- Scroll-based reveal animations  
- Timeline-based animation sequences  

### Example (Concept Code)

```ts
gsap.from(".section", {
  opacity: 0,
  y: 50,
  duration: 1,
  scrollTrigger: {
    trigger: ".section",
    start: "top 80%",
  },
});
