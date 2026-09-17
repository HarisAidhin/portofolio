// DOM Elements
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const filterButtons = document.querySelectorAll('.filter-btn');
const certificateGrid = document.querySelector('.certificates-grid');
const skillProgressBars = document.querySelectorAll('.skill-progress');
const statNumbers = document.querySelectorAll('.stat-number');
const copyButtons = document.querySelectorAll('.copy-code');

// Certificate Data (TIDAK DIUBAH)
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
        image: 'Sertifikat/serti29.jpg'
    },
    {
        title: 'Avans Hogeschool',
        type: 'international',
        image: 'Sertifikat/serti30.jpg'
    },
    {
        title: 'Diskominfo DIY',
        type: 'national',
        image: 'Sertifikat/serti13.jpg',
        link: 'https://sadewa.jogjaprov.go.id/pdf?id=U2FsdGVkX1p1L2u3S71CuVnCertYAS0m24za1JHLtMRNZqRNRV0gs8YlldJFu5p1L2u3SZ7p1L2u3SS5NFrPv2q8rxqtP6lf1NT5xp1L2u3Sgge1Q2u3A4le1Q2u3A4l&document_type=targetedtte'
    },
    {
        title: 'Diskominfo Kota Bekasi',
        type: 'national',
        image: 'Sertifikat/serti14.jpg'
    },
    {
        title: 'Diskominfo Kutai Kartanegara',
        type: 'national',
        image: 'Sertifikat/serti15.jpg',
        link: 'https://ttis.kukarkab.go.id/whitehat-etam?page=3'
    },
    {
        title: 'Universitas Negeri Jakarta',
        type: 'national',
        image: 'Sertifikat/serti16.jpg'
    },
    {
        title: 'Universitas Airlangga',
        type: 'national',
        image: 'Sertifikat/serti17.jpg',
        link:'https://unairtrust.unair.ac.id/esign/qBphWE0fnvmGDY0CPNrz'
    },
    {
        title: 'Universitas Dirgantara Marsekal Suryadarma',
        type: 'national',
        image: 'Sertifikat/serti18.jpg'
    },
    {
        title: 'Sumedangkab CSIRT',
        type: 'national',
        image: 'Sertifikat/serti19.jpg'
    },
    {
        title: 'Politeknik Siber Cerdika International',
        type: 'national',
        image: 'Sertifikat/serti20.jpg'
    },
    {
        title: 'PT. JULO',
        type: 'national',
        image: 'Sertifikat/serti31.jpg'
    },
    {
        title: 'Politeknik Siber Cerdika International',
        type: 'national',
        image: 'Sertifikat/serti21.jpg'
    },
    {
        title: 'TransJakarta CSIRT',
        type: 'national',
        image: 'Sertifikat/serti22.jpg'
    },
    {
        title: 'Bpbd Kota Magelang',
        type: 'national',
        image: 'Sertifikat/serti23.jpg'
    },
    {
        title: 'Detik.com',
        type: 'national',
        image: 'Sertifikat/serti24.jpg'
    },
    {
        title: 'Sumedangkab CSIRT',
        type: 'national',
        image: 'Sertifikat/serti25.jpg'
    },
    {
        title: 'Jawa Tengah CSIRT',
        type: 'national',
        image: 'Sertifikat/serti26.jpg',
        link:'https://pdki.cloud/s/xrZMYojieSts9Me'
    },
    {
        title: 'PU CSIRT',
        type: 'national',
        image: 'Sertifikat/serti27.jpg'
    },
    {
        title: 'PUTI Security (TelkomUniversity)',
        type: 'national',
        image: 'Sertifikat/serti28.jpg'
    },
    {
        title: 'PUTI Security (TelkomUniversity)',
        type: 'national',
        image: 'Sertifikat/serti32.jpg'
    },
    {
        title: 'Kartika CSIRT Pussiberad',
        type: 'national',
        image: 'Sertifikat/serti33.jpg'
    },
    {
        title: 'Diskominfo Kota Banjarmasin',
        type: 'national',
        image: 'Sertifikat/serti34.jpg'
    },
    {
        title: 'BMKG CSIRT',
        type: 'national',
        image: 'Sertifikat/serti35.jpg'
    },

    {
        title: 'Purbalinggakab CSIRT',
        type: 'national',
        image: 'Sertifikat/serti36.jpg'
    },

        {
        title: 'Diskominfo Manggarai Barat',
        type: 'national',
        image: 'Sertifikat/serti37.jpg'
    },

{
        title: 'Universitas Negeri Jakarta',
        type: 'national',
        image: 'Sertifikat/serti38.jpg'
    }
    ,

{
        title: 'Jambiprov CSIRT',
        type: 'national',
        image: 'Sertifikat/serti39.jpg'
    },
{
        title: 'PT. Dibimbing Digital Indonesia',
        type: 'national',
        image: 'Sertifikat/serti40.jpg'
    },
{
        title: 'DQLab.id',
        type: 'national',
        image: 'Sertifikat/serti41.jpg'
    },
{
        title: 'DQLab.id',
        type: 'national',
        image: 'Sertifikat/serti42.jpg'
    },
{
        title: 'DQLab.id',
        type: 'national',
        image: 'Sertifikat/serti43.jpg'
    },
{
        title: 'DQLab.id',
        type: 'national',
        image: 'Sertifikat/serti44.jpg'
    },
,
{
        title: 'DQLab.id',
        type: 'national',
        image: 'Sertifikat/serti45.jpg'
    },
{
        title: 'Diskominfotik Provinsi Lampung',
        type: 'national',
        image: 'Sertifikat/serti46.jpg'
    },
{
        title: 'Sibermuda.id',
        type: 'national',
        image: 'Sertifikat/serti47.jpg'
    },
{
        title: 'Purbalinggakab CSIRT',
        type: 'national',
        image: 'Sertifikat/serti48.jpg'
    }
    ,
{
        title: 'Universitas Muhammadiyah Metro',
        type: 'national',
        image: 'Sertifikat/serti49.jpg'
    },
{
        title: 'Universitas Multimedia Nusantara',
        type: 'national',
        image: 'Sertifikat/serti50.jpg'
    }
    ,
{
        title: 'Detik.com',
        type: 'national',
        image: 'Sertifikat/serti51.jpg'
    }
    
,
 {
        title: 'LOMBA BUG BOUNTY BMKG CSIRT',
        type: 'national',
        image: 'Sertifikat/serti52.jpg'
    }
    
];

// ==================== IMAGE MODAL ====================
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
        
        // Elegant entrance
        modalImage.style.opacity = '0';
        modalImage.style.transform = 'scale(0.92)';
        requestAnimationFrame(() => {
            modalImage.style.transition = 'opacity 0.4s cubic-bezier(0.22, 1, 0.36, 1), transform 0.4s cubic-bezier(0.22, 1, 0.36, 1)';
            modalImage.style.opacity = '1';
            modalImage.style.transform = 'scale(1)';
        });
    };
    
    function closeModal() {
        modalImage.style.opacity = '0';
        modalImage.style.transform = 'scale(0.95)';
        
        setTimeout(() => {
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
            modalImage.style.transition = '';
        }, 280);
    }
    
    modalClose.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', closeModal);
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
}

// ==================== MOBILE NAVIGATION ====================
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

// ==================== TYPEWRITER (lebih smooth) ====================
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
            setTimeout(typeWriter, 2200);
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            setTimeout(typeWriter, 400);
        } else {
            // Typing lebih cepat, deleting lebih lembut
            setTimeout(typeWriter, isDeleting ? 35 : 85);
        }
    }
    
    setTimeout(typeWriter, 800);
}

// ==================== LOAD CERTIFICATES (dengan staggered elegant animation) ====================
function loadCertificates(filter = 'all') {
    if (!certificateGrid) return;
    
    // Smooth fade-out dulu
    certificateGrid.style.opacity = '0';
    certificateGrid.style.transform = 'translateY(12px)';
    certificateGrid.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
    
    setTimeout(() => {
        certificateGrid.innerHTML = '';
        
        const filteredCerts = filter === 'all' 
            ? certificates 
            : certificates.filter(cert => cert.type === filter);
        
        filteredCerts.forEach((cert, index) => {
            const certElement = document.createElement('div');
            certElement.className = 'certificate-item';
            
            // Initial state for animation
            certElement.style.opacity = '0';
            certElement.style.transform = 'translateY(28px) scale(0.97)';
            certElement.style.transition = `opacity 0.55s cubic-bezier(0.22, 1, 0.36, 1) ${index * 0.045}s, 
                                           transform 0.55s cubic-bezier(0.22, 1, 0.36, 1) ${index * 0.045}s`;
            
            certElement.innerHTML = `
                <div class="certificate-image-container">
                    <img src="${cert.image}" alt="${cert.title}" class="certificate-image" loading="lazy">
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
            
            // Trigger staggered entrance
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    certElement.style.opacity = '1';
                    certElement.style.transform = 'translateY(0) scale(1)';
                });
            });
        });
        
        // Fade grid back in
        certificateGrid.style.opacity = '1';
        certificateGrid.style.transform = 'translateY(0)';
        
        // Re-apply parallax after new items are loaded
        setTimeout(addParallaxEffect, 100);
    }, 280);
}

// ==================== CERTIFICATE FILTERING ====================
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        loadCertificates(button.dataset.filter);
    });
});

// ==================== SKILL BARS (smooth) ====================
function animateSkillBars() {
    skillProgressBars.forEach((bar, index) => {
        const width = bar.getAttribute('data-width');
        bar.style.transition = `width 1.4s cubic-bezier(0.22, 1, 0.36, 1) ${index * 0.08}s`;
        bar.style.width = `${width}%`;
    });
}

// ==================== STATS COUNTER (lebih elegan) ====================
function animateStats() {
    statNumbers.forEach(stat => {
        const target = parseInt(stat.getAttribute('data-count'));
        if (isNaN(target)) return;
        
        const duration = 1600;
        const startTime = performance.now();
        
        function update(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Ease-out cubic
            const ease = 1 - Math.pow(1 - progress, 3);
            const current = Math.floor(ease * target);
            
            stat.textContent = current;
            
            if (progress < 1) {
                requestAnimationFrame(update);
            } else {
                stat.textContent = target;
            }
        }
        
        requestAnimationFrame(update);
    });
}

// ==================== COPY CODE ====================
copyButtons.forEach(button => {
    button.addEventListener('click', () => {
        const codeBlock = button.parentElement.nextElementSibling;
        const code = codeBlock.textContent;
        
        navigator.clipboard.writeText(code).then(() => {
            const originalIcon = button.innerHTML;
            button.innerHTML = '<i class="fas fa-check"></i>';
            button.style.color = '#a78bfa'; // violet accent
            
            setTimeout(() => {
                button.innerHTML = originalIcon;
                button.style.color = '';
            }, 2000);
        });
    });
});

// ==================== SMOOTH SCROLLING ====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        if (this.getAttribute('href') === '#') return;
        
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// ==================== INTERSECTION OBSERVER ====================
const mainObserverOptions = {
    threshold: 0.12,
    rootMargin: '0px 0px -80px 0px'
};

const mainObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animated');
            
            if (entry.target.classList.contains('skill-progress')) {
                const width = entry.target.getAttribute('data-width');
                setTimeout(() => {
                    entry.target.style.width = `${width}%`;
                }, 200);
            }
            
            if (entry.target.classList.contains('stat-number')) {
                const target = parseInt(entry.target.getAttribute('data-count'));
                if (isNaN(target)) return;
                
                const duration = 1500;
                const startTime = performance.now();
                
                function update(currentTime) {
                    const elapsed = currentTime - startTime;
                    const progress = Math.min(elapsed / duration, 1);
                    const ease = 1 - Math.pow(1 - progress, 3);
                    entry.target.textContent = Math.floor(ease * target);
                    
                    if (progress < 1) {
                        requestAnimationFrame(update);
                    } else {
                        entry.target.textContent = target;
                    }
                }
                requestAnimationFrame(update);
            }
            
            mainObserver.unobserve(entry.target);
        }
    });
}, mainObserverOptions);

// ==================== PARTICLE BACKGROUND (lebih elegan & performant) ====================
function createParticleBackground() {
    const particleContainer = document.createElement('div');
    particleContainer.className = 'particles-container';
    document.body.insertBefore(particleContainer, document.body.firstChild);
    
    const particleCount = window.innerWidth < 768 ? 28 : 42;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        const size = Math.random() * 4.5 + 1.5;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.bottom = `-${Math.random() * 20}%`;
        
        const duration = Math.random() * 18 + 14;
        particle.style.animationDuration = `${duration}s`;
        particle.style.animationDelay = `${Math.random() * 12}s`;
        
        particleContainer.appendChild(particle);
    }
}

// ==================== RIPPLE EFFECT (smooth) ====================
function addRippleEffect() {
    const buttons = document.querySelectorAll('.filter-btn, .certificate-link, .modal-close, .btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            ripple.classList.add('ripple-effect');
            
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            ripple.style.cssText = `
                position: absolute;
                left: ${x}px;
                top: ${y}px;
                width: 0;
                height: 0;
                border-radius: 50%;
                background: rgba(167, 139, 250, 0.35);
                transform: translate(-50%, -50%);
                pointer-events: none;
                z-index: 10;
            `;
            
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            
            requestAnimationFrame(() => {
                ripple.style.transition = 'all 0.65s cubic-bezier(0.22, 1, 0.36, 1)';
                ripple.style.width = '220px';
                ripple.style.height = '220px';
                ripple.style.opacity = '0';
            });
            
            setTimeout(() => ripple.remove(), 700);
        });
    });
}

// ==================== PARALLAX (lebih lembut) ====================
function addParallaxEffect() {
    const certificateItems = document.querySelectorAll('.certificate-item');
    
    certificateItems.forEach(item => {
        // Remove previous listeners if any by cloning
        const newItem = item.cloneNode(true);
        item.parentNode.replaceChild(newItem, item);
        
        newItem.addEventListener('mousemove', (e) => {
            const rect = newItem.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            // Lebih lembut
            const rotateX = (y - centerY) / 28;
            const rotateY = (centerX - x) / 28;
            
            newItem.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
            newItem.style.transition = 'transform 0.12s ease-out';
        });
        
        newItem.addEventListener('mouseleave', () => {
            newItem.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
            newItem.style.transition = 'transform 0.45s cubic-bezier(0.22, 1, 0.36, 1)';
        });
        
        // Re-attach modal click
        const imageContainer = newItem.querySelector('.certificate-image-container');
        const image = newItem.querySelector('.certificate-image');
        const title = newItem.querySelector('.certificate-title')?.textContent || '';
        
        if (imageContainer && image) {
            imageContainer.addEventListener('click', (e) => {
                if (!e.target.closest('.certificate-link')) {
                    openImageModal(image.src, title);
                }
            });
        }
    });
}

// ==================== BOUNTY MODAL ====================
function openBountyModal(imageSrc, caption) {
    const modal = document.getElementById('bountyModal');
    if (!modal) return;
    
    const modalImage = document.getElementById('modalImage');
    const modalCaption = document.getElementById('modalCaption');
    
    if (modalImage) {
        modalImage.src = imageSrc;
        modalImage.style.opacity = '0';
        modalImage.style.transform = 'scale(0.94)';
    }
    if (modalCaption) modalCaption.textContent = caption || 'Sertifikat Bounty';
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    requestAnimationFrame(() => {
        if (modalImage) {
            modalImage.style.transition = 'opacity 0.4s cubic-bezier(0.22, 1, 0.36, 1), transform 0.4s cubic-bezier(0.22, 1, 0.36, 1)';
            modalImage.style.opacity = '1';
            modalImage.style.transform = 'scale(1)';
        }
    });
}

function closeBountyModal() {
    const modal = document.getElementById('bountyModal');
    if (!modal) return;
    
    const modalImage = document.getElementById('modalImage');
    if (modalImage) {
        modalImage.style.opacity = '0';
        modalImage.style.transform = 'scale(0.96)';
    }
    
    setTimeout(() => {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }, 280);
}

// ==================== BOUNTY SECTION ====================
function initBountySection() {
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeBountyModal();
    });
    
    const modalOverlay = document.querySelector('#bountyModal .modal-overlay');
    if (modalOverlay) {
        modalOverlay.addEventListener('click', closeBountyModal);
    }
    
    const modalContainer = document.querySelector('#bountyModal .modal-container');
    if (modalContainer) {
        modalContainer.addEventListener('click', e => e.stopPropagation());
    }
    
    // Elegant staggered entrance for bounty items
    const bountyItems = document.querySelectorAll('.bounty-item');
    const bountyObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 90);
                bountyObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    
    bountyItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        item.style.transition = 'opacity 0.65s cubic-bezier(0.22, 1, 0.36, 1), transform 0.65s cubic-bezier(0.22, 1, 0.36, 1)';
        bountyObserver.observe(item);
    });
    
    // Bounty stats counter
    const bountyStats = document.querySelectorAll('.bounty-stat-number');
    
    const animateBountyStats = () => {
        bountyStats.forEach(stat => {
            const target = parseInt(stat.getAttribute('data-count'));
            if (isNaN(target)) return;
            
            const duration = 1400;
            const startTime = performance.now();
            
            function update(currentTime) {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);
                const ease = 1 - Math.pow(1 - progress, 3);
                stat.textContent = Math.floor(ease * target);
                
                if (progress < 1) requestAnimationFrame(update);
                else stat.textContent = target;
            }
            requestAnimationFrame(update);
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
        }, { threshold: 0.4 });
        
        statsObserver.observe(bountySection);
    }
}

// ==================== HEADER SCROLL EFFECT ====================
function initHeaderScroll() {
    const header = document.getElementById('header');
    if (!header) return;
    
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 40) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        lastScroll = currentScroll;
    }, { passive: true });
}

// ==================== MAIN INITIALIZATION ====================
document.addEventListener('DOMContentLoaded', () => {
    createImageModal();
    loadCertificates();
    
    document.querySelectorAll('.fade-in').forEach(el => mainObserver.observe(el));
    
    const yearSpan = document.querySelector('#current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
    
    createParticleBackground();
    addRippleEffect();
    initBountySection();
    initHeaderScroll();
    
    // Image load animation
    document.querySelectorAll('img').forEach(img => {
        if (img.complete) {
            img.style.animation = 'scaleIn 0.4s cubic-bezier(0.22, 1, 0.36, 1)';
        } else {
            img.addEventListener('load', function() {
                this.style.animation = 'scaleIn 0.4s cubic-bezier(0.22, 1, 0.36, 1)';
            });
        }
    });
});

// Window scroll (fallback for older elements)
window.addEventListener('scroll', () => {
    document.querySelectorAll('.fade-in:not(.animated)').forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        if (elementTop < window.innerHeight - 90) {
            element.classList.add('animated');
            
            if (element.classList.contains('skill-progress')) {
                const width = element.getAttribute('data-width');
                element.style.width = `${width}%`;
            }
        }
    });
}, { passive: true });

// Window load
window.addEventListener('load', () => {
    // Slight delay biar lebih smooth setelah page fully loaded
    setTimeout(() => {
        animateSkillBars();
        animateStats();
    }, 150);
});