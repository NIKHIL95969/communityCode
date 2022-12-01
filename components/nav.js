
 const nav = document.querySelector("#nav");

 const Navcont = `
    <div class="container main-nav flex">
        <a href="#" class="community-logo">
            <img src="assets/logo.png" alt="logo">
        </a>
        <p class="c-name">CFC</p> 
        <div class="nav-links">
            <ul class="flex">
                <li><a href="#" class="hover-link">Home</a></li>
                <li><a href="#" class="hover-link">Contact</a></li>
                <li><a href="#" class="hover-link">Service</a></li>
                <li><a href="#" class="hover-link">About</a></li>
                <li><a href="#" class="hover-link"><i class="fa-solid fa-circle-half-stroke"></i></a></li>
                <li><a href="#" class="hover-link secondary-button">Sign In</a></li>
                <li><a href="#" class="hover-link primary-button">Sign Up</a></li>
            </ul>
        </div>
    </div>
 `
 nav.innerHTML = Navcont;