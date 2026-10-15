
console.log("NaveedMart JavaScript Loaded Successfully!");


// ================== 1. SEARCH BAR FUNCTIONALITY  ========================>

let searchInputBox = document.querySelector(".search-input");
let searchIconButton = document.querySelector(".search-icon");
let categorySelect = document.querySelector(".search-select");

searchIconButton.addEventListener("click", function() {
    let userQuery = searchInputBox.value;
    let cleanQuery = userQuery.trim().toLowerCase();
    let selectedCategory = categorySelect ? categorySelect.value : "All";
    
    if (cleanQuery === "") {
        alert("Please enter something to search in NaveedMart!");
    } else {
        console.log(`User searched for: ${cleanQuery} in category: ${selectedCategory}`);
        alert(`Searching for: ${cleanQuery} under [${selectedCategory}]...`);
    }
});


// ================== 2. "ALL" PANEL SLIDING SIDEBAR MENU  ========================

let panelAllBtn = document.querySelector(".panel-all");
let sidebarMenuBox = document.getElementById("sidebarMenu");
let sidebarOverlayBox = document.getElementById("sidebarOverlay");
let closeSidebarButton = document.getElementById("closeSidebarBtn");

if (panelAllBtn && sidebarMenuBox) {
    panelAllBtn.addEventListener("click", function() {
        sidebarMenuBox.classList.add("active");
        sidebarOverlayBox.classList.add("active");
    });

    closeSidebarButton.addEventListener("click", function() {
        sidebarMenuBox.classList.remove("active");
        sidebarOverlayBox.classList.remove("active");
    });

    sidebarOverlayBox.addEventListener("click", function() {
        sidebarMenuBox.classList.remove("active");
        sidebarOverlayBox.classList.remove("active");
    });
}


// =============== 3. SIGN IN & ACCOUNTS MODAL POPUP  ===========================>

let signInBox = document.querySelector(".nav-signin");
let signinModalBox = document.getElementById("signinModal");
let signinOverlayBox = document.getElementById("signinOverlay");
let closeSigninButton = document.getElementById("closeSigninBtn");
let signinSubmitBtn = document.getElementById("signinSubmitBtn");
let signinEmailInput = document.getElementById("signinEmailInput");

if (signInBox && signinModalBox) {
    signInBox.addEventListener("click", function() {
        signinModalBox.classList.add("active");
        signinOverlayBox.classList.add("active");
    });

    function closeSigninModal() {
        signinModalBox.classList.remove("active");
        signinOverlayBox.classList.remove("active");
        if (signinEmailInput) signinEmailInput.value = "";
    }

    closeSigninButton.addEventListener("click", closeSigninModal);
    signinOverlayBox.addEventListener("click", closeSigninModal);

    signinSubmitBtn.addEventListener("click", function() {
        let userEmail = signinEmailInput.value.trim().toLowerCase();
        
        if (userEmail === "") {
            alert("Please enter a valid email or phone number.");
        } else {
            alert(`Welcome back, ${userEmail}! Successfully signed in.`);
            closeSigninModal();
        }
    });
}

// =============== 4. HORIZONTAL PRODUCTS SLIDER BUTTONS  ===========================>

let leftScrollButton = document.querySelector(".prev-btn");
let rightScrollButton = document.querySelector(".next-btn");
let productsContainerBox = document.querySelector(".products-container");

if (rightScrollButton && leftScrollButton) {
    rightScrollButton.addEventListener("click", function() {
        productsContainerBox.scrollLeft += 300;
    });

    leftScrollButton.addEventListener("click", function() {
        productsContainerBox.scrollLeft -= 300;
    });
}

// ================= 5. BACK TO TOP BUTTON    =========================>>

let backToTopButton = document.querySelector(".foot-panel1");

if (backToTopButton) {
    backToTopButton.addEventListener("click", function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}