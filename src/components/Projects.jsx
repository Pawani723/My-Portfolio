export default function Projects(){
    return(
        <section id="projects" className="block">
            <h2>My Projects</h2>

            <div className="project">
                <h3>EcoLot LK</h3>
                <p>
                    Web app for municipal e-waste collection and recycling.
                    Citizens schedule pickups, collectors manage routes, and
                    the council tracks what gets recycled.
                </p>
                <p className="tags">Group project: PHP, MVC, MySQL</p>
                <a href="https://github.com/Vihandu-Nimsara/EcoLot-LK">View on GitHub</a>
            </div>

            <div className="project">
                <h3>NexusEnroll</h3>
                <p>
                    Course enrollment system with separate modules. Students
                    browse and enroll in courses while staff manage offerings.
                </p>
                <p className="tags">Group project: Java, UML</p>
                <a href="https://github.com/MalinkaSamarasinha/Nexus_Enroll">View on GitHub</a>
            </div>

            
        </section>
    )
}
