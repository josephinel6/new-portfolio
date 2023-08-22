import "./indexpage.css"

export default function IndexPage() {
    return (
        <div className="page-block">
            <div id="top-block">
                <div id="top-left">
                    <img id="profile-img" src="./src/assets/profile.jpg" />
                    <div id="intro-text"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In nulla posuere sollicitudin aliquam ultrices sagittis orci a. Risus at ultrices mi tempus imperdiet. Eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada. </div>
                </div>
                <div id="vertical-line" />
                <div id="top-right">

                </div>
            </div>
            <div id="projects-block">
                <h3 id="projects-heading"> Some of my projects: </h3>
                <button id="view-more-projects"> View More </button>
                <div id="projects-list">
                    Nothing yet to see here. Visit <a href="https://josephinel6.github.io/projects" >https://josephinel6.github.io/projects</a> (also broken) for more.
                </div>
            </div>
        </div >
    )

}