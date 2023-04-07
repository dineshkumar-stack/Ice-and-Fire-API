var search_submit = document.querySelector('.d-flex')
search_submit.addEventListener('submit', (e) => {
  e.preventDefault()
  var display = document.getElementById('container')
  display.innerHTML = ""
  var search = document.querySelector('[placeholder="Search by number 1-10"]')
  var search_value = search.value
  api(search_value)

  var display = document.getElementById('container')

})

async function api(data) {
  v = fetch(`https://anapioficeandfire.com/api/books/${data}`)
  out = await v
  prom = out.json()
  res = await prom
  var display = document.getElementById('container')
  console.log(res)

  var image_ele = document.createElement('div')
  //Here insert the html code to display
  image_ele.innerHTML = `
        <div class="card" id="single">
  <div class="card-header"><h2>${res.name}</h2>
  <p class="country">${res.mediaType}</p>
    <small>${res.authors[0]}</small>
    <p class="country">${res.country}</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item"><label>ISBN :</label> ${res.isbn}</li>
    <li class="list-group-item"><label>Publisher :</label> ${res.publisher}</li>
    <li class="list-group-item"><label>Pages :</label> ${res.numberOfPages}</li>
    <li class="list-group-item"><label>Released :</label> ${res.released}</li>
  </ul>
</div>`
  display.appendChild(image_ele);

}









async function api1() {
  v1 = fetch(`https://anapioficeandfire.com/api/books/`)
  out1 = await v1
  prom1 = out1.json()
  res1 = await prom1






  for (let i = 0; i <= 11; i++) {

    var display = document.getElementById('container')
    var image_ele = document.createElement('div')

    image_ele.innerHTML = `
        <div class="card" class="d-flex flex-row mb-3">
  <div class="card-header"><h2>${res1[i].name}</h2>
  <p class="country">${res1[i].mediaType}</p>
    <small>${res1[i].authors[0]}</small>
    <p class="country">${res1[i].country}</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item"><label>ISBN :</label> ${res1[i].isbn}</li>
    <li class="list-group-item"><label>Publisher :</label> ${res1[i].publisher}</li>
    <li class="list-group-item"><label>Publisher :</label> ${res1[i].publisher}</li>
    <li class="list-group-item"><label>Pages :</label> ${res1[i].numberOfPages}</li>
    <li class="list-group-item"><label>Released :</label> ${res1[i].released}</li>
  </ul>
</div>`
    display.appendChild(image_ele);


    async function api3() {
      v1 = fetch(`${res1[i].characters[0]}`)
      out1 = await v1
      prom1 = out1.json()
      res3 = await prom1
    
      for (let i = 0; i <= 1; i++) {
        console.log(res3)
      }

    }
    api3()
  













  }
}

api1()
