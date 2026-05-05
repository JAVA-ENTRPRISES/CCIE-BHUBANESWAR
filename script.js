const schoolName = "CHILDREN'S CENTRE OF INTEGRAL EDUCATION";
const logoPath = "image/logo.jpeg";

// Inject Header
const headerHTML = `
<header>
    <div class="logo-area">
        <img src="${logoPath}" alt="Logo">
        <h2>${schoolName}</h2>
    </div>
    <nav>
        <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="about.html">About</a></li>
            <li><a href="facilities.html">Facilities</a></li>
            <li><a href="academics.html">Academics</a></li>
            <li><a href="gallery.html">Gallery</a></li>
            <li><a href="admission.html">Admissions</a></li>
            <li><a href="mandatory.html">MandatoryDisclosure</a></li>
            <li><a href="contact.html">Contact</a></li>
        </ul>
    </nav>
</header>
`;

// Inject Footer
const footerHTML = `
<footer>
    <div class="footer-info">
        <div class="footer-logo"><img src="${logoPath}" alt="Logo">         <h2>${schoolName}</h2>
</div>
        <p>Empowering young minds through integrated learning and modern values.</p>
    </div>
    <div class="quick-links">
        <h3>Quick Links</h3>
        <ul>
            <li><a href="admission.html">Apply Now</a></li>
            <li><a href="academics.html">Academics</a></li>
            <li><a href="mandatory.html">Mandatory Disclosure</a></li>
            <li><a href="facilities.html">Our Campus</a></li>
            <li><a href="about.html">Vision & Mission</a></li>
        </ul>
    </div>
    <div class="contact-footer">
        <h3>Visit Us</h3>
        <p>Bhubaneswar, Odisha, India</p>
        <p>Email: cciebhubaneswar@gmail.com</p>
        <p>Phone: +91 9437001438</p>
    </div>
</footer>
<div style="text-align:center; background:#1e272e; color:#888; padding:10px; font-size:12px;">
    &copy; 2026 ${schoolName}. Designed as per CBSE Guidelines.
</div>
`;

window.onload = function() {
    document.getElementById('header-placeholder').innerHTML = headerHTML;
    document.getElementById('footer-placeholder').innerHTML = footerHTML;
};
