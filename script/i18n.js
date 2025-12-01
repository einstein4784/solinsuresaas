// Internationalization (i18n) System for Sol-Insure

const translations = {
  en: {
    // Navigation
    nav_features: "Features",
    nav_how_it_works: "How It Works",
    nav_about: "About",
    nav_contact: "Contact",
    
    // Hero Section
    hero_title: "Sol-Insure",
    hero_description: "Transform your insurance operations with our cloud-native platform. Built for P&C insurers who demand speed, transparency, and control.",
    hero_cta_demo: "Request Demo",
    hero_cta_features: "Explore Features",
    hero_card_modern: "Modern",
    hero_card_secure: "Secure",
    hero_card_cloud: "Cloud-Native",
    
    // Demo Section
    demo_badge: "Get Started Today",
    demo_title: "Request a Demo",
    demo_subtitle: "See how Sol-Insure can transform your insurance operations. Schedule a personalized demo with our team.",
    demo_benefit_1: "Personalized walkthrough",
    demo_benefit_2: "Custom use case analysis",
    demo_benefit_3: "ROI assessment",
    demo_benefit_4: "Implementation roadmap",
    demo_form_title: "Schedule Your Demo",
    demo_form_name: "Full Name",
    demo_form_email: "Work Email",
    demo_form_company: "Company Name",
    demo_form_role: "Your Role",
    demo_form_submit: "Request Demo",
    demo_privacy: "By submitting, you agree to our Privacy Policy",
    
    // User Centric Section
    user_centric_badge: "User-First Design",
    user_centric_title: "Built for modern insurance operations",
    user_centric_subtitle: "Every feature designed with insurance professionals in mind",
    user_centric_card_1_title: "Intuitive Interface",
    user_centric_card_1_text: "Clean, modern design that reduces training time and increases productivity",
    user_centric_card_2_title: "Real-Time Analytics",
    user_centric_card_2_text: "Instant insights into your operations with customizable dashboards",
    user_centric_card_3_title: "Seamless Integration",
    user_centric_card_3_text: "Connect with your existing systems through our robust API framework",
    
    // Scalability Section
    scalability_badge: "Enterprise Scale",
    scalability_title: "Built to Scale With You",
    scalability_subtitle: "From startup MGAs to enterprise carriers, Sol-Insure grows with your business",
    scalability_card_1_title: "Unlimited Users",
    scalability_card_1_text: "Add unlimited users without performance degradation. Role-based access ensures security at scale.",
    scalability_card_2_title: "Multi-Region Deploy",
    scalability_card_2_text: "Deploy across multiple regions for compliance and performance. Data residency controls built-in.",
    scalability_card_3_title: "High Availability",
    scalability_card_3_text: "99.99% uptime SLA with automatic failover and disaster recovery capabilities.",
    scalability_stat_1_value: "99.99%",
    scalability_stat_1_label: "Uptime SLA",
    scalability_stat_2_value: "<100ms",
    scalability_stat_2_label: "API Response",
    scalability_stat_3_value: "10M+",
    scalability_stat_3_label: "Policies Managed",
    scalability_stat_4_value: "50+",
    scalability_stat_4_label: "Countries Supported",
    
    // Built for Insurers Section
    built_for_badge: "Core Values",
    built_for_title: "Built for Insurers",
    built_for_transparency: "Transparency",
    built_for_transparency_desc: "Complete visibility into every process, decision, and data point. Real-time audit trails and comprehensive reporting ensure you're always in control.",
    built_for_transparency_f1: "Real-time audit trails",
    built_for_transparency_f2: "Complete data lineage",
    built_for_transparency_f3: "Regulatory reporting",
    built_for_reliability: "Reliability",
    built_for_reliability_desc: "Enterprise-grade infrastructure with 99.99% uptime. Your operations never stop, and neither do we. Built on proven cloud technology.",
    built_for_reliability_f1: "99.99% uptime SLA",
    built_for_reliability_f2: "Disaster recovery",
    built_for_reliability_f3: "24/7 monitoring",
    built_for_innovation: "Innovation",
    built_for_innovation_desc: "Continuous evolution with AI-powered insights, predictive analytics, and automation that keeps you ahead of the competition.",
    built_for_innovation_f1: "AI-powered insights",
    built_for_innovation_f2: "Predictive analytics",
    built_for_innovation_f3: "Smart automation",
    built_for_speed: "Speed & Efficiency",
    built_for_speed_desc: "Process claims in minutes, not days. Automated workflows and intelligent routing eliminate bottlenecks and accelerate every operation.",
    built_for_speed_f1: "Instant processing",
    built_for_speed_f2: "Automated workflows",
    built_for_speed_f3: "Smart routing",
    
    // Core Features Section
    core_features_badge: "Platform Capabilities",
    core_features_title: "Everything You Need to Modernize Insurance",
    core_features_subtitle: "A complete suite of modules designed to handle every aspect of P&C insurance operations",
    core_features_api_title: "API-First Architecture",
    core_features_api_desc: "Every feature accessible via RESTful APIs. Build custom integrations, automate workflows, and extend functionality with ease.",
    core_features_api_f1: "RESTful API endpoints",
    core_features_api_f2: "Webhook support",
    core_features_api_f3: "SDK libraries",
    core_features_api_f4: "Sandbox environment",
    core_features_policy: "Policy Admin",
    core_features_policy_desc: "Complete policy lifecycle management from quote to renewal",
    core_features_claims: "Claims",
    core_features_claims_desc: "Automated FNOL, adjudication, and settlement workflows",
    core_features_billing: "Billing",
    core_features_billing_desc: "Flexible billing cycles, payment plans, and collections",
    core_features_analytics: "Analytics",
    core_features_analytics_desc: "Real-time dashboards and predictive insights",
    core_features_reinsurance: "Reinsurance",
    core_features_reinsurance_desc: "Treaty and facultative management with automated cessions",
    core_features_ifrs17: "IFRS-17",
    core_features_ifrs17_desc: "Built-in compliance with automated disclosures",
    core_features_portals: "Portals",
    core_features_portals_desc: "Self-service for agents, brokers, and policyholders",
    core_features_reserves: "Reserves",
    core_features_reserves_desc: "Actuarial tools for IBNR, case reserves, and triangles",
    
    // Core Modules Section
    core_modules_card_1_title: "Policy Administration",
    core_modules_card_1_f1: "Quote to bind automation",
    core_modules_card_1_f2: "Multi-line support",
    core_modules_card_1_f3: "Endorsement processing",
    core_modules_card_1_f4: "Renewal management",
    core_modules_card_2_title: "Claims Management",
    core_modules_card_2_f1: "FNOL automation",
    core_modules_card_2_f2: "Adjudication workflows",
    core_modules_card_2_f3: "Payment processing",
    core_modules_card_2_f4: "Fraud detection",
    core_modules_card_3_title: "Analytics & Reporting",
    core_modules_card_3_f1: "Real-time dashboards",
    core_modules_card_3_f2: "Custom report builder",
    core_modules_card_3_f3: "Predictive analytics",
    core_modules_card_3_f4: "Data visualization",
    
    // Why Sol-Insure Section
    why_badge: "Why Choose Us",
    why_title: "Why Leading Insurers Choose Sol-Insure",
    why_subtitle: "Join forward-thinking insurance companies transforming their operations",
    why_card_1_title: "Faster Time to Market",
    why_card_1_text: "Launch new products in weeks, not months. Our configurable platform eliminates lengthy development cycles.",
    why_card_2_title: "Lower Total Cost",
    why_card_2_text: "Reduce IT overhead by 40%. Cloud-native architecture means no hardware, no maintenance, no surprises.",
    why_card_3_title: "Future-Proof Technology",
    why_card_3_text: "Continuous updates and improvements. Stay ahead with AI, automation, and emerging insurance tech.",
    why_testimonial: "Sol-Insure transformed our operations. We reduced claim processing time by 60% and improved customer satisfaction scores significantly.",
    why_testimonial_author: "— Chief Operations Officer, Regional Carrier",
    why_trust_title: "Trusted by Industry Leaders",
    
    // Spotlight Section
    spotlight_intro: "Market Position",
    spotlight_main: "Sol-Insure stands at the intersection of innovation and reliability.",
    
    // Outro Section
    outro_title: "Ready to transform your insurance operations?",
    outro_cta: "Get Started",
    
    // Footer
    footer_features: "Features",
    footer_how_it_works: "How It Works",
    footer_about: "About",
    footer_contact: "Contact",
    footer_copyright: "Sol-Insure. All rights reserved.",
    
    // About Page
    about_hero_title: "Who We Are",
    about_story_title: "Our Story",
    about_story_p1: "Sol-Insure was born from a simple observation: the insurance industry deserves better technology. Founded by a team of insurance veterans and technology innovators, we set out to build the platform we wished existed.",
    about_story_p2: "Today, Sol-Insure powers insurance operations across the globe, from agile MGAs to established carriers. Our cloud-native platform combines deep insurance expertise with cutting-edge technology to deliver a solution that truly understands the business.",
    about_believe_title: "What We Believe",
    about_believe_p1: "We believe insurance technology should be an enabler, not a constraint. It should adapt to your business, not the other way around.",
    about_believe_p2: "We believe in transparency, reliability, and continuous innovation. These aren't just values—they're the principles embedded in every line of code we write.",
    about_values_title: "Brand Values",
    about_values_transparency: "Transparency",
    about_values_transparency_desc: "Open, honest, and clear in everything we do",
    about_values_reliability: "Reliability",
    about_values_reliability_desc: "Dependable technology you can count on",
    about_values_innovation: "Innovation",
    about_values_innovation_desc: "Continuously evolving to serve you better",
    about_values_speed: "Speed",
    about_values_speed_desc: "Fast, efficient, and responsive to your needs",
    about_position_title: "Market Positioning",
    about_position_p1: "Sol-Insure occupies a unique position in the insurtech landscape. We're not just another legacy system modernization play, nor are we a point solution addressing a single pain point.",
    about_position_p2: "We're a comprehensive, cloud-native platform built from the ground up for modern P&C insurance operations. Our modular architecture means you can start where you need and expand as you grow.",
    
    // Work Page (Features)
    work_title: "Full Feature Set",
    work_subtitle: "Comprehensive modules for every aspect of insurance operations",
    
    // Project Page (How It Works)
    project_title: "How Sol-Insure Works",
    project_overview_title: "Overview",
    project_overview_p1: "Sol-Insure is a comprehensive, cloud-native platform designed specifically for P&C insurance operations. Our modular architecture allows you to deploy exactly what you need, when you need it.",
    project_highlights_title: "System Highlights",
    project_highlight_1: "Cloud-native SaaS architecture",
    project_highlight_2: "Modular, API-first design",
    project_highlight_3: "Real-time data processing",
    project_highlight_4: "Enterprise-grade security",
    project_flow_title: "End-to-End Flow",
    project_flow_p1: "From initial quote to claim settlement, Sol-Insure manages the complete insurance lifecycle. Our integrated modules share data seamlessly, eliminating silos and reducing manual intervention.",
    project_flow_p2: "The platform supports multi-line operations, complex product configurations, and sophisticated workflow automation—all while maintaining the flexibility to adapt to your specific business rules.",
    project_pricing_title: "Pricing Structure",
    project_pricing_p1: "We offer flexible pricing models designed to align with your business:",
    project_pricing_item_1: "Subscription-based: Predictable monthly costs based on your usage tier",
    project_pricing_item_2: "Usage-based: Pay for what you use, scale as you grow",
    project_pricing_item_3: "Enterprise: Custom agreements for large-scale deployments",
    project_pricing_p2: "Contact us for a personalized quote tailored to your specific needs and volume.",
    
    // Contact Page
    contact_title: "Get in Touch with Sol-Insure",
    contact_subtitle: "Ready to transform your insurance operations? Let's talk.",
    contact_form_title: "How can we help?",
    contact_form_demo: "Request a Demo",
    contact_form_pricing: "Get Pricing",
    contact_form_support: "Support",
    contact_form_general: "General Inquiry",
    contact_form_name: "Your Name",
    contact_form_email: "Email Address",
    contact_form_company: "Company",
    contact_form_message: "Message",
    contact_form_submit: "Send Message",
    
    // Feature Pages Common
    feature_back: "← Back to Features",
    feature_cta_title: "Ready to Get Started?",
    feature_cta_subtitle: "See how this module can transform your operations",
    feature_cta_button: "Request Demo",
    feature_integration_title: "Seamless Integration",
    feature_integration_desc: "Works seamlessly with other Sol-Insure modules and third-party systems",
    feature_integration_api: "RESTful API",
    feature_integration_webhook: "Webhooks",
    feature_integration_sdk: "SDK Libraries",
    feature_integration_docs: "Documentation",
    
    // Policy Admin Feature
    feature_policy_title: "Policy Administration",
    feature_policy_subtitle: "Complete lifecycle management from quote to renewal",
    feature_policy_desc: "Streamline your entire policy lifecycle with our comprehensive administration module. From initial quote generation through binding, endorsements, and renewals, Sol-Insure handles it all with intelligent automation and flexible workflows.",
    feature_policy_cap_1_title: "Quote to Bind",
    feature_policy_cap_1_desc: "Generate quotes instantly with configurable rating engines. Support for complex multi-line products with automated underwriting rules.",
    feature_policy_cap_2_title: "Endorsements",
    feature_policy_cap_2_desc: "Process policy changes efficiently with automated premium calculations and document generation.",
    feature_policy_cap_3_title: "Renewals",
    feature_policy_cap_3_desc: "Automated renewal workflows with customizable retention strategies and predictive analytics.",
    feature_policy_cap_4_title: "Document Management",
    feature_policy_cap_4_desc: "Generate, store, and manage all policy documents with full version control and audit trails.",
    
    // Claims Feature
    feature_claims_title: "Claims Management",
    feature_claims_subtitle: "Streamlined claims processing from FNOL to settlement",
    feature_claims_desc: "Transform your claims operations with intelligent automation. From first notice of loss through investigation, adjudication, and settlement, our claims module reduces cycle times while improving accuracy and customer satisfaction.",
    feature_claims_cap_1_title: "FNOL Automation",
    feature_claims_cap_1_desc: "Multi-channel claim intake with intelligent data extraction and automatic coverage verification.",
    feature_claims_cap_2_title: "Adjudication",
    feature_claims_cap_2_desc: "Configurable workflows with automated decision support and fraud detection capabilities.",
    feature_claims_cap_3_title: "Payments",
    feature_claims_cap_3_desc: "Integrated payment processing with support for multiple payment methods and currencies.",
    feature_claims_cap_4_title: "Litigation Management",
    feature_claims_cap_4_desc: "Track and manage litigated claims with document management and deadline tracking.",
    
    // Billing Feature
    feature_billing_title: "Billing & Accounting",
    feature_billing_subtitle: "Complete financial management with embedded accounting",
    feature_billing_desc: "Manage all your billing operations with our comprehensive module. The embedded accounting engine handles all insurance-specific accounting internally, including premium recognition, commission calculations, and regulatory reporting.",
    feature_billing_cap_1_title: "Premium Billing",
    feature_billing_cap_1_desc: "Flexible billing cycles with support for installment plans, agency bill, and direct bill arrangements.",
    feature_billing_cap_2_title: "Embedded Accounting",
    feature_billing_cap_2_desc: "Full insurance accounting handled internally - premium recognition, loss reserves, commission accounting, and GAAP/Statutory reporting.",
    feature_billing_cap_3_title: "Collections",
    feature_billing_cap_3_desc: "Automated collections workflows with customizable dunning processes and payment plan management.",
    feature_billing_cap_4_title: "Commission Management",
    feature_billing_cap_4_desc: "Calculate and track agent/broker commissions with support for complex commission structures.",
    
    // Analytics Feature
    feature_analytics_title: "Analytics & Reporting",
    feature_analytics_subtitle: "Real-time insights and predictive intelligence",
    feature_analytics_desc: "Transform your data into actionable insights with our powerful analytics platform. From real-time operational dashboards to advanced predictive models, gain the visibility you need to make informed decisions.",
    feature_analytics_cap_1_title: "Real-Time Dashboards",
    feature_analytics_cap_1_desc: "Customizable dashboards with live data updates. Monitor KPIs, track performance, and identify trends instantly.",
    feature_analytics_cap_2_title: "Custom Reports",
    feature_analytics_cap_2_desc: "Build and schedule custom reports with our intuitive report builder. Export to multiple formats.",
    feature_analytics_cap_3_title: "Predictive Analytics",
    feature_analytics_cap_3_desc: "AI-powered models for loss prediction, customer churn, pricing optimization, and fraud detection.",
    feature_analytics_cap_4_title: "Data Visualization",
    feature_analytics_cap_4_desc: "Interactive charts, graphs, and maps to explore your data and communicate insights effectively.",
    
    // Reinsurance Feature
    feature_reinsurance_title: "Reinsurance Management",
    feature_reinsurance_subtitle: "Complete treaty and facultative management",
    feature_reinsurance_desc: "Manage your entire reinsurance program with our comprehensive module. From treaty setup through cession calculation and settlement, automate complex reinsurance operations while maintaining full audit trails.",
    feature_reinsurance_cap_1_title: "Treaty Management",
    feature_reinsurance_cap_1_desc: "Configure and manage complex treaty structures including quota share, excess of loss, and surplus treaties.",
    feature_reinsurance_cap_2_title: "Facultative",
    feature_reinsurance_cap_2_desc: "Streamline facultative placements with automated submissions and tracking.",
    feature_reinsurance_cap_3_title: "Cession Calculation",
    feature_reinsurance_cap_3_desc: "Automated cession calculations with support for complex allocation rules and contract terms.",
    feature_reinsurance_cap_4_title: "Settlement",
    feature_reinsurance_cap_4_desc: "Generate bordereau, track recoveries, and manage reinsurer settlements efficiently.",
    
    // IFRS-17 Feature
    feature_ifrs17_title: "IFRS-17 Compliance",
    feature_ifrs17_subtitle: "Built-in regulatory compliance and reporting",
    feature_ifrs17_desc: "Meet IFRS-17 requirements with our purpose-built compliance module. Automated calculations, measurement models, and disclosure reports ensure you stay compliant while minimizing manual effort.",
    feature_ifrs17_cap_1_title: "Measurement Models",
    feature_ifrs17_cap_1_desc: "Support for GMM, VFA, and PAA models with automated classification and measurement.",
    feature_ifrs17_cap_2_title: "CSM Calculation",
    feature_ifrs17_cap_2_desc: "Automated Contractual Service Margin calculations with full amortization tracking.",
    feature_ifrs17_cap_3_title: "Disclosure Reports",
    feature_ifrs17_cap_3_desc: "Generate compliant disclosure reports with all required reconciliations and breakdowns.",
    feature_ifrs17_cap_4_title: "Audit Trail",
    feature_ifrs17_cap_4_desc: "Complete audit trail for all calculations and assumptions supporting regulatory review.",
    
    // Portals Feature
    feature_portals_title: "Self-Service Portals",
    feature_portals_subtitle: "Empower agents, brokers, and policyholders",
    feature_portals_desc: "Reduce service costs and improve satisfaction with branded self-service portals. Enable agents to quote and bind, brokers to manage their book, and policyholders to access their policies anytime.",
    feature_portals_cap_1_title: "Agent Portal",
    feature_portals_cap_1_desc: "Full-featured portal for agents to quote, bind, manage policies, and track commissions.",
    feature_portals_cap_2_title: "Broker Portal",
    feature_portals_cap_2_desc: "Book management, submission tracking, and production reporting for broker partners.",
    feature_portals_cap_3_title: "Policyholder Portal",
    feature_portals_cap_3_desc: "Self-service access for policyholders to view policies, make payments, and file claims.",
    feature_portals_cap_4_title: "White-Label",
    feature_portals_cap_4_desc: "Fully customizable branding with your logos, colors, and domain for a seamless experience.",
    
    // Reserves Feature
    feature_reserves_title: "Reserve Management",
    feature_reserves_subtitle: "Actuarial tools for accurate reserve estimation",
    feature_reserves_desc: "Ensure accurate reserve estimates with our comprehensive actuarial toolkit. From case reserves through IBNR calculations, support your actuarial team with powerful tools and automation.",
    feature_reserves_cap_1_title: "Case Reserves",
    feature_reserves_cap_1_desc: "Structured case reserve setting with approval workflows and historical tracking.",
    feature_reserves_cap_2_title: "IBNR Calculation",
    feature_reserves_cap_2_desc: "Multiple IBNR methodologies including chain ladder, Bornhuetter-Ferguson, and Cape Cod.",
    feature_reserves_cap_3_title: "Triangle Analysis",
    feature_reserves_cap_3_desc: "Development triangle generation and analysis with visualization tools.",
    feature_reserves_cap_4_title: "Adequacy Testing",
    feature_reserves_cap_4_desc: "Automated reserve adequacy testing with scenario analysis capabilities.",
    
    // Language Toggle
    lang_toggle_en: "EN",
    lang_toggle_es: "ES",
  },
  
  es: {
    // Navigation
    nav_features: "Características",
    nav_how_it_works: "Cómo Funciona",
    nav_about: "Nosotros",
    nav_contact: "Contacto",
    
    // Hero Section
    hero_title: "Sol-Insure",
    hero_description: "Transforme sus operaciones de seguros con nuestra plataforma nativa en la nube. Diseñada para aseguradoras de P&C que exigen velocidad, transparencia y control.",
    hero_cta_demo: "Solicitar Demo",
    hero_cta_features: "Explorar Características",
    hero_card_modern: "Moderno",
    hero_card_secure: "Seguro",
    hero_card_cloud: "Nativo en la Nube",
    
    // Demo Section
    demo_badge: "Comience Hoy",
    demo_title: "Solicitar una Demo",
    demo_subtitle: "Descubra cómo Sol-Insure puede transformar sus operaciones de seguros. Programe una demostración personalizada con nuestro equipo.",
    demo_benefit_1: "Recorrido personalizado",
    demo_benefit_2: "Análisis de caso de uso",
    demo_benefit_3: "Evaluación de ROI",
    demo_benefit_4: "Hoja de ruta de implementación",
    demo_form_title: "Programe Su Demo",
    demo_form_name: "Nombre Completo",
    demo_form_email: "Correo Corporativo",
    demo_form_company: "Nombre de la Empresa",
    demo_form_role: "Su Cargo",
    demo_form_submit: "Solicitar Demo",
    demo_privacy: "Al enviar, acepta nuestra Política de Privacidad",
    
    // User Centric Section
    user_centric_badge: "Diseño Centrado en el Usuario",
    user_centric_title: "Construido para operaciones de seguros modernas",
    user_centric_subtitle: "Cada característica diseñada pensando en profesionales de seguros",
    user_centric_card_1_title: "Interfaz Intuitiva",
    user_centric_card_1_text: "Diseño limpio y moderno que reduce el tiempo de capacitación y aumenta la productividad",
    user_centric_card_2_title: "Análisis en Tiempo Real",
    user_centric_card_2_text: "Información instantánea sobre sus operaciones con paneles personalizables",
    user_centric_card_3_title: "Integración Perfecta",
    user_centric_card_3_text: "Conéctese con sus sistemas existentes a través de nuestro robusto marco de API",
    
    // Scalability Section
    scalability_badge: "Escala Empresarial",
    scalability_title: "Construido para Crecer con Usted",
    scalability_subtitle: "Desde MGAs emergentes hasta aseguradoras empresariales, Sol-Insure crece con su negocio",
    scalability_card_1_title: "Usuarios Ilimitados",
    scalability_card_1_text: "Agregue usuarios ilimitados sin degradación del rendimiento. El acceso basado en roles garantiza la seguridad a escala.",
    scalability_card_2_title: "Despliegue Multi-Región",
    scalability_card_2_text: "Despliegue en múltiples regiones para cumplimiento y rendimiento. Controles de residencia de datos incluidos.",
    scalability_card_3_title: "Alta Disponibilidad",
    scalability_card_3_text: "SLA de 99.99% de tiempo de actividad con conmutación automática y capacidades de recuperación ante desastres.",
    scalability_stat_1_value: "99.99%",
    scalability_stat_1_label: "SLA de Disponibilidad",
    scalability_stat_2_value: "<100ms",
    scalability_stat_2_label: "Respuesta API",
    scalability_stat_3_value: "10M+",
    scalability_stat_3_label: "Pólizas Gestionadas",
    scalability_stat_4_value: "50+",
    scalability_stat_4_label: "Países Soportados",
    
    // Built for Insurers Section
    built_for_badge: "Valores Fundamentales",
    built_for_title: "Diseñado para Aseguradoras",
    built_for_transparency: "Transparencia",
    built_for_transparency_desc: "Visibilidad completa en cada proceso, decisión y punto de datos. Trazas de auditoría en tiempo real e informes completos garantizan que siempre tenga el control.",
    built_for_transparency_f1: "Trazas de auditoría en tiempo real",
    built_for_transparency_f2: "Linaje completo de datos",
    built_for_transparency_f3: "Informes regulatorios",
    built_for_reliability: "Confiabilidad",
    built_for_reliability_desc: "Infraestructura de grado empresarial con 99.99% de disponibilidad. Sus operaciones nunca se detienen, y nosotros tampoco. Construido sobre tecnología de nube probada.",
    built_for_reliability_f1: "SLA 99.99% disponibilidad",
    built_for_reliability_f2: "Recuperación ante desastres",
    built_for_reliability_f3: "Monitoreo 24/7",
    built_for_innovation: "Innovación",
    built_for_innovation_desc: "Evolución continua con insights impulsados por IA, análisis predictivo y automatización que lo mantiene por delante de la competencia.",
    built_for_innovation_f1: "Insights impulsados por IA",
    built_for_innovation_f2: "Análisis predictivo",
    built_for_innovation_f3: "Automatización inteligente",
    built_for_speed: "Velocidad y Eficiencia",
    built_for_speed_desc: "Procese reclamos en minutos, no en días. Los flujos de trabajo automatizados y el enrutamiento inteligente eliminan cuellos de botella y aceleran cada operación.",
    built_for_speed_f1: "Procesamiento instantáneo",
    built_for_speed_f2: "Flujos automatizados",
    built_for_speed_f3: "Enrutamiento inteligente",
    
    // Core Features Section
    core_features_badge: "Capacidades de la Plataforma",
    core_features_title: "Todo lo que Necesita para Modernizar Seguros",
    core_features_subtitle: "Una suite completa de módulos diseñados para manejar cada aspecto de las operaciones de seguros P&C",
    core_features_api_title: "Arquitectura API-First",
    core_features_api_desc: "Cada característica accesible a través de APIs RESTful. Construya integraciones personalizadas, automatice flujos de trabajo y extienda la funcionalidad con facilidad.",
    core_features_api_f1: "Endpoints API RESTful",
    core_features_api_f2: "Soporte de Webhooks",
    core_features_api_f3: "Bibliotecas SDK",
    core_features_api_f4: "Entorno Sandbox",
    core_features_policy: "Admin. Pólizas",
    core_features_policy_desc: "Gestión completa del ciclo de vida de pólizas desde cotización hasta renovación",
    core_features_claims: "Reclamos",
    core_features_claims_desc: "Flujos automatizados de FNOL, adjudicación y liquidación",
    core_features_billing: "Facturación",
    core_features_billing_desc: "Ciclos flexibles de facturación, planes de pago y cobranzas",
    core_features_analytics: "Análisis",
    core_features_analytics_desc: "Paneles en tiempo real e insights predictivos",
    core_features_reinsurance: "Reaseguro",
    core_features_reinsurance_desc: "Gestión de tratados y facultativos con cesiones automatizadas",
    core_features_ifrs17: "IFRS-17",
    core_features_ifrs17_desc: "Cumplimiento integrado con divulgaciones automatizadas",
    core_features_portals: "Portales",
    core_features_portals_desc: "Autoservicio para agentes, corredores y asegurados",
    core_features_reserves: "Reservas",
    core_features_reserves_desc: "Herramientas actuariales para IBNR, reservas de casos y triángulos",
    
    // Core Modules Section
    core_modules_card_1_title: "Administración de Pólizas",
    core_modules_card_1_f1: "Automatización cotización a emisión",
    core_modules_card_1_f2: "Soporte multi-línea",
    core_modules_card_1_f3: "Procesamiento de endosos",
    core_modules_card_1_f4: "Gestión de renovaciones",
    core_modules_card_2_title: "Gestión de Reclamos",
    core_modules_card_2_f1: "Automatización FNOL",
    core_modules_card_2_f2: "Flujos de adjudicación",
    core_modules_card_2_f3: "Procesamiento de pagos",
    core_modules_card_2_f4: "Detección de fraude",
    core_modules_card_3_title: "Análisis e Informes",
    core_modules_card_3_f1: "Paneles en tiempo real",
    core_modules_card_3_f2: "Constructor de informes",
    core_modules_card_3_f3: "Análisis predictivo",
    core_modules_card_3_f4: "Visualización de datos",
    
    // Why Sol-Insure Section
    why_badge: "Por Qué Elegirnos",
    why_title: "Por Qué las Aseguradoras Líderes Eligen Sol-Insure",
    why_subtitle: "Únase a las compañías de seguros innovadoras que están transformando sus operaciones",
    why_card_1_title: "Tiempo al Mercado Más Rápido",
    why_card_1_text: "Lance nuevos productos en semanas, no meses. Nuestra plataforma configurable elimina largos ciclos de desarrollo.",
    why_card_2_title: "Menor Costo Total",
    why_card_2_text: "Reduzca los gastos de TI en un 40%. La arquitectura nativa en la nube significa sin hardware, sin mantenimiento, sin sorpresas.",
    why_card_3_title: "Tecnología a Prueba de Futuro",
    why_card_3_text: "Actualizaciones y mejoras continuas. Manténgase adelante con IA, automatización y tecnología de seguros emergente.",
    why_testimonial: "Sol-Insure transformó nuestras operaciones. Redujimos el tiempo de procesamiento de reclamos en un 60% y mejoramos significativamente las puntuaciones de satisfacción del cliente.",
    why_testimonial_author: "— Director de Operaciones, Aseguradora Regional",
    why_trust_title: "Confianza de Líderes de la Industria",
    
    // Spotlight Section
    spotlight_intro: "Posición en el Mercado",
    spotlight_main: "Sol-Insure se encuentra en la intersección de la innovación y la confiabilidad.",
    
    // Outro Section
    outro_title: "¿Listo para transformar sus operaciones de seguros?",
    outro_cta: "Comenzar",
    
    // Footer
    footer_features: "Características",
    footer_how_it_works: "Cómo Funciona",
    footer_about: "Nosotros",
    footer_contact: "Contacto",
    footer_copyright: "Sol-Insure. Todos los derechos reservados.",
    
    // About Page
    about_hero_title: "Quiénes Somos",
    about_story_title: "Nuestra Historia",
    about_story_p1: "Sol-Insure nació de una simple observación: la industria de seguros merece mejor tecnología. Fundada por un equipo de veteranos de seguros e innovadores tecnológicos, nos propusimos construir la plataforma que deseábamos que existiera.",
    about_story_p2: "Hoy, Sol-Insure impulsa operaciones de seguros en todo el mundo, desde MGAs ágiles hasta aseguradoras establecidas. Nuestra plataforma nativa en la nube combina profunda experiencia en seguros con tecnología de vanguardia para ofrecer una solución que realmente entiende el negocio.",
    about_believe_title: "Lo Que Creemos",
    about_believe_p1: "Creemos que la tecnología de seguros debe ser un habilitador, no una restricción. Debe adaptarse a su negocio, no al revés.",
    about_believe_p2: "Creemos en la transparencia, la confiabilidad y la innovación continua. Estos no son solo valores, son los principios incorporados en cada línea de código que escribimos.",
    about_values_title: "Valores de Marca",
    about_values_transparency: "Transparencia",
    about_values_transparency_desc: "Abiertos, honestos y claros en todo lo que hacemos",
    about_values_reliability: "Confiabilidad",
    about_values_reliability_desc: "Tecnología confiable en la que puede confiar",
    about_values_innovation: "Innovación",
    about_values_innovation_desc: "Evolucionando continuamente para servirle mejor",
    about_values_speed: "Velocidad",
    about_values_speed_desc: "Rápido, eficiente y receptivo a sus necesidades",
    about_position_title: "Posicionamiento en el Mercado",
    about_position_p1: "Sol-Insure ocupa una posición única en el panorama insurtech. No somos simplemente otra propuesta de modernización de sistemas legacy, ni somos una solución puntual que aborda un solo punto de dolor.",
    about_position_p2: "Somos una plataforma integral, nativa en la nube, construida desde cero para operaciones modernas de seguros P&C. Nuestra arquitectura modular significa que puede comenzar donde lo necesite y expandirse a medida que crece.",
    
    // Work Page (Features)
    work_title: "Conjunto Completo de Características",
    work_subtitle: "Módulos integrales para cada aspecto de las operaciones de seguros",
    
    // Project Page (How It Works)
    project_title: "Cómo Funciona Sol-Insure",
    project_overview_title: "Visión General",
    project_overview_p1: "Sol-Insure es una plataforma integral nativa en la nube diseñada específicamente para operaciones de seguros P&C. Nuestra arquitectura modular le permite desplegar exactamente lo que necesita, cuando lo necesita.",
    project_highlights_title: "Aspectos Destacados del Sistema",
    project_highlight_1: "Arquitectura SaaS nativa en la nube",
    project_highlight_2: "Diseño modular API-first",
    project_highlight_3: "Procesamiento de datos en tiempo real",
    project_highlight_4: "Seguridad de grado empresarial",
    project_flow_title: "Flujo de Extremo a Extremo",
    project_flow_p1: "Desde la cotización inicial hasta la liquidación de reclamos, Sol-Insure gestiona el ciclo de vida completo del seguro. Nuestros módulos integrados comparten datos sin problemas, eliminando silos y reduciendo la intervención manual.",
    project_flow_p2: "La plataforma soporta operaciones multi-línea, configuraciones de productos complejas y automatización sofisticada de flujos de trabajo, todo mientras mantiene la flexibilidad para adaptarse a sus reglas de negocio específicas.",
    project_pricing_title: "Estructura de Precios",
    project_pricing_p1: "Ofrecemos modelos de precios flexibles diseñados para alinearse con su negocio:",
    project_pricing_item_1: "Basado en suscripción: Costos mensuales predecibles según su nivel de uso",
    project_pricing_item_2: "Basado en uso: Pague por lo que usa, escale a medida que crece",
    project_pricing_item_3: "Empresarial: Acuerdos personalizados para despliegues a gran escala",
    project_pricing_p2: "Contáctenos para una cotización personalizada adaptada a sus necesidades y volumen específicos.",
    
    // Contact Page
    contact_title: "Póngase en Contacto con Sol-Insure",
    contact_subtitle: "¿Listo para transformar sus operaciones de seguros? Hablemos.",
    contact_form_title: "¿Cómo podemos ayudarle?",
    contact_form_demo: "Solicitar una Demo",
    contact_form_pricing: "Obtener Precios",
    contact_form_support: "Soporte",
    contact_form_general: "Consulta General",
    contact_form_name: "Su Nombre",
    contact_form_email: "Correo Electrónico",
    contact_form_company: "Empresa",
    contact_form_message: "Mensaje",
    contact_form_submit: "Enviar Mensaje",
    
    // Feature Pages Common
    feature_back: "← Volver a Características",
    feature_cta_title: "¿Listo para Comenzar?",
    feature_cta_subtitle: "Descubra cómo este módulo puede transformar sus operaciones",
    feature_cta_button: "Solicitar Demo",
    feature_integration_title: "Integración Perfecta",
    feature_integration_desc: "Funciona perfectamente con otros módulos de Sol-Insure y sistemas de terceros",
    feature_integration_api: "API RESTful",
    feature_integration_webhook: "Webhooks",
    feature_integration_sdk: "Bibliotecas SDK",
    feature_integration_docs: "Documentación",
    
    // Policy Admin Feature
    feature_policy_title: "Administración de Pólizas",
    feature_policy_subtitle: "Gestión completa del ciclo de vida desde cotización hasta renovación",
    feature_policy_desc: "Optimice todo el ciclo de vida de sus pólizas con nuestro módulo integral de administración. Desde la generación inicial de cotizaciones hasta la emisión, endosos y renovaciones, Sol-Insure lo maneja todo con automatización inteligente y flujos de trabajo flexibles.",
    feature_policy_cap_1_title: "Cotización a Emisión",
    feature_policy_cap_1_desc: "Genere cotizaciones instantáneamente con motores de tarificación configurables. Soporte para productos multi-línea complejos con reglas de suscripción automatizadas.",
    feature_policy_cap_2_title: "Endosos",
    feature_policy_cap_2_desc: "Procese cambios de pólizas eficientemente con cálculos de primas automatizados y generación de documentos.",
    feature_policy_cap_3_title: "Renovaciones",
    feature_policy_cap_3_desc: "Flujos de trabajo de renovación automatizados con estrategias de retención personalizables y análisis predictivo.",
    feature_policy_cap_4_title: "Gestión de Documentos",
    feature_policy_cap_4_desc: "Genere, almacene y gestione todos los documentos de pólizas con control de versiones completo y trazas de auditoría.",
    
    // Claims Feature
    feature_claims_title: "Gestión de Reclamos",
    feature_claims_subtitle: "Procesamiento optimizado de reclamos desde FNOL hasta liquidación",
    feature_claims_desc: "Transforme sus operaciones de reclamos con automatización inteligente. Desde la primera notificación de pérdida hasta la investigación, adjudicación y liquidación, nuestro módulo de reclamos reduce los tiempos de ciclo mientras mejora la precisión y la satisfacción del cliente.",
    feature_claims_cap_1_title: "Automatización FNOL",
    feature_claims_cap_1_desc: "Recepción de reclamos multicanal con extracción inteligente de datos y verificación automática de cobertura.",
    feature_claims_cap_2_title: "Adjudicación",
    feature_claims_cap_2_desc: "Flujos de trabajo configurables con soporte de decisiones automatizado y capacidades de detección de fraude.",
    feature_claims_cap_3_title: "Pagos",
    feature_claims_cap_3_desc: "Procesamiento de pagos integrado con soporte para múltiples métodos de pago y monedas.",
    feature_claims_cap_4_title: "Gestión de Litigios",
    feature_claims_cap_4_desc: "Rastree y gestione reclamos litigados con gestión de documentos y seguimiento de plazos.",
    
    // Billing Feature
    feature_billing_title: "Facturación y Contabilidad",
    feature_billing_subtitle: "Gestión financiera completa con contabilidad integrada",
    feature_billing_desc: "Gestione todas sus operaciones de facturación con nuestro módulo integral. El motor de contabilidad integrado maneja toda la contabilidad específica de seguros internamente, incluyendo reconocimiento de primas, cálculo de comisiones e informes regulatorios.",
    feature_billing_cap_1_title: "Facturación de Primas",
    feature_billing_cap_1_desc: "Ciclos de facturación flexibles con soporte para planes de cuotas, facturación por agencia y arreglos de facturación directa.",
    feature_billing_cap_2_title: "Contabilidad Integrada",
    feature_billing_cap_2_desc: "Contabilidad de seguros completa manejada internamente - reconocimiento de primas, reservas de pérdidas, contabilidad de comisiones e informes GAAP/Estatutarios.",
    feature_billing_cap_3_title: "Cobranzas",
    feature_billing_cap_3_desc: "Flujos de trabajo de cobranza automatizados con procesos de morosidad personalizables y gestión de planes de pago.",
    feature_billing_cap_4_title: "Gestión de Comisiones",
    feature_billing_cap_4_desc: "Calcule y rastree comisiones de agentes/corredores con soporte para estructuras de comisiones complejas.",
    
    // Analytics Feature
    feature_analytics_title: "Análisis e Informes",
    feature_analytics_subtitle: "Insights en tiempo real e inteligencia predictiva",
    feature_analytics_desc: "Transforme sus datos en insights accionables con nuestra poderosa plataforma de análisis. Desde paneles operacionales en tiempo real hasta modelos predictivos avanzados, obtenga la visibilidad que necesita para tomar decisiones informadas.",
    feature_analytics_cap_1_title: "Paneles en Tiempo Real",
    feature_analytics_cap_1_desc: "Paneles personalizables con actualizaciones de datos en vivo. Monitoree KPIs, rastree rendimiento e identifique tendencias instantáneamente.",
    feature_analytics_cap_2_title: "Informes Personalizados",
    feature_analytics_cap_2_desc: "Construya y programe informes personalizados con nuestro constructor de informes intuitivo. Exporte a múltiples formatos.",
    feature_analytics_cap_3_title: "Análisis Predictivo",
    feature_analytics_cap_3_desc: "Modelos impulsados por IA para predicción de pérdidas, deserción de clientes, optimización de precios y detección de fraude.",
    feature_analytics_cap_4_title: "Visualización de Datos",
    feature_analytics_cap_4_desc: "Gráficos, tablas y mapas interactivos para explorar sus datos y comunicar insights efectivamente.",
    
    // Reinsurance Feature
    feature_reinsurance_title: "Gestión de Reaseguro",
    feature_reinsurance_subtitle: "Gestión completa de tratados y facultativos",
    feature_reinsurance_desc: "Gestione todo su programa de reaseguro con nuestro módulo integral. Desde la configuración de tratados hasta el cálculo de cesiones y liquidación, automatice operaciones complejas de reaseguro manteniendo trazas de auditoría completas.",
    feature_reinsurance_cap_1_title: "Gestión de Tratados",
    feature_reinsurance_cap_1_desc: "Configure y gestione estructuras de tratados complejas incluyendo cuota parte, exceso de pérdida y tratados de excedente.",
    feature_reinsurance_cap_2_title: "Facultativo",
    feature_reinsurance_cap_2_desc: "Optimice colocaciones facultativas con presentaciones y seguimiento automatizados.",
    feature_reinsurance_cap_3_title: "Cálculo de Cesiones",
    feature_reinsurance_cap_3_desc: "Cálculos de cesión automatizados con soporte para reglas de asignación complejas y términos de contrato.",
    feature_reinsurance_cap_4_title: "Liquidación",
    feature_reinsurance_cap_4_desc: "Genere bordereau, rastree recuperaciones y gestione liquidaciones con reaseguradores eficientemente.",
    
    // IFRS-17 Feature
    feature_ifrs17_title: "Cumplimiento IFRS-17",
    feature_ifrs17_subtitle: "Cumplimiento regulatorio integrado e informes",
    feature_ifrs17_desc: "Cumpla con los requisitos de IFRS-17 con nuestro módulo de cumplimiento diseñado específicamente. Cálculos automatizados, modelos de medición e informes de divulgación aseguran que se mantenga en cumplimiento mientras minimiza el esfuerzo manual.",
    feature_ifrs17_cap_1_title: "Modelos de Medición",
    feature_ifrs17_cap_1_desc: "Soporte para modelos GMM, VFA y PAA con clasificación y medición automatizadas.",
    feature_ifrs17_cap_2_title: "Cálculo CSM",
    feature_ifrs17_cap_2_desc: "Cálculos automatizados del Margen de Servicio Contractual con seguimiento completo de amortización.",
    feature_ifrs17_cap_3_title: "Informes de Divulgación",
    feature_ifrs17_cap_3_desc: "Genere informes de divulgación conformes con todas las reconciliaciones y desgloses requeridos.",
    feature_ifrs17_cap_4_title: "Traza de Auditoría",
    feature_ifrs17_cap_4_desc: "Traza de auditoría completa para todos los cálculos y supuestos que soportan la revisión regulatoria.",
    
    // Portals Feature
    feature_portals_title: "Portales de Autoservicio",
    feature_portals_subtitle: "Empodere a agentes, corredores y asegurados",
    feature_portals_desc: "Reduzca costos de servicio y mejore la satisfacción con portales de autoservicio personalizados. Permita que los agentes coticen y emitan, que los corredores gestionen su cartera, y que los asegurados accedan a sus pólizas en cualquier momento.",
    feature_portals_cap_1_title: "Portal de Agentes",
    feature_portals_cap_1_desc: "Portal completo para que los agentes coticen, emitan, gestionen pólizas y rastreen comisiones.",
    feature_portals_cap_2_title: "Portal de Corredores",
    feature_portals_cap_2_desc: "Gestión de cartera, seguimiento de presentaciones e informes de producción para socios corredores.",
    feature_portals_cap_3_title: "Portal de Asegurados",
    feature_portals_cap_3_desc: "Acceso de autoservicio para que los asegurados vean pólizas, realicen pagos y presenten reclamos.",
    feature_portals_cap_4_title: "Marca Blanca",
    feature_portals_cap_4_desc: "Personalización completa con sus logos, colores y dominio para una experiencia perfecta.",
    
    // Reserves Feature
    feature_reserves_title: "Gestión de Reservas",
    feature_reserves_subtitle: "Herramientas actuariales para estimación precisa de reservas",
    feature_reserves_desc: "Asegure estimaciones de reservas precisas con nuestro kit de herramientas actuariales integral. Desde reservas de casos hasta cálculos de IBNR, apoye a su equipo actuarial con herramientas poderosas y automatización.",
    feature_reserves_cap_1_title: "Reservas de Casos",
    feature_reserves_cap_1_desc: "Establecimiento estructurado de reservas de casos con flujos de trabajo de aprobación y seguimiento histórico.",
    feature_reserves_cap_2_title: "Cálculo IBNR",
    feature_reserves_cap_2_desc: "Múltiples metodologías IBNR incluyendo chain ladder, Bornhuetter-Ferguson y Cape Cod.",
    feature_reserves_cap_3_title: "Análisis de Triángulos",
    feature_reserves_cap_3_desc: "Generación y análisis de triángulos de desarrollo con herramientas de visualización.",
    feature_reserves_cap_4_title: "Pruebas de Suficiencia",
    feature_reserves_cap_4_desc: "Pruebas automatizadas de suficiencia de reservas con capacidades de análisis de escenarios.",
    
    // Language Toggle
    lang_toggle_en: "EN",
    lang_toggle_es: "ES",
  }
};

// Get current language from localStorage or default to English
function getCurrentLanguage() {
  return localStorage.getItem('sol-insure-lang') || 'en';
}

// Set language preference
function setLanguage(lang) {
  localStorage.setItem('sol-insure-lang', lang);
  applyTranslations(lang);
  updateLanguageToggle(lang);
}

// Apply translations to all elements with data-i18n attribute
function applyTranslations(lang) {
  const t = translations[lang];
  if (!t) return;
  
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    if (t[key]) {
      // Check if it's an input placeholder
      if (element.hasAttribute('placeholder')) {
        element.placeholder = t[key];
      } else {
        element.textContent = t[key];
      }
    }
  });
  
  // Update HTML lang attribute
  document.documentElement.lang = lang;
}

// Update language toggle UI
function updateLanguageToggle(lang) {
  const enBtn = document.querySelector('.lang-btn[data-lang="en"]');
  const esBtn = document.querySelector('.lang-btn[data-lang="es"]');
  
  if (enBtn && esBtn) {
    enBtn.classList.toggle('active', lang === 'en');
    esBtn.classList.toggle('active', lang === 'es');
  }
}

// Initialize i18n on page load
function initI18n() {
  const currentLang = getCurrentLanguage();
  applyTranslations(currentLang);
  updateLanguageToggle(currentLang);
  
  // Add click handlers to language toggle buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const lang = btn.getAttribute('data-lang');
      setLanguage(lang);
    });
  });
}

// Export for use in other modules
export { translations, getCurrentLanguage, setLanguage, applyTranslations, initI18n };

