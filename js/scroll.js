const updateScrollPercentage = function () {
    const heightOfWindow = window.innerHeight,
        contentScrolled = window.pageYOffset,
        bodyHeight = document.body.offsetHeight,
        percentage = document.querySelector("[posmotred-prokrutku] .sovagentageam")
    percentageVal = document.querySelector("#percnkisud-matedngentag")

    if (bodyHeight - contentScrolled <= heightOfWindow) {
        percentageVal.textContent = percentage.style.width = "100%"
    }
    else {
        const total = bodyHeight - heightOfWindow,
            got = contentScrolled,
            percent = parseInt((got / total) * 100)
        percentageVal.textContent = percentage.style.width = percent + "%"
    }
}

window.addEventListener('scroll', updateScrollPercentage);


arrowTop.onclick = function() {
    window.scrollTo(pageXOffset, 0);
   
  };

  window.addEventListener('scroll', function() {
    arrowTop.hidden = (pageYOffset < document.documentElement.clientHeight);
  });