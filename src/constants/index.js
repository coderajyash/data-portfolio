// ---------------------------------------------------------------------------
// All site content lives here. Edit text in this file; components only render it.
// ---------------------------------------------------------------------------

export const PROFILE = {
  name: "Yash Raj Singh",
  role: "Data & Analytics Engineer",
  availability: "Based in the Netherlands (Full right to work)",
  github: "https://github.com/coderajyash",
  linkedin: "https://www.linkedin.com/in/yashrajsingh15",
  // Served from /public — replace the PDF there to update it.
  resume: "/Yash-Raj-Singh-Resume.pdf",
};

export const HERO = {
  // Words wrapped in *asterisks* are highlighted in lime.
  headlineTop: "Raw data in.",
  headlineBottom: "*Reliable* insight out.",
  subline:
    "Data & analytics engineer building lakehouse pipelines with SQL, PySpark and Databricks, and using AI to automate the manual work around them.",
};

// Labels under the animated data streams in the hero (first and last show on phones)
export const HERO_STAGES = ["Messy sources", "Ingest", "Clean", "Model", "Trusted insight"];

export const ABOUT = [
  "I'm a data and analytics engineer with 18 months at IndiaMART, India's largest online B2B marketplace. There I analysed large-scale search data with SQL, Python and PySpark, built the summary tables that product and data science teams used to make decisions, and prepared the training data behind the search team's NLP models.",
  "Today I build medallion lakehouses on Databricks, model data into clean star schemas for reporting, and use AI where it removes manual work, from private RAG tools to reviewing AI-generated analyses against detailed rubrics.",
];

export const ABOUT_FACTS = [
  { label: "Focus", value: "Data & analytics engineering" },
  { label: "Core stack", value: "Python · SQL · Databricks" },
  { label: "Location", value: "Netherlands · India" },
  { label: "Education", value: "MSc Computer Science (Merit), QMUL" },
];

// Toolkit, grouped the way data hiring managers scan for it.
export const SKILL_GROUPS = [
  {
    title: "Data engineering",
    blurb: "Batch pipelines on Spark with a bronze, silver and gold layout.",
    featured: true,
    skills: [
      "SQL",
      "PySpark",
      "Spark SQL",
      "Delta Lake",
      "ETL / ELT",
      "Medallion architecture",
      "Incremental loading",
      "Azure Databricks",
    ],
  },
  {
    title: "Analytics engineering",
    blurb: "Modelling data people can query and trust.",
    skills: ["Star schema modelling", "SQL transformations", "Databricks SQL", "Power BI", "Excel"],
  },
  {
    title: "Orchestration & quality",
    blurb: "Scheduled, tested, version-controlled.",
    skills: ["Lakeflow Jobs", "GitHub Actions", "Asset Bundles", "SQL data tests", "Git"],
  },
  {
    title: "Python for data",
    blurb: "Cleaning, scraping and wrangling at scale.",
    skills: ["Pandas", "NumPy", "BeautifulSoup", "Selenium", "REST APIs", "Data cleaning"],
  },
  {
    title: "AI for automation",
    blurb: "LLMs where they save real hours.",
    skills: ["RAG", "LangChain", "Hugging Face", "Qdrant", "Ollama", "LLM output evaluation", "Claude Code"],
  },
  {
    title: "Machine learning",
    blurb: "From features to evaluated models.",
    skills: ["Scikit-learn", "Regression", "Classification", "Feature engineering", "NER", "Model evaluation"],
  },
  {
    title: "Databases & cloud",
    blurb: "Where the data lives.",
    skills: ["Microsoft Azure", "PostgreSQL", "Cassandra", "Elasticsearch", "Docker"],
  },
];

export const EXPERIENCES = [
  {
    year: "May 2026 – Present",
    role: "AI Model Evaluator",
    company: "Mercor",
    location: "Contract · Remote",
    points: [
      "Evaluate AI-generated slide decks for data-analyst and data-engineering tasks, checking that charts, figures and conclusions are supported by the underlying data and clearly explained for a business audience.",
      "Score model responses against detailed rubrics and write up failures such as factual errors, flawed reasoning and ignored instructions; these judgements feed training and evaluation datasets.",
      "Reviewed 100+ submissions to date.",
    ],
    technologies: ["Data analysis review", "LLM evaluation", "Rubric scoring"],
  },
  {
    year: "Jul 2025 – Apr 2026",
    role: "AI Model Evaluator",
    company: "Outlier AI",
    location: "Contract · Remote",
    points: [
      "Reviewed AI-generated slides and written answers for data-analysis and engineering tasks for accuracy, sound reasoning and instruction-following, across 50+ tasks.",
      "Applied detailed scoring rubrics consistently, so my marks matched other reviewers on the same work.",
    ],
    technologies: ["SQL & Python review", "LLM evaluation", "Quality assurance"],
  },
  {
    year: "Mar 2022 – Sep 2023",
    role: "Software Engineer, Big Data",
    company: "IndiaMART",
    location: "Delhi, India",
    highlight: "Named a Top Performer for the year",
    points: [
      "Analysed buyer search data with Pandas and Spark SQL to find problem areas such as zero-result searches, and built summary Delta tables so product and data science teams could track trends themselves.",
      "Cleaned and normalised raw search queries with Python and PySpark, handling Hinglish, transliterated and misspelt text and removing duplicates, so the query classification model received consistent, accurate data.",
      "Built Python scrapers (BeautifulSoup, Selenium) that collected 500,000+ bilingual records used as training data for the search team's NLP models.",
      "Worked on a caching layer (RabbitMQ, Cassandra) for frequently classified queries that cut search response times by about 40%.",
    ],
    technologies: ["PySpark", "Spark SQL", "Delta Lake", "Pandas", "Python", "Cassandra"],
  },
];

// The featured data engineering project shown at the top of Projects.
// TODO: set `link` to the project's GitHub repo URL once it's public.
export const FEATURED_PROJECT = {
  title: "NL Energy Lakehouse",
  status: "In progress",
  category: "Data & Analytics Engineering",
  link: "https://github.com/coderajyash",
  summary:
    "End-to-end lakehouse on Dutch electricity data: day-ahead prices, demand and generation every 15 minutes, joined with weather history, landed in Databricks and served in Power BI.",
  points: [
    "Scheduled ingestion from the Energy-Charts and Open-Meteo APIs with GitHub Actions.",
    "Bronze and silver layers in PySpark on Delta tables; gold layer as plain, reviewable SQL models.",
    "Zero-row SQL data tests guard every gold model; CI/CD deploys jobs with Databricks Asset Bundles.",
    "Power BI report for daily updates in the findings connected to the gold tables on Databricks.",
  ],
  flow: ["Energy-Charts + Open-Meteo APIs", "Bronze · raw Delta", "Silver · cleaned PySpark", "Gold · SQL models", "Power BI"],
  technologies: ["Databricks", "PySpark", "Delta Lake", "SQL", "Power BI", "GitHub Actions", "LLM"],
};

// Set `link` to null for projects without a public page.
export const PROJECTS = [
  {
    title: "Formula 1 Lakehouse on Azure Databricks",
    category: "Data Engineering · Course project",
    link: null,
    points: [
      "Built a bronze, silver and gold pipeline with incremental loads into a star schema.",
      "Orchestrated as 15+ dependent scheduled tasks.",
      "Databricks SQL dashboards on the final gold tables.",
    ],
    technologies: ["PySpark", "Delta Lake", "Databricks SQL", "Star schema"],
  },
  {
    title: "Local Document Chat: Private PDF Q&A",
    category: "AI Automation · RAG",
    link: "https://github.com/coderajyash/RAG-pdf-chat",
    points: [
      "Fully local retrieval-augmented generation tool that answers plain-English questions about long PDFs such as policy documents and manuals.",
      "Answers are grounded only in retrieved document text, so sensitive data never leaves the machine and no paid API is needed.",
      "Pipeline covers ingestion, chunking, embedding, vector search and generation with LangChain.",
    ],
    technologies: ["Python", "LangChain", "Qdrant", "Ollama", "Hugging Face"],
  },
  {
    title: "Search Ranking for Fashion eCommerce",
    category: "Machine Learning · MSc project",
    link: "https://github.com/coderajyash/Msc-Project",
    points: [
      "Trained a logistic regression model on hand-built features to rank products.",
      "Used an NER model to turn search queries into brand, category and attribute filters, so searches returned fewer but more relevant results.",
      "Indexed and filtered products in Elasticsearch.",
    ],
    technologies: ["Python", "Scikit-learn", "NER", "Elasticsearch"],
  },
  {
    title: "AI Handwritten Maths Solver",
    category: "Applied AI",
    link: "https://github.com/coderajyash/calc-fe",
    points: [
      "Reads hand-drawn equations from a canvas and solves them with Google's Gemini model.",
      "Handles algebra and physics-style word problems end to end.",
    ],
    technologies: ["Gemini", "Python", "React"],
  },
];

export const EDUCATIONS = [
  {
    year: "Sep 2023 – Sep 2024",
    degree: "MSc Computer Science",
    university: "Queen Mary University of London",
    grade: "Merit",
    coursework: ["Machine Learning", "Data Analytics", "Database Design", "System Design"],
  },
  {
    year: "Aug 2018 – May 2022",
    degree: "B.Tech Information Technology",
    university: "JSS Academy of Technical Education",
    grade: "Distinction",
    coursework: ["Database Management", "Data Structures", "Algorithms", "Computer Networks"],
  },
];

export const CERTIFICATIONS = [
  {
    title: "Associate Data Engineer",
    provider: "DataCamp",
    link: "https://www.datacamp.com/completed/statement-of-accomplishment/track/4a4fd049711b9d62b665a2476b99fea899f10e3f",
    tags: ["Data pipelines", "Data warehousing"],
  },
  {
    title: "Claude Code in Action",
    provider: "Anthropic",
    link: "https://verify.skilljar.com/c/2jnqrbcxpswr",
    tags: ["Agentic AI", "Automation"],
  },
  {
    title: "Machine Learning with Python",
    provider: "IBM · Coursera",
    link: "https://coursera.org/share/65b6c912935f854adcac6f7042e77292",
    tags: ["Regression", "Model evaluation"],
  },
];

export const CONTACT = {
  location: "Netherlands",
  numbers: ["+44 7407 842367"],
  email: "yashrajsingh.nl@gmail.com",
};

export const NAV_LINKS = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];
