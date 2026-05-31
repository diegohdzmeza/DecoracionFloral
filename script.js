        // 1. Efecto Navbar al hacer scroll
        const navbar = document.getElementById('navbar');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });

        // 2. Menú Móvil
        const mobileBtn = document.getElementById('mobile-menu-btn');
        const navLinks = document.getElementById('nav-links');
        
        mobileBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            // Cambiar icono de menú
            const icon = mobileBtn.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
                // Color del icono oscuro cuando el menú está abierto
                icon.style.color = '#333';
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
                icon.style.color = '';
            }
        });

        // Cerrar menú al hacer clic en un enlace
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                const icon = mobileBtn.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
                icon.style.color = '';
            });
        });

        // 3. Animación Scroll Reveal
        const revealElements = document.querySelectorAll('.reveal');
        
        const revealOnScroll = () => {
            const windowHeight = window.innerHeight;
            const elementVisible = 150;

            revealElements.forEach((reveal) => {
                const elementTop = reveal.getBoundingClientRect().top;
                if (elementTop < windowHeight - elementVisible) {
                    reveal.classList.add('active');
                }
            });
        };

        window.addEventListener('scroll', revealOnScroll);
        // Disparar una vez al cargar
        revealOnScroll();

        // 4. Generador dinámico de links de WhatsApp para el catálogo
        function openWhatsApp(productName) {
            const phoneNumber = "528183575855";
            const message = `Hola, me interesa el producto: "${productName}". ¿Me podrían dar más información y precios?`;
            const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
            window.open(url, '_blank');
        }

        // 5. Año dinámico en footer
        document.getElementById('year').textContent = new Date().getFullYear();
