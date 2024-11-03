import React,{useRef,useState} from 'react'
import "./Home.css"
// import image from "./pngegg.png"
import myimage1 from "./my-image.jpg"
import flower1 from "./flower-1.jpg"
import project2 from "./project-2.png"
import project3 from "./project-3.png"
import frontendImage from "./passion images/fd-image2.png"
import BackEndImage from "./passion images/bg-image.png"
import database from "./passion images/database1.png"
import problem from "./passion images/problem-solve2.png"
import learning from "./passion images/learning.png"
import creative from "./passion images/creative.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope ,faArrowUp,faBars,faXmark,faLocationDot,faPhone} from '@fortawesome/free-solid-svg-icons'

export default function Home() {
    const[click,setClick]=useState(false)
    const action=()=>{
       setClick(!click)
    }
    let Resume=useRef();
    let passions=useRef();
    let projects=useRef();
    let contact=useRef();
    
    const scrollhandler=(event)=>{
        window.scrollTo({top:event.current.offsetTop,behavior:"smooth"})
     }
  return (
    <div className="parent" >
        <FontAwesomeIcon style={{color:"black"}} id="bar" onClick={action} icon={click? faXmark:faBars}  />
        <div className="child" >
            <ul className={click?"nav-click":"nav-unclick"}>
                <li onClick={()=>scrollhandler(Resume)}><a href="#" >Resume</a></li>
                <li onClick={()=>scrollhandler(passions)}><a href="#">Passiosns</a></li>
                <li onClick={()=>scrollhandler(projects)}><a href="#">Projects</a></li>
                <li onClick={()=>scrollhandler(contact)}><a href="#" id="Contactme">Contact Me</a></li>
            </ul>
             <p id="web-dev">Web Developer</p>
            {/* <div className="img-bg"> <img src={myimage}></img></div> */}
            <div className="img-bg"> <img src={myimage1}></img></div>

             <h1 id="first">Hello,  my name</h1>
             <h1 id="second">is Venkatesh Agraharapu</h1>
             <p id="p1">A web developer is a professional who specializes in developing applications and websites for the internet or an intranet (a private network). </p>
             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,192L30,176C60,160,120,128,180,122.7C240,117,300,139,360,138.7C420,139,480,117,540,106.7C600,96,660,96,720,117.3C780,139,840,181,900,192C960,203,1020,181,1080,154.7C1140,128,1200,96,1260,74.7C1320,53,1380,43,1410,37.3L1440,32L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z" ></path></svg>
             {/* <FontAwesomeIcon icon="fa-solid fa-arrow-up" id="icon" />     */}
                 </div>
        <button id="b1" onClick={()=>scrollhandler(projects)}>Projects</button>
        <button id="b2">Linkdin</button>
       <div style={{position:"fixed"}}><FontAwesomeIcon icon={faArrowUp} id="arrow"></FontAwesomeIcon></div>

        <div className="Projects-title">
            <h1 id="project-name">Projects</h1>
            <i id="line"></i>
        </div>
        <div className="projects" ref={projects}>
            <div className="project-1">
            <h2>Project Name <span>: Flower Project</span></h2>
            <i>Basically, each flower consists of a floral axis upon which are borne the essential organs of reproduction (stamens and pistils) and usually accessory organs (sepals and petals); the latter may serve to both attract pollinating insects and protect the essential organs.</i>
            <a href="https://662d3f5e25ed7e00508aacc9--stellar-piroshki-4fd52f.netlify.app/">View Project</a>

                <img src={flower1}></img>
              
            </div>
            <div className="project-2">
                <h2>Project Name <span>: Task Management</span></h2>
                <i>A task management project involves creating a system or application that helps individuals or teams plan, track, and complete tasks efficiently. These projects can range from simple to-do lists to complex project management tools with features like collaboration, deadlines, priority settings, and progress tracking.</i>
               <img src={project2}></img>
                <a onClick={()=>alert("Ready in  soon")}>View Project</a>
            </div>
            <div className="project-3">
            <h2>Project Name <span>: Creative Bolgs</span></h2>
                <i>A task management project involves creating a system or application that helps individuals or teams plan, track, and complete tasks efficiently. These projects can range from simple to-do lists to complex project management tools with features like collaboration, deadlines, priority settings, and progress tracking.</i>
               <img src={project3}></img>
                <a onClick={()=>alert("Ready in soon")}>View Project</a>
            </div>
        </div>
        <h2 id="h2p" ref={passions}>Passions</h2>
            <i id="h2i" className="line2"></i>
        <div className="passions">
            
            <div className="box-1">
                <img src={frontendImage}></img>
                <h4>Front-End <span id="f1"> Developer</span></h4>
                <p>(Html,Css,JavaScript,React Js)</p>
            </div>
            
            <div className="box-2">
            <img src={BackEndImage}></img>
                <h4>Back-End <span id="f1"> Developer</span></h4>
                <p>(Nodejs)</p>

            </div>
            <div className="box-3">
                <img src={database}></img>
                <h4>DataBase</h4>
                <p>(Mysql)</p>
            </div>

            <div className="box-4">
                <img src={problem}></img>
                <h4>Problem <span id="f1">Solving</span></h4>
                <p>(JavaScript,Java,Python)</p>
            </div>
            <div className="box-5">
                <img src={learning}></img>
                <h4>Learning</h4>
            </div>
            <div className="box-6">
                <img src={creative}></img>
                <h4>Creative</h4>
            </div>

        </div>

         <h2 id="res" ref={Resume}>Resume</h2>
        <div className="Resume">
            
               <h1 id="name">Venkatesh Agraharapu</h1>
               <h3 id="profision">Software developer</h3>
               <ul>
                <li>@venkateshvenkateshv27@gmail.com</li>
                <li> +91 8919977660</li>
                <li><a href="https://www.linkedin.com/in/venkatesh-agraharapu-88112728a/" id="a1">linkdin.com/in/Venkatesh-agraharapu</a></li>
               </ul>

               <h1 id="Education">Education</h1>
               <i></i>
              <p id="bct">Batchelor of Technology</p>
              <b>Ideal Institute of Technology</b>
                <p id="clz">dec 2021-present</p>
                <p id="border"></p>
                <p id="inter">Intermediate</p>
                <b id="college">Pragathi Junior College</b>
                <p id="clz-date">july 2019- may 2021</p>
                <h2>Technical Skills</h2>
                <i id="i2"></i>
                <div className="prog">
                    <h3>Programming</h3>
                     <p>C, C++ , JAVA , PYTHON , JAVA SCRIPT</p>
                    <div className="software">
                       <h3>Software</h3>
                       <p>Git , Vs code</p>
                    </div>
                    <div className="databases"><h3>Databases</h3>
                        <p>MySql</p>
                   </div>
                   <div className="web"><h3>Web Development</h3>
                        <p>HTML, CSS , REACT JS , NODE JS</p>
                   </div>
                   <div className="others"><h3>Others</h3>
                        <p>Data Structures, Algorithms, OOPS,DBMS</p>
                   </div>
                </div>
                <div className="resume-projects">
                   <div className="div-1">
                      <h2 > Projects</h2>
                       <i id="pro-line"> </i>
                       <h3>1.Task Management</h3>
                      <p>used:</p><p>Mern Stack(Mysql,React Js, Express Js,Node Js)</p>
                   </div>
                   <div className="div-2">
                       <h3>2.Blogs</h3>
                      <p>used:</p><p>React Js</p>
                   </div>
                   <div className="div-3">
                       <h3>3.Flower Project</h3>
                      <p>used:</p><p>Front End (HTML,CSS , JS)</p>
                   </div>
                </div>
                <div className="soft-skills">
                    <h2>Soft Skills</h2>
                    <i></i>
                    <ul>
                        <li>Time Management</li>
                        <li>Team Building</li>
                        <li>Research</li>
                        <li>Creativity</li>
                    </ul>
                    <div className="Hobbies">
                        <h2>Hobbies</h2>
                        <i></i>
                        <ul>
                           
                            <li>Watching Anime</li>
                            <li>Listening to Music</li>
                        </ul>

                    </div>

                </div>   
        </div>
        <div className="footer" ref={contact}>
            <div className="icons">
            <FontAwesomeIcon icon={faLocationDot} id="icon" style={{color:'orange'}}></FontAwesomeIcon>
             <FontAwesomeIcon icon={faPhone} id="icon" style={{color:'green'}}></FontAwesomeIcon>
             <FontAwesomeIcon icon={faEnvelope} id="icon" style={{color:'blue'}}></FontAwesomeIcon>
            </div>
             <div className="details">
                <p id="village">Kakinada</p>
                <h2>Andrapradesh,India</h2>
                <p id="phone">+8919977660</p>
                <a>venkateshvenkateshv27@gmail.com</a>
             </div>
             <div className="about">
                <h2>About me</h2>
                <p>I am venkatesh.I have very much intrested in web development .Iam a fast learner and have ability to solve complex problems by myself.</p>
             </div>

        </div>
       
    </div> 
  )
}
