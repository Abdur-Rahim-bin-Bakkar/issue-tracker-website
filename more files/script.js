function tabFun(e) {
    let tabs = document.querySelectorAll(".change");
    tabs.forEach(tabI => {
        tabI.classList.remove('btn-primary')
    })
    document.getElementById(e).classList.add('btn-primary')
}
function setNum(num) {
    const count = document.getElementById("count")
    count.innerText = num;
}
const loading = document.getElementById('loading')
const allContainer = document.getElementById("allContainer")

let openAray = []
let ClosedArray = []
function createLevel(labels) {
    let html = "";

    labels.forEach(label => {
        html += `<span class="badge badge-soft ${label === 'bug' ? 'badge-error' : label === 'help wanted' ? 'badge-warning' : label === 'good first issue' ? 'badge-success' : 'badge-primary'}">${label}</span>`
    });

    return html;
}

async function lodeWebsite() {
    allContainer.innerHTML = ''
    loading.classList.remove('hidden')
    const apiData = await fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues")
    const apiDataJson = await apiData.json()
    openAray = apiDataJson.data.filter(i => i.status === 'open')
    ClosedArray = apiDataJson.data.filter(i => i.status !== 'open')
    console.log(ClosedArray.length)
    apiDataJson.data.forEach(data => {
    createLevel(data.labels)

        // console.log(data)

        let date = new Date(data.createdAt)
        let day = date.getDay()
        let month = date.getMonth() + 1;
        let year = date.getFullYear()
        // console.log(day,month,yeat)
        const div = document.createElement("div")
        div.innerHTML = `
        <div class="card bg-white py-2  border-t-2 ${data.status === 'open' ? 'border-t-[#00A96E]' : 'border-t-[#A855F7]'}  shadow">
                <div class="p-6">
                    <div class="flex justify-between">
                        <figure id="cardImage">
                            ${data.status === 'open' ? '<img src="./assets/Open-Status.png" alt="">' : '<img src="./assets/Closed- Status .png" alt="">'}
                          
                        </figure>
                        <button id="cardtoplevel" class=" font-semibold">${data.priority === 'high' ? `<span class="badge badge-error badge-soft">${data.priority}</span>` : data.priority === 'medium' ? `<span  class="badge badge-warning badge-soft">${data.priority}</span>` : `<span  class="bg-gray-100 rounded-full w-13 block text-gray-500 font-medium">${data.priority}</span>`}</button>
                    </div>
                    <h3 title="${data.title}" id="cardTitle" class="font-bold mt-4 line-clamp-1">${data.title}</h3>
                    <p id="carddescription" title="${data.description}" class="text-[#64748B] mt-3 line-clamp-2">${data.description}
                    </p>
                    <div id="levesContainer${data.id}" class="flex gap-3 my-4">

                       ${createLevel(data.labels)}
                        
                    </div>
                </div>
                <hr class="text-gray-200 border">
                <div class="p-6">
                    <p id="athorName" class="text-[#64748B] mt-3">${data.author}</p>
                    <p id="date" class="text-[#64748B] mt-3">${day}/${month}/${year}</p>
                </div>
            </div>
        
        `
        allContainer.append(div)
    })
    // console.log(allContainer.children)
    setNum(allContainer.children.length)

    loading.classList.add('hidden')
}
lodeWebsite()


document.getElementById("openBtb").addEventListener("click",()=>{
    loading.classList.remove('hidden')
    allContainer.innerHTML = ''
    openAray.forEach(data => {
    createLevel(data.labels)

        // console.log(data)

        let date = new Date(data.createdAt)
        let day = date.getDate()
        let month = date.getMonth() + 1;
        let year = date.getFullYear()
        // console.log(day,month,yeat)
        const div = document.createElement("div")
        div.innerHTML = `
        <div class="card bg-white py-2  border-t-2 ${data.status === 'open' ? 'border-t-[#00A96E]' : 'border-t-[#A855F7]'}  shadow">
                <div class="p-6">
                    <div class="flex justify-between">
                        <figure id="cardImage">
                            ${data.status === 'open' ? '<img src="./assets/Open-Status.png" alt="">' : '<img src="./assets/Closed- Status .png" alt="">'}
                          
                        </figure>
                        <button id="cardtoplevel" class=" font-semibold">${data.priority === 'high' ? `<span class="badge badge-error badge-soft">${data.priority}</span>` : data.priority === 'medium' ? `<span  class="badge badge-warning badge-soft">${data.priority}</span>` : `<span  class="bg-gray-100 rounded-full w-13 block text-gray-500 font-medium">${data.priority}</span>`}</button>
                    </div>
                    <h3 title="${data.title}" id="cardTitle" class="font-bold mt-4 line-clamp-1">${data.title}</h3>
                    <p id="carddescription" title="${data.description}" class="text-[#64748B] mt-3 line-clamp-2">${data.description}
                    </p>
                    <div id="levesContainer${data.id}" class="flex gap-3 my-4">

                       ${createLevel(data.labels)}
                        
                    </div>
                </div>
                <hr class="text-gray-200 border">
                <div class="p-6">
                    <p id="athorName" class="text-[#64748B] mt-3">${data.author}</p>
                    <p id="date" class="text-[#64748B] mt-3">${day}/${month}/${year}</p>
                </div>
            </div>
        
        `
        allContainer.append(div)
    })
    setNum(openAray.length)
    // loading.classList.add('hidden')
    loading.classList.add('hidden')
})
document.getElementById("closeBtn").addEventListener("click",()=>{
    // loading.classList.remove("hidden")
    loading.classList.remove('hidden')
    allContainer.innerHTML = ''
    ClosedArray.forEach(data => {
    createLevel(data.labels)

        // console.log(data)

        let date = new Date(data.createdAt)
        let day = date.getDate()
        let month = date.getMonth() + 1;
        let year = date.getFullYear()
        // console.log(day,month,yeat)
        const div = document.createElement("div")
        div.innerHTML = `
        <div class="card bg-white py-2  border-t-2 ${data.status === 'open' ? 'border-t-[#00A96E]' : 'border-t-[#A855F7]'}  shadow">
                <div class="p-6">
                    <div class="flex justify-between">
                        <figure id="cardImage">
                            ${data.status === 'open' ? '<img src="./assets/Open-Status.png" alt="">' : '<img src="./assets/Closed- Status .png" alt="">'}
                          
                        </figure>
                        <button id="cardtoplevel" class=" font-semibold">${data.priority === 'high' ? `<span class="badge badge-error badge-soft">${data.priority}</span>` : data.priority === 'medium' ? `<span  class="badge badge-warning badge-soft">${data.priority}</span>` : `<span  class="bg-gray-100 rounded-full w-13 block text-gray-500 font-medium">${data.priority}</span>`}</button>
                    </div>
                    <h3 title="${data.title}" id="cardTitle" class="font-bold mt-4 line-clamp-1">${data.title}</h3>
                    <p id="carddescription" title="${data.description}" class="text-[#64748B] mt-3 line-clamp-2">${data.description}
                    </p>
                    <div id="levesContainer${data.id}" class="flex gap-3 my-4">

                       ${createLevel(data.labels)}
                        
                    </div>
                </div>
                <hr class="text-gray-200 border">
                <div class="p-6">
                    <p id="athorName" class="text-[#64748B] mt-3">${data.author}</p>
                    <p id="date" class="text-[#64748B] mt-3">${day}/${month}/${year}</p>
                </div>
            </div>
        
        `
        allContainer.append(div)
    })
    setNum(ClosedArray.length)
    loading.classList.add('hidden')
})

document.getElementById("allBtn").addEventListener("click",()=>{
    lodeWebsite()
})