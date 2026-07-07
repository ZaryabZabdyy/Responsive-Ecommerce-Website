// script.js
document.addEventListener('DOMContentLoaded', () => {
    

    const cartCountBadge = document.getElementById('cart-count');
    const cartTotalText = document.getElementById('cart-total');
    const buyButtons = document.querySelectorAll('.btn-buy');

    let totalItems = 0;
    let totalPrice = 0.00;

    buyButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const productCard = event.target.closest('.product-card');
            const priceElement = productCard.querySelector('.product-price');
            
            const priceString = priceElement.textContent.replace(/[$,]/g, '');
            const productPrice = parseFloat(priceString);

            totalItems += 1;
            totalPrice += productPrice;

            cartCountBadge.textContent = totalItems;
            cartTotalText.textContent = `$${totalPrice.toLocaleString('en-US', { 
                minimumFractionDigits: 2, 
                maximumFractionDigits: 2 
            })}`;
        });
    });

    const wishlistCountBadge = document.getElementById('wishlist-count');
    const wishlistButtons = document.querySelectorAll('.btn-wishlist');
    
    let wishlistItems = 0;

    wishlistButtons.forEach(button => {
        button.addEventListener('click', () => {
            const icon = button.querySelector('i');
            
            if (icon.classList.contains('fa-regular')) {
                icon.classList.remove('fa-regular');
                icon.classList.add('fa-solid');
                button.classList.add('active');
                wishlistItems += 1;
            } else {
                icon.classList.remove('fa-solid');
                icon.classList.add('fa-regular');
                button.classList.remove('active');
                wishlistItems -= 1;
            }

            wishlistCountBadge.textContent = wishlistItems;
        });
    });


    const categoryLinks = document.querySelectorAll('.category-link');
    const categorySections = document.querySelectorAll('.category-section');
    const navHome = document.getElementById('nav-home');
    const logoHome = document.getElementById('logo-home');
    const navShopAll = document.getElementById('nav-shop-all');
    
    // Custom Static View Section Bindings
    const navAbout = document.getElementById('nav-about');
    const navContact = document.getElementById('nav-contact');
    const aboutSection = document.getElementById('about-section');
    const contactSection = document.getElementById('contact-section');

    
    const hideAllContentSections = () => {
        categorySections.forEach(section => section.style.display = 'none');
        if (aboutSection) aboutSection.style.display = 'none';
        if (contactSection) contactSection.style.display = 'none';
    };

  
    const showAllCategories = () => {
        hideAllContentSections();
        categorySections.forEach(section => {
            section.style.display = 'block';
        });
    };

    categoryLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); 
            const selectedCategory = link.getAttribute('data-category');
            
            hideAllContentSections(); 

            categorySections.forEach(section => {
                const sectionTitleElement = section.querySelector('.category-title');
                const sectionTitle = sectionTitleElement.textContent.trim();

                if (sectionTitle.toLowerCase().includes(selectedCategory.toLowerCase())) {
                    section.style.display = 'block';
                }
            });
        });
    });

   
    navHome.addEventListener('click', (event) => {
        event.preventDefault();
        showAllCategories();
    });

    logoHome.addEventListener('click', (event) => {
        event.preventDefault();
        showAllCategories();
    });

    navShopAll.addEventListener('click', (event) => {
        event.preventDefault();
        showAllCategories();
    });


    navAbout.addEventListener('click', (event) => {
        event.preventDefault();
        hideAllContentSections();
        if (aboutSection) aboutSection.style.display = 'block';
    });

    // Dynamic Contact Click Handler
    navContact.addEventListener('click', (event) => {
        event.preventDefault();
        hideAllContentSections();
        if (contactSection) contactSection.style.display = 'block';
    });


    document.getElementById('footerContactBtn').addEventListener('click', function(e) {
    e.preventDefault(); // Kisi bhi kisam ka default page reload ya jump rokne ke liye


    const headerContactBtn = Array.from(document.querySelectorAll('a')).find(
        el => el.textContent.trim().toLowerCase() === 'contact' || el.textContent.trim().toLowerCase() === 'contact us'
    );


    if (headerContactBtn) {
        headerContactBtn.click();
    } else {
        console.log("Header contact button nahi mila! Meherbani karke uski class check karein.");
    }
});
});