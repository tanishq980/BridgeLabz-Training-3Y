// Q6. Real-Time Table Filter Using the input Event
const searchInput = document.getElementById("searchInput");
const rows = [...document.querySelectorAll("#studentTable tbody tr")];
const noResultsMessage = document.getElementById("noResultsMessage");

searchInput.addEventListener("input", () => {
    const query = searchInput.value.trim().toLowerCase();
    let matches = 0;
    rows.forEach(row => {
        const isMatch = row.textContent.toLowerCase().includes(query);
        row.hidden = !isMatch;
        if (isMatch) matches++;
    });
    noResultsMessage.hidden = matches !== 0;
});
