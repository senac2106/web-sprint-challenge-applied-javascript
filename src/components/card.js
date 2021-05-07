
import axios from'axios'
const Card = (article) => {

  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>

  
  
    
    const divs = document.createElement('div')
    const headlines = document.createElement('div')
    const author = document.createElement('div')
    const cotainer = document.createElement('div')
    const img = document.createElement('img')
    const span = document.createElement('span')

    headlines.textContent = (article.headline)
    span.textContent = (article.authorName)
    img.textContent =(article.authorPhoto)

    divs.appendChild(headlines)
    divs.appendChild(author)
    author.appendChild(cotainer)
    author.appendChild(span)
    cotainer.appendChild(img)


    divs.classList.add('card')
    headlines.classList.add('headline')
    author.classList.add('author')
    cotainer.classList.add('img-container')
    img.src = article.authorPhoto

    

    divs.addEventListener('click', () => console.log(headlines))

    return divs;

  }


  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `https://lambda-times-api.herokuapp.com/articles`
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
  const cardAppender = (selector) => {

const parent = document.querySelector(selector);

  axios.get('https://lambda-times-api.herokuapp.com/articles').then((res)=>{
    

  const strap = res.data.articles.bootstrap;
  strap.forEach(element => {
   parent.appendChild(Card(element));
  });

  const Datas = res.data.articles.javascript;
  Datas.forEach((element)=>{
    parent.appendChild(Card(element));
  })

  const query = res.data.articles.jquery;
  query.forEach((element)=>{
    parent.appendChild(Card(element));
  })

  const nodeJs = res.data.articles.node;
  nodeJs.forEach((element)=>{
    parent.appendChild(Card(element));
  })
  
  const technology = res.data.articles.technology;
      technology.forEach(element => {
        parent.appendChild(Card(element));
      });

  }).catch((err)=>{
    console.log(err);
  })


}

export { Card, cardAppender }
