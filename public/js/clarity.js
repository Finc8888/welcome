console.log("from clarity");

document.addEventListener("DOMContentLoaded", () => {
  const clarityTracking = document.querySelector(".js-clarity-tracking");
  console.log("elem", clarityTracking);
  setTimeout(() => {
    console.log("window.clarity", window.clarity);
    if (window.clarity && clarityTracking) {
      window.addEventListener("consentGranted", () => {
        console.log("consent granted");
        window.clarity("consent");
      });
      const key = clarityTracking.dataset.key;
      const value = clarityTracking.dataset.value;
      console.log("key", key);
      console.log("value", value);
      window.clarity("set", key, value);
    }
  }, 1000);
});
