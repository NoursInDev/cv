console.clear();

const projectShowcase = document.querySelector(".projects");
const projects = projectShowcase.querySelectorAll(".project");
const images = projectShowcase.querySelectorAll("img");

// Cursor
const cursor = document.querySelector(".cursor__circle");
const cursorText = cursor.querySelector(".cursor__text p");

const moveCursor = (e) => {
    gsap.to(cursor, 0.3, {
        x: e.clientX - 10,
        y: e.clientY - 10,
        ease: "power4.out",
        delay: 0.09,
    });
};

const activateCursor = (title) => {
    const width = Math.ceil(title.offsetWidth * 1.1);
    cursor.style.setProperty("--width", `${width}px`);
    cursor.classList.add("cursor__circle--active");
    cursorText.innerText = title.innerText;
};

document.addEventListener("DOMContentLoaded", () => {

    window.onload = () => {
        gsap.set(images, {
            yPercent: 100,
        });
        window.requestAnimationFrame(() => {
            gsap.to(images, 0.3, {
                yPercent: 0,
                opacity: 1,
                delay: 0.5,
                stagger: 0.3,
                ease: "power3.inOut",
                clearProps: "transform",
            });
        });

        projects.forEach((currentProject) => {
            const title = currentProject.querySelector(".project__title");

            currentProject.addEventListener("mouseover", () => {
                projectShowcase.classList.add("projects--hovered");
                projects.forEach((project) => {
                    if (project.classList.contains("project--hovered")) {
                        project.classList.remove("project--hovered");
                    }
                    if (project == currentProject) {
                        currentProject.classList.add("project--hovered");
                    }
                    activateCursor(title);
                });
            });

            currentProject.addEventListener("mouseleave", () => {
                projectShowcase.classList.remove("projects--hovered");
                currentProject.classList.remove("project--hovered");
                cursor.classList.remove("cursor__circle--active");
                cursorText.innerText = "";
            });
        });

        document.body.addEventListener("mousemove", moveCursor);
    };
    console.log('hello world')
});
