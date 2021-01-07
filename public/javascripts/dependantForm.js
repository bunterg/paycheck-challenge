function Form() {
    const form = document.createElement('div')
    form.className = "w3-section"
    form.innerHTML = `
        <input type="text" name="dependants" class="w3-input" required>
        <label for="dependants">Dependant Name</label>
    `
    return form
}

function dependantAdd(asd) {
    let form = new Form();
    let container = document.getElementById('dependantContainer');
    container.appendChild(form);
}

function dependantRemove(asd) {
    const container = document.getElementById('dependantContainer');
    if (container.hasChildNodes()) {
        const containerSize = container.childNodes.length
        container.removeChild(container.childNodes[containerSize - 1]);
    }
}

document.getElementById('dependantAdd').addEventListener("click", dependantAdd)
document.getElementById('dependantRemove').addEventListener("click", dependantRemove)