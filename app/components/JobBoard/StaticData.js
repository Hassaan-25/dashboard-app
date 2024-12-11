import companyLogo1 from "../../../assets/teams.svg";

const jobCards = [
  {
    id: 1,
    title: "Frontend Developer",
    location: "Seattle, USA (Remote)",
    type: "Full-time",
    category: "Frontend",
    company: "TechCorp",
    applicants: 15,
    posted: "2 days ago",
    logo: companyLogo1,
    promoted: true,
  },
  {
    id: 2,
    title: "Backend Developer",
    location: "San Francisco, USA (Remote)",
    type: "Part-time",
    category: "Backend",
    company: "DevWorks",
    applicants: 20,
    posted: "3 days ago",
    logo: companyLogo1,
    promoted: true,
  },
  {
    id: 3,
    title: "Graphic Designer",
    location: "Pakistan, Lahore (Onsite)",
    type: "Full-time",
    category: "Graphic Designer",
    company: "DesignPro",
    applicants: 25,
    posted: "1 day ago",
    logo: companyLogo1,
    promoted: true,
  },

  {
    id: 4,
    title: "Frontend Developer",
    location: "Pakistan, Karachi (Onsite)",
    type: "Part-Time",
    category: "Frontend",
    company: "Teams",
    applicants: 32,
    posted: "2 days ago",
    logo: companyLogo1,
    promoted: true,
  },
  // Add more mock data as needed
];

const recommendedJobs = [
  {
    id: 101,
    title: "Graphic Designer",
    location: "Pakistan, Lahore (Onsite)",
    type: "Full-time",
    category: "Graphic Designer",
    company: "DesignPro",
    applicants: 25,
    posted: "1 day ago",
    logo: companyLogo1,
    promoted: false,
  },

  {
    id: 102,
    title: "Backend Developer",
    location: "San Francisco, USA (Remote)",
    type: "Part-time",
    category: "Backend",
    company: "DevWorks",
    applicants: 20,
    posted: "3 days ago",
    logo: companyLogo1,
    promoted: false,
  },

  {
    id: 103,
    title: "Frontend Developer",
    location: "Seattle, USA (Remote)",
    type: "Full-time",
    category: "Frontend",
    company: "DevSinc",
    applicants: 15,
    posted: "2 days ago",
    logo: companyLogo1,
    promoted: false,
  },

  {
    id: 104,
    title: "Frontend Developer",
    location: "Pakistan, Karachi (Onsite)",
    type: "Part-Time",
    category: "Frontend",
    company: "Teams",
    applicants: 32,
    posted: "2 days ago",
    logo: companyLogo1,
    promoted: false,
  },

  // Add more jobs here...
];

export { jobCards, recommendedJobs };
