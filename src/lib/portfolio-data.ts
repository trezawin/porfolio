import { Mail, Github, Linkedin } from "lucide-react";

export const PROFILE = {
  name: "Treza Bawm Win",
  location: "Paris, France",
  email: "treza.win@gmail.com",
  blurb: `Hi there !
I'm an engineer; data and AI enthusiast who loves turning ideas into real-world substainable intelligent systems. After more than a decade building travel-tech solutions at Amadeus Airport IT, in 2024 I decided to deepen my data and analytics skills at ESCP Paris. 
These days I'm exploring how data and AI can make technology smarter and more trustworthy like building LLM-powered tools for digital finance auditing. 
I'm always curious, learning, and excited about what data can do next.`,
  introHighlights: [],
  languages: [
    { name: "English", level: "C1" },
    { name: "French", level: "A2" },
    { name: "Korean", level: "A2" },
    { name: "Burmese", level: "Native" },
  ],
  headshot: "/profile-pic.jpeg",
  socials: [
    { label: "GitHub", href: "https://github.com/trezawin", icon: Github },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/treza-bawm-win-b0991545/",
      icon: Linkedin,
    },
    { label: "Email", href: "mailto:treza.win@gmail.com", icon: Mail },
  ],
};

export const SKILL_GROUPS = [
  {
    title: "AI & Data Science",
    items: [
      "LLMs",
      "Machine Learning",
      "LangChain",
      "NLP",
      "Pandas",
      "Scikit-learn",
      "NumPy",
      "Data Analytics",
      "Tableau",
      "Snowflake Cortex",
    ],
  },
  {
    title: "Languages & Core",
    items: ["Java", "Python", "SQL", "JS", "TypeScript", "OOP"],
  },
  {
    title: "Backend & Platforms",
    items: ["REST APIs", "FastAPI", "Oracle DB", "Docker", "Git", "Maven", "CI/CD", "Linux", "Jenkins"],
  },
  {
    title: "Engineering Practice & Delivery",
    items: [
      "Design Patterns",
      "DS & Algorithms",
      "Smart-contract Auditing",
      "Scrum Master",
      "Team Leadership",
      "Agile / Scrum",
      "Jira",
      "Confluence",
    ],
  },
  {
    title: "Tools & Libraries",
    items: [
      "Pandas",
      "NumPy",
      "scikit-learn",
      "Plotly",
      "Jupyter",
      "VS Code",
      "IntelliJ IDEA",
      "Dataiku",
      "Tableau",
    ],
  },
];

export const EXPERIENCE = [
  {
    company: "APM Creative Digital",
    role: "AI Engineer Intern",
    period: "Sep 2025 — Present",
    location: "Paris, France",
    summary:
      "Applying LLMs with static analysis to support smart-contract auditing and compliance for real-world-asset (RWA) contracts.",
    details: [
      "Applied LLMs to support compliance auditing of smart contracts in regulated finance.",
      "Designed and implemented a hybrid AI framework for auditing contracts and built evaluation pipelines and benchmarked LLM-generated outputs against expert-reviewed compliance rules.",
      "Developed a RAG solution to enhance the accuracy and coverage of rule extraction from legal texts.",
      "Supported research for a Master’s thesis on AI-augmented auditing in tokenized finance.",
    ],
  },
  {
    company: "Amadeus GDS PTE LTD",
    role: "Senior System Analyst",
    period: "May 2022 — Sep 2024",
    location: "Singapore",
    summary:
      "Led development on multi-airports message center and improved security/compliance posture across products.",
    details: [
      "Delivered analytics to optimize high-volume airport message flows and enable instant airport switching.",
      "Drove Blackduck & Fortify remediation program, cutting license risk by >50% and reducing downtime by ~30%.",
      "Collaborated with cross-functional teams; created dashboards and runbooks to standardize incident response.",
    ],
  },
  {
    company: "Amadeus IT Group",
    role: "Software Development Engineer",
    period: "Nov 2018 — Apr 2022",
    location: "Nice, France",
    summary:
      "Built airport resource management capabilities with rules and optimization aligned to business KPIs.",
    details: [
      "Implemented Drools rule engine to prioritize operations against airport SLAs and KPI thresholds.",
      "Developed services in Java with REST integrations; improved test coverage and CI reliability.",
      "Partnered with operations teams to validate rules against real-world scenarios and performance constraints.",
    ],
  },
  {
    company: "Amadeus GDS PTE LTD",
    role: "System Analyst",
    period: "Aug 2012 — Oct 2018",
    location: "Singapore",
    summary:
      "Delivered optimization and backend services for airport operations and supported UAT for major customers.",
    details: [
      "Built fixed-resource optimization using OptaPlanner; tuned constraints to balance throughput vs. cost.",
      "Developed Java server-side apps with REST, JMS, ActiveMQ, and EJB across distributed environments.",
      "Supported UAT for Changi Airport; coordinated triage and defect resolutions with stakeholders.",
    ],
  },
];

export const PROJECTS = [
  {
    title: "Compliance Rule Author RAG",
    blurb:
      "RAG pipeline to extract enforceable obligations from HKMA AMLO (Cap. 615) and align them to ERC-3643 concepts; hybrid retrieval, prompt assembly, and an API for rule authoring.",
    problem:
      "Legal and compliance teams need a systematic way to turn dense regulation (HKMA AMLO) into machine-readable rules that can be applied to ERC-3643 token contracts.",
    solution:
      "Designed a RAG pipeline that segments legal text, retrieves relevant passages, and assembles prompts so LLMs can propose candidate rules aligned with ERC-3643 entities and events.",
    impact:
      "Reduces manual effort required for first-draft rule authoring and creates a reproducible path from regulation text to compliance checks.",
    tags: ["RAG", "LLMs", "Python", "FastAPI", "BM25", "OpenAI"],
    url: "https://github.com/trezawin/ComplianceRuleAuthor-RAG",
    accent: "#22c55e",
  },
  {
    title: "AI Augmented Smart-Contract Audit",
    blurb:
      "Hybrid LLM + static analysis workflow to audit RWA contracts and align with Hong Kong compliance; dataset prep and evaluation pipelines for model benchmarking.",
    problem:
      "Auditing real-world-asset (RWA) smart contracts against local regulations is slow and error-prone when done purely manually.",
    solution:
      "Combined static analysis with LLM-based reasoning and a curated dataset to highlight potential non-compliance and support auditors with explainable findings.",
    impact:
      "Improves coverage and consistency of contract reviews and supports a research thesis on AI-augmented auditing.",
    tags: ["LLMs", "Static Analysis", "Python", "Smart Contract", "Node.js", "TypeScript"],
    url: "https://github.com/trezawin/smartContract_ERC3643_staticAnalysis",
    accent: "#6366f1",
  },
  {
    title: "Winning the Space Race with Data Science",
    blurb:
      "Satellite launch analytics project exploring NASA, SpaceX, and ISRO missions with end-to-end data preparation, visualization, and insights.",
    problem:
      "Space-launch data is fragmented across sources, making it hard to compare agencies, launch vehicles, and mission success over time.",
    solution:
      "Consolidated data from multiple sources, engineered features, and built interactive plots to explore launch frequency, success rate, and geography.",
    impact:
      "Provides a data-driven narrative around how different players are evolving in the modern space race.",
    tags: [],
    skills: [
      "Web Scraping",
      "Data Analysis",
      "Machine Learning Methods",
      "Data-Driven Decision-Making",
      "Plotly",
      "Data Collection",
      "Data Presentation",
      "EDA",
      "Pandas",
      "Predictive Modeling",
      "Statistical Modeling",
      "Data Wrangling",
    ],
    tools: [
      "SQL",
      "Python",
      "Sklearn",
      "Folium Lab",
      "Plotly",
      "GitHub",
      "Powerpoint",
    ],
    url: "https://github.com/trezawin/Winning-space-race-with-data-science",
    accent: "#0ea5e9",
  },
  {
    title: "TripAdvisor Restaurant Text Mining",
    blurb:
      "Natural language processing pipeline for TripAdvisor reviews to uncover cuisine trends, sentiments, and city-level dining insights.",
    problem:
      "Travelers and restaurant owners lack an aggregated view of dining trends and customer sentiment across a city.",
    solution:
      "Scraped and cleaned TripAdvisor reviews, applied NLP techniques for topic discovery and sentiment analysis, and visualized results by cuisine and location.",
    impact:
      "Surfaces actionable insights on what diners care about most, helping prioritize improvements and marketing messages.",
    tags: ["NLP", "Python", "EDA"],
    url: "https://github.com/trezawin/NLP-TextMining_TripAdvisor-RestaurantExploration",
    accent: "#f59e0b",
  },
  {
    title: "Multi-Airports Message Center",
    blurb:
      "High traffic and multi-airports message management application with analytics to optimize flows and instant airport switching.",
    problem:
      "Airports and airlines need reliable, low-latency messaging to coordinate operations across multiple airports, with high resilience to failures.",
    solution:
      "Contributed to backend services and analytics that route, monitor, and analyze high-volume operational messages with multi-airport awareness.",
    impact:
      "Improved observability and flexibility of airport operations, enabling faster incident response and smoother scaling to new airports.",
    tags: ["Java Spring", "Analytics", "Scrum", "Architecture Design"],
    accent: "#10b981",
  },
  {
    title: "Security Scanning Tooling",
    blurb:
      "Led Blackduck & Fortify tooling to resolve security/compliance issues and cut license risk by >50%.",
    problem:
      "Legacy products accumulated open-source and security risks that were not systematically tracked or remediated.",
    solution:
      "Rolled out and integrated Blackduck and Fortify scanning into the CI pipeline, defined remediation plans, and coordinated with teams to fix findings.",
    impact:
      "Cut license and security risk by more than half and established an ongoing process for keeping products compliant.",
    tags: ["Security", "DevEx", "Leadership", "Blackduck", "Fortify", "Jira", "Confluence"],
    accent: "#ef4444",
  },
  {
    title: "Airport Resource Optimization",
    blurb:
      "Drools rule engine and optimization for airport resources, aligning operations to business KPIs.",
    problem:
      "Airports must allocate limited gates and resources to flights while balancing cost, SLAs, and operational constraints.",
    solution:
      "Implemented Drools-based business rules and optimization logic using OptaPlanner to simulate and choose better allocation plans.",
    impact:
      "Helped operations teams reason about trade-offs and improve terminal and gate utilisation against defined KPIs.",
    tags: ["Java Spring", "Drools", "Optimization", "OptaPlanner", "ActiveMQ", "SQL", "REST APIs", "Oracle DB", "Scrum", "Bitbucket", "Jira"],
    accent: "#8b5cf6",
  },
];

export const EDUCATION = [
  {
    school: "ESCP Business School",
    degree: "M.Sc. in Big Data & Business Analytics - GPA 3.7/4",
    period: "Oct 2024 — Jun 2025",
    location: "Paris, France/Berlin, Germany",
    details: [
      "Machine Learning, NLP, Forecasting, BI dashboards, Data Mining, Business Strategy, Big Data ecosystems",
      "Capstone & coursework spanning data engineering, EDA, ML, and business strategy",
      "Tools: Python, SQL, Pandas, Scikit-learn, BigQuery, Tableau, Snowflake, Jupyter, Colab",
    ],
  },
  {
    school: "National University of Singapore",
    degree: "Master of Technology in Software Engineering (dropout)",
    period: "2017 — 2018",
    location: "Singapore",
    details: [
      "Focused on software architecture, cloud computing, and distributed systems",
      "Withdrew early to accept a full-time industry opportunity.",
    ],
  },
  {
    school: "National University of Singapore — Institute of Systems Science",
    degree: "Graduate Diploma in Systems Analysis - GPA 4.5/5",
    period: "2011 — 2012",
    location: "Singapore",
    details: [
      "Structured software engineering, systems analysis, and development lifecycle",
      "Agile methodologies, project management, and quality assurance",
    ],
  },
  {
    school: "University of Computer Studies, Yangon",
    degree: "Bachelor of Computer Science (B.C.Sc., Honours)",
    period: "2005 — 2009",
    location: "Yangon, Myanmar",
    details: [
      "Foundations in algorithms, data structures, databases, and software engineering",
    ],
  },
];

export const CERTIFICATIONS = [
  {
    title: "IBM Data Science Professional Certificate",
    issuer: "IBM · Coursera",
    issued: "Sep 2025",
    credentialId: "OFSN8C654LX5",
    credentialUrl:
      "https://www.coursera.org/account/accomplishments/professional-cert/OFSN8C654LX5",
  },
  {
    title: "Algorithmic Toolbox",
    issuer: "Coursera",
    issued: "Jan 2020",
    credentialId: "RQRVB2Z4BAQG",
    credentialUrl:
      "https://www.coursera.org/account/accomplishments/certificate/RQRVB2Z4BAQG",
  },
];

export const ACHIEVEMENTS = [
  {
    title: "Criteo Hackathon Group Project Winner",
    period: "Feb 2025",
    description:
      "Developed a semantic embedding engine that delivered crisp clustering and an intuitive visual explorer, reinventing how Criteo maps brand connectivity.",
    tags: ["Python", "Machine Learning", "Word2Vec", "Pandas", "Plotly"],
  },
];
