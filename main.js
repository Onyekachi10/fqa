window.addEventListener("load", function () {
    const displayFaq = document.querySelectorAll(".FAQ-items")

    displayFaq.forEach(function (btn) {
        btn.addEventListener("click", function() {

        const answer = this.querySelector("p")
        const icons = this.querySelectorAll("img")
        icons.forEach(function (ex) {
           ex.classList.toggle("hide") 
        });
 
        if (! answer.style.maxHeight) {
            answer.style.maxHeight = answer.scrollHeight + 20 + "px"
            answer.style.padding = `0.3rem 2px`
            icons[0].style.display = null
           }

    else {
        answer.style.maxHeight = null
        answer.style.padding = 0
        icons[0].style.display = "block"
    }

        })
    });
})