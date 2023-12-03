let row = document.getElementById('row')
const apiKey = "336507b0d4764d92834b29fe8cb71bc8";
function fetchNews(){
    fetch(
      `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${apiKey}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.articles);
        data.articles.map((value, i) => {
          row.innerHTML += `
                <div class='flex-cont'>
                   <img src="${value.urlToImage}">
                   <strong>Author:</strong> <cite>${value.author}</cite>
                   <p>${value.description}</p>
                   <p>${value.conten}</p>
                    <p>${value.title}</p>
                    <div>
                    <button class="btn-more">
                       <a href="${value.url}" target='_blank'>  Read More</a>
                    </button>
                    </div>
                </div>
                    `;
        });
      });
    }
    
    fetchNews()


