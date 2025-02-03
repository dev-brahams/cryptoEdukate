import { BookOpen, TrendingUp, Shield, Brain } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface Module {
  title: string;
  duration: string;
  topics: string[];
}

export interface Course {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  level: string;
  duration: string;
  modules: Module[];
  learningOutcomes: string[];
  prerequisites: string[];
  instructor: {
    name: string;
    title: string;
    bio: string;
  };
}

export const courses: Course[] = [
  {
    id: 'crypto-basics',
    title: "Cryptocurrency Basics",
    description: "Learn the fundamentals of blockchain technology and cryptocurrency.",
    icon: BookOpen,
    level: "Beginner",
    duration: "2 hours",
    prerequisites: ["Basic computer skills", "Internet browsing experience"],
    learningOutcomes: [
      "Understand what blockchain technology is and how it works",
      "Learn about different types of cryptocurrencies",
      "Master the basics of crypto wallets and security",
      "Understand the role of mining and consensus mechanisms",
      "Learn how to safely buy and store cryptocurrencies"
    ],
    instructor: {
      name: "Dr. Sarah Chen",
      title: "Blockchain Technology Expert",
      bio: "Former MIT researcher with 8 years of experience in blockchain technology and cryptocurrency education."
    },
    modules: [
      {
        title: "Introduction to Blockchain",
        duration: "30 minutes",
        topics: [
          "What is blockchain technology?",
          "Distributed ledger basics",
          "How blocks are created and linked",
          "The role of cryptography"
        ]
      },
      {
        title: "Understanding Cryptocurrency",
        duration: "30 minutes",
        topics: [
          "What is cryptocurrency?",
          "Types of cryptocurrencies",
          "Bitcoin vs. Altcoins",
          "Use cases and applications"
        ]
      },
      {
        title: "Wallets and Security",
        duration: "30 minutes",
        topics: [
          "Types of crypto wallets",
          "Creating and securing your wallet",
          "Private keys and seed phrases",
          "Best practices for wallet security"
        ]
      },
      {
        title: "Buying and Storing Crypto",
        duration: "30 minutes",
        topics: [
          "Cryptocurrency exchanges",
          "How to buy your first cryptocurrency",
          "Secure storage practices",
          "Common pitfalls to avoid"
        ]
      }
    ]
  },
  {
    id: 'trading-fundamentals',
    title: "Trading Fundamentals",
    description: "Understanding market analysis, trading pairs, and basic strategies.",
    icon: TrendingUp,
    level: "Intermediate",
    duration: "3 hours",
    prerequisites: ["Basic cryptocurrency knowledge", "Understanding of markets"],
    learningOutcomes: [
      "Master technical analysis basics",
      "Understand trading pairs and market mechanics",
      "Learn risk management strategies",
      "Develop a trading plan",
      "Use trading tools effectively"
    ],
    instructor: {
      name: "Michael Rodriguez",
      title: "Professional Crypto Trader",
      bio: "15+ years of trading experience, specialized in cryptocurrency markets since 2013."
    },
    modules: [
      {
        title: "Market Basics",
        duration: "45 minutes",
        topics: [
          "Understanding market structure",
          "Trading pairs explained",
          "Order types",
          "Reading market data"
        ]
      },
      {
        title: "Technical Analysis",
        duration: "45 minutes",
        topics: [
          "Chart patterns",
          "Key indicators",
          "Trend analysis",
          "Support and resistance"
        ]
      },
      {
        title: "Risk Management",
        duration: "45 minutes",
        topics: [
          "Position sizing",
          "Stop-loss strategies",
          "Risk-reward ratios",
          "Portfolio management"
        ]
      },
      {
        title: "Trading Psychology",
        duration: "45 minutes",
        topics: [
          "Emotional control",
          "Decision making",
          "Building discipline",
          "Common psychological pitfalls"
        ]
      }
    ]
  },
  {
    id: 'security-essentials',
    title: "Security Essentials",
    description: "Best practices for keeping your crypto assets safe.",
    icon: Shield,
    level: "Beginner",
    duration: "1.5 hours",
    prerequisites: ["Basic cryptocurrency knowledge"],
    learningOutcomes: [
      "Understand common security threats",
      "Implement strong security practices",
      "Protect against scams and fraud",
      "Set up secure backup systems",
      "Use hardware wallets effectively"
    ],
    instructor: {
      name: "Alex Thompson",
      title: "Cybersecurity Specialist",
      bio: "Certified Information Security Manager with focus on cryptocurrency security since 2015."
    },
    modules: [
      {
        title: "Security Fundamentals",
        duration: "30 minutes",
        topics: [
          "Common security threats",
          "Basic security principles",
          "Password management",
          "Two-factor authentication"
        ]
      },
      {
        title: "Wallet Security",
        duration: "30 minutes",
        topics: [
          "Hardware wallets",
          "Cold storage solutions",
          "Backup strategies",
          "Recovery procedures"
        ]
      },
      {
        title: "Scam Prevention",
        duration: "30 minutes",
        topics: [
          "Common scam types",
          "Red flags to watch for",
          "Verification procedures",
          "Safe trading practices"
        ]
      }
    ]
  },
  {
    id: 'advanced-trading',
    title: "Advanced Trading",
    description: "Deep dive into technical analysis and advanced trading strategies.",
    icon: Brain,
    level: "Advanced",
    duration: "4 hours",
    prerequisites: [
      "Trading Fundamentals course completion",
      "6+ months trading experience",
      "Understanding of technical analysis"
    ],
    learningOutcomes: [
      "Master advanced technical analysis",
      "Develop complex trading strategies",
      "Understand market psychology",
      "Use advanced trading tools",
      "Implement algorithmic trading basics"
    ],
    instructor: {
      name: "David Kumar",
      title: "Quantitative Trading Expert",
      bio: "Former Wall Street quantitative analyst with 10+ years of crypto trading experience."
    },
    modules: [
      {
        title: "Advanced Chart Analysis",
        duration: "60 minutes",
        topics: [
          "Complex chart patterns",
          "Multiple timeframe analysis",
          "Indicator combinations",
          "Volume profile trading"
        ]
      },
      {
        title: "Advanced Trading Strategies",
        duration: "60 minutes",
        topics: [
          "Momentum trading",
          "Mean reversion",
          "Arbitrage opportunities",
          "Market making basics"
        ]
      },
      {
        title: "Risk Management Systems",
        duration: "60 minutes",
        topics: [
          "Portfolio optimization",
          "Risk modeling",
          "Correlation analysis",
          "Position sizing strategies"
        ]
      },
      {
        title: "Algorithmic Trading",
        duration: "60 minutes",
        topics: [
          "Trading automation basics",
          "Strategy backtesting",
          "API integration",
          "Bot development principles"
        ]
      }
    ]
  }
];