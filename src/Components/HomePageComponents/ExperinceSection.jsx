import Experience from "./Experience";

const experiences = [
  { 
    title: "Software Developer", 
    company: "Tech Solutions Inc.", // Company name add kiya
    date: "2023 - Present",         // Date add ki
    description: "Developed scalable web applications using React, Node.js, and Tailwind CSS. Optimized frontend performance by 40%." 
  },
  { 
    title: "UI/UX Designer", 
    company: "Creative Studio",
    date: "2021 - 2023",
    description: "Designed intuitive user interfaces and user experiences for various mobile and web projects using Figma." 
  },
  { 
    title: "Project Manager", 
    company: "Agile Systems",
    date: "2019 - 2021",
    description: "Managed software projects, led development teams, and ensured timely delivery using Agile methodologies." 
  },
];

function ExperienceSection() {
  return (
    <>
      {/* Note: Maine <h3> tag hata diya hai kyunki 
         'Experience.jsx' ke andar already ek 
         Animated Header maujood hai. 
      */}
      <Experience experiences={experiences} />
    </>
  );
}

export default ExperienceSection;