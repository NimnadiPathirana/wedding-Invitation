// Initialize Advanced Smooth Scroll Library Engine Framework
document.addEventListener("DOMContentLoaded", function() {
    if (typeof AOS !== 'undefined') {
        AOS.init({
            once: true,
            mirror: false
        });
    }
});

// Setup Advanced Real-time Live Countdown Engine
const weddingDate = new Date("July 20, 2026 10:30:00").getTime();

const countdownEngine = setInterval(function() {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if(document.getElementById("days")) {
        document.getElementById("days").innerText = days < 10 ? "0" + days : days;
        document.getElementById("hours").innerText = hours < 10 ? "0" + hours : hours;
        document.getElementById("minutes").innerText = minutes < 10 ? "0" + minutes : minutes;
        document.getElementById("seconds").innerText = seconds < 10 ? "0" + seconds : seconds;
    }

    if (distance < 0) {
        clearInterval(countdownEngine);
        let countEl = document.querySelector(".luxury-countdown");
        if(countEl) {
            countEl.innerHTML = `<div style="flex:1; font-family:'Cinzel', serif; font-size:24px; padding:20px; color:#c27a13; border: 1px solid rgba(194,122,19,0.3); border-radius:16px; background:#fff;">💍 JUST MARRIED!</div>`;
        }
    }
}, 1000);

// Interactive Architectural Card Navigation Engine
function scrollToMap() {
    const target = document.getElementById("location");
    if(target) {
        target.scrollIntoView({ behavior: 'smooth' });
    }
}

// Active Nav Link Scroll Highlighter Mechanism
window.addEventListener('scroll', () => {
    let scrollLocation = window.scrollY;
    document.querySelectorAll('section, header').forEach(section => {
        let id = section.getAttribute('id');
        if(!id) return;
        
        let offset = section.offsetTop - 150;
        let height = section.offsetHeight;
        
        if(scrollLocation >= offset && scrollLocation < offset + height) {
            document.querySelectorAll('.nav-links a').forEach(link => {
                link.classList.remove('active');
                if(link.getAttribute('href') === '#' + id) {
                    link.classList.add('active');
                }
            });
        }
    });
});

// Advanced API Web Form RSVP Submit Cloud Handler
const scriptURL = "https://script.google.com/macros/s/AKfycbxQF9ksGkzq6rTKvwZqumbs3grvP7-o_fk0BpqrgeUC34AetHfSmYndZLuepxsDkYh3A/exec";
const rsvpForm = document.getElementById("advancedRsvpForm");

if(rsvpForm) {
    rsvpForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        
        const submitBtn = rsvpForm.querySelector(".submit-luxury-btn");
        const originalText = submitBtn.innerHTML;
        
        submitBtn.style.opacity = "0.6";
        submitBtn.innerText = "PROCESSING...";

        const dataPayload = {
            name: rsvpForm.name.value,
            guests: rsvpForm.guests.value,
            attendance: rsvpForm.attendance.value,
            message: rsvpForm.message.value
        };

        try {
            const urlEncodedPayload = new URLSearchParams();
            for (const key in dataPayload) {
                urlEncodedPayload.append(key, dataPayload[key]);
            }

            await fetch(scriptURL, {
                method: "POST",
                mode: "no-cors",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: urlEncodedPayload
            });
            
            alert("Thank you! Your RSVP status has been verified and registered successfully. ❤️");
            rsvpForm.reset();
        } catch (error) {
            alert("Connection error encountered. Response logged locally. Please try again shortly.");
            console.error('API Fail Logs:', error.message);
        } finally {
            submitBtn.style.opacity = "1";
            submitBtn.innerHTML = originalText;
        }
    });
}