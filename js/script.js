// DOM Elements
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const filterButtons = document.querySelectorAll('.filter-btn');
const certificateGrid = document.querySelector('.certificates-grid');
const skillProgressBars = document.querySelectorAll('.skill-progress');
const statNumbers = document.querySelectorAll('.stat-number');
const copyButtons = document.querySelectorAll('.copy-code');

// Certificate Data
const certificates = [
    {
        title: 'Diskominfo Kabupaten Bantul',
        type: 'national',
        image: 'Sertifikat/serti1.jpg',
        link: 'https://esurat.bantulkab.go.id/public/1UEPs5DrRaE7WtzY'
    },
    {
        title: 'Darmajaya CSIRT',
        type: 'national', 
        image: 'Sertifikat/serti2.jpg'
    },
    {
        title: 'Diskominfo Kota Depok',
        type: 'national',
        image: 'Sertifikat/serti3.jpg'
    },
    {
        title: 'Diskominfo Provinsi Jawa Timur',
        type: 'national',
        image: 'Sertifikat/serti4.jpg'
    },
    {
        title: 'Diskominfo Kulon Progo',
        type: 'national',
        image: 'Sertifikat/serti5.png'
    },
    {
        title: 'Sman 5 Pandeglang',
        type: 'national',
        image: 'Sertifikat/serti6.png'
    },
    {
        title: 'Smam Satu Gresik',
        type: 'national',
        image: 'Sertifikat/serti7.png'
    },
    {
        title: 'Universitas Islam Depok',
        type: 'national',
        image: 'Sertifikat/serti8.jpg'
    },
    {
        title: 'Diskominfotik Provinsi DKI Jakarta',
        type: 'national',
        image: 'Sertifikat/serti9.jpg',
        link: 'https://soc.jakarta.go.id//certificate/view?token=$2y$13$uP8RKP/oyrbbjjs./v7KHu6OeyNZNbQRSbNZ.6ohMuth8JPNM2eYq'
    },
    {
        title: 'Universitas Muhammadiyah Jambi',
        type: 'national',
        image: 'Sertifikat/serti10.jpg'
    },
    {
        title: 'Universitas Muhammadiyah Cirebon',
        type: 'national',
        image: 'Sertifikat/serti11.jpg'
    },
    {
        title: 'Diskominfo Kota Cimahi',
        type: 'national',
        image: 'Sertifikat/serti12.jpg'
    },
    {
        title: 'Avans Hogeschool',
        type: 'international',
        image: 'Sertifikat/serti30.jpg'
    },
    {
        title: 'Avans Hogeschool',
        type: 'international',
        image: 'Sertifikat/serti31.jpg'
    },
    {
        title: 'Diskominfo DIY',
        type: 'national',
        image: 'Sertifikat/serti14.jpg',
        link: 'https://sadewa.jogjaprov.go.id/pdf?id=U2FsdGVkX1p1L2u3S71CuVnCertYAS0m24za1JHLtMRNZqRNRV0gs8YlldJFu5p1L2u3SZ7p1L2u3SS5NFrPv2q8rxqtP6lf1NT5xp1L2u3Sgge1Q2u3A4le1Q2u3A4l&document_type=targetedtte'
    },
    {
        title: 'Diskominfo Kota Bekasi',
        type: 'national',
        image: 'Sertifikat/serti15.jpg'
    },
    {
        title: 'Diskominfo Kutai Kartanegara',
        type: 'national',
        image: 'Sertifikat/serti16.jpg',
        link: 'https://ttis.kukarkab.go.id/whitehat-etam?page=3'
    },
    {
        title: 'Universitas Negeri Jakarta',
        type: 'national',
        image: 'Sertifikat/serti17.jpg'
    },
    {
        title: 'Universitas Airlangga',
        type: 'national',
        image: 'Sertifikat/serti18.jpg',
        link:'https://unairtrust.unair.ac.id/esign/qBphWE0fnvmGDY0CPNrz'
    },
    {
        title: 'Universitas Dirgantara Marsekal Suryadarma',
        type: 'national',
        image: 'Sertifikat/serti19.jpg'
    },
    {
        title: 'Sumedangkab CSIRT',
        type: 'national',
        image: 'Sertifikat/serti20.jpg'
    },
    {
        title: 'Politeknik Siber Cerdika International',
        type: 'national',
        image: 'Sertifikat/serti21.jpg'
    },
    {
        title: 'PT. JULO',
        type: 'national',
        image: 'Sertifikat/serti32.jpg'
    },
    {
        title: 'Politeknik Siber Cerdika International',
        type: 'national',
        image: 'Sertifikat/serti22.jpg'
    },
    {
        title: 'TransJakarta CSIRT',
        type: 'national',
        image: 'Sertifikat/serti23.jpg'
    },
    {
        title: 'Bpbd Kota Magelang',
        type: 'national',
        image: 'Sertifikat/serti24.jpg'
    },
    {
        title: 'Detik.com',
        type: 'national',
        image: 'Sertifikat/serti25.jpg'
    },
    {
        title: 'Sumedangkab CSIRT',
        type: 'national',
        image: 'Sertifikat/serti26.jpg'
    },
    {
        title: 'Jawa Tengah CSIRT',
        type: 'national',
        image: 'Sertifikat/serti27.jpg',
        link:'https://pdki.cloud/s/xrZMYojieSts9Me'
    },
    {
        title: 'PU CSIRT',
        type: 'national',
        image: 'Sertifikat/serti28.jpg'
    },
    {
        title: 'PUTI Security (TelkomUniversity)',
        type: 'national',
        image: 'Sertifikat/serti29.jpg'
    },
    {
        title: 'PUTI Security (TelkomUniversity)',
        type: 'national',
        image: 'Sertifikat/serti33.jpg'
    },
    {
        title: 'Kartika CSIRT Pussiberad',
        type: 'national',
        image: 'Sertifikat/serti34.jpg'
    },
    {
        title: 'Diskominfo Kota Banjarmasin',
        type: 'national',
        image: 'Sertifikat/serti35.jpg'
    },
    {
        title: 'BMKG CSIRT',
        type: 'national',
        image: 'Sertifikat/serti36.jpg'
    }
];

// Image Modal Functionality
function createImageModal() {
    const modalHTML = `
        <div class="image-modal">
            <div class="modal-overlay"></div>
            <div class="modal-content">
                <button class="modal-close">
                    <i class="fas fa-times"></i>
                </button>
                <div class="modal-body">
                    <img src="" alt="Certificate Preview" class="modal-image">
                </div>
                <div class="modal-footer">
                    <p class="modal-title"></p>
                </div>
            </div>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    
    const modal = document.querySelector('.image-modal');
    const modalImage = modal.querySelector('.modal-image');
    const modalTitle = modal.querySelector('.modal-title');
    const modalClose = modal.querySelector('.modal-close');
    const modalOverlay = modal.querySelector('.modal-overlay');
    
    window.openImageModal = function(imageSrc, title) {
        modalImage.src = imageSrc;
        modalTitle.textContent = title;
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    };
    
    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
    
    modalClose.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', closeModal);
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
}

// Mobile Navigation
if (hamburger) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
}

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        if (hamburger) hamburger.classList.remove('active');
        if (navMenu) navMenu.classList.remove('active');
    });
});

// Typewriter Effect
const typewriterText = document.querySelector('.typewriter-text');
if (typewriterText) {
    const texts = ['Penetration Tester', 'Bug Hunter'];
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    
    function typeWriter() {
        const currentText = texts[textIndex];
        
        if (isDeleting) {
            typewriterText.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typewriterText.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
        }
        
        if (!isDeleting && charIndex === currentText.length) {
            isDeleting = true;
            setTimeout(typeWriter, 2000);
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            setTimeout(typeWriter, 500);
        } else {
            setTimeout(typeWriter, isDeleting ? 50 : 100);
        }
    }
    
    setTimeout(typeWriter, 1000);
}

// Load Certificates
function loadCertificates(filter = 'all') {
    if (!certificateGrid) return;
    certificateGrid.innerHTML = '';
    
    const filteredCerts = filter === 'all' 
        ? certificates 
        : certificates.filter(cert => cert.type === filter);
    
    filteredCerts.forEach(cert => {
        const certElement = document.createElement('div');
        certElement.className = 'certificate-item fade-in';
        
        certElement.innerHTML = `
            <div class="certificate-image-container">
                <img src="${cert.image}" alt="${cert.title}" class="certificate-image">
                <div class="image-overlay">
                    <i class="fas fa-expand"></i>
                </div>
            </div>
            <div class="certificate-content">
                <h4 class="certificate-title">${cert.title}</h4>
                <span class="certificate-type">${cert.type === 'national' ? 'Nasional' : 'Internasional'}</span>
                ${cert.link ? 
                    `<a href="${cert.link}" target="_blank" class="certificate-link">
                        <i class="fas fa-external-link-alt"></i> Verifikasi Sertifikat
                    </a>` : 
                    '<p class="certificate-link"><i class="fas fa-certificate"></i> Sertifikat</p>'
                }
            </div>
        `;
        
        const imageContainer = certElement.querySelector('.certificate-image-container');
        const image = certElement.querySelector('.certificate-image');
        
        if (imageContainer && image) {
            imageContainer.addEventListener('click', (e) => {
                if (!e.target.closest('.certificate-link')) {
                    openImageModal(image.src, cert.title);
                }
            });
        }
        
        certificateGrid.appendChild(certElement);
    });
}

// Certificate Filtering
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        loadCertificates(button.dataset.filter);
    });
});

// Animate Skill Bars
function animateSkillBars() {
    skillProgressBars.forEach(bar => {
        const width = bar.getAttribute('data-width');
        bar.style.width = `${width}%`;
    });
}

// Animate Stats Counter
function animateStats() {
    statNumbers.forEach(stat => {
        const target = parseInt(stat.getAttribute('data-count'));
        const increment = target / 100;
        let current = 0;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            stat.textContent = Math.floor(current);
        }, 20);
    });
}

// Copy Code Button
copyButtons.forEach(button => {
    button.addEventListener('click', () => {
        const codeBlock = button.parentElement.nextElementSibling;
        const code = codeBlock.textContent;
        
        navigator.clipboard.writeText(code).then(() => {
            const originalIcon = button.innerHTML;
            button.innerHTML = '<i class="fas fa-check"></i>';
            button.style.color = '#64ffda';
            
            setTimeout(() => {
                button.innerHTML = originalIcon;
                button.style.color = '';
            }, 2000);
        });
    });
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        if (this.getAttribute('href') === '#') return;
        
        e.preventDefault();
        const targetId = this.getAttribute('href');
        
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Intersection Observer for animations
const mainObserverOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const mainObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animated');
            
            if (entry.target.classList.contains('skill-progress')) {
                const width = entry.target.getAttribute('data-width');
                setTimeout(() => {
                    entry.target.style.width = `${width}%`;
                }, 300);
            }
            
            if (entry.target.classList.contains('stat-number')) {
                const target = parseInt(entry.target.getAttribute('data-count'));
                const increment = target / 100;
                let current = 0;
                
                const timer = setInterval(() => {
                    current += increment;
                    if (current >= target) {
                        current = target;
                        clearInterval(timer);
                    }
                    entry.target.textContent = Math.floor(current);
                }, 20);
            }
        }
    });
}, mainObserverOptions);

// Particle Background
function createParticleBackground() {
    const particleContainer = document.createElement('div');
    particleContainer.className = 'particles-container';
    document.body.insertBefore(particleContainer, document.body.firstChild);
    
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        const size = Math.random() * 6 + 2;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${Math.random() * 100}%`;
        
        const duration = Math.random() * 20 + 10;
        particle.style.animationDuration = `${duration}s`;
        particle.style.animationDelay = `${Math.random() * 10}s`;
        
        particleContainer.appendChild(particle);
    }
}

// Ripple Effect
function addRippleEffect() {
    const buttons = document.querySelectorAll('.filter-btn, .certificate-link, .modal-close');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            ripple.classList.add('ripple-effect');
            
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            ripple.style.left = `${x}px`;
            ripple.style.top = `${y}px`;
            ripple.style.position = 'absolute';
            ripple.style.width = '0px';
            ripple.style.height = '0px';
            ripple.style.borderRadius = '50%';
            ripple.style.background = 'rgba(100, 255, 218, 0.4)';
            ripple.style.transform = 'translate(-50%, -50%)';
            ripple.style.pointerEvents = 'none';
            
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.style.transition = 'all 0.6s ease-out';
                ripple.style.width = '200px';
                ripple.style.height = '200px';
                ripple.style.opacity = '0';
            }, 10);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
}

// Parallax Effect for Certificates
function addParallaxEffect() {
    const certificateItems = document.querySelectorAll('.certificate-item');
    
    certificateItems.forEach(item => {
        item.addEventListener('mousemove', (e) => {
            const rect = item.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;
            
            item.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
        });
        
        item.addEventListener('mouseleave', () => {
            item.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
        });
    });
}

// Bounty Modal Functions
function openBountyModal(imageSrc, caption) {
    const modal = document.getElementById('bountyModal');
    if (!modal) return;
    
    const modalImage = document.getElementById('modalImage');
    const modalCaption = document.getElementById('modalCaption');
    
    if (modalImage) modalImage.src = imageSrc;
    if (modalCaption) modalCaption.textContent = caption || 'Sertifikat Bounty';
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeBountyModal() {
    const modal = document.getElementById('bountyModal');
    if (!modal) return;
    
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Bounty Section Init
function initBountySection() {
    // Close modal with ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeBountyModal();
        }
    });
    
    // Close modal on overlay click
    const modalOverlay = document.querySelector('#bountyModal .modal-overlay');
    if (modalOverlay) {
        modalOverlay.addEventListener('click', closeBountyModal);
    }
    
    // Prevent modal container click from closing
    const modalContainer = document.querySelector('#bountyModal .modal-container');
    if (modalContainer) {
        modalContainer.addEventListener('click', function(e) {
            e.stopPropagation();
        });
    }
    
    // Bounty items scroll animation
    const bountyItemsForScroll = document.querySelectorAll('.bounty-item');
    const bountyScrollObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100);
                bountyScrollObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    
    bountyItemsForScroll.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'all 0.5s ease';
        bountyScrollObserver.observe(item);
    });
    
    // Animate bounty stats counter
    const bountyStats = document.querySelectorAll('.bounty-stat-number');
    
    const animateBountyStats = () => {
        bountyStats.forEach(stat => {
            const target = parseInt(stat.getAttribute('data-count'));
            if (isNaN(target)) return;
            
            let current = 0;
            const increment = target / 60;
            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    current = target;
                    clearInterval(timer);
                }
                stat.textContent = Math.floor(current);
            }, 30);
        });
    };
    
    const bountySection = document.querySelector('#bounty');
    if (bountySection) {
        const statsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateBountyStats();
                    statsObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        statsObserver.observe(bountySection);
    }
}

// ==================== MAIN INITIALIZATION ====================
document.addEventListener('DOMContentLoaded', () => {
    // Certificate modal
    createImageModal();
    
    // Load certificates
    loadCertificates();
    
    // Observe elements for main animations
    document.querySelectorAll('.fade-in').forEach(el => mainObserver.observe(el));
    
    // Set current year in footer
    const yearSpan = document.querySelector('#current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
    
    // Additional animations
    createParticleBackground();
    addRippleEffect();
    addParallaxEffect();
    
    // Bounty section
    initBountySection();
    
    // Image loading animation
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.style.animation = 'scaleIn 0.3s ease';
        });
    });
});

// Window scroll event
window.addEventListener('scroll', () => {
    const elements = document.querySelectorAll('.fade-in:not(.animated)');
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight - 100) {
            element.classList.add('animated');
            if (element.classList.contains('skill-progress')) {
                const width = element.getAttribute('data-width');
                element.style.width = `${width}%`;
            }
        }
    });
});

// Window load event
window.addEventListener('load', () => {
    animateSkillBars();
    animateStats();
});