let myLibrary = [new Podcast(
    "Huberman Lab",
    "Dr. Andrew Huberman",
    "EP # 210 Hunger management",
    "The Huberman Lab Podcast,  hosted by Dr. Andrew Huberman, delves into neuroscience, exploring how brain-body connections influence perceptions, behaviors, and health, while providing science-based tools for optimizing mental and physical well-being",
    10,
    120,
    'photos/huberman.jpeg'


),
new Podcast(
    "Masters of Scale",
    "Reid Hoffman",
    "EP #250: The Art of Pivoting",
    "Reid Hoffman discusses strategies for successful business pivots with industry leaders, sharing insights on adaptability and innovation.",
    7,
    45,
    'photos/master-scale.png'
),
new Podcast(
    "All-In Podcast",
    "Jason Calacanis, Chamath Palihapitiya, David Sacks, David Friedberg",
    "EP #201: Market Trends and Political Insights",
    "The hosts delve into current market trends and political events, offering in-depth analysis and diverse perspectives.",
    77,
    90,
    'photos/all-in.jpeg'
),
new Podcast(
    "The Journal.",
    "Ryan Knutson, Kate Linebaugh, Jessica Mendoza",
    "EP #1401: Inside the AI Revolution",
    "An exploration of the rapid advancements in artificial intelligence and their implications for various industries.",
    12,
    20,
    'photos/thejournal.jpeg'
),
new Podcast(
    "The Tim Ferriss Show",
    "Tim Ferriss",
    "EP #751: Optimizing Performance with Dr. Peter Attia",
    "Tim Ferriss and Dr. Peter Attia discuss strategies for enhancing physical and mental performance, longevity, and well-being.",
    0,
    120,
    'photos/tim-ferris.jpeg'
),
new Podcast(
    "Huberman Lab",
    "Dr. Andrew Huberman",
    "EP # 210 Hunger management",
    "The Huberman Lab Podcast,  hosted by Dr. Andrew Huberman, delves into neuroscience, exploring how brain-body connections influence perceptions, behaviors, and health, while providing science-based tools for optimizing mental and physical well-being",
    50,
    120,
    'photos/huberman.jpeg'


),
new Podcast(
    "Masters of Scale",
    "Reid Hoffman",
    "EP #250: The Art of Pivoting",
    "Reid Hoffman discusses strategies for successful business pivots with industry leaders, sharing insights on adaptability and innovation.",
    45,
    45,
    'photos/master-scale.png'
),
new Podcast(
    "All-In Podcast",
    "Jason Calacanis, Chamath Palihapitiya, David Sacks, David Friedberg",
    "EP #201: Market Trends and Political Insights",
    "The hosts delve into current market trends and political events, offering in-depth analysis and diverse perspectives.",
    75,
    90,
    'photos/all-in.jpeg'
),
new Podcast(
    "The Journal.",
    "Ryan Knutson, Kate Linebaugh, Jessica Mendoza",
    "EP #1401: Inside the AI Revolution",
    "An exploration of the rapid advancements in artificial intelligence and their implications for various industries.",
    7,
    20,
    'photos/thejournal.jpeg'
),
new Podcast(
    "The Tim Ferriss Show",
    "Tim Ferriss",
    "EP #751: Optimizing Performance with Dr. Peter Attia",
    "Tim Ferriss and Dr. Peter Attia discuss strategies for enhancing physical and mental performance, longevity, and well-being.",
    60,
    120,
    'photos/tim-ferris.jpeg'
)

];
const addPod = document.getElementById('add-pod')
const dialog = document.querySelector("dialog");
const closeBtn = document.getElementById('close-btn')
const submitBtn = document.getElementById('form-submit')




//Podcast constructor
function Podcast(name, host, episode, description, mins_l, mins_t, image) {
    this.id = crypto.randomUUID()
    this.name = name
    if (host) {
        this.host = host
    }

    if (episode) {
        this.episode = episode

    }

    if (description) {
        this.description = description

    }

    this.mins_l = mins_l
    this.mins_t = mins_t


    if (image) {

        this.image = image

    }


}

function addTolibrary(podcast) {
    myLibrary.unshift(podcast)

};


//Removing podcast by name need to switch to id. (create an data-id attribute https://developer.mozilla.org/en-US/docs/Learn_web_development/Howto/Solve_HTML_problems/Use_data_attributes )
function removefromLibrary(id) {

    myLibrary = myLibrary.filter(podcast => podcast.id !== id)
    document.querySelector('#podcast-grid').innerHTML = ''
    displayPodcast(myLibrary)
    console.log(id)


};


function displayPodcast(myLibrary) {
    const display = document.querySelector("#podcast-grid")
    display.innerHTML = ''



    for (i = 0; i < myLibrary.length; i++) {
        const podcastDiv = document.createElement("div")
        const progressBar = document.createElement("div")

        const info = myLibrary[i]

        podcastDiv.classList.add("podcast")
        const progressRatio = info.mins_t > 0 ? info.mins_l / info.mins_t : 0
        const progressWidth = progressRatio * 275




        podcastDiv.innerHTML = `
        <div class='container p-2 flex flex-col '>
        <h2 class='text-xl font-bold text-center  mb-1'>${myLibrary[i].name}</h2>
        <img class="mb-4" src="${myLibrary[i].image}" width="280" height="auto" alt="${myLibrary[i].name}
        ">

          <div class="progress-bar"> 
          <div class="progress" style="width: ${progressWidth}px;"></div>
          </div>
        </div>

        </div>


        `

        display.appendChild(podcastDiv)

        //Click to display podcast content
        podcastDiv.addEventListener('click', () => {
            const podDialog = document.createElement("dialog")
            const podInfo = document.createElement("div")


            podInfo.classList.add("podcast-info")
            podDialog.classList.add("podcast-dialog")



            const closeDialog = document.createElement('button');
            closeDialog.classList.add('close-dialog')
            closeDialog.textContent = 'x'
            closeDialog.addEventListener("click", () => {
                podDialog.close()
                podDialog.remove()
            });

            const removePod = document.createElement('button')
            removePod.classList.add('remove-btn')
            removePod.textContent = 'Remove podcast'
            removePod.addEventListener('click', () => {

                removefromLibrary(info.id)
                podDialog.close()
                podDialog.remove()

                console.log(myLibrary.length)
            })



            podInfo.innerHTML = `
            
        
            <h2 class='font-bold text-3xl'> ${info.name}</h2>
            <br>
            <p> <strong>Host: </strong>${info.host}</p>
            <br>
            <p> <strong>Description: </strong> ${info.description}</p>
            <br>
            <p><strong>${info.mins_l}</strong> minutes listened out of <strong>${info.mins_t}</strong> minutes total</p>
            

            `


            podDialog.appendChild(closeDialog)
            podDialog.appendChild(podInfo)
            podDialog.appendChild(removePod)


            document.body.appendChild(podDialog)

            podDialog.showModal()





        })





    }





}



//need to figure out how to clear form data when 'submitted' and then also make the new podcast[0]
submitBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const podTitle = document.getElementById('pod-title').value
    const podHost = document.getElementById('host').value
    const podEpisode = document.getElementById('episode').value
    const podDescr = document.getElementById('description').value
    const podListened = document.getElementById('listened').value
    const podTotal = document.getElementById('total-mins').value
    const podImage = document.getElementById('image-url').value

    newPod = new Podcast(podTitle, podHost, podEpisode, podDescr, podListened, podTotal, podImage)

    addTolibrary(newPod)
    document.getElementById('podcast-input').reset()
    dialog.close()
    displayPodcast(myLibrary)
})

//Close dialog
closeBtn.addEventListener("click", () => {
    dialog.close()
})

//Generate form when button is clicked

addPod.addEventListener("click", () => {
    dialog.showModal();
})

displayPodcast(myLibrary);



//Loop through myLibrary to test imput

