// Toggle handling
function toggleText (button, text) {
  if (text.className === "content-row-text_display") {
    // display case, swap text, plus to minus
    text.className = "content-row-text_hidden"
    button.setAttribute("src", "./images/icon-minus.svg")
  } else {
    // hide case, swap text, minus to plus
    text.className = "content-row-text_display"
    button.setAttribute("src", "./images/icon-plus.svg")
  }
}

// Add event listeners for buttons 1 to 4
for (let i = 1; i <= 4; i++) {
  const button = document.getElementById(`button-${i}`);
  const text = document.getElementById(`text-${i}`)
  const header = document.getElementById(`header-${i}`)
  button.addEventListener("click", () => {
    toggleText(button, text)
  })
  header.addEventListener("click", () => {
    toggleText(button, text)
  })
}