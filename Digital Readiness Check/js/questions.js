const bank = `{ 
    "questions" : 
        [{  "comp_id" : 0,
            "area" : "Information and data literacy",
            "comp" : "Browsing, searching and filtering data, information and digital content",
            "desc" : "To articulate information needs, to search for data, information and content in digital environments, to access and navigate between them. To create and update personal search strategies.",
            "shadow" : 0
        },
         {
            "comp_id" : 0,
            "area" : "Information and data literacy",
            "comp" : "Evaluating data, information and digital content",
            "desc" : "To analyse, compare and critically evaluate the credibility and reliability of sources of data, information and digital content. To analyse, interpret and critically evaluate the data, information and digital content.",
            "shadow" : 0
        },
         {
             "comp_id" : 0,
             "area" : "Information and data literacy",
             "comp" : "Managing data, information and digital content",
             "desc" : "To organise, store and retrieve data, information and content in digital environments. To organise and process them in a structured environment.",
             "shadow" : 0
         },
         {
             "comp_id" : 1,
             "area" : "Communication and collaboration",
             "comp" : "Interacting through digital technologies",
             "desc" : "To interact through a variety of digital technologies and to understand appropriate digital communication means for a given context.",
             "shadow" : 1
         },
         {
             "comp_id" : 1,
             "area" : "Communication and collaboration",
             "comp" : "Sharing through digital technologies",
             "desc" : "To share data, information and digital content with others through appropriate digital technologies. To act as an intermediary, to know about referencing and attribution practices.",
             "shadow" : 1
         },
         {
             "comp_id" : 1,
             "area" : "Communication and collaboration",
             "comp" : "Engaging in citizenship through digital technologies",
             "desc" : "To participate in society through the use of public and private digital services. To seek opportunities for self-empowerment and for participatory citizenship through appropriate digital technologies.",
             "shadow" : 1
         },
         {
             "comp_id" : 1,
             "area" : "Communication and collaboration",
             "comp" : "Collaborating through digital technologies",
             "desc" : "To use digital tools and technologies for collaborative processes, and for co-construction and co-creation of resources and knowledge.",
             "shadow" : 1
         },
         {
           "comp_id" : 1,
           "area" : "Communication and collaboration",
           "comp" : "Netiquette",
           "desc" : "To be aware of behavioural norms and know-how while using digital technologies and interacting in digital environments. To adapt communication strategies to the specific audience and to be aware of cultural and generational diversity in digital environments.",
           "shadow" : 1
        },
         {
             "comp_id" : 1,
             "area" : "Communication and collaboration",
             "comp" : "Managing digital identity",
             "desc" : "To create and manage one or multiple digital identities, to be able to protect one's own reputation, to deal with the data that one produces through several digital tools, environments and services.",
             "shadow" : 1
        },
         {
             "comp_id" : 2,
             "area" : "Digital content creation",
             "comp" : "Developing digital content",
             "desc" : "To create and edit digital content in different formats, to express oneself through digital means.",
             "shadow" : 2
        },
         {
             "comp_id" : 2,
             "area" : "Digital content creation",
             "comp" : "Integrating and re-elaboraring digital content",
             "desc" : "To modify, refine, improve and integrate information and content into an existing body of knowledge to create new, original and relevant content and knowledge.",
             "shadow" : 2
        },
         {
             "comp_id" : 2,
             "area" : "Digital content creation",
             "comp" : "Copyright and licenses",
             "desc" : "To understand how copyright and licences apply to data, information and digital content.",
             "shadow" : 2
         },
         {
             "comp_id" : 2,
             "area" : "Digital content creation",
             "comp" : "Programming",
             "desc" : "To plan and develop a sequence of understandable instructions for a computing system to solve a given problem or perform a specific task.",
             "shadow" : 2
         },
         {
             "comp_id" : 3,
             "area" : "Safety",
             "comp" : "Protecting devices",
             "desc" : "To protect devices and digital content, and to understand risks and threats in digital environments. To know about safety and security measures and to have due regard to reliability and privacy.",
             "shadow" : 3
        },
         {
             "comp_id" : 3,
             "area" : "Safety",
             "comp" : "Protecting personal data and privacy",
             "desc" : "To protect personal data and privacy in digital environments. To understand how to use and share personally identifiable information while being able to protect oneself and others from damages. To understand that digital services use a “Privacy policy” to inform how personal data is used.",
             "shadow" : 3
        },
         {
             "comp_id" : 3,
             "area" : "Safety",
             "comp" : "Protecting health and well-being",
             "desc" : "To be able to avoid health-risks and threats to physical and psychological well-being while using digital technologies. To be able to protect oneself and others from possible dangers in digital environments (e.g. cyber bullying). To be aware of digital technologies for social well-being and social inclusion.",
             "shadow" : 3
        },
         {
             "comp_id" : 3,
             "area" : "Safety",
             "comp" : "Protecting the environment",
             "desc" : "To be aware of the environmental impact of digital technologies and their use.",
             "shadow" : 3
        },
        {
             "comp_id" : 4,
             "area" : "Problem solving",
             "comp" : "Solving technical problems",
             "desc" : "To identify technical problems when operating devices and using digital environments, and to solve them (from trouble-shooting to solving more complex problems).",
             "shadow" : 4
            },
         {
             "comp_id" : 4,
             "area" : "Problem solving",
             "comp" : "Identifying needs and technological responses",
             "desc" : "To assess needs and to identify, evaluate, select and use digital tools and possible technological responses to solve them. To adjust and customise digital environments to personal needs (e.g. accessibility).",
             "shadow" : 4
         },
         {
             "comp_id" : 4,
             "area" : "Problem solving",
             "comp" : "Creatively using digital technologies",
             "desc" : "To use digital tools and technologies to create knowledge and to innovate processes and products. To engage individually and collectively in cognitive processing to understand and resolve conceptual problems and problem situations in digital environments.",
             "shadow" : 4
         },
         {
             "comp_id" : 4,
             "area" : "Problem solving",
             "comp" : "Identifying digital competence gaps",
             "desc" : "To understand where one’s own digital competence needs to be improved or updated. To be able to support others with their digital competence development. To seek opportunities for self-development and to keep up-to-date with the digital evolution.",
             "shadow" : 4
         },
         {
             "comp_id" : 5,
             "area" : "IT knowledge background",
             "comp" : "Software development life cycles and agile methods",
             "desc" : "To produce high-quality software in a systematic and cost-effective way with the help of the SDLC framework. To use agile methods for having a faster development approach and speeding up the development process in an effective and efficient manner.",
             "shadow" : 5
         },
         {
             "comp_id" : 5,
             "area" : "IT knowledge background",
             "comp" : "IT quality assurance",
             "desc" : "To improve the software development process and make it efficient and effective as per the quality standards defined for software products.",
             "shadow" : 5
         },
         {
             "comp_id" : 5,
             "area" : "IT knowledge background",
             "comp" : "IT security",
             "desc" : "To know how to prevent unauthorized access to organizational assets such as computers, networks and data. To maintain the integrity and confidentiality of sensitive information, blocking the access of anyone with malicious intentions.",
             "shadow" : 5
         },
         {
             "comp_id" : 5,
             "area" : "IT knowledge background",
             "comp" : "System and software architecture",
             "desc" : "To understand the fundamental structures of a software system and the discipline of creating such structures and systems.",
             "shadow" : 5
         },
         {
             "comp_id" : 5,
             "area" : "IT knowledge background",
             "comp" : "Basic concepts of Cloud computing",
             "desc" : "To know what is the cloud, how cloud computing works, its basic characteristics(e.g broad network access, rapid elasticity, resource pooling), its service models(e.g IaaS, PaaS, SaaS), its types(e.g public, private, hybrid) and the benefits of using it for your business.",
             "shadow" : 5
         },
         {
             "comp_id" : 5,
             "area" : "IT knowledge background",
             "comp" : "Basic concepts of Internet Of Things",
             "desc" : "To know what the Internet Of Things(IoT) is about, to acknowledge its 4 basic pillars(people, data, process and things) and its general impact in the world.",
             "shadow" : 5
         },
         {
             "comp_id" : 5,
             "area" : "IT knowledge background",
             "comp" : "Basic concepts of Data Analytics",
             "desc" : "To know which processes Data Analytics uses to draw conclusions about the information a dataset contains. To acknowledge the basic skills needed for data analytics. For example problem solving, methodical and logical approach, accuracy and attention to detail, the ability to analyze, model and interpret data, high level of mathematical ability.",
             "shadow" : 5
         },
         {
             "comp_id" : 5,
             "area" : "IT knowledge background",
             "comp" : "Introduction to Artificial Intelligence",
             "desc" : "To know what’s the definition of Artificial Intelligence, the types of Artificial Intelligence that exist, what behaviors does Artificial Intelligence include that associate to human intelligence and how to approach or tackle a problem with Artificial Intelligence.",
             "shadow" : 5
         },
         {
             "comp_id" : 5,
             "area" : "IT knowledge background",
             "comp" : "Introduction to ITIL",
             "desc" : "To know what the ITIL framework is used for, what does it have in common with the ITSM(IT Service Management) and its five volumes.",
             "shadow" : 5
         },
         {
            "comp_id" : 6,
            "area" : "Advanced software development and operation skills",
            "comp" : "DevOps basic concepts (culture and practices)",
            "desc" : "To understand the basic concept of DevOps, to effectively apply good practices that combine software development and IT operations, to have a basic idea of what a DevOps engineer does.",
            "shadow" : 6
        },
         {
             "comp_id" : 6,
             "area" : "Advanced software development and operation skills",
             "comp" : "Repository management",
             "desc" : "To effectively manage local and remote repositories. To know how a repository manager works.",
             "shadow" : 6
         },
         {
             "comp_id" : 6,
             "area" : "Advanced software development and operation skills",
             "comp" : "Continuous integration",
             "desc" : "To automatically integrate the code changes from multiple contributors into a single software project. To frequently merge code changes into a central repository where builds and tests then run.",
             "shadow" : 6
         },
         {
             "comp_id" : 6,
             "area" : "Advanced software development and operation skills",
             "comp" : "Configuration management",
             "desc" : "To maintain a computer system, server or software in a desired, consistent state. To make sure that a system performs as it is expected to as changes are made over time.",
             "shadow" : 6
         },
         {
             "comp_id" : 6,
             "area" : "Advanced software development and operation skills",
             "comp" : "Using build, deployment and monitoring tools",
             "desc" : "To effectively use build, deployment and monitoring tools such as Bamboo, TeamCity, Octopus Deploy, Electric Flow, AWS CodeDeploy while developing.",
             "shadow" : 6
         },
         {
             "comp_id" : 6,
             "area" : "Advanced software development and operation skills",
             "comp" : "Continuous testing tools",
             "desc" : "To effectively use continuous testing tools such as Selenium, Appium, Eggplant, Katalon Studio. To evaluate the quality of software at every step of the Continuous Delivery Process by testing early and testing often.",
             "shadow" : 6
    }]
}`