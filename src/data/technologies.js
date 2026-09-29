export const TECHNOLOGIES = [
  {
    id: "java",
    name: "Java",
    logo: "☕",
    category: "Enterprise Java Solutions",
    shortDescription: "Robust and scalable enterprise applications for modern businesses.",
    tags: ["Enterprise Apps", "Microservices", "Spring Boot"],
    overview: "Java is the foundation of our enterprise application development. We utilize its robust ecosystem, platform independence, and high performance to build mission-critical systems that can scale infinitely. Our Java solutions are designed to handle complex business logic, large data volumes, and strict security requirements.",
    capabilities: [
      "Scalable Architecture",
      "Secure Development",
      "High Performance",
      "API Integration",
      "Enterprise Integration",
      "Cloud Ready"
    ],
    tools: [
      "Java",
      "Spring Boot",
      "Spring Cloud",
      "Hibernate",
      "Maven",
      "REST APIs",
      "Microservices"
    ],
    approach: "We follow domain-driven design and microservices architecture to build Java applications that are modular, maintainable, and highly available. Our CI/CD pipelines ensure rapid and reliable deployment across various environments.",
    useCases: [
      "Banking & Financial Systems",
      "Healthcare Portals",
      "E-commerce Platforms",
      "Supply Chain Management"
    ]
  },
  {
    id: "dotnet",
    name: ".NET",
    logo: "🔷",
    category: "Microsoft .NET Solutions",
    shortDescription: "Secure and performant applications for the Microsoft ecosystem.",
    tags: ["ASP.NET Core", "Web APIs", "Enterprise"],
    overview: "We leverage the power of the .NET ecosystem to build high-performance, secure, and cross-platform applications. From legacy modernization to cloud-native microservices, our .NET solutions deliver exceptional business value and seamless integration with existing enterprise infrastructure.",
    capabilities: [
      "Cross-Platform Development",
      "Enterprise Applications",
      "Web APIs",
      "Backend Systems",
      "Azure Integration",
      "Business Applications"
    ],
    tools: [
      ".NET Core",
      "C#",
      "ASP.NET",
      "Entity Framework",
      "SQL Server",
      "Azure DevOps",
      "Blazor"
    ],
    approach: "Our approach to .NET development focuses on clean architecture, comprehensive unit testing, and agile methodologies. We build solutions that are not only performant but also easy to maintain and extend as business needs evolve.",
    useCases: [
      "Corporate Intranets",
      "B2B Portals",
      "Legacy System Migration",
      "Enterprise Resource Planning"
    ]
  },
  {
    id: "aws",
    name: "Amazon Web Services",
    logo: "🟠",
    category: "AWS Cloud Infrastructure",
    shortDescription: "Scalable and secure cloud architecture for global reach.",
    tags: ["Cloud Infra", "Serverless", "DevOps"],
    overview: "We architect, build, and manage highly scalable and resilient cloud environments on AWS. Whether you are migrating existing workloads or building cloud-native applications from scratch, our AWS certified experts ensure optimal performance, security, and cost-efficiency.",
    capabilities: [
      "Cloud Architecture",
      "Cloud Migration",
      "Serverless Computing",
      "DevOps Automation",
      "Disaster Recovery",
      "Scalable Infrastructure"
    ],
    tools: [
      "EC2",
      "S3",
      "Lambda",
      "RDS",
      "CloudFront",
      "CloudFormation",
      "EKS"
    ],
    approach: "We implement infrastructure as code (IaC) and automate provisioning using best practices defined in the AWS Well-Architected Framework. Security, reliability, and cost-optimization are integrated into every stage of our cloud lifecycle.",
    useCases: [
      "Global Web Applications",
      "Data Lakes",
      "High-Traffic Platforms",
      "Automated Backups"
    ]
  },
  {
    id: "azure",
    name: "Microsoft Azure",
    logo: "🔵",
    category: "Azure Cloud Solutions",
    shortDescription: "Enterprise-grade cloud services and hybrid environments.",
    tags: ["Azure Cloud", "Hybrid Cloud", "AI Services"],
    overview: "Our Microsoft Azure solutions empower organizations to accelerate their digital transformation. We build secure, reliable, and scalable cloud architectures that seamlessly integrate with Microsoft enterprise products, supporting hybrid and multi-cloud strategies.",
    capabilities: [
      "Azure Cloud",
      "Hybrid Cloud",
      "Cloud Migration",
      "Enterprise Security",
      "Identity Management",
      "App Modernization"
    ],
    tools: [
      "Azure App Services",
      "Azure Functions",
      "Azure SQL",
      "Cosmos DB",
      "Azure Kubernetes Service",
      "Azure AD"
    ],
    approach: "We utilize Azure's comprehensive suite of services to create tailored solutions. From robust identity and access management to advanced analytics, we ensure your Azure environment is secure, compliant, and optimized for your specific workloads.",
    useCases: [
      "Enterprise App Migration",
      "Hybrid Data Centers",
      "IoT Solutions",
      "Active Directory Integration"
    ]
  },
  {
    id: "ai-ml",
    name: "AI & Machine Learning",
    logo: "🧠",
    category: "Intelligent Automation & AI",
    shortDescription: "Data-driven insights and intelligent automation for healthcare.",
    tags: ["Machine Learning", "NLP", "Predictive Analytics"],
    overview: "We harness the power of Artificial Intelligence and Machine Learning to unlock valuable insights from complex data, automate repetitive tasks, and create intelligent systems that improve decision-making, particularly in the healthcare and enterprise sectors.",
    capabilities: [
      "Predictive Analytics",
      "Deep Learning",
      "Intelligent Automation",
      "Data-driven insights",
      "AI-powered applications",
      "Computer Vision"
    ],
    tools: [
      "Python",
      "TensorFlow",
      "PyTorch",
      "Scikit-learn",
      "OpenAI",
      "Pandas",
      "Hugging Face"
    ],
    approach: "Our AI methodology starts with understanding your data and business goals. We clean, process, and label data, then train and deploy custom models. We emphasize ethical AI, interpretability, and seamless integration into your existing workflows.",
    useCases: [
      "Medical Image Analysis",
      "Patient Risk Prediction",
      "Automated Customer Support",
      "Fraud Detection"
    ]
  },
  {
    id: "cloud-computing",
    name: "Cloud Computing",
    logo: "☁️",
    category: "Comprehensive Cloud Services",
    shortDescription: "End-to-end cloud strategy, deployment, and management.",
    tags: ["Architecture", "Migration", "Security"],
    overview: "Our holistic cloud computing services go beyond specific providers to offer strategic guidance, architecture design, and ongoing management across public, private, and hybrid cloud environments. We ensure your cloud strategy aligns with your long-term business objectives.",
    capabilities: [
      "Cloud Architecture",
      "Cloud Migration",
      "Infrastructure",
      "Cloud Security",
      "Scalability",
      "Business Continuity"
    ],
    tools: [
      "Docker",
      "Kubernetes",
      "Terraform",
      "Ansible",
      "Jenkins",
      "Prometheus",
      "Grafana"
    ],
    approach: "We employ a vendor-agnostic approach when designing cloud strategies, focusing on the right tool for the job. Our containerization and orchestration expertise ensures that your applications are portable, resilient, and easy to manage at scale.",
    useCases: [
      "Multi-Cloud Deployments",
      "Microservices Migration",
      "High-Availability Architecture",
      "Cost Optimization Audits"
    ]
  },
  {
    id: "gis",
    name: "GIS & Geospatial",
    logo: "🗺️",
    category: "Spatial Data & Mapping",
    shortDescription: "Location intelligence and geospatial data analysis.",
    tags: ["Mapping", "Location Intelligence", "Spatial Data"],
    overview: "We provide advanced Geographic Information System (GIS) and geospatial solutions that transform spatial data into actionable intelligence. Our services enable organizations to visualize, analyze, and interpret location-based information for strategic decision-making.",
    capabilities: [
      "Mapping",
      "Spatial Data",
      "Geospatial Analytics",
      "Location Intelligence",
      "GIS Applications",
      "Geospatial AI",
      "Data Visualization"
    ],
    tools: [
      "ArcGIS",
      "QGIS",
      "PostGIS",
      "Mapbox",
      "Google Maps API",
      "GeoJSON",
      "Leaflet"
    ],
    approach: "We integrate spatial data from various sources, apply advanced spatial analytics, and build interactive map-based applications. Our focus is on data accuracy, intuitive visualization, and unlocking the spatial context of your business challenges.",
    useCases: [
      "Healthcare Facility Planning",
      "Logistics & Routing",
      "Environmental Monitoring",
      "Urban Planning"
    ]
  }
];
