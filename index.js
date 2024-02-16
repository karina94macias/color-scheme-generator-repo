let colorSelected = ""
let modeSelected = ""

document.getElementById("get-colors-btn").addEventListener("click", function(){
    //Getting values selected by user
    colorSelected = document.getElementById("color-picker").value.slice(1)
    modeSelected = document.getElementById("mode-selector").value
    
    //Getting scheme color from API and modifying DOM for render colors
    fetch(`https://www.thecolorapi.com/scheme?hex=${colorSelected}&mode=${modeSelected}`)
    .then(response => response.json())
    .then(data => {
        
        const colorsArray = data.colors
        
        colorsArray.forEach(function(color, index){
            index++
            document.getElementById(`color-${index}`).style.background = color["hex"].value
            document.getElementById(`hexcode-${index}`).textContent = color["hex"].value
        })       
    })
})

document.getElementById("colors-container").addEventListener("click", function(e){
    const clickedElColor = document.getElementById(e.target.id).style.background
    //  navigator.clipboard.writeText(clickedElColor)
    //  alert("RGB value copied!")
    
    navigator.clipboard.writeText(clickedElColor)
        .then(() => {
        console.log(`Copied text to clipboard: ${clickedElColor}`);
        alert(`Copied text to clipboard: ${clickedElColor}`);
    })
        .catch((error) => {
        console.error(`Could not copy text: ${error}`);
    })
})