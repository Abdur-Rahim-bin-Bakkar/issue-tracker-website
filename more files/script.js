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
        html +=  `<span class="badge badge-soft ${label === 'bug'? "badge-error" : label ==='help wanted' ? 'badge-warning': label===   'enhancement'? 'badge-success' : label === 'good first issue' ? 'badge-primary':' badge-info'} " > ${label=== 'bug'? '<img src="./assets/bug.png" alt="">' : label === 'help wanted' ? '<img src="./assets/warning.png" alt="">': label === 'enhancement' ? '<img src="./assets/success.png" alt="">' : ''}  ${label}</span>`
    });

    return html;
}
//faj ldsfds nfoldsi uoguoigho aiofg

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
        <div  onclick="modal(${data.id})" class="cursor-pointer card bg-white py-2  border-t-2 ${data.status === 'open' ? 'border-t-[#00A96E]' : 'border-t-[#A855F7]'}  shadow">
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


document.getElementById("openBtb").addEventListener("click", () => {
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
        <div  onclick="modal(${data.id})"  class="cursor-pointer card bg-white py-2  border-t-2 ${data.status === 'open' ? 'border-t-[#00A96E]' : 'border-t-[#A855F7]'}  shadow">
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
document.getElementById("closeBtn").addEventListener("click", () => {
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
        <div  onclick="modal(${data.id})" class="cursor-pointer card bg-white py-2  border-t-2 ${data.status === 'open' ? 'border-t-[#00A96E]' : 'border-t-[#A855F7]'}  shadow">
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
    loading.classList.add('hidden')
    setNum(ClosedArray.length)
})

document.getElementById("allBtn").addEventListener("click", () => {
    lodeWebsite()
})

document.getElementById("searchBtb").addEventListener("click", () => {
    loading.classList.remove('hidden')
    let count = 0
    // console.log('hocche')
    allContainer.innerHTML = ''
    const search = document.getElementById("search")
    const data = fetch(` https://phi-lab-server.vercel.app/api/v1/lab/issues/search?q=${search.value}`)
        .then(res => res.json())
        .then(datas => {
            datas.data.forEach(data => {
                createLevel(data.labels)
                count++
                setNum(count)

                let date = new Date(data.createdAt)
                let day = date.getDate()
                let month = date.getMonth() + 1;
                let year = date.getFullYear()
                // console.log(day,month,yeat)
                const div = document.createElement("div")
                div.innerHTML = `
        <div  onclick="modal(${data.id})" class="cursor-pointer card bg-white py-2  border-t-2 ${data.status === 'open' ? 'border-t-[#00A96E]' : 'border-t-[#A855F7]'}  shadow">
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
        })
    loading.classList.add('hidden')
})

// onclick = "modal(${data.id})"

async function modal(id) {
    loading.classList.remove('hidden')


    const links = await fetch(`https://phi-lab-server.vercel.app/api/v1/lab/issue/${id}`)
    const data = await links.json()
    let date = new Date(data.data.createdAt)
    let day = date.getDay()
    let month = date.getMonth() + 1;
    let year = date.getFullYear()
    console.log(data.title)
    const modalContent = document.getElementById("modalContent")
    modalContent.innerHTML = `
     <div class="">

                <h1 class="font-bold text-lg">${data.data.title}</h1>

                <div class="flex gap-2 my-3 items-center">
                    ${data.data.status === 'open' ? '<span class="badge badge-success text-white">opened</span>' : '<span class="badge badge-error text-white">Closed</span>'}
                    
                    <p class="text-[#64748B]">. ${data.data.author}</p>
                    <div class="flex items-center"><p id="date" class="text-[#64748B] ">${day}/${month}/${year}</p></div>

                </div>
                <div class="flex gap-3 mb-3">
                    ${createLevel(data.data.labels)}
                </div>
                <p class="text-[#64748B]">${data.data.description}</p>

                <div class="bg-gray-100 p-3 flex my-3 rounded-md">
                    <div class="flex-1">
                        <p class="text-[#64748B]">Assignee:</p>
                        <p class="font-bold">${data.data.assignee}</p>
                    </div>
                    <div class="flex-1">
                        <p class="text-[#64748B]">Priority:</p>
                        <button id="cardtoplevel" class=" font-semibold">${data.data.priority === 'high' ? `<span class="badge badge-error ">${data.data.priority}</span>` : data.data.priority === 'medium' ? `<span  class="badge badge-warning ">${data.data.priority}</span>` : `<span  class="bg-gray-300 rounded-full w-13 block text-gray-500 font-medium">${data.data.priority}</span>`}</button>
                    </div>
                </div>

                <div class="modal-action">
                    <form method="dialog">
                        <!-- if there is a button in form, it will close the modal -->
                        <button class="btn btn-primary">Close</button>
                    </form>
                </div>
            </div>
    
    `
    my_modal_1.showModal()
    // console.log(modalContent)
    loading.classList.add('hidden')

}