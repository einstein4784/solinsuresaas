/**
 * Sol-Insure AI Chatbot
 * Intelligent assistant trained on Sol-Insure platform knowledge
 */

// Knowledge Base - Comprehensive information about Sol-Insure
const knowledgeBase = {
  // General Information
  general: {
    keywords: ['what is', 'tell me about', 'explain', 'sol-insure', 'solinsure', 'platform', 'software', 'company', 'who'],
    responses: [
      {
        match: ['what is sol-insure', 'what is solinsure', 'about sol-insure', 'tell me about'],
        answer: "Sol-Insure is a modern, cloud-native Property & Casualty (P&C) insurance platform built for insurers in emerging markets. We provide end-to-end insurance operations management including policy administration, claims processing, billing, reinsurance, and IFRS-17 compliance—all powered by AI for faster, smarter decisions."
      },
      {
        match: ['who', 'company', 'background', 'history'],
        answer: "Sol-Insure was founded in 2005 with a vision to modernize insurance operations. Over nearly 20 years, we've evolved from a simple database solution to a comprehensive cloud-native SaaS platform. We're headquartered in Port of Spain, Trinidad, and serve insurers across the Caribbean and beyond."
      }
    ]
  },

  // Features
  features: {
    keywords: ['feature', 'module', 'capability', 'function', 'what can', 'does it', 'offer'],
    responses: [
      {
        match: ['features', 'modules', 'capabilities', 'what can it do', 'what does it offer'],
        answer: "Sol-Insure offers 8 core modules:\n\n📋 **Policy Administration** - End-to-end policy lifecycle management\n📝 **Claims Management** - Streamlined FNOL to settlement\n💳 **Billing & Accounting** - Premium billing and financial reporting\n📊 **Analytics & Reporting** - Real-time dashboards and KPIs\n🔄 **Reinsurance** - Treaty and facultative management\n📑 **IFRS-17 Compliance** - Built-in regulatory compliance\n🌐 **Self-Service Portals** - Agent, broker, and customer portals\n💰 **Reserve Management** - Actuarial reserving tools\n\nWould you like details on any specific module?"
      },
      {
        match: ['policy', 'administration', 'policy admin'],
        answer: "Our **Policy Administration** module provides complete policy lifecycle management:\n\n• Quote-to-bind in under 60 seconds\n• Flexible product configuration for any line of business\n• Automated endorsements and renewals\n• Real-time premium calculations\n• Document generation and e-signatures\n• 90% faster policy processing compared to legacy systems\n\nIt integrates seamlessly with billing, claims, and reinsurance modules."
      },
      {
        match: ['claims', 'claim management', 'fnol'],
        answer: "Our **Claims Management** module streamlines the entire claims process:\n\n• Digital FNOL (First Notice of Loss) capture\n• Automated claim assignment and workflow\n• Reserve tracking and management\n• Settlement processing\n• Recovery and subrogation handling\n• 70% faster claims resolution\n\nThe module includes fraud detection powered by AI to identify suspicious claims patterns."
      },
      {
        match: ['billing', 'accounting', 'payment', 'premium'],
        answer: "Our **Billing & Accounting** module handles all financial operations:\n\n• Flexible premium billing schedules\n• Automated payment processing\n• Commission calculations and disbursements\n• Integrated general ledger\n• Bank reconciliation\n• Financial reporting (trial balance, P&L, balance sheet)\n• 95% collection automation\n\nAll accounting is handled internally—no need for external accounting software."
      },
      {
        match: ['analytics', 'reporting', 'dashboard', 'kpi'],
        answer: "Our **Analytics & Reporting** module provides real-time business intelligence:\n\n• Interactive dashboards with live data\n• 50+ pre-built reports\n• Custom report builder\n• Key Performance Indicators (KPIs)\n• Loss ratio analysis\n• Portfolio performance tracking\n• Export to Excel, PDF, and more\n\nMake data-driven decisions with insights at your fingertips."
      },
      {
        match: ['reinsurance', 'treaty', 'facultative', 'cession'],
        answer: "Our **Reinsurance** module manages all reinsurance arrangements:\n\n• Treaty and facultative support\n• Automated cession calculations\n• Recovery processing\n• Reinsurer statement generation\n• Bordereaux reporting\n• Multiple treaty structures (quota share, surplus, XOL)\n\nStreamline your reinsurance operations and improve accuracy."
      },
      {
        match: ['ifrs', 'ifrs-17', 'ifrs17', 'compliance', 'regulatory'],
        answer: "Our **IFRS-17 Compliance** module ensures regulatory adherence:\n\n• Automated CSM (Contractual Service Margin) calculations\n• GMM, PAA, and VFA measurement models\n• Risk adjustment calculations\n• Comprehensive audit trails\n• Regulatory report generation\n• 100% compliance ready\n\nStay compliant without the complexity of manual calculations."
      },
      {
        match: ['portal', 'self-service', 'agent portal', 'customer portal'],
        answer: "Our **Self-Service Portals** empower all stakeholders:\n\n**Agent Portal:**\n• Quote and bind policies\n• Manage renewals\n• Track commissions\n\n**Broker Portal:**\n• Multi-insurer access\n• Comparative quotes\n• Business analytics\n\n**Customer Portal:**\n• View policy details\n• File claims\n• Make payments\n• Download documents\n\n24/7 self-service access reduces support workload by 60%."
      },
      {
        match: ['reserve', 'reserving', 'ibnr', 'actuarial'],
        answer: "Our **Reserve Management** module provides accurate loss reserving:\n\n• Case reserve tracking\n• IBNR (Incurred But Not Reported) calculations\n• Chain ladder and other actuarial methods\n• Development triangle analysis\n• Reserve adequacy testing\n• Automated reserve posting\n\nMaintain accurate reserves with confidence."
      }
    ]
  },

  // Pricing
  pricing: {
    keywords: ['price', 'cost', 'pricing', 'how much', 'subscription', 'plan', 'package', 'fee', 'afford'],
    responses: [
      {
        match: ['pricing', 'price', 'cost', 'how much', 'packages'],
        answer: "Sol-Insure offers flexible pricing to fit your needs:\n\n💼 **Starter** - $2,499/month\nPerfect for small insurers, includes core modules\n\n🏢 **Professional** - $4,999/month\nFull platform access with advanced features\n\n🏛️ **Enterprise** - $9,999/month\nUnlimited users, priority support, custom development\n\n🎯 **Custom** - Contact us\nBuild your own package with only the modules you need\n\nAll plans include implementation support and training. Want to discuss which plan is right for you?"
      },
      {
        match: ['custom', 'build your own', 'module pricing', 'select modules'],
        answer: "Our **Custom Package** lets you select exactly what you need:\n\n**Base Package** (required) - $1,499/month\n• Policy Administration\n• Customer Management\n• Basic Accounting\n\n**Add-On Modules:**\n• Claims Management - $500/month\n• Advanced Analytics - $400/month\n• Reinsurance - $400/month\n• IFRS-17 - $600/month\n• Agent Portal - $300/month\n• Customer Portal - $300/month\n• Reserve Management - $400/month\n• API Access - $500/month\n\nContact us for a personalized quote!"
      },
      {
        match: ['free trial', 'demo', 'try'],
        answer: "Yes! We offer:\n\n🎯 **Free Demo** - See Sol-Insure in action with a personalized walkthrough\n⏱️ **14-Day Free Trial** - Test the platform with your own data\n\nNo credit card required for the trial. Schedule a demo at sol-insure.com/contact or call us at 1 (868) 460-3788."
      }
    ]
  },

  // AI & Technology
  ai: {
    keywords: ['ai', 'artificial intelligence', 'machine learning', 'automation', 'smart', 'intelligent', 'technology'],
    responses: [
      {
        match: ['ai', 'artificial intelligence', 'machine learning'],
        answer: "Sol-Insure leverages AI across the platform:\n\n🧠 **Intelligent Underwriting**\n• Real-time risk scoring (0-100)\n• 95% faster decisions\n• Dynamic premium optimization\n\n📊 **Predictive Claims**\n• Severity prediction\n• Fraud detection (89% accuracy)\n• Settlement cost forecasting\n\n🔒 **Compliance Automation**\n• AML/KYC screening\n• Sanctions list monitoring\n• Automated regulatory reporting\n\n📈 **Portfolio Analytics**\n• Trend identification\n• Risk segmentation\n• Pricing optimization\n\nOur AI helps you make faster, smarter decisions while reducing costs by up to 40%."
      },
      {
        match: ['fraud', 'detection', 'suspicious'],
        answer: "Our AI-powered **Fraud Detection** system:\n\n• Analyzes 200+ data points per claim\n• Pattern recognition across historical data\n• Anomaly detection for unusual claims\n• Real-time fraud scoring\n• Automated flagging for investigation\n• $2.4M+ fraud prevented annually on average\n\nProtect your loss ratio with intelligent fraud prevention."
      },
      {
        match: ['automation', 'automate', 'automated'],
        answer: "Sol-Insure automates key insurance processes:\n\n✅ Quote generation - Instant quotes in seconds\n✅ Policy issuance - 60x faster than manual\n✅ Premium calculation - Real-time, error-free\n✅ Claims workflow - Automated assignment and tracking\n✅ Billing - 95% collection automation\n✅ Compliance - Continuous monitoring\n✅ Reporting - Scheduled and on-demand\n\nFree your team to focus on high-value activities."
      }
    ]
  },

  // Implementation & Onboarding
  implementation: {
    keywords: ['implement', 'onboard', 'setup', 'start', 'migrate', 'go live', 'timeline', 'how long'],
    responses: [
      {
        match: ['implementation', 'onboarding', 'setup', 'how long', 'timeline'],
        answer: "Our **Self-Onboarding** process gets you live quickly:\n\n**Week 1-2: Configuration**\n• Product setup and rate tables\n• Business rules configuration\n• User roles and permissions\n\n**Week 2-3: Data Migration**\n• Import existing policies\n• Historical data transfer\n• Data validation\n\n**Week 3-4: Testing & Go-Live**\n• User acceptance testing\n• Staff training\n• Production launch\n\n🚀 **Average time to go-live: 14 days**\n\nWe provide hypercare support during your first week live."
      },
      {
        match: ['data migration', 'import', 'existing data', 'migrate'],
        answer: "We make data migration seamless:\n\n**Supported Formats:**\n• CSV/Excel files\n• Database exports\n• API integration\n• PDF extraction (with AI)\n\n**What We Migrate:**\n• Active policies\n• Historical claims\n• Customer data\n• Agent/broker information\n• Financial records\n\nOur team assists with data mapping and validation to ensure accuracy."
      },
      {
        match: ['training', 'learn', 'support', 'help'],
        answer: "We provide comprehensive training and support:\n\n📚 **Training:**\n• Live virtual training sessions\n• Video tutorials library\n• Interactive documentation\n• Role-based training paths\n\n🛠️ **Support:**\n• 24/7 technical support\n• Dedicated customer success manager\n• Knowledge base and FAQs\n• Community forums\n\nEmail: saas@solace-systems.com\nPhone: 1 (868) 460-3788"
      }
    ]
  },

  // Compliance & Security
  compliance: {
    keywords: ['compliance', 'security', 'kyc', 'aml', 'sanctions', 'gdpr', 'data', 'secure', 'safe'],
    responses: [
      {
        match: ['kyc', 'aml', 'sanctions', 'screening'],
        answer: "Sol-Insure includes robust **Compliance Intelligence**:\n\n🔍 **KYC Verification**\n• Identity document validation\n• Biometric verification\n• Address verification\n\n🚨 **AML Screening**\n• Real-time transaction monitoring\n• Suspicious activity detection\n• Automated SAR filing\n\n🌍 **Sanctions Screening**\n• OFAC, UN, EU watchlists\n• PEP database checks\n• Adverse media monitoring\n\nWe integrate with 15+ global verification providers including Trulioo, Onfido, LexisNexis, and more."
      },
      {
        match: ['security', 'secure', 'safe', 'data protection'],
        answer: "Sol-Insure maintains enterprise-grade security:\n\n🔐 **Certifications:**\n• SOC 2 Type II certified\n• ISO 27001 compliant\n• GDPR ready\n\n🛡️ **Security Features:**\n• End-to-end encryption\n• Multi-factor authentication\n• Role-based access control\n• Comprehensive audit logs\n• Regular penetration testing\n\n☁️ **Infrastructure:**\n• Cloud-hosted on AWS\n• 99.99% uptime SLA\n• Automatic backups\n• Disaster recovery\n\nYour data is safe with us."
      }
    ]
  },

  // Integration & API
  integration: {
    keywords: ['integrate', 'integration', 'api', 'connect', 'third party', 'webhook'],
    responses: [
      {
        match: ['integration', 'integrate', 'connect', 'api'],
        answer: "Sol-Insure offers extensive integration capabilities:\n\n🔌 **API Access:**\n• RESTful APIs for all modules\n• Real-time webhooks\n• GraphQL support\n• Comprehensive documentation\n\n🔗 **Pre-Built Integrations:**\n• Payment gateways (Stripe, PayPal)\n• Document management\n• Email providers\n• SMS services\n• Accounting software\n• CRM systems\n\n🚗 **Vehicle Databases:**\n• Connect to national vehicle registries\n• VIN decoding\n• Market value lookups\n\nOur API enables you to build the ecosystem you need."
      }
    ]
  },

  // Contact & Support
  contact: {
    keywords: ['contact', 'reach', 'call', 'email', 'phone', 'talk', 'demo', 'sales', 'location', 'address'],
    responses: [
      {
        match: ['contact', 'reach', 'get in touch', 'talk to'],
        answer: "We'd love to hear from you! 📞\n\n**Email:** saas@solace-systems.com\n**Phone:** 1 (868) 460-3788\n**Location:** Port of Spain, Trinidad\n\n**Quick Links:**\n• Schedule a Demo: /contact\n• View Pricing: /pricing\n• Explore Features: /work\n\nOur team is available Monday-Friday, 8am-6pm EST."
      },
      {
        match: ['demo', 'demonstration', 'see it', 'show me'],
        answer: "Ready to see Sol-Insure in action? 🎯\n\nSchedule a personalized demo where we'll:\n• Show you the platform tailored to your needs\n• Answer all your questions\n• Discuss implementation timeline\n• Provide a custom quote\n\n👉 Visit /contact or call 1 (868) 460-3788\n\nDemos typically last 30-45 minutes."
      }
    ]
  },

  // Comparisons & Benefits
  benefits: {
    keywords: ['why', 'benefit', 'advantage', 'better', 'compare', 'vs', 'versus', 'different'],
    responses: [
      {
        match: ['why sol-insure', 'why choose', 'benefits', 'advantages'],
        answer: "Why insurers choose Sol-Insure:\n\n⚡ **Speed**\n• Go live in 14 days\n• 60x faster policy issuance\n• 70% faster claims\n\n💰 **Cost Savings**\n• 40% reduction in operational costs\n• No hardware investment\n• Predictable monthly pricing\n\n🎯 **Modern Technology**\n• Cloud-native SaaS\n• AI-powered intelligence\n• Mobile-ready\n\n🔧 **Flexibility**\n• Configure without coding\n• Scale as you grow\n• Add modules as needed\n\n🤝 **Support**\n• Dedicated success manager\n• 24/7 support\n• Continuous updates\n\nWe're purpose-built for emerging markets!"
      },
      {
        match: ['legacy', 'old system', 'replace', 'upgrade'],
        answer: "Replacing your legacy system? Here's how Sol-Insure helps:\n\n❌ **Legacy Pain Points:**\n• Slow, manual processes\n• Siloed data\n• Expensive maintenance\n• Limited reporting\n• No mobile access\n\n✅ **Sol-Insure Solutions:**\n• Automated workflows\n• Unified platform\n• All-inclusive pricing\n• Real-time analytics\n• Access anywhere\n\nWe've helped 50+ insurers modernize their operations. Let us help you too!"
      }
    ]
  }
};

// Chatbot UI and Logic
class SolInsureChatbot {
  constructor() {
    this.isOpen = false;
    this.messages = [];
    this.init();
  }

  init() {
    this.createChatWidget();
    this.attachEventListeners();
    this.addWelcomeMessage();
  }

  createChatWidget() {
    // Create chat widget HTML
    const chatHTML = `
      <div class="sol-chatbot" id="solChatbot">
        <!-- Chat Toggle Button -->
        <button class="chat-toggle" id="chatToggle" aria-label="Open chat">
          <div class="chat-toggle-icon">
            <svg class="chat-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"/>
            </svg>
            <svg class="close-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M18 6L6 18M6 6l12 12"/>
            </svg>
          </div>
          <span class="chat-badge">1</span>
        </button>

        <!-- Chat Window -->
        <div class="chat-window" id="chatWindow">
          <div class="chat-header">
            <div class="chat-header-info">
              <div class="chat-avatar">
                <img src="/global/LOGO233.png" alt="Sol-Insure">
              </div>
              <div class="chat-header-text">
                <span class="chat-title">Sol-Insure Assistant</span>
                <span class="chat-status">
                  <span class="status-dot"></span>
                  Online
                </span>
              </div>
            </div>
            <button class="chat-minimize" id="chatMinimize" aria-label="Minimize chat">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M18 6L6 18M6 6l12 12"/>
              </svg>
            </button>
          </div>

          <div class="chat-messages" id="chatMessages">
            <!-- Messages will be inserted here -->
          </div>

          <div class="chat-suggestions" id="chatSuggestions">
            <button class="suggestion-btn" data-query="What is Sol-Insure?">What is Sol-Insure?</button>
            <button class="suggestion-btn" data-query="Show me the features">Features</button>
            <button class="suggestion-btn" data-query="What are the pricing plans?">Pricing</button>
            <button class="suggestion-btn" data-query="How does the AI work?">AI Capabilities</button>
          </div>

          <div class="chat-input-area">
            <input 
              type="text" 
              class="chat-input" 
              id="chatInput" 
              placeholder="Ask me anything about Sol-Insure..."
              autocomplete="off"
            >
            <button class="chat-send" id="chatSend" aria-label="Send message">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    `;

    // Insert into page
    document.body.insertAdjacentHTML('beforeend', chatHTML);

    // Get references
    this.widget = document.getElementById('solChatbot');
    this.toggleBtn = document.getElementById('chatToggle');
    this.window = document.getElementById('chatWindow');
    this.messagesContainer = document.getElementById('chatMessages');
    this.input = document.getElementById('chatInput');
    this.sendBtn = document.getElementById('chatSend');
    this.minimizeBtn = document.getElementById('chatMinimize');
    this.suggestions = document.getElementById('chatSuggestions');
    this.badge = this.toggleBtn.querySelector('.chat-badge');
  }

  attachEventListeners() {
    // Toggle chat
    this.toggleBtn.addEventListener('click', () => this.toggleChat());
    this.minimizeBtn.addEventListener('click', () => this.toggleChat());

    // Send message
    this.sendBtn.addEventListener('click', () => this.sendMessage());
    this.input.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') this.sendMessage();
    });

    // Suggestion buttons
    this.suggestions.querySelectorAll('.suggestion-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const query = btn.dataset.query;
        this.input.value = query;
        this.sendMessage();
      });
    });
  }

  toggleChat() {
    this.isOpen = !this.isOpen;
    this.widget.classList.toggle('open', this.isOpen);
    this.badge.style.display = 'none';
    
    if (this.isOpen) {
      this.input.focus();
    }
  }

  addWelcomeMessage() {
    const welcomeMsg = `👋 Hi! I'm the Sol-Insure AI Assistant.

I can help you learn about our insurance platform, features, pricing, and more.

**Try asking me:**
• What features does Sol-Insure offer?
• How much does it cost?
• How does the AI work?
• How do I get started?

Or click one of the quick options below!`;

    this.addMessage(welcomeMsg, 'bot');
  }

  addMessage(text, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `chat-message ${sender}`;
    
    const avatar = sender === 'bot' 
      ? `<div class="message-avatar"><img src="/global/LOGO233.png" alt="Bot"></div>`
      : '';

    // Convert markdown-like formatting
    const formattedText = this.formatMessage(text);

    messageDiv.innerHTML = `
      ${avatar}
      <div class="message-content">
        <div class="message-text">${formattedText}</div>
        <span class="message-time">${this.getTime()}</span>
      </div>
    `;

    this.messagesContainer.appendChild(messageDiv);
    this.scrollToBottom();
    
    this.messages.push({ text, sender, time: new Date() });
  }

  formatMessage(text) {
    // Convert **bold** to <strong>
    text = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    // Convert line breaks
    text = text.replace(/\n/g, '<br>');
    // Convert bullet points
    text = text.replace(/• /g, '<span class="bullet">•</span> ');
    // Convert checkmarks
    text = text.replace(/✅ /g, '<span class="check">✅</span> ');
    text = text.replace(/❌ /g, '<span class="cross">❌</span> ');
    
    return text;
  }

  getTime() {
    return new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }

  scrollToBottom() {
    this.messagesContainer.scrollTop = this.messagesContainer.scrollHeight;
  }

  sendMessage() {
    const text = this.input.value.trim();
    if (!text) return;

    // Add user message
    this.addMessage(text, 'user');
    this.input.value = '';

    // Hide suggestions after first message
    this.suggestions.style.display = 'none';

    // Show typing indicator
    this.showTyping();

    // Get response after delay
    setTimeout(() => {
      this.hideTyping();
      const response = this.getResponse(text);
      this.addMessage(response, 'bot');
    }, 800 + Math.random() * 700);
  }

  showTyping() {
    const typingDiv = document.createElement('div');
    typingDiv.className = 'chat-message bot typing-indicator';
    typingDiv.id = 'typingIndicator';
    typingDiv.innerHTML = `
      <div class="message-avatar"><img src="/global/LOGO233.png" alt="Bot"></div>
      <div class="message-content">
        <div class="typing-dots">
          <span></span><span></span><span></span>
        </div>
      </div>
    `;
    this.messagesContainer.appendChild(typingDiv);
    this.scrollToBottom();
  }

  hideTyping() {
    const typing = document.getElementById('typingIndicator');
    if (typing) typing.remove();
  }

  getResponse(query) {
    const lowerQuery = query.toLowerCase();
    
    // Search through knowledge base
    for (const category of Object.values(knowledgeBase)) {
      // Check if query contains category keywords
      const hasKeyword = category.keywords.some(kw => lowerQuery.includes(kw));
      
      if (hasKeyword) {
        // Find best matching response
        for (const response of category.responses) {
          const isMatch = response.match.some(m => {
            const matchLower = m.toLowerCase();
            return lowerQuery.includes(matchLower) || 
                   this.fuzzyMatch(lowerQuery, matchLower);
          });
          
          if (isMatch) {
            return response.answer;
          }
        }
        
        // Return first response if keyword matched but no specific match
        if (category.responses.length > 0) {
          return category.responses[0].answer;
        }
      }
    }

    // Greeting responses
    if (this.isGreeting(lowerQuery)) {
      return this.getGreetingResponse();
    }

    // Thanks responses
    if (this.isThanks(lowerQuery)) {
      return this.getThanksResponse();
    }

    // Default response
    return this.getDefaultResponse();
  }

  fuzzyMatch(query, match) {
    const words = match.split(' ');
    return words.every(word => query.includes(word));
  }

  isGreeting(query) {
    const greetings = ['hello', 'hi', 'hey', 'good morning', 'good afternoon', 'good evening', 'greetings'];
    return greetings.some(g => query.includes(g));
  }

  getGreetingResponse() {
    const responses = [
      "Hello! 👋 How can I help you learn about Sol-Insure today?",
      "Hi there! I'm here to answer any questions about our insurance platform. What would you like to know?",
      "Hey! Great to see you. Ask me anything about Sol-Insure's features, pricing, or how to get started!"
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  }

  isThanks(query) {
    const thanks = ['thank', 'thanks', 'appreciate', 'helpful', 'great'];
    return thanks.some(t => query.includes(t));
  }

  getThanksResponse() {
    const responses = [
      "You're welcome! 😊 Is there anything else you'd like to know about Sol-Insure?",
      "Happy to help! Feel free to ask if you have more questions.",
      "My pleasure! Don't hesitate to reach out if you need more information. You can also schedule a demo at /contact."
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  }

  getDefaultResponse() {
    return `I'm not sure I understand that question, but I'd love to help! 🤔

Here are some things I can tell you about:
• **Features** - Our 8 core modules
• **Pricing** - Plans starting at $2,499/month
• **AI** - Our intelligent automation
• **Implementation** - Go live in 14 days
• **Compliance** - KYC, AML, IFRS-17
• **Contact** - Reach our team

Or, if you'd like to speak with a human, contact us at:
📧 saas@solace-systems.com
📞 1 (868) 460-3788`;
  }
}

// Initialize chatbot when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  window.solInsureChatbot = new SolInsureChatbot();
});


