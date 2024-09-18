"use client";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaFigma,
  FaPhp
} from "react-icons/fa";

import {
 SiTailwindcss, SiNextdotjs
} from "react-icons/si";

// About data 
const about = {
  title: "About me", 
  description: "I am a full stack developer with a passion for building scalable and efficient applications.",
  info: [
    {
      fieldname: "Name",
      fieldvalue: "Huzaifa Gulzar",
    },
    {
      fieldname: "Phone",
      fieldvalue: "(+92) 304 6902667",
    },
    {
      fieldname: "Experience",
      fieldvalue: "1+ years",
    },
    {
      fieldname: "LinkedIn",
      fieldvalue: "huzaifa-gulzar-6715l",
    },
    {
      fieldname: "Email",
      fieldvalue: "huzaifa6715@gmail.com",
    },
    {
      fieldname: "Freelance",
      fieldvalue: "Available",
    },
    {
      fieldname: "Language",
      fieldvalue: "English, Urdu",
    },
    {
      fieldname: "Nationality",
      fieldvalue: "Pakistani",
    },
  ]
};

// Experience data 

const experience = {
  icon : '/assets/resume/badge.svg',
  title: "My Experience",
  description: "I have worked on various projects and have gained experience in building scalable and efficient applications",
  items : [
    {
      company : "Tech Solutions Inc.",
      position: 'Full Stack Developer',
      duration: '2023 - Present',
    },
    {
      company : "Web Design Studio",
      position: 'Front End Developer Intrn',
      duration: 'Summer 2023',
    },
    {
      company : "E-Commerce Startup",
      position: 'Freelance Web Developer',
      duration: '2023 - 2024',
    },
    {
      company : "Pakistan Institute",
      position: 'Teaching Assistance',
      duration: '2022 - 2023',
    },
    {
      company : "Software Developer Firm",
      position: 'Junior Developer',
      duration: '2022 - 2023',
    },
  ] 
}

// Education data 

const education = {
  icon : '/assets/resume/cap.svg',
  title: "My Education",
  description: "I have worked on various projects and have gained experience in building scalable and efficient applications",
  items : [
    {
      institution : "Pakistan Institute of Science & Arts",
      degree: 'BS Information Technology',
      duration: '2020 - 2024',
    },
    {
      institution : "Punjab College Vehari",
      degree: 'Fsc Pre-Engineering',
      duration: '2017 - 2019',
    },
    {
      institution : "Online Course Plateform",
      degree: 'Web development',
      duration: '2023 - 2024',
    },
    
  ] 
}

// Skill data 
const skills = [
  {
    title : 'My Skills',
    description: 'I have worked on various projects and have gained experience in building scalable and efficient applications',
    skillList : [
      {
        icon: <FaHtml5 />,
        title: 'HTML5',
      },
      {
        icon: <FaCss3 />,
        title: 'CSS3',
      },
      {
        icon: <FaJs />,
        title: 'Javascript',
      },
      {
        icon: <FaReact />,
        title: 'React.js',
      },
      {
        icon: <SiNextdotjs />,
        title: 'Next.js',
      },
      {
        icon: <SiTailwindcss />,
        title: 'Tailwind.css',
      },
      {
        icon: <FaNodeJs />,
        title: 'Node.js',
      },
      {
        icon: <FaFigma />,
        title: 'Figma',
      },
    ]
  },

];

import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";
import {ScrollArea} from "@/components/ui/scroll-area";
import {motion} from "framer-motion";


function Resume() {
  return (
    <motion.div 
      initial = {{opacity : 0}} 
      animate = {{opacity:1, transition :{delay :2.4, duration: 0.4, ease : 'easeIn'}}}

      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
      >
        <div className="container mx-auto">
          <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
            <TabsList className ="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0">
              <TabsTrigger value ="experience">Experience</TabsTrigger>
              <TabsTrigger value ="education">Education</TabsTrigger>
              <TabsTrigger value ="skills">Skills</TabsTrigger>
              <TabsTrigger value ="about">About me</TabsTrigger>
            </TabsList>
            {/* Experience  */}
             <TabsContent value = "experience" className ="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item,index)=>{
                      return (
                        <li key={index} 
                            className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
             </TabsContent>
             {/* Education  */}
             <TabsContent value = "education" className ="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item,index)=>{
                      return (
                        <li key={index} 
                            className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
             </TabsContent>
             {/* skills  */}
             <TabsContent value="skills" className="w-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills[0].title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills[0].description}</p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-4">
                  {skills[0].skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.title}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
             {/* content  */}
             <TabsContent value = "about" className ="w-full text-center xl:text-left">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) =>{
                    return(
                      <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                        <span className="text-white/60">{item.fieldname}</span>
                        <span className="text-xl">{item.fieldvalue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
             </TabsContent>
          </Tabs>
        </div>
    </motion.div>
  )
}

export default Resume
