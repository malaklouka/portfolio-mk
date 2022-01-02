import About from './about';
import './body.css';
import Contact from './contact/contact';
import Projects from './projects/project';
import Skills from './skills/skill';
import Work from './work/work';


function Body() {
    return (
        <div className="body">
            <section id="about">
                <About />
            </section>
            <section id="projects">
                <Projects />
            </section>
            <section id="skills">
                <Skills />
            </section>
            <section id="work">
                <Work />
            </section>
            <section id="contact">
                <Contact />
            </section>
        </div>
    )
}

export default Body;