
 const footer = document.querySelector("#footer");

 const FooterCont = `
    <div class="container flex">
        <div class="link-column">
            <h4><a href="#" class="hover-link">Contact Us</a></h4>
        </div>

        <div class="link-column">
            <h4><a href="#" class="hover-link">Learn</a></h4>
        </div>

        <div class="link-column">
            <h4><a href="#" class="hover-link">Service</a></h4>
        </div>

        <div class="link-column">
            <h4><a href="#" class="hover-link">Feedback</a></h4>

        </div>
    </div>
 `
 footer.innerHTML = FooterCont;