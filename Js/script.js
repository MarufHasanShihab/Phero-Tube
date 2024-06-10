// load category
const loadCategory = async()=>{
    const res = await fetch('https://openapi.programming-hero.com/api/videos/categories')
    const data = await res.json()
    displayCategory(data.data)
}

// display all category
const displayCategory = (categories)=>{
    const categoriesContainer = document.getElementById("category-container");
    categories.forEach(category => {
        // console.log(category)
        const div = document.createElement("div");
        div.innerHTML = `<button onclick="loadSingleCategoryData('${category.category_id}')" class="btn btn-active btn-ghost">${category.category}</button>
        `
        categoriesContainer.appendChild(div)
    })
}


const loadSingleCategoryData = async(categoryId)=>{
    const res = await fetch(` https://openapi.programming-hero.com/api/videos/category/${categoryId}`)
    const data = await res.json()
    displaySingleCategoryData(data.data)
}

// display single category data
const displaySingleCategoryData = (datas)=>{
    const categoryCardContainer = document.getElementById("category-card-container");
    categoryCardContainer.innerHTML = "";
    datas.forEach(data => {
        console.log(data)
        const categoryCard = document.createElement("div");
        categoryCard.classList = "card card-compact w-[300px] bg-base-100 shadow-xl"
        categoryCard.innerHTML = `
        <figure><img class = "h-[200px]" src="${data.thumbnail}"  /></figure>
        <div class="card-body">
          <div class="flex gap-4">
          <img class="w-10 h-10 rounded-full" src="${data.authors[0].profile_picture}">
          <div>
          <h2 class="card-title">${data.title}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          </div>
          </div>
        </div>
        `
        categoryCardContainer.appendChild(categoryCard)
    })
}


loadCategory()
loadSingleCategoryData(1001)