import hseappsProjects from './images/hseapps_projects.PNG'
import schedIcon from './images/project_icons/HSESchedIcon.PNG'
import clubsIcon from './images/project_icons/HSEClubsIcon.png'
import tutoringIcon from './images/project_icons/HSETutorIcon.png'
import courseIcon from './images/project_icons/HSECourseIcon.png'
import lunchIcon from './images/project_icons/HSELunchIcon.png'
import techInfo from './documents/tech_info_for_hhs_1920.pdf'
import apcsp_quotes from './documents/APCSP Quotes.pdf'

//styling
export const section = {
    display:"flex", justifyContent:"space-between", alignItems:"center", margin:"50px 0 100px 0", width:"100%"
}
export const title = {
    fontWeight:"500", fontSize:"20px", color:"#595959"
}


//club and event data
export const clubs = [
    {
        name: "CS Honors Society (CSHS)",
        description: "The Hamilton Southeastern Computer Science Honor Society is a group dedicated to cultivating thriving environments for success in computer science in the school community by encouraging students' enthusiasm, honoring academic excellence, and promoting service. Students promote Computer Science Education to people of all ages, through the use of community outreach, activities, and software development.",
        url: "https://forms.office.com/Pages/ResponsePage.aspx?id=PkZ4tvvZX0eBU43PqJYEffnHQFcnIcJMutucSWJJb6lUMVZRNk0wWTJEMlczRDRaVTJFRkJHU05LWi4u",
        type: 'success'
    },
    {
        name: "Girls Who Code",
        description: "Girls Who Code is a safe and supportive environment of peers and role models where girls learn to see themselves as computer scientists. Learn the concepts of loops, variables, conditionals and functions that form the basis of all programming languages. Work in teams to complete a computer science impact project that solves a real-world problem in your community.",
        url: "https://hseclubs.com/clubs/girls-who-code",
        type: 'warning'
    },
    {
        name: "HSE Hax",
        description: "HSE Hax is a subset of IndianaHax, which is an organization aimed at hosting coding competitions to foster growth in the computer science community within Indiana. These coding competitions encompass both making a project and doing coding problems (that usually require more logic than coding knowledge to solve). During meetings, we prepare for IndianaHax competitions, as well as other competitions such as USACO (national coding olympiad). We do this by working through practice problems, offered by a variety of sources, and working on coding projects in conjunction with Code for Change. We mainly work on websites, but are also delving into areas such as machine learning and app development.",
        url: "https://hseclubs.com/clubs/hse-hax",
        type: 'error'
    },
    {
        name: "HSE Apps",
        description: "A club dedicated to creating student-built software applications and solutions for both students and staff at HSE and elsewhere as well.",
        url: "https://hseclubs.com/clubs/hse-apps",
        type: 'error'
    },
]
export const meetings = [
    {
        day: 25,
        month: 12,
        club: clubs[0],
        time: "2:00pm"
    },
    {
        day: 8,
        month: 12,
        club: clubs[2],
        time: "2:00pm"
    }
]
export const events = [
    // {
    //     name: "EasyCTF",
    //     description: "High School Capture The Flag Hacking Contest - New contests available often",
    //     link: 'https://www.easyctf.com/'
    // },
    {
        name: "Google Code-In",
        description: "Open Source programming activities with prizes - usually in Dec-Jan",
        link: 'https://developers.google.com/open-source/gci/'
    },
    {
        name: "NexTech Coding Competitions",
        description: "NexTech holds numerous programming competitions throughout the year for all skill levels, usually in the Spring and Summer.",
        link: 'https://nextech.org/'
    },
    {
        name: "High School CTF",
        description: "Hacking competition available for high school students in May",
        link : "https://hsctf.com/"
    },
    {
        name: "Google Computer Science Institute",
        description: "A Three week introduction into computer science for graduating high school seniors.",
        link: "https://buildyourfuture.withgoogle.com/programs/computer-science-summer-institute/"
    }
    //EasyCTF seems to not exist anymore...we can add more later.
]
export const otherClubInfo = {
    links: [
        {
            name:"Zoom Meetings",
            link: "https://zoom.us/"
        },
        {
            name:"Other HSE Clubs",
            link: "https://hseclubs.com"
        },
    ],
    description: ""
}


//courses and other learning resources
export const courses = [
    {
        name: "Intro to CS I",
        description: "Intro to Computer Science is a one-semester, beginner level computer science course intended for students in grades 9-10. The class includes block-based programming and problem-solving for students, and the class requires no prior computer science knowlege. \nPrerequisites: None. \nCredits: Fufills business graduation credit.",
        url: "https://hsecourses.netlify.app/course/"
    },
    {
        name: "AP Computer Science Principles (AP CSP)",
        description: "AP Computer Science Principles is an advanced placement, year-long, college-level computer science course aimed at teaching students 5 fundamental concepts of computer science throughout the year: Creative Development, Data, Algorithms and Programming, Computer Systems and Networks, and the Impact of Computing. This course is intended for all college bound students, not just those with a strong interest in computer science, and is inteded for students in grades 9-12.\nPrerequisites: Algebra I. \nCredits: Fufills business graduation credit and counts as 3rd science credit for Core 40 Diploma.",
        url: "https://hsecourses.netlify.app/course/"
    },
    {
        name: "CS I: Programming",
        description: "Computer Science I: Programming is a year-long course that focuses solely on introducing students to programming and teaching students the latest indsutry tools used in the field for grades 9-12. \nPrerequisites: Algebra I.\n Credits: Fufills business graduation credit and counts as 3rd science credit for Core 40 Diploma.",
        url: "https://hsecourses.netlify.app/course/"
    },
    {
        name: "AP Computer Science A (Java) (AP CS A)",
        description: "AP Computer Science A (Java) is an advanced placement, year-long, college-level computer science course that focuses on teaching students Object-Oriented programming through the programming language Java. The classes prepares students for the AP Computer Science A Exam, which tests on concepts such as primitive types, objects, boolean expressions and conditionals, iteration, classes, single and multi-dimensional arrays, ArrayList, inheritance, and recursion. This class is recommended for students grades 10-12 that have taken a computer science course prior. Prerequisites: Computer Science I/AP Computer Science Principles (Subject to instructor approval). Credits: Counts as 3rd science credit for Core 40 Diploma.",
        url: "https://hsecourses.netlify.app/course/"
    },
    {
        name: "CS III: Cybersecurity",
        description: "Computer Science III: Cybersecurity is a year long course inteded to teach students in grades 10-12 about the fundamentals of cybersecurity in the modern world, discussing topics such as security principles, personal security, cryptography, physical security, web security, malicious software, and networking fundamentals.\nPrerequiste: AP CS Principles or Computer Science I. \nCredits: Counts as 3rd science credit for Core 40 Diploma.",
        url: "https://hsecourses.netlify.app/course/"
    },
    {
        name: "CS III: Software Development",
        description: "Computer Science III: Software Development is a year long course intended to help students learn the latest industry tools for web and mobile application development through self-study and collaboration. Students are encouraged to make an application for a client second semester and are expected to study and research the necessary tools for such development themselves. \nPrerequisite: AP Computer Science A (Java). Credits: Counts as 3rd Science Credit for Core 40.",
        url: "https://hsecourses.netlify.app/course/"
    },
    {
        name: "Interactive Media",
        description: "Interactive media is a semester long course for grades 10-12 that emphasizes the development of digitially generated or computer enhanced products using multimedia technologies. Such technologies include: video/audio production; digitial imaging; animation; website design, development, and management. This class also allows students to gain experience in various Adobe Suite applications, such as Illustrator, After Effects, Premiere Pro, Photoshop, etc.\nPrerequisites: None. \nCredits: Elective.",
        url: "https://hsecourses.netlify.app/course/",
    },
    {
        name: "Tech Squad (Cyberroyals Internship)",
        description: "Tech Squad is for students in grades 10-12 who would like to help students and teachers at HSE or elsewhere with their devices and software through general technical support or repairs. Students can join by signing up through the Career Internship application to be placed as an intern at the HSE tech department or in another building.\nPrerequisites: None, however some technical knowledge is expected. \nCredits: Elective."
    },
    {
        name: "Digital Applications and Responsibility (Digital Apps)",
        description: "Digital Applications and Responsibility is a semester long course for students in grades 9-12 to learn how to work with Microsoft products such as powerpoint, word, and excel. Students also learn how to use spreadsheets, present to one another, and collaboration skills. \nPrerequisites: None. \nCredits: Fufills Business graduation credit, dual credit through IU. "
    },
    {
        name: "Ivy Tech - Infomatics & Networking",
        description: "This year-long dual credit course through Ivy Tech offers students in grades 11-12 an opportunity to take 4 dual credit courses at Ivy Tech that are intended to prepare them for the CompTIA A+ and Network+ Certiication exams. Students attend 4 times a week, with a flex on the fifth day, from 12:15-2:15 at Ivy Tech Noblesville with transport provided. \nPrerequistes: CS I. \nCredits: 4 Dual Credits from Ivy Tech."
    },
    {
        name: "Career Internship",
        description: "Career internships can be semester or year-long, and allow for 12th grade students to gain valuable, real-life experience in the computer science field prior to going to college or entering the workforce. Students attend for 1-2 periods, with 2 being recommended for those that have after school commitments. \nPrerequisites: Instructor and Counselor Approval. \nCredits: Elective."
    },
    {
        name: "Advance Career & Technical Ed College Credit",
        description: "This semester long course allows for students in grades 11-12 to gain credits at IUPUI Computing and Informatics classes, with a 50% discount for high school students. Students must be accepted as a high school student through IU, visit the link provided for more details. Prerequisites: Instructor, Counselor, IU Approval. \nCredits: IUPUI Computing and Informatics Credits.",
        url: "https://span.iupui.edu/about-the-program/programs/eligibility/computer-tech-program.html"
    }

   
]
export const recommendations = {
    "CS": [
        {
            name: "Freshman",
            courses: ["English", "Fine Art or World Lang", "Geometry or Algebra II", "PE/Health", "Biology", "World Credit", "AP CSP"]
        },
        {
            name: "Sophomore",
            courses: ["English", "Fine Art or World Lang", "Algebra II/Precalculus", "Elective", "Chemistry", "Computer Science I", "Interactive Media"]
        },
        {
            name: "Junior",
            courses: ["English", "Fine Art or World Lang", "Precalculus/AP Calculus", "US History", "Physics", "CS III: Cybersecurity", "AP Computer Science A"]
        },
        {
            name: "Senior",
            courses: ["English", "AP Calculus/Adv Math", "Government/Economics", "Elective", "Internship", "Internship", "CS III: Software Development"]
        }
    ],
    "IT Support": [
        {
            name: "Freshman",
            courses: ["English", "Fine Art or World Lang", "Algebra I", "PE/Health", "Biology", "World Credit", "Intro to CS/Digital Apps"]
        },
        {
            name: "Sophomore",
            courses: ["English", "Fine Art or World Lang", "Geometry", "ICP or Chemistry", "Elective", "Interactive Media", "Tech Squad"]
        },
        {
            name: "Junior",
            courses: ["English", "Fine Art or World Lang", "Algebra II", "US History", "Ivy Tech Noblesville Infomatics (3 Periods)"]
        },
        {
            name: "Senior",
            courses: ["English", "Precalculus", "Elective", "Government/Economics", "Elective", "Internship", "Internship"]
        }
],
}
export const resources = [
    {
        name: "Udemy",
        description:"Learn from professionals through their courses.",
        link: 'https://udemy.com'
    },
    {
        name: "CyberStart",
        description:"Resource on Cyber Security and other General Programming Knowledge.",
        link: 'https://www.cyberstartamerica.org/'
    },
    {
        name: "W3Schools",
        description:"General Resource for Javascript, HTML, and CSS development.",
        link: 'http://w3schools.com/'
    },
    {
        name: "Leet Code",
        description:"Expansive Resource for all types of programming knowledge.",
        link: 'https://leetcode.com/explore/learn/'
    },
    {
        name: "Code.org",
        description:"Website designed for beginners to learn programming through Javascript.",
        link: 'https://code.org'
    },
    {
        name: "Codecademy",
        description:"Contains resources on specific coding languages and paradigms.",
        link: 'https://codecademy.com'
    }
]



//project info
//The images here are temporary, if you have a logo, put it here instead of the screenshots present.
export const projects = [
    {
        name: "Club Projects",
        projects: [
            {
                name: "HSE Apps",
                description: "Group of students creating applications for HSE.",
                image: hseappsProjects,
                link: "https://hseapps.org/products"
            },
            {
                name: "HSE Clubs",
                description: "Manage, browse, and join clubs in one central place at HSE.",
                image: clubsIcon,
                link: "https://hseapps.org/products/clubs"
            },
            {
                name: "HSE Tutoring",
                description: "Application to help students get tutoring help at HSE.",
                image: tutoringIcon,
                link: "https://hseapps.org/products/tutoring"
            },
            {
                name: "HSE Courses",
                description: "Application to research into the various courses offered at HSE.",
                image: courseIcon,
                link: "https://hseapps.org/products/courses"
            },
        ]
    },
    {
        name: "Class Projects",
        projects: [
            {
                name: "HSE Schedule",
                description: "Application for students to track the schedule at HSE.",
                image: schedIcon,
                link: "https://hseapps.org/products/schedule"
            },
            {
                name: "HSE Lunch",
                description: "Application for students to track the lunch schedule at HSE.",
                image: lunchIcon,
                link: "http://hselunch.herokuapp.com/"
            },
        ]
    },
    // {
    //     name: "Club Projects",
    //     projects: [
    //         {
    //             name: "HSE Apps",
    //             description: "HSE Clubs Description... filler text be like uh oh, but you know i aint usin that lorem stuff cuz that jus looks stipid",
    //             image: hseappsProjects,
    //             link: "https://hseapps.org/products"
    //         },
    //         {
    //             name: "HSE Apps",
    //             description: "HSE Clubs Description... filler text be like uh oh, but you know i aint usin that lorem stuff cuz that jus looks stipid",
    //             image: hseappsProjects,
    //             link: "https://hseapps.org/products"
    //         },
    //         {
    //             name: "HSE Apps",
    //             description: "HSE Clubs Description... filler text be like uh oh, but you know i aint usin that lorem stuff cuz that jus looks stipid",
    //             image: hseappsProjects,
    //             link: "https://hseapps.org/products"
    //         },
    //     ]
    // }
]



//questions
export const questionList = [
    {
        type: "Technology",
        questions: [
            {
                q: "Why take AP Computer Science Principles?",
                a: "Here are several quotes from real students that took AP Computer Science Principles and why thought it was a valuable experience.",
                link: apcsp_quotes
            },
            {
                q: "How do I access my student accounts?",
                a: "Click on the link to the right for more info.  All student email accounts end in @hsestudents.org",
                link: techInfo
            },
            {
                q: "I need help using canvas!",
                a: "Here is a website detailing every feature of canvas, plus help for beginners.",
                link: "https://community.canvaslms.com/t5/Student-Guide/tkb-p/student"
            },
            {
                q: "How do I add my school email to my device?",
                a: "On laptops and desktops be sure to install Office 365 as instructed below.  Then find Outlook in your programs and login with your school email address and password.  You can make a shortcut on your desktop or pin it to the taskbar. For phones and tablets there are 2 ways: You can add your school email to your regular email app on your phone or tablet.  Just go to settings and add an account.  Then select Exchange from the options.  You will then just need to enter your school email address and password. (On Apple devices it may ask for more info like domain, if so just cancel and do it again, we have found it takes 2 times for some reason), or you can also add your school email by getting the Microsoft Outlook App for your device.  Once installed select Get Started then select Exchange.  Enter your school email address, password, and a description of the account for yourself like \"school\".  Click sign in and you are all set.",
            },
            {
                q: "What is Office 365?",
                a: "Office 365 is the web version of Office and is available to all students and staff without installing.  Using Office 365 provides all the sharing and collaboration features similar to Google Drive.  You can access Office 365 at anytime at the link to the right.  Just click on the word Office 365 to get to the home screen at anytime.  All students need to login and setup their email and One Drive on this site in order for installed versions below to work well.",
                link: "login.microsoftonline.com"
            },
            {
                q: "How do I install Office 2016/Office on my device? How do I set up Onedrive?",
                a: "Office 2016 (provided by Office 365) can be installed on 5 different devices per student/staff. For laptops and home desktops, go to login.microsoftonline.com and login in with your school email address and password.  Once logged in there will be an Install Now button.  You should do this at home if possible. For tablets the following apps are recommended, which should be found in your app store: Word, Excel, PowerPoint, OneNote, and OneDrive. To set up Onedrive on laptops and desktops you MUST login to your Office365 account online and set up OneDrive by clicking on the OneDrive icon BEFORE the directions in the link below will work. Once in your OneDrive online, click sync at the top to connect OneDrive to your device like any other drive.  For Mac users, download the OneDrive App from the app store.",
                link: "login.microsoftonline.com"
            },
            //May want to make this one into its own page later, kinda sloppy right now.
        ]
    },
    {
        type: "Tips and Tricks",
        questions: [
            {
                q: "Anti-virus and Malware Programs",
                a: "CCleaner and Malware-Bytes are both great programs that will help clean up your computer and will remove most viruses your computer might have that you may not know about. CCleaner will clear unwanted programs, fewer errors and crashes, and will clear unused files and clutter files making your computer faster and less power hungry. Malware-Bytes will scan your computer and search for potentially unwanted programs and malware, if it finds something you can tell it to quarantine the program and have it removed from your computer. Both of these programs are highly recommended and trusted by the CybeRoyals Tech Squad. Tutorials on how to install these programs can be found on the CyberRoyals Youtube Channel, linked to the right.",
                link: "https://www.youtube.com/channel/UCIvPCv5FimrAd4dt7l5Bhfw"
            },
            {
                q: "Assignment Notebook Replacement - My Homework App",
                a: "Download the MyHomework app for help with managing your homework in all of your classes!  This app works on all devices from phones, to tablets, to laptops, macbooks, and chromebooks.",
            },
        ]
    },
]