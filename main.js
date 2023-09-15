const btn = document.getElementById("btn");
const booklist = document.getElementById("booklist");

btn.addEventListener("click", () => {
  fetch("https://api.jsonbin.io/v3/b/6503b1dde4033326cbd7d0d0")
    .then((response) => response.json())
    .then((data) => {
      booklist.innerHTML = "";

      data.record.forEach((book) => {
        booklist.innerHTML += `
            <div class="book">
            <p>Author: ${book.author}</p>    
            <p>Name: ${book.name}</p>
            <p>Year: ${book.year}</p>
        </div>
            `;
      });
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
});
