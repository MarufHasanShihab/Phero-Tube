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
    console.log(data)
}

// display single category data



loadCategory()