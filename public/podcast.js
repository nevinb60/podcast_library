let myLibrary = []

//Podcast constructor
function Podcast(name, host, episode, category, description, mins_l, mins_t,) {
    this.id = crypto.randomUUID()
    this.name = name
    this.host = host
    this.episode = episode
    this.category = category
    this.description = description
    this.mins_l = mins_l
    this.mins_t = mins_t


};

function addTolibrary(podcast) {
    myLibrary.push(podcast);
};

//Removing podcast by name need to switch to id. (create an data-id attribute https://developer.mozilla.org/en-US/docs/Learn_web_development/Howto/Solve_HTML_problems/Use_data_attributes )
function removefromLibrary(id) {

    myLibrary = myLibrary.filter(podcast => podcast.name !== id)


};

//Always remember the 'new' operator
const pod1 = new Podcast(
    "Hubberman Lab",
    "Dr. Andrew Hubberman",
    "EP # 210 Hunger management",
    "Health",
    "The Huberman Lab Podcast,  hosted by Dr. Andrew Huberman, delves into neuroscience, exploring how brain-body connections influence perceptions, behaviors, and health, while providing science-based tools for optimizing mental and physical well-being",
    0,
    120
);

const pod2 = new Podcast(
    "Masters of Scale",
    "Reid Hoffman",
    "EP #250: The Art of Pivoting",
    "Tech",
    "Reid Hoffman discusses strategies for successful business pivots with industry leaders, sharing insights on adaptability and innovation.",
    0,
    45
);

const pod3 = new Podcast(
    "All-In Podcast",
    "Jason Calacanis, Chamath Palihapitiya, David Sacks, David Friedberg",
    "EP #201: Market Trends and Political Insights",
    "Business",
    "The hosts delve into current market trends and political events, offering in-depth analysis and diverse perspectives.",
    0,
    90
);

const pod4 = new Podcast(
    "The Journal.",
    "Ryan Knutson, Kate Linebaugh, Jessica Mendoza",
    "EP #1401: Inside the AI Revolution",
    "Tech",
    "An exploration of the rapid advancements in artificial intelligence and their implications for various industries.",
    0,
    20
);

const pod5 = new Podcast(
    "The Tim Ferriss Show",
    "Tim Ferriss",
    "EP #751: Optimizing Performance with Dr. Peter Attia",
    "Business",
    "Tim Ferriss and Dr. Peter Attia discuss strategies for enhancing physical and mental performance, longevity, and well-being.",
    0,
    120
);


addTolibrary(pod1);
addTolibrary(pod2);
addTolibrary(pod3);
addTolibrary(pod4);
addTolibrary(pod5);

removefromLibrary("Masters of Scale");



//Loop through myLibrary to test imput
for (i = 0; i <= myLibrary.length; i++) {
    console.log(myLibrary[i])
};



