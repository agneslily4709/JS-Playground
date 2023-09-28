const projects = [
    {
        projectName: "API Data Displayer",
        github: "https://github.com/AgnesLily2772/JS-Playground/tree/main/APIDataDisplayer",
        deployedURL: "https://api-data-displayer-js-playground.netlify.app/",
        description:"Explore and visualize data from external APIs in an interactive web interface.",
    },
    {
        projectName: "Color Changer",
        github: "https://github.com/AgnesLily2772/JS-Playground/tree/main/ColorChanger",
        deployedURL: "https://color-changer-js-playground.netlify.app/",
        description:"Experiment with vibrant color combinations and see real-time changes with this dynamic tool.",
    },
    {
        projectName: "Count Master",
        github: "https://github.com/AgnesLily2772/JS-Playground/tree/main/CountMaster",
        deployedURL: "https://count-master-js-playground.netlify.app/",
        description:"Effortlessly manage counting tasks and keep track of numbers with Count Master.",
    },
    {
        projectName: "FAQ Page",
        github: "https://github.com/AgnesLily2772/JS-Playground/tree/main/FAQpage",
        deployedURL: "https://faq-page-js-playground.netlify.app/",
        description:"Craft user-friendly FAQ pages with structured content for better user engagement.",
    },
    {
        projectName: "Grocery List",
        github: "https://github.com/AgnesLily2772/JS-Playground/tree/main/GroceryList",
        deployedURL: "https://grocery-list-js-playground.netlify.app/",
        description:"Simplify your shopping experience with a digital grocery list for efficient planning.",
    },
    {
        projectName: "Menu Medley",
        github: "https://github.com/AgnesLily2772/JS-Playground/tree/main/MenuMedley",
        deployedURL: "https://menu-medley-js-playground.netlify.app/",
        description:"Design elegant and responsive menus for websites and applications with ease.",
    },
    {
        projectName: "Image Slider",
        github: "https://github.com/AgnesLily2772/JS-Playground/tree/main/ImageSlider",
        deployedURL: "https://image-slider-js-playground.netlify.app/",
        description:"Showcase your images in a stylish and interactive slider for a captivating user experience.",
    },
    {
        projectName: "Model Popup",
        github: "https://github.com/AgnesLily2772/JS-Playground/tree/main/ModelPopup",
        deployedURL: "https://model-popup-js-playground.netlify.app/",
        description:"Implement attractive modal popups to enhance user interaction on your website.",
    },
    {
        projectName: "Iprem Losum",
        github: "https://github.com/AgnesLily2772/JS-Playground/tree/main/IpremLosum",
        deployedURL: "https://iprem-losum-js-playground.netlify.app/",
        description:"Embark on a unique and intriguing digital journey with 'Iprem Losum.'",
    },
    {
        projectName: "Review Carousal",
        github: "https://github.com/AgnesLily2772/JS-Playground/tree/main/ReviewCarousel",
        deployedURL: "https://review-carousal-js-playground.netlify.app/",
        description:
            "Display user testimonials in an engaging carousel format to build trust.",
    },
    {
        projectName: "RPS Clash",
        github: "https://github.com/AgnesLily2772/JS-Playground/tree/main/RPSClash",
        deployedURL: "https://rps-clash-js-playground.netlify.app/",
        description:"Put a modern twist on the classic Rock-Paper-Scissors game for endless fun.",
    },
    {
        projectName: "Tab Switch",
        github: "https://github.com/AgnesLily2772/JS-Playground/tree/main/TabSwitch",
        deployedURL: "https://tab-switch-js-playground.netlify.app/",
        description:"Enhance website navigation and content organization with intuitive tab switching.",
    },
    {
        projectName: "Tik Tok",
        github: "https://github.com/AgnesLily2772/JS-Playground/tree/main/TikTok",
        deployedURL: "https://tik-tok-js-playground.netlify.app/",
        description:"Create mesmerizing animations and visual effects using the Tik Tok library.",
    },
    {
        projectName: "Video Project",
        github: "https://github.com/AgnesLily2772/JS-Playground/tree/main/VideoProject",
        deployedURL: "https://video-project-js-playground.netlify.app/",
        description:" Explore the world of multimedia with this dynamic video project background.",
    },
    {
        projectName: "Responsive Nav",
        github: "https://github.com/AgnesLily2772/JS-Playground/tree/main/ResponsiveNav",
        deployedURL: "https://responsive-nav-js-playground.netlify.app/",
        description:"A user-friendly web navigation solution designed to adapt seamlessly to different screen sizes.",
    },
];
function createProjectLinks() {
    const projectLinks = document.getElementById("projectLinks");

    projects.forEach((project) => {
        const projectDiv = document.createElement("div");
        projectDiv.className = "project-card";

        const projectName = document.createElement("p");
        projectName.className = "project-name";
        projectName.textContent = project.projectName;

        const deployedURL = document.createElement("a");
        deployedURL.className = "my-button";
        deployedURL.href = project.deployedURL;
        deployedURL.target = "_blank";
        deployedURL.textContent = "Deployed URL";

        const description = document.createElement("p");
        description.textContent = project.description;

        const githubURL = document.createElement("a");
        githubURL.className = "my-button";
        githubURL.href = project.github;
        githubURL.target = "_blank";
        githubURL.textContent = "Github URL";

        projectDiv.append(projectName, description, deployedURL, githubURL);
        projectLinks.appendChild(projectDiv);
    });
}
window.onload = createProjectLinks;