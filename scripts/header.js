// Top sale banner countdown
function topSaleBannerCountdown() {
  const hoursElement = document.getElementById("sale-countdown-hours");
  const minutesElement = document.getElementById("sale-countdown-minutes");
  const secondsElement = document.getElementById("sale-countdown-seconds");

  const countDownEndDate = new Date();
  countDownEndDate.setHours(24, 0, 0, 0); // Set to the end of the night
  const countDownDate = countDownEndDate.getTime();

  function setInnerHTMLs() {
    const now = new Date().getTime();
    const distance = countDownDate - now;

    const hours = Math.max(
      0,
      Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    );
    const minutes = Math.max(
      0,
      Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    );
    const seconds = Math.max(0, Math.floor((distance % (1000 * 60)) / 1000));

    hoursElement.innerHTML = String(hours).padStart(2, "0");
    minutesElement.innerHTML = String(minutes).padStart(2, "0");
    secondsElement.innerHTML = String(seconds).padStart(2, "0");
  }
  setInnerHTMLs();
  setInterval(setInnerHTMLs, 1000); // Update every 1 second
}
topSaleBannerCountdown();
