// Wait for the page to load first
window.onload = function() {

  var i = 1;

  var drop = document.getElementById("hiddenDrop")
  var nextBtn = document.getElementById("nextButton");
  nextBtn.onclick = function() {
    document.getElementById("textToAnno").textContent = "Ceci est le texte ".concat(i.toString());
    i += 1;
    // Replace the button so the :active is no longer in effect.
    var old = nextBtn;
    var newbtn = old;
    old.replaceWith(newbtn);
    // Button cannot be clicked unless "sexist"/"notsexist" has been clicked
    nextBtn.classList.add("notActive");
    // Selection button back to their normal state
    sexistBtn.style.backgroundColor = "#4CAF50";
    notSexistBtn.style.backgroundColor = "#4CAF50";
    drop.classList.add("hidden");
    return false;
  }

  var sexistBtn = document.getElementById("sexist");
  var notSexistBtn = document.getElementById("notSexist");

  sexistBtn.onclick = function() {
    sexistBtn.style.backgroundColor = "#087f23";
    notSexistBtn.style.backgroundColor = "#4CAF50";
    nextBtn.classList.remove("notActive");
    //drop.classList.remove("hidden");
    return false;
  }

  notSexistBtn.onclick = function() {
    notSexistBtn.style.backgroundColor = "#087f23";
    sexistBtn.style.backgroundColor = "#4CAF50";
    nextBtn.classList.remove("notActive");
    drop.classList.add("hidden");
    return false;
  }
}