
window.addEventListener('DOMContentLoaded', event => {

        const navbarToggler = document.getElementById("navbar-toggler");
        const menuIcon = document.getElementById("menu-icon");
        const closeIcon = document.getElementById("close-icon");
        const navbarResponsive = document.getElementById("navbarResponsive");
        const mainNav = document.getElementById("mainNav");

        // Open/Close Menu
        navbarToggler.addEventListener("click", function () {
          const isHidden = navbarResponsive.classList.contains("hidden");

          if (isHidden) {
            navbarResponsive.classList.remove("hidden", "-translate-y-full");
            navbarResponsive.classList.add("translate-y-0");
            menuIcon.classList.add("hidden");
            closeIcon.classList.remove("hidden");
          } else {
            navbarResponsive.classList.add("hidden", "-translate-y-full");
            navbarResponsive.classList.remove("translate-y-0");
            menuIcon.classList.remove("hidden");
            closeIcon.classList.add("hidden");
          }
        });

        // Close menu when clicking a link
        document.querySelectorAll("#navbarResponsive a").forEach((link) => {
          link.addEventListener("click", function () {
            navbarResponsive.classList.add("hidden", "-translate-y-full");
            navbarResponsive.classList.remove("translate-y-0");
            menuIcon.classList.remove("hidden");
            closeIcon.classList.add("hidden");
          });
        });

        // Navbar shrink function
        function navbarShrink() {
          const navbarCollapsible = document.querySelector("#mainNav");
          if (!navbarCollapsible) {
            return;
          }
          if (window.scrollY === 0) {
            navbarCollapsible.classList.remove("navbar-shrink");
          } else {
            navbarCollapsible.classList.add("navbar-shrink");
          }
        }

        // Shrink the navbar on scroll
        navbarShrink();
        document.addEventListener("scroll", navbarShrink);

        // Highlight active nav link based on scroll position
        function highlightActiveLink() {
          const sections = document.querySelectorAll("section");
          const navLinks = document.querySelectorAll("#mainNav .nav-link");

          let currentSection = "";
          sections.forEach((section) => {
            const rect = section.getBoundingClientRect();
            if (
              rect.top <= window.innerHeight / 2 &&
              rect.bottom >= window.innerHeight / 2
            ) {
              currentSection = section.getAttribute("id");
            }
          });

          const footer = document.getElementById("footer");
          const footerRect = footer.getBoundingClientRect();
          if (footerRect.top <= window.innerHeight && footerRect.bottom >= 0) {
            currentSection = "footer";
          }

          navLinks.forEach((link) => {
            if (link.getAttribute("href").substring(1) === currentSection) {
              link.classList.add("active");
            } else {
              link.classList.remove("active");
            }
          });
        }

        window.addEventListener("scroll", highlightActiveLink);

        document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
          anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            const offset = 100;
            const targetPosition = targetElement.offsetTop - offset;
            window.scrollTo({
              top: targetPosition,
              behavior: "smooth",
            });

            setTimeout(() => {
              highlightActiveLink();
            }, 500);
          });
        });

        highlightActiveLink();
  
 



});


