document.getElementById("enterBtn").addEventListener("click", function() {
    document.getElementById("entryScreen").style.display = "none";
    document.getElementById("map").style.display = "block";
});
document.getElementById("goBack").addEventListener("click", function() {
    if (document.referrer) {
        window.location.href = document.referrer;
      } else {
        window.close(); // May not work in all browsers
        alert("Please close the tab manually.");
      }
});