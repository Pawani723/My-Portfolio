export default function About(){
    return(
        <div>
            <section className="hero">
                <img className="photo" src="/profile.jpeg" alt="Portrait of Pawani" />
                <div className="hero-text">
                    <h1>Hello! I'm Pawani Gamage</h1>
                    <p>
                        A second-year CS undergraduate at the University of Colombo
                        School of Computing, looking for internship opportunities. I enjoy turning ideas into working software. 
                    </p>
                </div>
            </section>

            <section id="about" className="block">
                <h2>About me</h2>
                <p className="about-text">
                    I'm a second-year Computer Science undergraduate at the
                    University of Colombo School of Computing (UCSC). I'm passionate about learning new things, exploring different areas of technology, and working on new projects.
                </p>
                <p className="about-text">
                    Beyond academics, I'm one of the Team Leads of the Membership Team at the CSSL GenZ Chapter of UCSC. I'm also an active member of the Rotaract Club, Dancing Society, Media Unit, and the University of Colombo Hockey Team.
                    I enjoy being part of different communities, taking on new challenges, working with people, and gaining experiences that help me grow both personally and professionally.
                </p>
            </section>
        </div>
    )
}