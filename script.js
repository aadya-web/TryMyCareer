// =========================
// ANIMATED COUNTERS
// =========================

const counters = document.querySelectorAll(".stat-box h2");

const startCounter = () => {

    counters.forEach(counter => {

        const target =
            parseInt(counter.innerText.replace(/\D/g, ""));

        let count = 0;

        const increment = target / 80;

        const updateCounter = () => {

            if(count < target){

                count += increment;

                counter.innerText =
                    Math.ceil(count) + "+";

                requestAnimationFrame(updateCounter);

            } else {

                counter.innerText =
                    target + "+";
            }
        };

        updateCounter();
    });
};

const statsSection =
    document.querySelector(".stats");

let counterStarted = false;

window.addEventListener("scroll", () => {

    if(!statsSection) return;

    const sectionTop =
        statsSection.offsetTop - 400;

    if(window.scrollY > sectionTop &&
       !counterStarted){

        startCounter();
        counterStarted = true;
    }
});


// =========================
// SCROLL REVEAL
// =========================

const revealElements =
    document.querySelectorAll(
        ".feature-card, .career-card, .step, .testimonial"
    );

function reveal(){

    revealElements.forEach(el => {

        const top =
            el.getBoundingClientRect().top;

        if(top < window.innerHeight - 100){

            el.classList.add("active");
        }

    });
}

window.addEventListener("scroll", reveal);
reveal();


// =========================
// NAVBAR SHADOW
// =========================

const navbar =
    document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        navbar.style.boxShadow =
        "0 10px 30px rgba(0,0,0,0.08)";

    }

    else{

        navbar.style.boxShadow =
        "none";

    }

});


// =========================
// CAREER QUIZ
// =========================

function startCareerQuiz(){

    const answer = prompt(
        "Which subject do you enjoy most?\n\nScience\nMath\nBusiness\nArt\nTechnology"
    );

    if(!answer) return;

    let career = "";

    switch(answer.toLowerCase()){

        case "science":
            career = "Doctor";
            break;

        case "math":
            career = "Engineer";
            break;

        case "business":
            career = "Entrepreneur";
            break;

        case "art":
            career = "Architect";
            break;

        case "technology":
            career = "Software Engineer";
            break;

        default:
            career = "Career Explorer";
    }

    alert(
        "Recommended Career: " + career
    );
}


// =========================
// BUTTON EVENTS
// =========================

const primaryButtons =
    document.querySelectorAll(
        ".primary-btn"
    );

primaryButtons.forEach(button => {

    button.addEventListener("click", () => {

        startCareerQuiz();

    });

});


// =========================
// PREMIUM BUTTON
// =========================

const premiumButton =
    document.querySelector(".premium-btn");

if(premiumButton){

    premiumButton.addEventListener("click", () => {

        alert(
            "Premium Coming Soon!\n\nIncludes:\n• AI Mentor\n• Career Roadmaps\n• Internship Matching"
        );

    });

}


// =========================
// FLOATING CARDS PARALLAX
// =========================

document.addEventListener("mousemove", e => {

    const cards =
        document.querySelectorAll(
            ".floating-card"
        );

    const x =
        (window.innerWidth / 2 - e.pageX) / 40;

    const y =
        (window.innerHeight / 2 - e.pageY) / 40;

    cards.forEach(card => {

        card.style.transform =
        `translate(${x}px, ${y}px)`;

    });

});


// =========================
// SMOOTH SCROLL BUTTON
// =========================

const startButton =
    document.querySelector(".primary-btn");

if(startButton){

    startButton.addEventListener("click", () => {

        const features =
            document.querySelector(".features");

        if(features){

            features.scrollIntoView({
                behavior:"smooth"
            });

        }

    });

}


// =========================
// TYPEWRITER EFFECT
// =========================

const heroTitle =
    document.querySelector(".hero h1");

if(heroTitle){

    const text =
        "Try Careers Before You Choose Them.";

    heroTitle.innerHTML = "";

    let i = 0;

    function typeWriter(){

        if(i < text.length){

            heroTitle.innerHTML += text.charAt(i);

            i++;

            setTimeout(typeWriter, 45);

        }

    }

    setTimeout(typeWriter, 500);

}


// =========================
// RANDOM TESTIMONIAL ROTATOR
// =========================

const testimonials = [

    "This helped me discover engineering.",

    "The simulations were surprisingly realistic.",

    "I finally understood what career suits me.",

    "Way more engaging than normal career websites."

];

setInterval(() => {

    const testimonial =
        document.querySelector(".testimonial p");

    if(testimonial){

        const random =
            Math.floor(
                Math.random() *
                testimonials.length
            );

        testimonial.innerText =
            testimonials[random];
    }

}, 5000);


// =========================
// DARK MODE
// =========================

const darkButton =
document.createElement("button");

darkButton.innerText = "🌙";

darkButton.style.position = "fixed";
darkButton.style.bottom = "20px";
darkButton.style.right = "20px";
darkButton.style.width = "60px";
darkButton.style.height = "60px";
darkButton.style.borderRadius = "50%";
darkButton.style.border = "none";
darkButton.style.cursor = "pointer";
darkButton.style.fontSize = "22px";
darkButton.style.zIndex = "999";

document.body.appendChild(darkButton);

let darkMode = false;

darkButton.addEventListener("click", () => {

    darkMode = !darkMode;

    if(darkMode){

        document.body.style.background =
        "#0F172A";

        document.body.style.color =
        "white";

        darkButton.innerText = "☀️";

    }

    else{

        document.body.style.background =
        "#F8FAFC";

        document.body.style.color =
        "#0F172A";

        darkButton.innerText = "🌙";

    }

});


// =========================
// PAGE LOADER
// =========================

window.addEventListener("load", () => {

    document.body.style.opacity = "0";

    setTimeout(() => {

        document.body.style.transition =
        "opacity 1s";

        document.body.style.opacity = "1";

    }, 100);

});