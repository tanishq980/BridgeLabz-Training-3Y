// Q1. Dynamic Product List Manager (Event Delegation)
const productInput = document.getElementById("productInput");
const addButton = document.getElementById("addButton");
const productList = document.getElementById("productList");

function addProduct() {
    const productName = productInput.value.trim();
    if (!productName) return;
    const item = document.createElement("li");
    const name = document.createElement("span");
    name.className = "product-name";
    name.textContent = productName;
    const edit = document.createElement("button");
    edit.textContent = "Edit";
    edit.dataset.action = "edit";
    const remove = document.createElement("button");
    remove.textContent = "Delete";
    remove.dataset.action = "delete";
    item.append(name, edit, remove);
    productList.appendChild(item);
    productInput.value = "";
}
addButton.addEventListener("click", addProduct);
productInput.addEventListener("keydown", e => { if (e.key === "Enter") addProduct(); });

// Event delegation: one parent listener handles all product buttons.
productList.addEventListener("click", event => {
    const button = event.target.closest("button[data-action]");
    if (!button) return;
    const item = button.closest("li");
    if (button.dataset.action === "delete") item.remove();
    else startEditing(item);
});

function startEditing(item) {
    if (item.querySelector("input")) return;
    const oldName = item.querySelector(".product-name");
    const input = document.createElement("input");
    input.value = oldName.textContent;
    input.className = "edit-input";
    oldName.replaceWith(input);
    input.focus();

    let saved = false;
    function save() {
        if (saved || !input.isConnected) return;
        saved = true;
        const span = document.createElement("span");
        span.className = "product-name";
        span.textContent = input.value.trim() || oldName.textContent;
        input.replaceWith(span);
        document.removeEventListener("click", outsideClick, true);
    }
    function outsideClick(e) {
        if (!item.contains(e.target)) save();
    }
    document.addEventListener("click", outsideClick, true);
    input.addEventListener("keydown", e => {
        if (e.key === "Enter") save();
        if (e.key === "Escape") { input.value = oldName.textContent; save(); }
    });
    input.addEventListener("blur", save);
}
