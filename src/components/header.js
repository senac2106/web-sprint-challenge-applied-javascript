
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
  const Header = (title, date, temp) => {
//call it
const heads = document.createElement('div')
const titles = document.createElement('h1')
const spam = document.createElement('span')
const span1 = document.createElement('span')
//class
heads.classList.add('header')
spam.classList.add('date')
span1.classList.add('temp')
//appendchild 
heads.appendChild(spam)
heads.appendChild(titles)
heads.appendChild(span1)
//text content
titles.textContent = title;
spam.textContent = date;
span1.textContent = temp;

return heads;
}


  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //

  const headerAppender = (selector) => {
    const headersDiv = document.querySelector(selector)
    headersDiv.appendChild(Header('Lambda Times', 'January 6, 2021', '26 C'))

    return headersDiv;
}

export { Header, headerAppender }
