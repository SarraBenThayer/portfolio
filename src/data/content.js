// All site content lives here, in English and French.
// To update the portfolio, edit this file — no layout code needs to change.

export const profile = {
  name: 'Sarra Ben Thayer',
  email: 'sarrabenthayer@gmail.com',
  phone: '+216 92 709 949',
  phoneHref: 'tel:+21692709949',
  linkedin: 'https://www.linkedin.com/in/sarra-ben-thayer-43956b295/',
  github: '', // TODO: add GitHub URL
  avatar: '/avatar.png', // round picture at the top of the intro (shows "SB" while empty)
  photo: '/photo.webp', // picture for the About section (transparent cut-out)
  // Free key from https://web3forms.com (enter sarrabenthayer@gmail.com there).
  // Messages sent through the contact form are delivered to that inbox.
  // While empty, the form falls back to opening the visitor's mail app.
  web3formsKey: '38944cc7-da35-4de3-a437-acfa2595848a',
  cv: {
    en: '/cv/CV_SarraBenThayer_DataEng.pdf',
    fr: '/cv/CV_SarraBenThayer_DataEng-FR.pdf',
  },
}

export const content = {
  en: {
    nav: {
      about: 'About',
      experience: 'Experience',
      projects: 'Projects',
      skills: 'Skills',
      education: 'Education',
      activities: 'Activities',
      resume: 'Resume',
      contact: 'Contact',
    },
    hero: {
      greeting: "Hi, I'm Sarra Ben Thayer",
      headlineStart: 'I build data pipelines and turn raw data into',
      headlineHighlight: 'decisions!',
      intro:
        'Data Engineering & Decision Systems Engineer specializing in data pipelines, real-time streaming and AI-powered data systems.',
      title: 'Data Engineering & Decision Systems Engineer',
      location: 'Tunis, Tunisia',
      ctaContact: 'Get in touch',
      ctaCv: 'Download CV',
      experienceWith: 'Experience with',
    },
    about: {
      title: 'About me',
      text: 'A Data Engineering graduate with hands-on experience in data pipeline design, database systems, and data modeling, gained through academic projects and internships. Diligent and detail-oriented, with a genuine drive to learn and take on new challenges. Passionate about transforming raw data into clear, actionable insights that drive real-world impact.',
      languages: [
        { name: 'Arabic', level: 'Native' },
        { name: 'English', level: 'Fluent' },
        { name: 'French', level: 'Fluent' },
      ],
    },
    experience: [
      {
        id: 'talan',
        role: 'AI-Powered Data Modeler',
        type: 'End-of-Studies Project',
        company: 'TALAN',
        period: '02/2026 – 06/2026',
        confidential: true,
        tagline: 'Automating data modeling, from raw files to deployed schemas',
        metrics: [
          { value: '4', label: 'Specialized AI agents' },
          { value: '9', label: 'Input formats (PDF, Word, Excel, CSV, SQL, JSON…)' },
          { value: '3', label: 'Schema types (Star, Snowflake, Galaxy)' },
          { value: '100%', label: 'Graph states versioned in Neo4j' },
        ],
        delivered: [
          'End-to-end automated data modeling, from heterogeneous raw files to deployed database schemas',
          'Automatic structural and semantic validation with an auto-corrected graph, reducing human review time',
          'Incremental updates: schema drift detected by content hashing and migration scripts generated automatically',
          'A natural-language query interface so non-technical users can explore the resulting model',
          'Full traceability and rollback of every knowledge-graph state',
        ],
        strengths: ['Multi-agent systems', 'LLMs & LangGraph', 'Knowledge graphs', 'Decision-support data modeling', 'PostgreSQL & Neo4j'],
        summary:
          'Built a multi-agent AI system automating data modeling from raw files (9 formats: PDF, DOCX, XLSX, CSV, SQL, JSON, TXT, HTML, XML) to deployed database schemas.',
        flow: {
          title: 'data_modeler.run()',
          status: 'running',
          steps: [
            { name: 'Parser Agent', detail: 'raw files → schema · PostgreSQL' },
            { name: 'Extractor Agent', detail: 'knowledge graph · Neo4j' },
            { name: 'Validator Agent', detail: 'structural + semantic checks' },
            { name: 'Modeler Agent', detail: 'Star · Snowflake · Galaxy' },
          ],
          footer: 'Incremental updates via content hashing → auto migrations',
        },
        points: [
          {
            label: 'Parser Agent',
            text: 'Extracts structured schema elements (tables, columns, primary/foreign keys, data types) from heterogeneous raw documents using LLM-based parsing, then persists the normalized schema to PostgreSQL.',
            images: [
              {
                src: '/talan/parser-upload.webp',
                caption: 'Upload step: a functional specification (PDF) is sent to the Parser; 9 input formats are supported (PDF, DOCX, XLSX, CSV, SQL, JSON, TXT, HTML, XML)',
              },
              {
                src: '/talan/parser-tables.webp',
                caption: 'Parsed schema overview: 8 tables and 62 columns extracted from a PDF by the LLM (Kimi-K2.6)',
              },
              {
                src: '/talan/parser-table-detail.webp',
                caption: 'Detail of an extracted table: columns, types, primary key, nullability, descriptions and constraints',
              },
            ],
          },
          {
            label: 'Extractor Agent',
            text: 'Transforms the extracted schema into a semantic knowledge graph capturing entity relationships, dependencies and business semantics; every graph state is versioned in Neo4j for full traceability and rollback.',
            images: [
              {
                src: '/talan/extractor-graph.webp',
                caption: 'Knowledge graph in the app: 8 entities (facts and dimensions) linked by 12 business relationships, versioned as “shop v1”',
              },
              {
                src: '/talan/extractor-neo4j.webp',
                caption: 'The same graph in full detail in Neo4j: tables, columns and their relationships',
              },
            ],
          },
          {
            label: 'Validator Agent',
            text: 'Runs structural checks (referential integrity, key consistency) and semantic checks (relationship coherence, naming/type consistency), producing a detailed validation report and an auto-corrected graph.',
            images: [
              {
                src: '/talan/validator-report.webp',
                caption: 'Validation report for “shop v1”: 0 errors, 0 warnings, 0 corrections; the graph is clean and ready for modeling',
              },
            ],
          },
          {
            label: 'Modeler Agent',
            text: 'Converts the validated graph into formal schemas (Star, Snowflake, Galaxy), deploys them automatically, and exposes a natural-language query interface for non-technical users.',
            images: [
              {
                src: '/talan/modeler-facts.webp',
                caption: 'Schema analysis: fact-table candidates ranked by score (FCT_SALES 85/100, FCT_RETURNS 76/100, FCT_STOCK_SNAPSHOT 60/100) with their detected measures',
              },
              {
                src: '/talan/modeler-select.webp',
                caption: 'Dimension candidates and choice of the fact table, with its grain explained, before generating the star schema',
              },
              {
                src: '/talan/modeler-star.webp',
                caption: 'Generated star schema: FACT_SALES at the center, linked to its dimensions through foreign keys',
              },
              {
                src: '/talan/modeler-dbeaver.webp',
                caption: 'Schemas deployed automatically to PostgreSQL, viewed in DBeaver (including the galaxy_v2 schema)',
              },
            ],
          },
          {
            label: 'Incremental Update Pipeline',
            text: 'Uses content hashing to detect schema drift between file versions and auto-generates migration scripts, avoiding full re-modeling on every update.',
            images: [
              {
                src: '/talan/incremental-changes.webp',
                caption: 'Schema update detected on a new document version: 2 new tables, 3 updated, 5 unchanged, plus removals that the user chooses whether to apply',
              },
              {
                src: '/talan/incremental-migration.webp',
                caption: 'Migration SQL script generated automatically for the changes, ready to download',
              },
            ],
          },
        ],
        tags: ['LLMs', 'LangGraph', 'Multi-Agent', 'PostgreSQL', 'Neo4j', 'Knowledge Graphs'],
      },
      {
        id: 'stb',
        role: 'Intelligent Banking Chatbot (BERT)',
        type: 'Summer Internship',
        company: 'Société Tunisienne de Banque (STB)',
        period: '06/2025 – 07/2025',
        confidential: true,
        tagline: 'Understanding clients, however they ask',
        delivered: [
          'A chatbot that understands the same request phrased many different ways, with ~92% test accuracy',
          'Reliable answers: below a 0.7 confidence score, it asks the client to rephrase instead of guessing',
          'A complete application: FastAPI backend and real-time React chat, with sub-second responses',
          'Built entirely on synthetic data to respect banking confidentiality',
        ],
        strengths: ['NLP & BERT fine-tuning', 'Intent classification', 'Model evaluation', 'Dataset design', 'Full stack (FastAPI + React)'],
        summary:
          'A chatbot that understands bank clients’ natural-language requests (balance, transaction history, transfers, card blocking, simple financial insights) and answers them 24/7, reducing customer-service load. The challenge: recognizing the same request phrased many different ways.',
        metrics: [
          { value: '~92%', label: 'Test accuracy' },
          { value: '10', label: 'Intents' },
          { value: '~500', label: 'Training sentences' },
          { value: '<1s', label: 'Response time' },
        ],
        flow: {
          title: 'chatbot.predict()',
          status: 'live',
          steps: [
            { name: 'React chat UI' },
            { name: 'FastAPI backend' },
            { name: 'BERT intent model' },
            { name: 'Account action' },
          ],
        },
        points: [
          {
            label: 'Fine-tuned BERT',
            text: 'French-language BERT model fine-tuned with a classification head on client requests in French.',
          },
          {
            label: 'Dataset',
            text: '10 intents (balance, transactions, transfer, blocked card, statement… plus greeting and out-of-scope), ~50 varied sentences each, synthetic because client data is confidential; stratified 80/10/10 split.',
          },
          {
            label: 'Evaluation',
            text: 'Accuracy, precision, recall and F1 per intent; confusion-matrix analysis to fix confused intents (e.g. transfer vs. history) with targeted examples, reaching ~92% test accuracy.',
          },
          {
            label: 'Safe answers',
            text: 'Below a 0.7 confidence score, the bot asks the client to rephrase instead of answering wrongly.',
          },
          {
            label: 'Full stack',
            text: 'FastAPI REST backend calling the model and executing the action on a test database; interactive React chat interface with sub-second responses.',
          },
        ],
        tags: ['Python', 'BERT', 'Hugging Face', 'PyTorch', 'FastAPI', 'React', 'NLP'],
      },
    ],
    projects: [
      {
        id: 'social-media-analytics',
        title: 'Real-Time Social Media Analytics Platform',
        short: 'Real-time Kafka + Spark pipeline analyzing social media sentiment, hashtags and trends.',
        summary:
          'Streaming pipeline ingesting social media posts in real time for sentiment analysis, hashtag tracking and trend statistics.',
        architecture: [
          { layer: "Ingestion", items: ["Apache Kafka","Social media posts"] },
          { layer: "Processing", items: ["Apache Spark","Sentiment analysis","Hashtag tracking","Time windows"] },
          { layer: "Storage", items: ["Redis (cache)","PostgreSQL"] },
          { layer: "Serving", items: ["Flask APIs","Interactive dashboard"] },
        ],
        architectureNote: "All services run in Docker containers.",
        workflow: [
          { title: 'Real-time ingestion', text: 'Social media posts are streamed into Kafka in real time.' },
          {
            title: 'Stream processing',
            text: 'Spark consumes the streams to run sentiment analysis, track hashtags and compute time-windowed statistics.',
          },
          { title: 'Caching', text: 'Frequent, real-time statistics are cached in Redis, reducing the load on PostgreSQL.' },
          { title: 'Storage', text: 'Sentiment scores, hashtag counts and trend statistics are stored in PostgreSQL.' },
          { title: 'API & dashboard', text: 'Flask backend APIs connect the processing results to an interactive dashboard.' },
          { title: 'Containerization', text: 'All services run in Docker containers for simple orchestration and deployment.' },
        ],
        tags: ['Kafka', 'Spark', 'Redis', 'PostgreSQL', 'Flask', 'Docker'],
      },
      {
        id: 'sales-streaming',
        title: 'Real-Time Sales Streaming',
        short: 'Streaming lakehouse turning simulated sales events into live Power BI KPIs.',
        summary:
          'End-to-end streaming lakehouse: Kafka ingestion, Spark Structured Streaming and Delta Lake medallion architecture feeding Power BI.',
        architecture: [
          { layer: "Source", items: ["Kafka producer","Simulated sales"] },
          { layer: "Processing", items: ["Spark Structured Streaming","PySpark","Watermarking"] },
          { layer: "Lakehouse", items: ["Delta Lake Bronze","Delta Lake Silver","ACID · Time travel"] },
          { layer: "Business intelligence", items: ["Power BI","KPIs"] },
        ],
        workflow: [
          { title: 'Event generation', text: 'A Python Kafka producer simulates realistic sales transactions in real time.' },
          {
            title: 'Stream processing',
            text: 'Spark Structured Streaming consumes the events in micro-batches, with watermarking to handle late-arriving events.',
          },
          {
            title: 'Bronze layer',
            text: 'Raw events land in Delta Lake Bronze tables, with ACID transactions and time travel.',
          },
          {
            title: 'Silver layer',
            text: 'PySpark transformations and incremental aggregations produce analysis-ready Silver tables.',
          },
          { title: 'KPI dashboard', text: 'A Power BI dashboard connected to the Silver tables tracks the business KPIs.' },
        ],
        tags: ['Kafka', 'Spark Streaming', 'Delta Lake', 'PySpark', 'Power BI'],
      },
      {
        id: 'mlops-pipeline',
        title: 'MLOps Pipeline',
        short: 'End-to-end MLOps with Jenkins CI/CD, Kubernetes deployment and automatic retraining on data drift.',
        diagram: {
          src: '/projects/mlops-architecture.webp',
          alt: 'MLOps pipeline architecture: GitHub, Jenkins CI/CD, MLflow, Docker Hub, Kubernetes, monitoring and automatic retraining',
        },
        summary:
          'End-to-end MLOps pipeline for an XGBoost crime-prediction model, automating its whole lifecycle (data management, training, deployment and monitoring) with automatic retraining when data drift is detected.',
        // Ordered workflow, following the architecture diagram
        workflow: [
          {
            title: 'Code push & data sync',
            text: 'A git push to GitHub triggers the Jenkins CI/CD pipeline, which pulls the versioned data with DVC from DagsHub storage.',
          },
          {
            title: 'Tests & drift check',
            text: 'Jenkins runs the unit tests and checks the incoming data for drift before any training.',
          },
          {
            title: 'Training & tracking',
            text: 'The XGBoost crime-prediction model is trained; parameters, metrics and artifacts are tracked in MLflow for reproducibility.',
          },
          {
            title: 'Validation & registry',
            text: 'The model is validated with Deepchecks, then registered in the MLflow model registry.',
          },
          {
            title: 'Packaging',
            text: 'Jenkins builds the Docker images (FastAPI backend and Streamlit frontend) and pushes them to Docker Hub.',
          },
          {
            title: 'Deployment on Kubernetes',
            text: 'The images are deployed on Kubernetes (2 API pods, 1 UI pod) behind a load balancer, with rolling updates so users get the new model without downtime.',
          },
          {
            title: 'Monitoring & automatic retraining',
            text: 'Evidently AI logs predictions and monitors data drift and model performance; when drift is detected, Jenkins automatically triggers retraining and the cycle starts again.',
          },
        ],
        tags: ['XGBoost', 'Jenkins', 'DVC', 'MLflow', 'DagsHub', 'Deepchecks', 'FastAPI', 'Streamlit', 'Docker', 'Kubernetes', 'Evidently AI'],
      },
      {
        id: 'ats-resume-filtering',
        title: 'ATS Resume Scoring System',
        short: 'Analyzes a resume against a job offer: a compatibility score on 3 criteria and recommendations generated by Gemini.',
        diagram: {
          src: '/projects/ats-architecture.webp',
          alt: 'ATS resume scoring architecture: Streamlit interface, Gemini extraction, SBERT and skills/experience scoring, Gemini analysis, results',
        },
        summary:
          'An ATS-style tool that compares a resume (PDF) with a job offer, computes a weighted compatibility score on three criteria (skills, profile relevance and experience) and generates a detailed analysis: strengths, gaps and concrete advice to improve the resume for that role.',
        workflow: [
          {
            title: 'Streamlit interface',
            text: 'The user uploads a resume as a PDF and pastes the job description, then launches the analysis.',
          },
          {
            title: 'Extraction with Gemini',
            text: 'The PDF is converted to images; Gemini 1.5 Flash then extracts the skills, years of experience and a summary from both the resume and the job offer.',
          },
          {
            title: 'Scoring on 3 criteria',
            text: 'Skills are matched with an asymmetric Jaccard similarity (share of required skills covered), profile relevance with SBERT embeddings and cosine similarity between the two summaries, and experience with a penalty when the candidate has fewer years than required.',
          },
          {
            title: 'Weighted global score',
            text: 'The three criteria are combined into one compatibility score: 40% skills, 30% profile relevance, 30% experience.',
          },
          {
            title: 'Analysis with Gemini',
            text: 'A second Gemini call turns the scores into an expert analysis: overall fit, strengths, gaps and recommendations.',
          },
          {
            title: 'Results',
            text: 'The app displays the score with a chart per criterion, required skills marked as matched or missing, the experience comparison and personalized advice.',
          },
        ],
        impact: [
          'A transparent, explainable score, detailed criterion by criterion',
          'Concrete advice to tailor a resume to a specific job offer',
        ],
        tags: ['Python', 'Streamlit', 'Gemini 1.5 Flash', 'SBERT', 'scikit-learn', 'Jaccard', 'pdf2image', 'Altair', 'NLP'],
      },
      {
        id: 'legal-document-classification',
        title: 'Legal Document Classification',
        subtitle: 'End-of-year project · 2025',
        short: 'BERT models fine-tuned on 500 legal PDFs and compared in Power BI, with Legal-BERT performing best.',
        summary:
          'Automatic legal document classification system built by fine-tuning BERT models, including Legal-BERT, with a Power BI dashboard to compare their performance.',
        architecture: [
          { layer: "Data", items: ["500 text-based PDFs","Contracts","Legal documents"] },
          { layer: "Models", items: ["Legal-BERT","Other BERT models","Fine-tuning"] },
          { layer: "Evaluation", items: ["F1-score","Accuracy","Training settings"] },
          { layer: "Visualization", items: ["Power BI","Model comparison"] },
        ],
        workflow: [
          { title: 'Document corpus', text: '500 text-based PDF files covering different types of contracts and legal documents.' },
          { title: 'BERT models fine-tuning', text: 'Several BERT models, including Legal-BERT, are fine-tuned on the corpus with different training settings.' },
          { title: 'Document classification', text: 'The fine-tuned models assign each document to its category.' },
          { title: 'Power BI model comparison', text: 'A Power BI dashboard shows F1-score, accuracy and other metrics by BERT model and training settings; Legal-BERT performed best.' },
        ],
        tags: ['Legal-BERT', 'Fine-tuning', 'NLP', 'Text classification', 'Power BI'],
      },
    ],
    skills: [
      { group: 'Artificial Intelligence', items: ['ML', 'DL', 'LLMs', 'NLP', 'Generative AI', 'LSTM', 'Knowledge Graphs', 'BERT', 'SBERT', 'Gemini', 'XGBoost'] },
      { group: 'Big Data', items: ['Apache Spark', 'PySpark', 'Spark Streaming', 'Kafka', 'Delta Lake', 'Databricks', 'Hive', 'HDFS', 'Hadoop'] },
      { group: 'Databases', items: ['SQL', 'NoSQL', 'PostgreSQL', 'MySQL', 'MongoDB', 'Neo4j', 'Redis', 'Vector Databases', 'DBeaver'] },
      { group: 'Languages', items: ['Python', 'C', 'Java', 'Scala', 'R'] },
      { group: 'Frameworks & Tools', items: ['FastAPI', 'Flask', 'REST API', 'React', 'Streamlit', 'PyTorch', 'TensorFlow', 'Hugging Face', 'Scikit-learn', 'LangGraph', 'LangChain', 'OpenCV', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Power BI'] },
      { group: 'MLOps & DevOps', items: ['Docker', 'Kubernetes', 'Jenkins', 'DVC', 'MLflow', 'DagsHub', 'Deepchecks', 'Evidently AI'] },
    ],
    education: [
      {
        degree: 'Engineering Degree — Data Engineering & Decision Systems',
        school: 'National School of Electronics and Telecommunications of Sfax (ENET\'Com)',
        period: '2023 – 2026',
      },
      {
        degree: 'Physics-Technology Preparatory Cycle',
        school: 'Preparatory Institute for Engineering Studies of Nabeul (IPEIN)',
        period: '2021 – 2023',
      },
    ],
    activities: [
      { role: 'Vice Chair', org: 'IEEE Computer Society', period: '2023 – 2024' },
      { role: 'Member — Outgoing Global Volunteer', org: 'AIESEC', period: '2021 – 2023' },
    ],
    contact: {
      title: 'Get in touch',
      text: "I'm open to Data Engineering opportunities. Feel free to reach out.",
    },
    ui: {
      aboutTitle: 'Turning raw data into decisions',
      languages: 'Languages',
      experienceTitle: 'Professional Experience',
      agentFlow: 'Agent pipeline',
      incremental: 'Incremental updates via content hashing',
      projectsTitle: 'Academic Projects',
      projectsSub: 'Streaming, lakehouse, MLOps and NLP.',
      highlights: 'What I built',
      impact: 'Business value',
      overview: 'Overview',
      seeMore: 'See more',
      close: 'Close',
      diagram: 'Architecture diagram',
      workflow: 'How it works, step by step',
      enlarge: 'Click to enlarge',
      resumeTitle: 'My resume',
      resumeSub: 'Read it right here, or download the PDF.',
      openCv: 'Open in a new tab',
      resumeMobile: 'Tap to open the resume (PDF) in your browser.',
      confidential: 'Confidential code',
      confidentialHint: 'Company project: the source code is confidential and cannot be published',
      delivered: 'What I delivered',
      strengths: 'Key strengths',
      seeDetails: 'See details',
      inDetail: 'In detail',
      backToTop: 'Back to top',
      navigation: 'Navigation',
      stack: 'Tech stack',
      architecture: 'Architecture',
      skillsTitle: 'Tools I work with',
      educationTitle: 'Education',
      activities: 'Extracurricular activities',
      contactTitle: "Let's build something with data",
      copyEmail: 'Copy address',
      copied: 'Copied!',
      openMail: 'Open mail app',
      formTitle: 'Send me a message',
      formName: 'Your name',
      formEmail: 'Your email',
      formMessage: 'Your message',
      formSend: 'Send message',
      formSending: 'Sending…',
      formSuccess: 'Thank you! Your message has been sent. I will get back to you soon.',
      formError: 'Something went wrong. Please try again or email me directly.',
    },
    footer: 'Designed & built by Sarra Ben Thayer',
  },

  fr: {
    nav: {
      about: 'À propos',
      experience: 'Expérience',
      projects: 'Projets',
      skills: 'Compétences',
      education: 'Formation',
      activities: 'Activités',
      resume: 'CV',
      contact: 'Contact',
    },
    hero: {
      greeting: 'Bonjour, je suis Sarra Ben Thayer',
      headlineStart: 'Je construis des pipelines de données et transforme la donnée brute en',
      headlineHighlight: 'décisions !',
      intro:
        "Ingénieure en Données et Systèmes Décisionnels, spécialisée dans les pipelines de données, le streaming temps réel et les systèmes data pilotés par l'IA.",
      title: 'Ingénieure des Données et Systèmes Décisionnels',
      location: 'Tunis, Tunisie',
      ctaContact: 'Me contacter',
      ctaCv: 'Télécharger le CV',
      experienceWith: 'Expérience avec',
    },
    about: {
      title: 'À propos de moi',
      text: "Diplômée en Data Engineering avec une expérience pratique en conception de pipelines de données, systèmes de bases de données et modélisation de données, acquise à travers des projets académiques et des stages. Rigoureuse et minutieuse, avec une réelle motivation à apprendre et à relever de nouveaux défis. Passionnée par la transformation de données brutes en insights clairs et exploitables ayant un impact concret.",
      languages: [
        { name: 'Arabe', level: 'Langue maternelle' },
        { name: 'Anglais', level: 'Courant' },
        { name: 'Français', level: 'Courant' },
      ],
    },
    experience: [
      {
        id: 'talan',
        role: 'AI-Powered Data Modeler',
        type: "Projet de Fin d'Études",
        company: 'TALAN',
        period: '02/2026 – 06/2026',
        confidential: true,
        tagline: "Automatiser la modélisation de données, des fichiers bruts jusqu'au schéma déployé",
        metrics: [
          { value: '4', label: 'Agents IA spécialisés' },
          { value: '9', label: "Formats d'entrée (PDF, Word, Excel, CSV, SQL, JSON…)" },
          { value: '3', label: 'Types de schéma (Étoile, Flocon, Galaxie)' },
          { value: '100%', label: 'États du graphe versionnés dans Neo4j' },
        ],
        delivered: [
          "Modélisation de données automatisée de bout en bout, des fichiers bruts hétérogènes jusqu'aux schémas déployés",
          'Validation structurelle et sémantique automatique avec un graphe corrigé automatiquement, réduisant le temps de revue humaine',
          'Mises à jour incrémentales : écarts de schéma détectés par hachage de contenu et scripts de migration générés automatiquement',
          "Une interface d'interrogation en langage naturel pour que les utilisateurs non techniques explorent le modèle obtenu",
          'Traçabilité complète et retour en arrière possible sur chaque état du graphe de connaissances',
        ],
        strengths: ['Systèmes multi-agents', 'LLM & LangGraph', 'Graphes de connaissances', 'Modélisation décisionnelle', 'PostgreSQL & Neo4j'],
        summary:
          "Conception d'un système IA multi-agents automatisant la modélisation de données, des fichiers bruts (9 formats : PDF, DOCX, XLSX, CSV, SQL, JSON, TXT, HTML, XML) jusqu'aux schémas déployés.",
        flow: {
          title: 'data_modeler.run()',
          status: 'running',
          steps: [
            { name: 'Agent Parser', detail: 'fichiers bruts → schéma · PostgreSQL' },
            { name: 'Agent Extractor', detail: 'graphe de connaissances · Neo4j' },
            { name: 'Agent Validator', detail: 'contrôles structurels + sémantiques' },
            { name: 'Agent Modeler', detail: 'Étoile · Flocon · Galaxie' },
          ],
          footer: 'Mises à jour incrémentales par hachage → migrations auto',
        },
        points: [
          {
            label: 'Agent Parser',
            text: 'Extrait les éléments structurels du schéma (tables, colonnes, clés primaires/étrangères, types de données) à partir de documents bruts hétérogènes grâce à un parsing basé sur des LLM, puis stocke le schéma normalisé dans PostgreSQL.',
            images: [
              {
                src: '/talan/parser-upload.webp',
                caption: "Étape d'import : une spécification fonctionnelle (PDF) est envoyée au Parser ; 9 formats d'entrée sont supportés (PDF, DOCX, XLSX, CSV, SQL, JSON, TXT, HTML, XML)",
              },
              {
                src: '/talan/parser-tables.webp',
                caption: "Vue d'ensemble du schéma extrait : 8 tables et 62 colonnes extraites d'un PDF par le LLM (Kimi-K2.6)",
              },
              {
                src: '/talan/parser-table-detail.webp',
                caption: "Détail d'une table extraite : colonnes, types, clé primaire, nullabilité, descriptions et contraintes",
              },
            ],
          },
          {
            label: 'Agent Extractor',
            text: "Transforme le schéma extrait en un graphe de connaissances sémantique capturant les relations entre entités, les dépendances et la sémantique métier ; chaque état du graphe est versionné dans Neo4j pour une traçabilité complète et un retour en arrière possible.",
            images: [
              {
                src: '/talan/extractor-graph.webp',
                caption: "Graphe de connaissances dans l'interface : 8 entités (faits et dimensions) reliées par 12 relations métier, versionné « shop v1 »",
              },
              {
                src: '/talan/extractor-neo4j.webp',
                caption: 'Le même graphe en détail dans Neo4j : tables, colonnes et leurs relations',
              },
            ],
          },
          {
            label: 'Agent Validator',
            text: "Exécute des vérifications structurelles (intégrité référentielle, cohérence des clés) et sémantiques (cohérence des relations, des noms et des types), produisant un rapport de validation détaillé et un graphe corrigé automatiquement.",
            images: [
              {
                src: '/talan/validator-report.webp',
                caption: 'Rapport de validation de « shop v1 » : 0 erreur, 0 avertissement, 0 correction ; le graphe est propre et prêt pour la modélisation',
              },
            ],
          },
          {
            label: 'Agent Modeler',
            text: "Convertit le graphe validé en schémas formels (Étoile, Flocon, Galaxie), les déploie automatiquement et expose une interface d'interrogation en langage naturel pour les utilisateurs non techniques.",
            images: [
              {
                src: '/talan/modeler-facts.webp',
                caption: 'Analyse du schéma : tables de faits candidates classées par score (FCT_SALES 85/100, FCT_RETURNS 76/100, FCT_STOCK_SNAPSHOT 60/100) avec leurs mesures détectées',
              },
              {
                src: '/talan/modeler-select.webp',
                caption: 'Dimensions candidates et choix de la table de faits, avec son grain expliqué, avant la génération du schéma en étoile',
              },
              {
                src: '/talan/modeler-star.webp',
                caption: 'Schéma en étoile généré : FACT_SALES au centre, reliée à ses dimensions par des clés étrangères',
              },
              {
                src: '/talan/modeler-dbeaver.webp',
                caption: 'Schémas déployés automatiquement dans PostgreSQL, visualisés dans DBeaver (dont le schéma galaxy_v2)',
              },
            ],
          },
          {
            label: 'Pipeline de mise à jour incrémentale',
            text: 'Utilise le hachage de contenu pour détecter les écarts de schéma entre les versions des fichiers et génère automatiquement les scripts de migration correspondants.',
            images: [
              {
                src: '/talan/incremental-changes.webp',
                caption: "Mise à jour du schéma détectée sur une nouvelle version du document : 2 nouvelles tables, 3 modifiées, 5 inchangées, et des suppressions que l'utilisateur choisit d'appliquer ou non",
              },
              {
                src: '/talan/incremental-migration.webp',
                caption: 'Script SQL de migration généré automatiquement pour ces changements, prêt à être téléchargé',
              },
            ],
          },
        ],
        tags: ['LLMs', 'LangGraph', 'Multi-Agents', 'PostgreSQL', 'Neo4j', 'Graphes de connaissances'],
      },
      {
        id: 'stb',
        role: 'Chatbot bancaire intelligent (BERT)',
        type: "Stage d'été",
        company: 'Société Tunisienne de Banque (STB)',
        period: '06/2025 – 07/2025',
        confidential: true,
        tagline: 'Comprendre le client, quelle que soit sa formulation',
        delivered: [
          "Un chatbot qui comprend une même demande formulée de multiples façons, avec ~92 % d'accuracy en test",
          'Des réponses fiables : sous un score de confiance de 0,7, il demande de reformuler au lieu de deviner',
          'Une application complète : backend FastAPI et chat React en temps réel, avec des réponses en moins d’une seconde',
          'Entièrement construit sur des données fictives pour respecter la confidentialité bancaire',
        ],
        strengths: ['NLP & fine-tuning BERT', "Classification d'intentions", 'Évaluation de modèles', 'Construction de dataset', 'Full stack (FastAPI + React)'],
        summary:
          "Chatbot qui comprend les demandes des clients rédigées en langage naturel (solde, historique des transactions, virements, blocage de carte, insights financiers simples) et y répond à tout moment, réduisant la charge du service client. Le défi : reconnaître une même demande formulée de plusieurs façons.",
        metrics: [
          { value: '~92%', label: 'Accuracy (test)' },
          { value: '10', label: 'Intentions' },
          { value: '~500', label: "Phrases d'entraînement" },
          { value: '<1s', label: 'Temps de réponse' },
        ],
        flow: {
          title: 'chatbot.predict()',
          status: 'live',
          steps: [
            { name: 'Interface chat React' },
            { name: 'Backend FastAPI' },
            { name: "Modèle BERT d'intention" },
            { name: 'Action sur le compte' },
          ],
        },
        points: [
          {
            label: 'Fine-tuning de BERT',
            text: 'Modèle BERT francophone fine-tuné avec une couche de classification sur des requêtes clients en français.',
          },
          {
            label: 'Dataset',
            text: '10 intentions (solde, transactions, virement, carte bloquée, relevé… plus salutation et hors_sujet), ~50 phrases variées chacune, fictives car les données clients sont confidentielles ; séparation stratifiée 80/10/10.',
          },
          {
            label: 'Évaluation',
            text: 'Accuracy, précision, rappel et F1 par intention ; analyse de la matrice de confusion pour corriger les intentions confondues (ex. virement / historique) avec des exemples ciblés, jusqu’à ~92 % d’accuracy.',
          },
          {
            label: 'Réponses fiables',
            text: 'Sous un score de confiance de 0,7, le chatbot demande de reformuler au lieu de répondre à tort.',
          },
          {
            label: 'Full stack',
            text: "Backend FastAPI (API REST) qui appelle le modèle et exécute l'action sur une base de test ; interface chat React interactive avec des réponses en moins d'une seconde.",
          },
        ],
        tags: ['Python', 'BERT', 'Hugging Face', 'PyTorch', 'FastAPI', 'React', 'NLP'],
      },
    ],
    projects: [
      {
        id: 'social-media-analytics',
        title: "Plateforme d'Analyse des Réseaux Sociaux en Temps Réel",
        short: 'Pipeline temps réel Kafka + Spark analysant le sentiment, les hashtags et les tendances des réseaux sociaux.',
        summary:
          "Pipeline de streaming ingérant des publications de réseaux sociaux en temps réel pour l'analyse de sentiment, le suivi des hashtags et les statistiques de tendances.",
        architecture: [
          { layer: "Ingestion", items: ["Apache Kafka","Publications sociales"] },
          { layer: "Traitement", items: ["Apache Spark","Analyse de sentiment","Suivi des hashtags","Fenêtres temporelles"] },
          { layer: "Stockage", items: ["Redis (cache)","PostgreSQL"] },
          { layer: "Restitution", items: ["APIs Flask","Tableau de bord interactif"] },
        ],
        architectureNote: "Tous les services tournent dans des conteneurs Docker.",
        workflow: [
          { title: 'Ingestion temps réel', text: 'Les publications des réseaux sociaux sont ingérées en temps réel dans Kafka.' },
          {
            title: 'Traitement des flux',
            text: "Spark consomme les flux pour l'analyse de sentiment, le suivi des hashtags et les statistiques par fenêtres temporelles.",
          },
          { title: 'Mise en cache', text: 'Les statistiques fréquentes et temps réel sont mises en cache dans Redis, réduisant la charge sur PostgreSQL.' },
          { title: 'Stockage', text: 'Les scores de sentiment, comptages de hashtags et statistiques de tendances sont stockés dans PostgreSQL.' },
          { title: 'API & tableau de bord', text: 'Des APIs Flask relient les résultats du traitement à un tableau de bord interactif.' },
          { title: 'Conteneurisation', text: "Tous les services tournent dans des conteneurs Docker pour simplifier l'orchestration et le déploiement." },
        ],
        tags: ['Kafka', 'Spark', 'Redis', 'PostgreSQL', 'Flask', 'Docker'],
      },
      {
        id: 'sales-streaming',
        title: 'Streaming des Ventes en Temps Réel',
        short: 'Lakehouse de streaming qui transforme des ventes simulées en KPI Power BI en temps réel.',
        summary:
          'Lakehouse de streaming de bout en bout : ingestion Kafka, Spark Structured Streaming et architecture médaillon Delta Lake alimentant Power BI.',
        architecture: [
          { layer: "Source", items: ["Producteur Kafka","Ventes simulées"] },
          { layer: "Traitement", items: ["Spark Structured Streaming","PySpark","Watermarking"] },
          { layer: "Lakehouse", items: ["Delta Lake Bronze","Delta Lake Silver","ACID · Time travel"] },
          { layer: "Décisionnel", items: ["Power BI","KPI"] },
        ],
        workflow: [
          { title: 'Génération des événements', text: 'Un producteur Kafka en Python simule des transactions de vente réalistes en temps réel.' },
          {
            title: 'Traitement des flux',
            text: 'Spark Structured Streaming consomme les événements en micro-batchs, avec du watermarking pour gérer les événements en retard.',
          },
          {
            title: 'Couche Bronze',
            text: 'Les événements bruts sont stockés dans des tables Delta Lake Bronze, avec transactions ACID et time travel.',
          },
          {
            title: 'Couche Silver',
            text: 'Des transformations PySpark et des agrégations incrémentales produisent des tables Silver prêtes pour l’analyse.',
          },
          { title: 'Tableau de bord KPI', text: 'Un tableau de bord Power BI connecté aux tables Silver suit les KPI métier.' },
        ],
        tags: ['Kafka', 'Spark Streaming', 'Delta Lake', 'PySpark', 'Power BI'],
      },
      {
        id: 'mlops-pipeline',
        title: 'Pipeline MLOps',
        short: 'MLOps de bout en bout avec CI/CD Jenkins, déploiement sur Kubernetes et réentraînement automatique en cas de dérive.',
        diagram: {
          src: '/projects/mlops-architecture.webp',
          alt: "Architecture du pipeline MLOps : GitHub, CI/CD Jenkins, MLflow, Docker Hub, Kubernetes, monitoring et réentraînement automatique",
        },
        summary:
          "Pipeline MLOps de bout en bout pour un modèle XGBoost de prédiction de la criminalité, automatisant tout son cycle de vie (gestion des données, entraînement, déploiement et monitoring) avec un réentraînement automatique en cas de dérive des données.",
        // Fonctionnement ordonné, selon le schéma d'architecture
        workflow: [
          {
            title: 'Push du code & synchronisation des données',
            text: 'Un git push sur GitHub déclenche le pipeline CI/CD Jenkins, qui récupère les données versionnées avec DVC depuis le stockage DagsHub.',
          },
          {
            title: 'Tests & détection de dérive',
            text: "Jenkins exécute les tests unitaires et vérifie la dérive des nouvelles données avant tout entraînement.",
          },
          {
            title: 'Entraînement & suivi',
            text: 'Le modèle XGBoost de prédiction de la criminalité est entraîné ; paramètres, métriques et artefacts sont suivis dans MLflow pour la reproductibilité.',
          },
          {
            title: 'Validation & registre',
            text: 'Le modèle est validé avec Deepchecks, puis enregistré dans le registre de modèles MLflow.',
          },
          {
            title: 'Conteneurisation',
            text: 'Jenkins construit les images Docker (backend FastAPI et frontend Streamlit) et les publie sur Docker Hub.',
          },
          {
            title: 'Déploiement sur Kubernetes',
            text: "Les images sont déployées sur Kubernetes (2 pods API, 1 pod UI) derrière un load balancer, avec des rolling updates pour mettre à jour le modèle sans interruption.",
          },
          {
            title: 'Monitoring & réentraînement automatique',
            text: "Evidently AI enregistre les prédictions et surveille la dérive des données et la performance du modèle ; en cas de dérive, Jenkins déclenche automatiquement le réentraînement et le cycle recommence.",
          },
        ],
        tags: ['XGBoost', 'Jenkins', 'DVC', 'MLflow', 'DagsHub', 'Deepchecks', 'FastAPI', 'Streamlit', 'Docker', 'Kubernetes', 'Evidently AI'],
      },
      {
        id: 'ats-resume-filtering',
        title: 'Système de scoring de CV (ATS)',
        short: "Analyse un CV face à une offre d'emploi : score de compatibilité sur 3 critères et recommandations générées par Gemini.",
        diagram: {
          src: '/projects/ats-architecture.webp',
          alt: "Architecture du système de scoring de CV : interface Streamlit, extraction Gemini, scoring SBERT / compétences / expérience, analyse Gemini, résultats",
        },
        summary:
          "Outil de type ATS qui compare un CV (PDF) à une offre d'emploi, calcule un score de compatibilité pondéré sur trois critères (compétences, pertinence du profil et expérience) et génère une analyse détaillée : points forts, lacunes et conseils concrets pour améliorer le CV pour ce poste.",
        workflow: [
          {
            title: 'Interface Streamlit',
            text: "L'utilisateur importe son CV au format PDF et colle l'offre d'emploi, puis lance l'analyse.",
          },
          {
            title: 'Extraction avec Gemini',
            text: "Le PDF est converti en images ; Gemini 1.5 Flash extrait ensuite les compétences, les années d'expérience et un résumé, à la fois du CV et de l'offre.",
          },
          {
            title: 'Scoring sur 3 critères',
            text: "Les compétences sont comparées par similarité de Jaccard asymétrique (part des compétences requises couvertes), la pertinence du profil par embeddings SBERT et similarité cosinus entre les deux résumés, et l'expérience avec une pénalité si le candidat a moins d'années que requis.",
          },
          {
            title: 'Score global pondéré',
            text: 'Les trois critères sont combinés en un score de compatibilité : 40 % compétences, 30 % pertinence du profil, 30 % expérience.',
          },
          {
            title: 'Analyse avec Gemini',
            text: "Un second appel à Gemini transforme les scores en analyse experte : adéquation globale, points forts, lacunes et recommandations.",
          },
          {
            title: 'Résultats',
            text: "L'application affiche le score avec un graphique par critère, les compétences requises présentes ou manquantes, la comparaison de l'expérience et des conseils personnalisés.",
          },
        ],
        impact: [
          'Un score transparent et explicable, détaillé critère par critère',
          'Des conseils concrets pour adapter son CV à une offre précise',
        ],
        tags: ['Python', 'Streamlit', 'Gemini 1.5 Flash', 'SBERT', 'scikit-learn', 'Jaccard', 'pdf2image', 'Altair', 'NLP'],
      },
      {
        id: 'legal-document-classification',
        title: 'Classification de documents juridiques',
        subtitle: "Projet de fin d'année · 2025",
        short: "Modèles BERT fine-tunés sur 500 PDF juridiques et comparés sur Power BI, Legal-BERT obtenant les meilleurs résultats.",
        summary:
          'Système de classification automatique de documents juridiques par fine-tuning de modèles BERT, dont Legal-BERT, avec un tableau de bord Power BI pour comparer leurs performances.',
        architecture: [
          { layer: "Données", items: ["500 PDF textuels","Contrats","Documents juridiques"] },
          { layer: "Modèles", items: ["Legal-BERT","Autres modèles BERT","Fine-tuning"] },
          { layer: "Évaluation", items: ["F1-score","Accuracy","Paramètres d'entraînement"] },
          { layer: "Visualisation", items: ["Power BI","Comparaison des modèles"] },
        ],
        workflow: [
          { title: 'Corpus de documents', text: '500 fichiers PDF textuels couvrant différents types de contrats et de documents juridiques.' },
          { title: 'Fine-tuning des modèles BERT', text: "Plusieurs modèles BERT, dont Legal-BERT, sont fine-tunés sur le corpus avec différents paramètres d'entraînement." },
          { title: 'Classification des documents', text: 'Les modèles fine-tunés attribuent à chaque document sa catégorie.' },
          { title: 'Comparaison sur Power BI', text: "Un tableau de bord Power BI présente le F1-score, l'accuracy et d'autres métriques selon le modèle BERT et les paramètres d'entraînement ; Legal-BERT a obtenu les meilleurs résultats." },
        ],
        tags: ['Legal-BERT', 'Fine-tuning', 'NLP', 'Classification de texte', 'Power BI'],
      },
    ],
    skills: [
      { group: 'Intelligence Artificielle', items: ['ML', 'DL', 'LLMs', 'NLP', 'IA Générative', 'LSTM', 'Graphes de connaissances', 'BERT', 'SBERT', 'Gemini', 'XGBoost'] },
      { group: 'Big Data', items: ['Apache Spark', 'PySpark', 'Spark Streaming', 'Kafka', 'Delta Lake', 'Databricks', 'Hive', 'HDFS', 'Hadoop'] },
      { group: 'Bases de données', items: ['SQL', 'NoSQL', 'PostgreSQL', 'MySQL', 'MongoDB', 'Neo4j', 'Redis', 'Bases vectorielles', 'DBeaver'] },
      { group: 'Langages', items: ['Python', 'C', 'Java', 'Scala', 'R'] },
      { group: 'Frameworks & Outils', items: ['FastAPI', 'Flask', 'REST API', 'React', 'Streamlit', 'PyTorch', 'TensorFlow', 'Hugging Face', 'Scikit-learn', 'LangGraph', 'LangChain', 'OpenCV', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Power BI'] },
      { group: 'MLOps & DevOps', items: ['Docker', 'Kubernetes', 'Jenkins', 'DVC', 'MLflow', 'DagsHub', 'Deepchecks', 'Evidently AI'] },
    ],
    education: [
      {
        degree: 'Diplôme d\'Ingénieur — Données et Systèmes Décisionnels',
        school: "École Nationale d'Électronique et des Télécommunications de Sfax (ENET'Com)",
        period: '2023 – 2026',
      },
      {
        degree: 'Cycle Préparatoire Physique-Technologie',
        school: "Institut Préparatoire aux Études d'Ingénieur de Nabeul (IPEIN)",
        period: '2021 – 2023',
      },
    ],
    activities: [
      { role: 'Vice-Présidente', org: 'IEEE Computer Society', period: '2023 – 2024' },
      { role: 'Membre — Volontaire international sortant', org: 'AIESEC', period: '2021 – 2023' },
    ],
    contact: {
      title: 'Me contacter',
      text: 'Je suis ouverte aux opportunités en Data Engineering. N\'hésitez pas à me contacter.',
    },
    ui: {
      aboutTitle: 'Transformer les données brutes en décisions',
      languages: 'Langues',
      experienceTitle: 'Expérience professionnelle',
      agentFlow: 'Pipeline des agents',
      incremental: 'Mises à jour incrémentales par hachage de contenu',
      projectsTitle: 'Projets académiques',
      projectsSub: 'Streaming, lakehouse, MLOps et NLP.',
      highlights: 'Réalisations',
      impact: 'Valeur métier',
      overview: 'Présentation',
      seeMore: 'Voir plus',
      close: 'Fermer',
      diagram: "Schéma d'architecture",
      workflow: 'Fonctionnement, étape par étape',
      enlarge: 'Cliquer pour agrandir',
      resumeTitle: 'Mon CV',
      resumeSub: 'Consultez-le directement ici, ou téléchargez le PDF.',
      openCv: 'Ouvrir dans un nouvel onglet',
      resumeMobile: 'Touchez pour ouvrir le CV (PDF) dans votre navigateur.',
      confidential: 'Code confidentiel',
      confidentialHint: "Projet d'entreprise : le code source est confidentiel et ne peut pas être publié",
      delivered: "Ce que j'ai livré",
      strengths: 'Points forts',
      seeDetails: 'Voir les détails',
      inDetail: 'En détail',
      backToTop: 'Retour en haut',
      navigation: 'Navigation',
      stack: 'Technologies',
      architecture: 'Architecture',
      skillsTitle: 'Mes outils',
      educationTitle: 'Formation',
      activities: 'Activités extrascolaires',
      contactTitle: 'Construisons quelque chose avec les données',
      copyEmail: "Copier l'adresse",
      copied: 'Copié !',
      openMail: "Ouvrir l'application mail",
      formTitle: 'Envoyez-moi un message',
      formName: 'Votre nom',
      formEmail: 'Votre email',
      formMessage: 'Votre message',
      formSend: 'Envoyer',
      formSending: 'Envoi…',
      formSuccess: 'Merci ! Votre message a bien été envoyé. Je vous répondrai rapidement.',
      formError: "Une erreur s'est produite. Réessayez ou écrivez-moi directement.",
    },
    footer: 'Conçu et développé par Sarra Ben Thayer',
  },
}
