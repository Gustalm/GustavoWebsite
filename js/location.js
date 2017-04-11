// redirectToCountryPage();

$(".flag:not(.active)").on("click", function(e) {
    localStorage.setItem("userClickedFlag", true);
})

function redirectToCountryPage() {
    if (!localStorage.getItem("userClickedFlag")) {
        $.get("https://ipinfo.io", function(response) {
            if (response.country != "BR" && pageLanguage !== "en-us")
                window.location = "/en/"
        }, "jsonp");
    } else {
        localStorage.clear();
    }
}