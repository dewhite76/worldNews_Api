let row = document.getElementById('row')
const apiKey = "f5c0ade1ff294bdc9b4f7304dd84f60b";
function fetchNews(){
    fetch(
      // `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${apiKey}`)
      `https://api.worldnewsapi.com/search-news?api-key=${apiKey}&text=tesla`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data.news);
        data.news.map((value, i) => {
          row.innerHTML += `
                <div class='flex-cont'>
                   <img src="${value.image}">
                   <strong>Author:</strong> <cite>${value.author}</cite>
                   <p>${value.source_country}</p>
                   <p>${value.text.slice(0, 10)}</p>
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


