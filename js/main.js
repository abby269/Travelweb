// Sample data for destinations and tours
const destinations = [
    {
        id: 1,
        name: 'Bali, Indonesia',
        image: imageUrls.destinations.bali,
        description: 'Tropical paradise with beautiful beaches and rich culture',
        price: 'From 51,000 ETB'
    },
    {
        id: 2,
        name: 'Paris, France',
        image: imageUrls.destinations.paris,
        description: 'City of love, art, and amazing cuisine',
        price: 'From 45,000 ETB'
    },
    {
        id: 3,
        name: 'Tokyo, Japan',
        image: imageUrls.destinations.tokyo,
        description: 'Modern city with rich traditions and culture',
        price: 'From 56,000 ETB'
    },
    {
        id: 4,
        name: 'Rome, Italy',
        image: imageUrls.destinations.rome,
        description: 'Historic city filled with ancient ruins and delicious food',
        price: 'From 48,500 ETB'
    },
    {
        id: 5,
        name: 'Cape Town, South Africa',
        image: imageUrls.destinations.capetown,
        description: 'Stunning landscapes, beaches, and vibrant culture',
        price: 'From 38,000 ETB'
    },
    {
        id: 6,
        name: 'New York City, USA',
        image: imageUrls.destinations.newyork,
        description: 'The city that never sleeps, full of iconic landmarks',
        price: 'From 62,000 ETB'
    },
    {
        id: 7,
        name: 'Dubai, UAE',
        image: imageUrls.destinations.dubai,
        description: 'Luxury shopping, skyscrapers, and desert adventures',
        price: 'From 43,000 ETB'
    },
    {
        id: 8,
        name: 'Istanbul, Turkey',
        image: imageUrls.destinations.istanbul,
        description: 'Where East meets West—rich history and unique markets',
        price: 'From 40,500 ETB'
    },
    {
        id: 9,
        name: 'Bangkok, Thailand',
        image: imageUrls.destinations.bangkok,
        description: 'Vibrant street life, temples, and amazing food',
        price: 'From 35,000 ETB'
    },
    {
        id: 10,
        name: 'Rio de Janeiro, Brazil',
        image: imageUrls.destinations.rio,
        description: 'Famous beaches, carnival, and stunning scenery',
        price: 'From 53,000 ETB'
    }
];

const tours = [
    {
        id: 1,
        name: 'Bali, Indonesia',
        image: imageUrls.destinations.bali,
        duration: '7 days',
        price: 'From 51,000 ETB',
        rating: 4.8
    },
    {
        id: 2,
        name: 'Paris, France',
        image: imageUrls.destinations.paris,
        duration: '5 days',
        price: 'From 45,000 ETB',
        rating: 4.7
    },
    {
        id: 3,
        name: 'Tokyo, Japan',
        image: imageUrls.destinations.tokyo,
        duration: '6 days',
        price: 'From 56,000 ETB',
        rating: 4.9
    },
    {
        id: 4,
        name: 'Rome, Italy',
        image: imageUrls.destinations.rome,
        duration: '6 days',
        price: 'From 48,500 ETB',
        rating: 4.6
    },
    {
        id: 5,
        name: 'Cape Town, South Africa',
        image: imageUrls.destinations.capetown,
        duration: '5 days',
        price: 'From 38,000 ETB',
        rating: 4.7
    },
    {
        id: 6,
        name: 'New York City, USA',
        image: imageUrls.destinations.newyork,
        duration: '7 days',
        price: 'From 62,000 ETB',
        rating: 4.8
    },
    {
        id: 7,
        name: 'Dubai, UAE',
        image: imageUrls.destinations.dubai,
        duration: '4 days',
        price: 'From 43,000 ETB',
        rating: 4.6
    },
    {
        id: 8,
        name: 'Istanbul, Turkey',
        image: imageUrls.destinations.istanbul,
        duration: '5 days',
        price: 'From 40,500 ETB',
        rating: 4.7
    },
    {
        id: 9,
        name: 'Bangkok, Thailand',
        image: imageUrls.destinations.bangkok,
        duration: '6 days',
        price: 'From 35,000 ETB',
        rating: 4.8
    },
    {
        id: 10,
        name: 'Rio de Janeiro, Brazil',
        image: imageUrls.destinations.rio,
        duration: '7 days',
        price: 'From 53,000 ETB',
        rating: 4.9
    },
    {
        id: 11,
        name: 'Kyoto, Japan',
        image: imageUrls.destinations.kyoto,
        duration: '5 days',
        price: 'From 54,000 ETB',
        rating: 4.8
    },
    {
        id: 12,
        name: 'Marrakech, Morocco',
        image: imageUrls.destinations.marrakech,
        duration: '6 days',
        price: 'From 42,000 ETB',
        rating: 4.7
    },
    {
        id: 13,
        name: 'Reykjavik, Iceland',
        image: imageUrls.destinations.reykjavik,
        duration: '7 days',
        price: 'From 65,000 ETB',
        rating: 4.9
    },
    {
        id: 14,
        name: 'Barcelona, Spain',
        image: imageUrls.destinations.barcelona,
        duration: '5 days',
        price: 'From 47,000 ETB',
        rating: 4.8
    },
    {
        id: 15,
        name: 'Santorini, Greece',
        image: imageUrls.destinations.santorini,
        duration: '6 days',
        price: 'From 49,000 ETB',
        rating: 4.9
    },
    {
        id: 16,
        name: 'Queenstown, New Zealand',
        image: imageUrls.destinations.queenstown,
        duration: '7 days',
        price: 'From 66,000 ETB',
        rating: 4.8
    },
    {
        id: 17,
        name: 'Petra, Jordan',
        image: imageUrls.destinations.petra,
        duration: '5 days',
        price: 'From 44,000 ETB',
        rating: 4.7
    },
    {
        id: 18,
        name: 'Phuket, Thailand',
        image: imageUrls.destinations.phuket,
        duration: '6 days',
        price: 'From 36,000 ETB',
        rating: 4.8
    },
    {
        id: 19,
        name: 'Havana, Cuba',
        image: imageUrls.destinations.havana,
        duration: '6 days',
        price: 'From 50,000 ETB',
        rating: 4.7
    },
    {
        id: 20,
        name: 'Victoria Falls, Zambia/Zimbabwe',
        image: imageUrls.destinations.victoriafalls,
        duration: '5 days',
        price: 'From 40,000 ETB',
        rating: 4.9
    }
];

const testimonials = [
    {
        name: 'John Doe',
        image: imageUrls.testimonials.person1,
        text: 'Amazing experience! The tour was well organized and the guides were knowledgeable.',
        rating: 5
    },
    {
        name: 'Jane Smith',
        image: imageUrls.testimonials.person2,
        text: 'Best vacation ever! Everything was perfect from start to finish.',
        rating: 5
    },
    {
        name: 'Mike Johnson',
        image: imageUrls.testimonials.person3,
        text: 'Great value for money. Would definitely recommend!',
        rating: 4
    }
];

// Slider settings
const DEST_VISIBLE = 3;
const TOUR_VISIBLE = 3;
let destIndex = 0;
let tourIndex = 0;

// DOM Elements
const destinationGrid = document.querySelector('.destination-grid');
const tourGrid = document.querySelector('.tour-grid');
const destLeft = document.getElementById('dest-left');
const destRight = document.getElementById('dest-right');
const tourLeft = document.getElementById('tour-left');
const tourRight = document.getElementById('tour-right');
const testimonialSlider = document.querySelector('.testimonial-slider');
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

// Mobile Menu Toggle
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Populate Destinations (slider)
function slugify(name) {
    return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

function renderDestinations() {
    destinationGrid.innerHTML = '';
    const start = destIndex;
    const end = Math.min(start + DEST_VISIBLE, destinations.length);
    for (let i = start; i < end; i++) {
        const destination = destinations[i];
        const card = document.createElement('div');
        card.className = 'destination-card';
        card.innerHTML = `
            <img src="${destination.image}" alt="${destination.name}">
            <h3>${destination.name}</h3>
            <p>${destination.description}</p>
            <p class="price">${destination.price}</p>
            <button class="book-btn">Book Now</button>
        `;
        destinationGrid.appendChild(card);
    }
}

destLeft.addEventListener('click', () => {
    destIndex = Math.max(0, destIndex - 1);
    renderDestinations();
});
destRight.addEventListener('click', () => {
    if (destIndex < destinations.length - DEST_VISIBLE) {
        destIndex++;
        renderDestinations();
    }
});

// Populate Tours (slider)
function renderTours() {
    tourGrid.innerHTML = '';
    const start = tourIndex;
    const end = Math.min(start + TOUR_VISIBLE, tours.length);
    for (let i = start; i < end; i++) {
        const tour = tours[i];
        const card = document.createElement('div');
        card.className = 'tour-card';
        card.innerHTML = `
            <img src="${tour.image}" alt="${tour.name}">
            <h3>${tour.name}</h3>
            <p class="duration">${tour.duration}</p>
            <p class="price">${tour.price}</p>
            <div class="rating">
                ${'★'.repeat(Math.floor(tour.rating))}${tour.rating % 1 ? '½' : ''}
                <span>${tour.rating}</span>
            </div>
            <button class="book-btn">Book Now</button>
        `;
        tourGrid.appendChild(card);
    }
}

tourLeft.addEventListener('click', () => {
    tourIndex = Math.max(0, tourIndex - 1);
    renderTours();
});
tourRight.addEventListener('click', () => {
    if (tourIndex < tours.length - TOUR_VISIBLE) {
        tourIndex++;
        renderTours();
    }
});

// Populate Testimonials
function populateTestimonials() {
    testimonialSlider.innerHTML = '';
    testimonials.forEach(testimonial => {
        const card = document.createElement('div');
        card.className = 'testimonial-card';
        card.innerHTML = `
            <h4>${testimonial.name}</h4>
            <div class="rating">
                ${'★'.repeat(testimonial.rating)}
            </div>
            <p>${testimonial.text}</p>
        `;
        testimonialSlider.appendChild(card);
    });
}

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Newsletter Form Submission
const newsletterForm = document.querySelector('.newsletter-form');
newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = newsletterForm.querySelector('input[type="email"]').value;
    if (email) {
        alert('Thank you for subscribing to our newsletter!');
        newsletterForm.reset();
    }
});

// Search Functionality
const searchBox = document.querySelector('.search-box input');
const searchButton = document.querySelector('.search-box button');
const searchResultsDropdown = document.querySelector('.search-results-dropdown');

function getCountryFromTourName(name) {
    // Assumes country is after the last comma
    const parts = name.split(',');
    return parts.length > 1 ? parts[parts.length - 1].trim().toLowerCase() : '';
}

function showSearchResults(country) {
    searchResultsDropdown.innerHTML = '';
    if (!country) {
        searchResultsDropdown.style.display = 'none';
        return;
    }
    const matches = tours.filter(tour => getCountryFromTourName(tour.name) === country);
    if (matches.length === 0) {
        searchResultsDropdown.style.display = 'none';
        return;
    }
    matches.forEach(tour => {
        const item = document.createElement('div');
        item.className = 'dropdown-item';
        item.innerHTML = `<strong>${tour.name}</strong><br><span>${tour.duration} &mdash; ${tour.price}</span>`;
        item.addEventListener('click', () => {
            // Find the index of the tour in the tours array
            const idx = tours.findIndex(t => t.name === tour.name);
            if (idx !== -1) {
                // Set the slider to show this tour (centered if possible)
                tourIndex = Math.max(0, Math.min(idx, tours.length - TOUR_VISIBLE));
                renderTours();
                // Highlight the card
                setTimeout(() => {
                    const tourCards = document.querySelectorAll('.tour-card');
                    const highlightIdx = idx - tourIndex;
                    if (tourCards[highlightIdx]) {
                        tourCards[highlightIdx].classList.add('highlight-tour');
                        setTimeout(() => {
                            tourCards[highlightIdx].classList.remove('highlight-tour');
                        }, 1500);
                    }
                }, 50);
                // Scroll to the tours section
                document.getElementById('tours').scrollIntoView({ behavior: 'smooth' });
                searchResultsDropdown.style.display = 'none';
            }
        });
        searchResultsDropdown.appendChild(item);
    });
    searchResultsDropdown.style.display = '';
}

searchButton.addEventListener('click', () => {
    const input = searchBox.value.trim().toLowerCase();
    showSearchResults(input);
});

searchBox.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        e.preventDefault();
        const input = searchBox.value.trim().toLowerCase();
        showSearchResults(input);
    }
});

searchBox.addEventListener('input', () => {
    searchResultsDropdown.style.display = 'none';
});

document.addEventListener('click', (e) => {
    if (!searchResultsDropdown.contains(e.target) && e.target !== searchBox && e.target !== searchButton) {
        searchResultsDropdown.style.display = 'none';
    }
});

// Cookie helpers
function setCookie(name, value, days) {
    let expires = '';
    if (days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = '; expires=' + date.toUTCString();
    }
    document.cookie = name + '=' + encodeURIComponent(value) + expires + '; path=/';
}
function getCookie(name) {
    const nameEQ = name + '=';
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return decodeURIComponent(c.substring(nameEQ.length, c.length));
    }
    return null;
}
function eraseCookie(name) {
    document.cookie = name + '=; Max-Age=-99999999; path=/';
}

// Modal logic and authentication
function showAuthModal(mode = 'login') {
    const modal = document.querySelector('.auth-modal');
    const title = modal.querySelector('.auth-modal-title');
    const form = modal.querySelector('.auth-form');
    const switchToSignup = modal.querySelector('.switch-to-signup');
    const switchToLogin = modal.querySelector('.switch-to-login');
    const switchSpans = modal.querySelectorAll('.auth-modal-switch span');
    modal.style.display = 'flex';
    if (mode === 'login') {
        title.textContent = 'Login';
        switchSpans[0].style.display = '';
        switchSpans[1].style.display = 'none';
        form.setAttribute('data-mode', 'login');
    } else {
        title.textContent = 'Sign Up';
        switchSpans[0].style.display = 'none';
        switchSpans[1].style.display = '';
        form.setAttribute('data-mode', 'signup');
    }
    form.reset();
}
function hideAuthModal() {
    document.querySelector('.auth-modal').style.display = 'none';
}

function getUserFromCookies() {
    const name = getCookie('travel_name');
    const email = getCookie('travel_email');
    const password = getCookie('travel_password');
    if (name && email && password) return { name, email, password };
    return null;
}
function clearUserCookies() {
    eraseCookie('travel_name');
    eraseCookie('travel_email');
    eraseCookie('travel_password');
}

function updateReviewFormVisibility() {
    const user = getUserFromCookies();
    const reviewForm = document.querySelector('.review-form');
    const signinForm = document.querySelector('.signin-form');
    const signedinUser = document.querySelector('.signedin-user');
    const reviewSigninMsg = document.querySelector('.review-signin-message');
    const authButtons = document.querySelector('.auth-buttons');
    if (user) {
        reviewForm.style.display = '';
        if (signinForm) signinForm.style.display = 'none';
        if (signedinUser) {
            signedinUser.style.display = '';
            signedinUser.querySelector('b').textContent = user.name;
        }
        reviewSigninMsg.style.display = 'none';
        if (authButtons) authButtons.style.display = 'none';
    } else {
        reviewForm.style.display = 'none';
        if (signinForm) signinForm.style.display = '';
        if (signedinUser) signedinUser.style.display = 'none';
        reviewSigninMsg.style.display = '';
        if (authButtons) authButtons.style.display = '';
    }
}

// Booking Modal Functions
function openModal() {
    document.getElementById('booking-modal').style.display = 'flex';
    document.body.style.overflow = 'hidden';
}
function closeModal() {
    document.getElementById('booking-modal').style.display = 'none';
    document.body.style.overflow = '';
    document.getElementById('booking-form').style.display = '';
    document.getElementById('booking-success').style.display = 'none';
    document.getElementById('booking-form').reset();
}
function submitBooking(e) {
    e.preventDefault();
    document.getElementById('booking-form').style.display = 'none';
    document.getElementById('booking-success').style.display = '';
}

document.addEventListener('DOMContentLoaded', () => {
    renderDestinations();
    renderTours();
    populateTestimonials();

    // Replace all Book Now buttons with modal triggers
    function replaceBookNowButtons() {
        document.querySelectorAll('.book-btn').forEach(btn => {
            const a = document.createElement('a');
            a.href = 'javascript:void(0);';
            a.className = 'btn book-btn';
            a.textContent = 'Book Now';
            a.onclick = openModal;
            btn.replaceWith(a);
        });
    }
    replaceBookNowButtons();
    // Also re-run after each slider render
    const origRenderDestinations = renderDestinations;
    window.renderDestinations = function() { origRenderDestinations(); replaceBookNowButtons(); };
    const origRenderTours = renderTours;
    window.renderTours = function() { origRenderTours(); replaceBookNowButtons(); };

    // Modal close on overlay click
    document.getElementById('booking-modal').addEventListener('click', function(e) {
        if (e.target === this) closeModal();
    });

    // Modal logic
    const modal = document.querySelector('.auth-modal');
    const closeModal = modal.querySelector('.auth-modal-close');
    const loginBtn = document.querySelector('.login-btn');
    const signupBtn = document.querySelector('.signup-btn');
    const switchToSignup = modal.querySelector('.switch-to-signup');
    const switchToLogin = modal.querySelector('.switch-to-login');
    const form = modal.querySelector('.auth-form');

    loginBtn.addEventListener('click', () => showAuthModal('login'));
    signupBtn.addEventListener('click', () => showAuthModal('signup'));
    closeModal.addEventListener('click', hideAuthModal);
    switchToSignup.addEventListener('click', e => { e.preventDefault(); showAuthModal('signup'); });
    switchToLogin.addEventListener('click', e => { e.preventDefault(); showAuthModal('login'); });
    modal.addEventListener('click', e => { if (e.target === modal) hideAuthModal(); });

    // Auth form submit
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const mode = form.getAttribute('data-mode');
        const name = form.name.value.trim();
        const email = form.email.value.trim();
        const password = form.password.value;
        if (!name || !email || !password) return;
        if (mode === 'signup') {
            // Save user info in cookies
            setCookie('travel_name', name, 7);
            setCookie('travel_email', email, 7);
            setCookie('travel_password', password, 7);
            hideAuthModal();
            updateReviewFormVisibility();
        } else if (mode === 'login') {
            // Check credentials
            const savedName = getCookie('travel_name');
            const savedEmail = getCookie('travel_email');
            const savedPassword = getCookie('travel_password');
            if (email === savedEmail && password === savedPassword) {
                setCookie('travel_name', savedName, 7); // refresh cookie
                hideAuthModal();
                updateReviewFormVisibility();
            } else {
                alert('Invalid email or password.');
            }
        }
    });

    // Sign out logic (reuse signout-btn if present)
    const signoutBtn = document.querySelector('.signout-btn');
    if (signoutBtn) {
        signoutBtn.addEventListener('click', function() {
            clearUserCookies();
            updateReviewFormVisibility();
        });
    }

    // Review form logic
    const reviewForm = document.querySelector('.review-form');
    if (reviewForm) {
        reviewForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const user = getUserFromCookies();
            const username = user ? user.name : 'Anonymous';
            const rating = parseInt(this.rating.value);
            const text = this.text.value.trim();
            if (username && rating && text) {
                testimonials.push({ name: username, rating, text });
                populateTestimonials();
                this.reset();
                testimonialSlider.lastElementChild.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

    updateReviewFormVisibility();
}); 