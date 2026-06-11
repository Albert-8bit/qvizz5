const form = document.querySelector("#book-form");
const list = document.querySelector("#book-list");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const title = data.get("title");
    const author = data.get("author");
    const year = data.get("year");
    if (!title || !author || !year) {
        alert("Please fill in all fields.");
        return;
    }
    const item = document.createElement("li");
    item.innerHTML = `
    <div class="r">
      <span class="s">${title}</span>
      <span class="t">${author} · ${year}</span>
    </div>
    <button type="button" class="remove">Remove</button>
  `;
    list.appendChild(item);
    form.reset();
});
list.addEventListener("click", (event) => {
    if (event.target.classList.contains("remove")) {
        event.target.closest("li").remove();
    }
});
