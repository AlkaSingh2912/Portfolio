var typed= new Typed(".text",{
    strings:["Software Developer" , "Data Analyst" , "Full Stack Developer"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop: true
})

function toggleContent(event, contentId) {
    event.preventDefault(); // Prevent default anchor behavior

    // Get all the hidden content elements
    const allContent = document.querySelectorAll('.more-content');
    const allServiceItems = document.querySelectorAll('.service-item');

    // Close all open content sections and remove the 'expanded' class
    allContent.forEach(content => {
        if (content.id !== contentId) {
            content.style.display = 'none';
        }
    });
    allServiceItems.forEach(item => {
        if (!item.querySelector(`#${contentId}`)) {
            item.classList.remove('expanded');
        }
    });

    // Open the clicked content section
    const content = document.getElementById(contentId);
    const serviceItem = content.parentElement; // Get the parent .service-item element

    if (content.style.display === 'block') {
        content.style.display = 'none';
        serviceItem.classList.remove('expanded');
    } else {
        content.style.display = 'block';
        serviceItem.classList.add('expanded');
    }
}


document.querySelectorAll('.circle').forEach(circle => {
    let percentage = circle.getAttribute('data-percentage');
    circle.style.setProperty('--percentage', percentage + '%');
});


/*
// Example of adding certificates dynamically (optional)
const certificates = [
    {
        title: "Web Development Bootcamp",
        issuer: "Udemy",
        date: "March 2023",
        link: "#"
    },
    {
        title: "JavaScript Mastery",
        issuer: "Coursera",
        date: "June 2023",
        link: "#"
    },
    {
        title: "Python for Everybody",
        issuer: "edX",
        date: "July 2023",
        link: "#"
    }
];

const container = document.querySelector('.certificates-container');

certificates.forEach(cert => {
    const certCard = document.createElement('div');
    certCard.classList.add('certificate-card');
    
    certCard.innerHTML = `
        <h3>${cert.title}</h3>
        <p>Issued by: <span>${cert.issuer}</span></p>
        <p>Date: <span>${cert.date}</span></p>
        <a href="${cert.link}" class="view-certificate" target="_blank">View Certificate</a>
    `;
    
    container.appendChild(certCard);
});


const publications = [
    {
        title: "Understanding Machine Learning Algorithms",
        authors: "John Doe, Jane Smith",
        journal: "International Journal of Computer Science",
        date: "March 2023",
        link: "#"
    },
    {
        title: "Advancements in AI and Deep Learning",
        authors: "John Doe, Mark Johnson",
        journal: "Journal of Artificial Intelligence Research",
        date: "June 2023",
        link: "#"
    },
    {
        title: "Data Science in Healthcare",
        authors: "John Doe, Emily Brown",
        journal: "Health Informatics Journal",
        date: "July 2023",
        link: "#"
    }
];

const container = document.querySelector('.publications-grid');

publications.forEach(pub => {
    const pubCard = document.createElement('div');
    pubCard.classList.add('publication-card');
    
    pubCard.innerHTML = `
        <div class="card-content">
            <h3>${pub.title}</h3>
            <p class="authors">${pub.authors}</p>
            <p class="journal">${pub.journal}</p>
            <p class="date">${pub.date}</p>
            <a href="${pub.link}" class="view-paper" target="_blank">View Publication</a>
        </div>
    `;
    
    container.appendChild(pubCard);
});


const educationList = [
    {
        degree: "Bachelor of Science in Computer Science",
        institution: "XYZ University",
        dates: "2018 - 2022",
        description: "Focused on software development, algorithms, and data structures. Graduated with honors."
    },
    {
        degree: "High School Diploma",
        institution: "ABC High School",
        dates: "2016 - 2018",
        description: "Specialized in Science Stream with subjects like Mathematics, Physics, and Chemistry."
    },
    {
        degree: "Master of Science in Data Science (Ongoing)",
        institution: "PQR University",
        dates: "2023 - Present",
        description: "Currently pursuing advanced studies in data science, machine learning, and AI."
    }
];

const educationContainer = document.querySelector('.education-container');

educationList.forEach(edu => {
    const educationRow = document.createElement('div');
    educationRow.classList.add('education-row');

    educationRow.innerHTML = `
        <div class="education-details">
            <h3>${edu.degree}</h3>
            <p class="institution">${edu.institution}</p>
            <p class="dates">${edu.dates}</p>
            <p class="description">${edu.description}</p>
        </div>
    `;

    educationContainer.appendChild(educationRow);
});

// Select all progress bars
const progressBars = document.querySelectorAll('.progress');

// Function to animate the progress bar
function animateProgressBars() {
    progressBars.forEach(progress => {
        const value = progress.getAttribute('data-skill');
        progress.style.width = value + '%';
    });
}

// Trigger animation when the skills section is in view
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateProgressBars();
            observer.unobserve(entry.target); // Unobserve after animation completes
        }
    });
}, {
    threshold: 0.5 // Animation triggers when 50% of the section is in view
});

// Observe the skills section
const skillsSection = document.querySelector('#skills');
observer.observe(skillsSection);

*/




