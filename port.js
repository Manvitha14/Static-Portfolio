// JavaScript for navigation effects

// JavaScript for navigation effects
document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetSection = document.querySelector(this.getAttribute('href'));
        targetSection.scrollIntoView({
            behavior: 'smooth'
        });
        // Remove active class from all links
        document.querySelectorAll('.navbar a').forEach(link => link.classList.remove('active'));
        // Add active class to the clicked link
        this.classList.add('active');
    });
});
document.getElementById('education-btn').addEventListener('click', function() {
    toggleTab('education', this);
});

document.getElementById('experience-btn').addEventListener('click', function() {
    toggleTab('experience', this);
});

document.getElementById('hobbies-btn').addEventListener('click', function() {
    toggleTab('hobbies', this);
});
document.getElementById('skills-btn').addEventListener('click', function() {
    toggleTab('skills', this);
});


function toggleTab(activeTab, button) {
    const allDetails = document.querySelectorAll('.about-details');
    allDetails.forEach(detail => detail.style.display = 'none');

    document.getElementById(activeTab).style.display = 'block';

    const allButtons = document.querySelectorAll('.tab-btn');
    allButtons.forEach(btn => btn.classList.remove('active'));

    button.classList.add('active');
}

/*// Event listener for the toggle button
document.getElementById('navbar-toggle').addEventListener('click', function() {
    const navbar = document.getElementById('navbar');
    navbar.classList.toggle('active'); // Toggle the active class
});
// Event listeners for the Education and Experience buttons
document.getElementById('education-btn').addEventListener('click', function() {
    // Show Education, Hide Experience
    document.getElementById('education').style.display = 'block';
    document.getElementById('intermediate').style.display = 'block';
    document.getElementById('secondary').style.display = 'block';
    document.getElementById('experience').style.display = 'none';
    document.getElementById('hobbies').style.display = 'block';

    // Set button states
    this.classList.add('active');
    document.getElementById('experience-btn').classList.remove('active');
    document.getElementById('hobbies-btn').classList.remove('active');
});

document.getElementById('experience-btn').addEventListener('click', function() {
    // Show Experience, Hide Education
    document.getElementById('education').style.display = 'none';
    document.getElementById('intermediate').style.display = 'none';
    document.getElementById('secondary').style.display = 'none';
    document.getElementById('experience').style.display = 'block';
    document.getElementById('hobbies').style.display = 'block';


    // Set button states
    this.classList.add('active');
    document.getElementById('education-btn').classList.remove('active');
    document.getElementById('hobbies-btn').classList.remove('active');
});
document.getElementById('experience-btn').addEventListener('click', function() {
    // Show Experience, Hide Education
    document.getElementById('education').style.display = 'none';
    document.getElementById('intermediate').style.display = 'none';
    document.getElementById('secondary').style.display = 'none';
    document.getElementById('experience').style.display = 'block';
    document.getElementById('hobbies').style.display = 'block';


    // Set button states
    this.classList.add('active');
    document.getElementById('education-btn').classList.remove('active');
    document.getElementById('experience-btn').classList.remove('active');
    
});*/
document.addEventListener('DOMContentLoaded', function() {
    const themeToggleButton = document.getElementById('theme-toggle');
    const body = document.body;

    // Check if the user has a preferred theme
    const preferredTheme = localStorage.getItem('theme');
    if (preferredTheme) {
        body.classList.add(preferredTheme);
        themeToggleButton.textContent = preferredTheme === 'dark-mode' ? '☀️' : '🌙';
    }

    themeToggleButton.addEventListener('click', function() {
        body.classList.toggle('dark-mode');

        // Change button text
        if (body.classList.contains('dark-mode')) {
            themeToggleButton.textContent = '☀️'; // Sun icon for light mode
            localStorage.setItem('theme', 'dark-mode');
        } else {
            themeToggleButton.textContent = '🌙'; // Moon icon for dark mode
            localStorage.setItem('theme', 'light-mode');
        }
    });
});


// Show Education by default
document.getElementById('education').style.display = 'block';
document.getElementById('intermediate').style.display = 'block';
document.getElementById('secondary').style.display = 'block';
document.getElementById('experience').style.display = 'none';
document.getElementById('hobbies').style.display = 'none';
document.getElementById('skills').style.display = 'none';




/*// Event listeners for the Education and Experience buttons
document.getElementById('education-btn').addEventListener('click', function() {
    // Show Education, Hide Experience
    document.getElementById('education').style.display = 'block';
    document.getElementById('intermediate').style.display = 'block';
    document.getElementById('secondary').style.display = 'block';
    document.getElementById('experience').style.display = 'none';

    // Set button states
    this.classList.add('active');
    document.getElementById('experience-btn').classList.remove('active');
});

document.getElementById('experience-btn').addEventListener('click', function() {
    // Show Experience, Hide Education
    document.getElementById('education').style.display = 'none';
    document.getElementById('intermediate').style.display = 'none';
    document.getElementById('secondary').style.display = 'none';
    document.getElementById('experience').style.display = 'block';

    // Set button states
    this.classList.add('active');
    document.getElementById('education-btn').classList.remove('active');
});
document.addEventListener('DOMContentLoaded', function() {
    const themeToggleButton = document.getElementById('theme-toggle');
    const body = document.body;

    // Check if the user has a preferred theme
    const preferredTheme = localStorage.getItem('theme');
    if (preferredTheme) {
        body.classList.add(preferredTheme);
        themeToggleButton.textContent = preferredTheme === 'dark-mode' ? '☀️' : '🌙';
    }

    themeToggleButton.addEventListener('click', function() {
        body.classList.toggle('dark-mode');

        // Change button text
        if (body.classList.contains('dark-mode')) {
            themeToggleButton.textContent = '☀️'; // Sun icon for light mode
            localStorage.setItem('theme', 'dark-mode');
        } else {
            themeToggleButton.textContent = '🌙'; // Moon icon for dark mode
            localStorage.setItem('theme', 'light-mode');
        }
    });
});


// Show Education by default
document.getElementById('education').style.display = 'block';
document.getElementById('intermediate').style.display = 'block';
document.getElementById('secondary').style.display = 'block';
document.getElementById('experience').style.display = 'none';*/

