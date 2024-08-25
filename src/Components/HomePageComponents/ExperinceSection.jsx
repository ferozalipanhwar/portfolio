import Experience from "./Experience";
const experiences = [
  { title: "Software Developer", description: "Developed web applications using React and Node.js." },
  { title: "UI/UX Designer", description: "Designed user interfaces and user experiences for various projects." },
  { title: "Project Manager", description: "Managed software projects and led development teams." },
];
function ExperinceSection(){

  return<>
    <div>
      <h3 style={{textAlign:'center',fontSize:'3rem'}}>My Experiences</h3>
      <Experience experiences={experiences} />
    </div>
  </>
}
export default ExperinceSection;