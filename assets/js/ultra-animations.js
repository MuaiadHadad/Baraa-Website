// ============================================
// 🌟 SIMPLIFIED PROFESSIONAL ANIMATIONS 🌟
// Optimized & Bug-Free
// ============================================

$(document).ready(function() {

    // ============================================
    // 🚀 SCROLL REVEAL SYSTEM
    // ============================================
    function revealOnScroll() {
        $('.our-info-area, .profession-caption, .gallery-area, .wantToWork-area, .contact-section, .footer-area').each(function() {
            var elementTop = $(this).offset().top;
            var elementBottom = elementTop + $(this).outerHeight();
            var viewportTop = $(window).scrollTop();
            var viewportBottom = viewportTop + $(window).height();

            if (elementBottom > viewportTop && elementTop < (viewportBottom - 100)) {
                $(this).addClass('scroll-reveal active');
            }
        });
    }

    // Initialize scroll reveal
    $('.our-info-area, .profession-caption, .gallery-area, .wantToWork-area, .contact-section, .footer-area').addClass('scroll-reveal');

    // ============================================
    // 🎨 SCROLL EFFECTS
    // ============================================
    let ticking = false;
    $(window).on('scroll', function() {
        if (!ticking) {
            window.requestAnimationFrame(function() {
                var scrolled = $(window).scrollTop();

                // Scroll reveal
                revealOnScroll();

                // Parallax (subtle)
                $('.slider-area').css({
                    'transform': 'translateY(' + (scrolled * 0.3) + 'px)'
                });

                // Header sticky
                if (scrolled > 100) {
                    $('.header-area').addClass('sticky-active');
                } else {
                    $('.header-area').removeClass('sticky-active');
                }

                // Back to top
                if (scrolled > 300) {
                    $('#back-top').fadeIn(400);
                } else {
                    $('#back-top').fadeOut(400);
                }

                ticking = false;
            });
            ticking = true;
        }
    });

    // Initial reveal
    setTimeout(revealOnScroll, 100);

    // ============================================
    // 🌊 SMOOTH SCROLL
    // ============================================
    $('a[href^="#"]').on('click', function(e) {
        var target = $(this.getAttribute('href'));
        if(target.length) {
            e.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top - 80
            }, 800, 'swing');
        }
    });

    // ============================================
    // ✨ GALLERY STAGGER
    // ============================================
    $('.single-gallery').each(function(index) {
        $(this).css({
            'animation-delay': (index * 0.1) + 's',
            'animation-name': 'fadeInUp',
            'animation-duration': '0.6s',
            'animation-fill-mode': 'both'
        });
    });

    // ============================================
    // 🎨 FORM INTERACTIONS
    // ============================================
    $('.form-control').each(function() {
        var $input = $(this);

        $input.on('focus', function() {
            $(this).parent('.form-group').addClass('focused');
        });

        $input.on('blur', function() {
            if ($(this).val() === '') {
                $(this).parent('.form-group').removeClass('focused');
            }
        });

        if ($input.val() !== '') {
            $input.parent('.form-group').addClass('focused');
        }
    });

    // ============================================
    // 🎬 PRELOADER
    // ============================================
    $(window).on('load', function() {
        setTimeout(function() {
            $('#preloader-active').fadeOut(800, function() {
                $(this).remove();
            });
            $('body').css('overflow', 'visible');
        }, 800);
    });

    // ============================================
    // 💎 INTERSECTION OBSERVER (if supported)
    // ============================================
    if ('IntersectionObserver' in window) {
        const observerOptions = {
            threshold: 0.2,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');

                    // Stagger children
                    $(entry.target).find('.single-info, .single-gallery, .contact-info').each(function(index) {
                        $(this).css({
                            'animation-delay': (index * 0.1) + 's',
                            'animation-name': 'fadeInUp',
                            'animation-duration': '0.6s',
                            'animation-fill-mode': 'both'
                        });
                    });
                }
            });
        }, observerOptions);

        document.querySelectorAll('.scroll-reveal').forEach(el => {
            observer.observe(el);
        });
    }

});


