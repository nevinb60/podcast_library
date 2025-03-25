let myLibrary = []
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
    myLibrary.push(podcast);

};


//Removing podcast by name need to switch to id. (create an data-id attribute https://developer.mozilla.org/en-US/docs/Learn_web_development/Howto/Solve_HTML_problems/Use_data_attributes )
function removefromLibrary(id) {

    myLibrary = myLibrary.filter(podcast => podcast.name !== id)


};


function displayPodcast(myLibrary) {
    const display = document.querySelector("#podcast-grid")



    for (i = 0; i < myLibrary.length; i++) {
        const podcastDiv = document.createElement("div")
        const progressBar = document.createElement("div")

        let info = myLibrary[i]

        podcastDiv.classList.add("podcast")
        progressBar.classList.add("progress-bar")



        podcastDiv.innerHTML = `
        <div class='container p-2 flex flex-col '>
        <h2 class='text-xl font-bold text-center  mb-1'>${myLibrary[i].name}</h2>
        <img class="mb-4" src="${myLibrary[i].image}" width="280" height="auto" alt="${myLibrary[i].name}
        ">

          <div class="progress-bar"> 
          <div class= "progress">
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

            podDialog.innerHTML = `
            
            <div class= 'podcast-info'>
            Name: ${myLibrary.name}
            </div>
            
            `





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
    dialog.close()
    for (i = 0; i <= myLibrary.length; i++) {
        console.log(myLibrary[i])
    };
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


//Always remember the 'new' operator
const pod1 = new Podcast(
    "Huberman Lab",
    "Dr. Andrew Huberman",
    "EP # 210 Hunger management",
    "The Huberman Lab Podcast,  hosted by Dr. Andrew Huberman, delves into neuroscience, exploring how brain-body connections influence perceptions, behaviors, and health, while providing science-based tools for optimizing mental and physical well-being",
    0,
    120,
    'photos/huberman.jpeg'


);

const pod2 = new Podcast(
    "Masters of Scale",
    "Reid Hoffman",
    "EP #250: The Art of Pivoting",
    "Reid Hoffman discusses strategies for successful business pivots with industry leaders, sharing insights on adaptability and innovation.",
    0,
    45,
    'photos/master-scale.png'
);

const pod3 = new Podcast(
    "All-In Podcast",
    "Jason Calacanis, Chamath Palihapitiya, David Sacks, David Friedberg",
    "EP #201: Market Trends and Political Insights",
    "The hosts delve into current market trends and political events, offering in-depth analysis and diverse perspectives.",
    0,
    90,
    'photos/all-in.jpeg'
);

const pod4 = new Podcast(
    "The Journal.",
    "Ryan Knutson, Kate Linebaugh, Jessica Mendoza",
    "EP #1401: Inside the AI Revolution",
    "An exploration of the rapid advancements in artificial intelligence and their implications for various industries.",
    0,
    20,
    'photos/thejournal.jpeg'
);

const pod5 = new Podcast(
    "The Tim Ferriss Show",
    "Tim Ferriss",
    "EP #751: Optimizing Performance with Dr. Peter Attia",
    "Tim Ferriss and Dr. Peter Attia discuss strategies for enhancing physical and mental performance, longevity, and well-being.",
    0,
    120,
    'photos/tim-ferris.jpeg'
);


addTolibrary(pod1);
addTolibrary(pod2);
addTolibrary(pod3);
addTolibrary(pod4);
addTolibrary(pod5);
addTolibrary(pod1);
addTolibrary(pod2);
addTolibrary(pod3);
addTolibrary(pod4);
addTolibrary(pod5);






displayPodcast(myLibrary);



//Loop through myLibrary to test imput

