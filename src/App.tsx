import React, { useState } from 'react';
import {
  Database,
  Cpu,
  Layout,
  BarChart3,
  Download,
  ChevronRight,
  Mail,
  Linkedin,
  CheckCircle2,
  Layers,
  ArrowUpRight,
  Server,
  Workflow,
  ShieldCheck,
  Zap,
  Menu,
  X
} from 'lucide-react';

interface SkillCategory {
  id: string;
  name: string;
  icon: React.ReactNode;
  skills: { name: string; level: number; tags: string[] }[];
}

interface CaseStudy {
  id: string;
  badge: string;
  title: string;
  category: string;
  tags: string[];
  archDiagram: string;
  problem: string;
  solution: string[];
  metrics: { label: string; value: string }[];
  accentColor: string;
}

export default function PortfolioApp() {
  const [activeTab, setActiveTab] = useState<string>('all');
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [viewerRange, setViewerRange] = useState<'7d' | '30d' | '90d'>('30d');

  const skillCategories: SkillCategory[] = [
    {
      id: 'ai-ds',
      name: 'AI Engineering & Data Science',
      icon: <Cpu className="w-5 h-5 text-cyan-400" />,
      skills: [
        { name: 'Physics-Informed Neural Networks (PINN)', level: 94, tags: ['TensorFlow', 'PyTorch', 'SciPy'] },
        { name: 'Bayesian Uncertainty Quantification', level: 90, tags: ['Probabilistic Modeling', 'MCMC'] },
        { name: 'Predictive Machine Learning', level: 95, tags: ['Scikit-Learn', 'XGBoost', 'Multivariate ML'] },
        { name: 'Statistical Inference & Econometrics', level: 92, tags: ['R', 'Stata', 'Hypothesis Testing'] }
      ]
    },
    {
      id: 'dba-de',
      name: 'Database Admin & Data Engineering',
      icon: <Database className="w-5 h-5 text-emerald-400" />,
      skills: [
        { name: 'T-SQL Query Optimization & Indexing', level: 96, tags: ['SQL Server', 'Execution Plans', 'Locks'] },
        { name: 'Stored Procedures & Schema Architecture', level: 95, tags: ['PostgreSQL', 'Oracle', 'DDL/DML'] },
        { name: 'ETL Pipelines & Data Warehousing', level: 88, tags: ['Python', 'Star-Schema', 'Data Pipelines'] },
        { name: 'Legacy System Migration', level: 92, tags: ['SSRS', 'Crystal Reports', 'Refactoring'] }
      ]
    },
    {
      id: 'power-platform',
      name: 'Power Platform & Business Intelligence',
      icon: <Layout className="w-5 h-5 text-indigo-400" />,
      skills: [
        { name: 'Power BI Executive Dashboarding', level: 98, tags: ['DAX', 'Star-Schema', 'RLS Security'] },
        { name: 'Power Apps (Canvas & Model-Driven)', level: 94, tags: ['Custom UI', 'RBAC', 'Dataverse'] },
        { name: 'Power Automate Workflow Automation', level: 92, tags: ['Scheduled Flows', 'Alert Triggers', 'APIs'] },
        { name: 'Enterprise Low-Code Systems', level: 95, tags: ['SharePoint Integration', 'Governance'] }
      ]
    }
  ];

  const caseStudies: CaseStudy[] = [
    {
      id: 'cs-1',
      badge: 'Enterprise Automation',
      title: 'Enterprise Workload & Application Tracker System',
      category: 'Power Apps • Power Automate • Power BI • SQL / SharePoint',
      tags: ['Power Apps Canvas', 'Power Automate', 'Power BI', 'SQL Server', 'SharePoint', 'RBAC'],
      archDiagram: `[ Operations Input ] ──> [ Power Apps Canvas ] ──> [ SQL / SharePoint Data Hub ]
                                                            │
[ Executive Dashboard ] <── [ Power BI ] <── [ Power Automate Trigger ]`,
      problem: 'Operational support tracking at Chevron Nigeria Limited suffered from disparate spreadsheets and manual updates, resulting in zero real-time visibility, SLA breach risks, and unbalanced workload distribution across teams.',
      solution: [
        'Engineered a dynamic, multi-page Power Apps Canvas UI with role-based access control (RBAC).',
        'Structured relational backend schemas in SQL Server and SharePoint with automated audit trails.',
        'Built multi-stage Power Automate orchestrations for automated escalation triggers and SLA monitoring.',
        'Designed an embedded real-time Power BI dashboard displaying team capacity metrics and queue velocity.'
      ],
      metrics: [
        { value: '40%', label: 'Manual Reporting Overhead Reduced' },
        { value: '100%', label: 'Real-Time Operational Visibility' },
        { value: '25%', label: 'Faster Ticket SLA Response Time' }
      ],
      accentColor: 'from-cyan-500/20 to-blue-600/10 border-cyan-500/30'
    },
    {
      id: 'cs-2',
      badge: 'Database Admin & Data Engineering',
      title: 'Automated Enterprise Reporting & SQL Migration Engine',
      category: 'SQL Server DBA • T-SQL Tuning • Power BI Modernization',
      tags: ['SQL Server DBA', 'T-SQL Refactoring', 'Power BI', 'DAX', 'SSRS / Crystal Migration'],
      archDiagram: `[ Legacy SSRS / Crystal ] ──> [ T-SQL Refactoring & Indexing ] ──> [ Star-Schema DB ]
                                                                        │
[ Instant Executive BI ] <─── [ Automated Data Pipeline ] <─────────────┘`,
      problem: 'Legacy Crystal Reports and SSRS templates suffered severe performance degradation due to unindexed SQL tables and inefficient query logic, causing reports to time out during peak executive decision windows.',
      solution: [
        'Analyzed SQL execution plans; refactored bloated queries into modular T-SQL Stored Procedures with targeted indexing.',
        'Re-architected flat database tables into clean star-schema dimensional models optimized for DAX engine evaluation.',
        'Decommissioned 20+ legacy templates and migrated them into unified, interactive Power BI workspaces.',
        'Implemented strict Row-Level Security (RLS) to restrict regional data access automatically by user identity.'
      ],
      metrics: [
        { value: '70%', label: 'Faster Query Execution Speed' },
        { value: '20+', label: 'Legacy Reports Decommissioned' },
        { value: '< 15s', label: 'Maximum Report Rendering Time' }
      ],
      accentColor: 'from-emerald-500/20 to-teal-600/10 border-emerald-500/30'
    },
    {
      id: 'cs-3',
      badge: 'AI & Physics-Informed Science',
      title: 'Physics-Informed Reservoir Property Prediction Framework',
      category: 'Deep Learning • Physics-Informed Neural Networks • Bayesian Statistics',
      tags: ['Physics-Informed NN', 'TensorFlow', 'Bayesian Statistics', 'Python', 'Petrophysical ML'],
      archDiagram: `[ Geophysical Well Logs ] ───┐
                             ├──> [ PINN + Physical Loss Regularization ]
[ Physical Constraints ] ────┘                 │
                                               ▼
[ Calibrated Risk Bounds ] <── [ Bayesian Uncertainty Distributions ]`,
      problem: 'Predicting subsurface rock properties in sparse well-data zones often causes standard machine learning algorithms to generate physically impossible parameter values, creating extreme uncertainty in reservoir economics.',
      solution: [
        'Formulated a novel Physics-Informed loss function embedding petrophysical flow equations directly into neural network training.',
        'Integrated Bayesian Neural Networks (BNNs) using Python to calculate explicit confidence bounds for porosity and permeability.',
        'Built automated Python data cleaning and imputation pipelines to process noisy geophysical well-log datasets.'
      ],
      metrics: [
        { value: '35%', label: 'Prediction Accuracy Improvement' },
        { value: '100%', label: 'Physical Parameter Validity' },
        { value: 'Peer-Reviewed', label: 'Published Research Framework' }
      ],
      accentColor: 'from-indigo-500/20 to-purple-600/10 border-indigo-500/30'
    }
  ];

  const filteredSkills = activeTab === 'all'
    ? skillCategories
    : skillCategories.filter(cat => cat.id === activeTab);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  const analyticsByRange = {
    '7d': {
      summary: [
        { label: 'Total Visitors', value: '1.8K', delta: '+12.4%' },
        { label: 'Active Users', value: '432', delta: '+8.1%' },
        { label: 'Avg. Session', value: '04:28', delta: '+26s' },
        { label: 'Lead Rate', value: '7.2%', delta: '+1.4%' }
      ],
      chart: [
        { label: 'Mon', value: 42 },
        { label: 'Tue', value: 58 },
        { label: 'Wed', value: 49 },
        { label: 'Thu', value: 64 },
        { label: 'Fri', value: 78 },
        { label: 'Sat', value: 66 },
        { label: 'Sun', value: 72 }
      ],
      sources: [
        { label: 'LinkedIn', value: 41 },
        { label: 'Direct', value: 27 },
        { label: 'ResearchGate', value: 19 },
        { label: 'Email', value: 13 }
      ],
      countries: [
        { label: 'Nigeria', value: 62 },
        { label: 'United Kingdom', value: 18 },
        { label: 'United States', value: 12 },
        { label: 'Canada', value: 8 }
      ],
      insight: 'Strong engagement from professionals evaluating data and AI capability.'
    },
    '30d': {
      summary: [
        { label: 'Total Visitors', value: '7.4K', delta: '+18.9%' },
        { label: 'Active Users', value: '1.9K', delta: '+11.3%' },
        { label: 'Avg. Session', value: '05:14', delta: '+42s' },
        { label: 'Lead Rate', value: '9.8%', delta: '+2.3%' }
      ],
      chart: [
        { label: 'W1', value: 46 },
        { label: 'W2', value: 58 },
        { label: 'W3', value: 66 },
        { label: 'W4', value: 82 },
        { label: 'W5', value: 73 },
        { label: 'W6', value: 91 },
        { label: 'W7', value: 101 }
      ],
      sources: [
        { label: 'LinkedIn', value: 36 },
        { label: 'Direct', value: 31 },
        { label: 'ResearchGate', value: 21 },
        { label: 'Referral', value: 12 }
      ],
      countries: [
        { label: 'Nigeria', value: 58 },
        { label: 'United Kingdom', value: 20 },
        { label: 'United States', value: 14 },
        { label: 'Canada', value: 8 }
      ],
      insight: 'Your energy and analytics profile is attracting qualified business and research interest.'
    },
    '90d': {
      summary: [
        { label: 'Total Visitors', value: '21.6K', delta: '+29.4%' },
        { label: 'Active Users', value: '5.7K', delta: '+16.8%' },
        { label: 'Avg. Session', value: '06:02', delta: '+1m 10s' },
        { label: 'Lead Rate', value: '11.4%', delta: '+3.1%' }
      ],
      chart: [
        { label: 'Jan', value: 42 },
        { label: 'Feb', value: 58 },
        { label: 'Mar', value: 61 },
        { label: 'Apr', value: 76 },
        { label: 'May', value: 89 },
        { label: 'Jun', value: 93 },
        { label: 'Jul', value: 111 }
      ],
      sources: [
        { label: 'LinkedIn', value: 39 },
        { label: 'Direct', value: 29 },
        { label: 'ResearchGate', value: 22 },
        { label: 'Email', value: 10 }
      ],
      countries: [
        { label: 'Nigeria', value: 55 },
        { label: 'United Kingdom', value: 21 },
        { label: 'United States', value: 15 },
        { label: 'Canada', value: 9 }
      ],
      insight: 'The portfolio is growing steadily among executive, technical, and research audiences.'
    }
  } as const;

  const activeAnalytics = analyticsByRange[viewerRange];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-cyan-500 selection:text-slate-950">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 via-emerald-500 to-indigo-500 p-0.5 shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-500/40 transition-all">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center font-bold text-transparent bg-clip-text bg-gradient-to-tr from-cyan-400 to-emerald-400">
                BG
              </div>
            </div>
            <div>
              <div className="font-bold text-slate-100 text-lg tracking-tight group-hover:text-cyan-400 transition-colors">
                Bala Ajizentu Garba
              </div>
              <div className="text-xs text-slate-400">Data, AI &amp; Platform Specialist</div>
            </div>
          </a>

          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors">About</a>
            <a href="#skills" className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors">Skills Matrix</a>
            <a href="#experience" className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors">Experience</a>
            <a href="#case-studies" className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors">Case Studies</a>
            <a href="#contact" className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors">Contact</a>
            <a href="https://www.researchgate.net/profile/Bala-Ajizentu-Garba" target="_blank" rel="noreferrer" className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors">Research Papers</a>
            <a
              href="https://wa.me/2348130253318"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-500/15 border border-emerald-400/30 text-emerald-300 font-semibold text-sm hover:bg-emerald-500/20 transition-all"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-label="WhatsApp icon">
                <path d="M12.04 2C6.58 2 2.13 6.41 2.13 11.86c0 2.07.62 4.08 1.7 5.77L2 22l4.53-1.46A9.82 9.82 0 0 0 12.04 21c5.46 0 9.91-4.41 9.91-9.86C21.95 6.41 17.5 2 12.04 2Zm0 17.95a8.03 8.03 0 0 1-4.12-1.13l-.29-.17-2.69.86.9-2.62-.18-.29a8.08 8.08 0 0 1-1.26-4.14c0-4.47 3.64-8.11 8.13-8.11s8.13 3.64 8.13 8.11-3.64 8.11-8.13 8.11Zm4.47-6.24c-.25-.13-1.47-.72-1.7-.8-.22-.08-.38-.12-.54.12-.16.25-.62.8-.76.96-.14.16-.28.18-.53.06-.25-.13-1.06-.39-2.02-1.25-.75-.67-1.25-1.5-1.4-1.75-.15-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.54-1.3-.74-1.77-.19-.46-.39-.4-.54-.41h-.46c-.16 0-.42.06-.64.31-.22.25-.84.82-.84 2s.86 2.31.98 2.47c.12.16 1.68 2.56 4.07 3.59.57.25 1.01.4 1.35.51.57.18 1.09.16 1.5.1.46-.07 1.47-.6 1.68-1.18.2-.58.2-1.08.14-1.18-.06-.11-.23-.17-.48-.3Z"/>
              </svg>
              WhatsApp
            </a>
            <a
              href="C:/Users/DELL/Downloads/Bala A G CV.docx"
              download
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-emerald-500 text-slate-950 font-semibold text-sm hover:opacity-90 transition-all shadow-md shadow-cyan-500/10"
            >
              <Download className="w-4 h-4" />
              Download CV
            </a>
          </div>

          <button
            type="button"
            aria-label="Toggle mobile menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-slate-400 hover:text-slate-100 hover:bg-slate-900 focus:outline-none"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-900 border-b border-slate-800 px-4 pt-2 pb-6 space-y-3">
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-slate-200 hover:bg-slate-800">About</a>
            <a href="#skills" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-slate-200 hover:bg-slate-800">Skills Matrix</a>
            <a href="#experience" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-slate-200 hover:bg-slate-800">Experience</a>
            <a href="#case-studies" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-slate-200 hover:bg-slate-800">Case Studies</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-slate-200 hover:bg-slate-800">Contact</a>
            <a href="https://wa.me/2348130253318" target="_blank" rel="noreferrer" onClick={() => setMobileMenuOpen(false)} className="flex items-center justify-center gap-2 w-full py-3 rounded-lg bg-emerald-500/15 border border-emerald-400/30 text-emerald-300 font-semibold text-sm">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-label="WhatsApp icon">
                <path d="M12.04 2C6.58 2 2.13 6.41 2.13 11.86c0 2.07.62 4.08 1.7 5.77L2 22l4.53-1.46A9.82 9.82 0 0 0 12.04 21c5.46 0 9.91-4.41 9.91-9.86C21.95 6.41 17.5 2 12.04 2Zm0 17.95a8.03 8.03 0 0 1-4.12-1.13l-.29-.17-2.69.86.9-2.62-.18-.29a8.08 8.08 0 0 1-1.26-4.14c0-4.47 3.64-8.11 8.13-8.11s8.13 3.64 8.13 8.11-3.64 8.11-8.13 8.11Zm4.47-6.24c-.25-.13-1.47-.72-1.7-.8-.22-.08-.38-.12-.54.12-.16.25-.62.8-.76.96-.14.16-.28.18-.53.06-.25-.13-1.06-.39-2.02-1.25-.75-.67-1.25-1.5-1.4-1.75-.15-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.54-1.3-.74-1.77-.19-.46-.39-.4-.54-.41h-.46c-.16 0-.42.06-.64.31-.22.25-.84.82-.84 2s.86 2.31.98 2.47c.12.16 1.68 2.56 4.07 3.59.57.25 1.01.4 1.35.51.57.18 1.09.16 1.5.1.46-.07 1.47-.6 1.68-1.18.2-.58.2-1.08.14-1.18-.06-.11-.23-.17-.48-.3Z"/>
              </svg>
              WhatsApp
            </a>
            <a href="C:/Users/DELL/Downloads/Bala A G CV.docx" download className="flex items-center justify-center gap-2 w-full py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-emerald-500 text-slate-950 font-semibold text-sm">
              <Download className="w-4 h-4" />
              Download CV
            </a>
          </div>
        )}
      </nav>

      <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-tr from-cyan-500/10 via-emerald-500/10 to-indigo-500/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto space-y-6">
            <div className="flex justify-center pb-2">
              <img
                src="/profile-photo.jpg"
                alt="Bala Ajizentu"
                className="w-32 h-32 rounded-full object-cover border-4 border-cyan-500/60 shadow-[0_0_30px_rgba(34,211,238,0.25)] bg-slate-900"
              />
            </div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-cyan-400 text-xs font-semibold tracking-wide uppercase">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Researcher • Data, AI &amp; Platform Specialist
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-slate-100 tracking-tight leading-[1.1]">
              Architecting <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-emerald-400 to-indigo-400">Data Infrastructure,</span> AI &amp; Power Apps
            </h1>

            <p className="text-lg sm:text-xl text-slate-400 font-normal leading-relaxed max-w-3xl mx-auto">
              Unifying database administration, scalable data engineering pipelines, predictive machine learning, and enterprise Power Platform solutions into measurable business execution.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#case-studies" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-500 text-slate-950 font-bold text-base hover:opacity-90 transition-all shadow-lg shadow-cyan-500/20 group">
                Explore Enterprise Case Studies
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="C:/Users/DELL/Downloads/Bala A G CV.docx" download className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-200 font-semibold text-base transition-all">
                <Download className="w-5 h-5 text-cyan-400" />
                Download CV
              </a>
            </div>

            <div className="pt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm">
                <div className="text-2xl sm:text-3xl font-bold text-cyan-400">M.Sc.</div>
                <div className="text-xs text-slate-400 mt-1">Quantitative Statistics (Ph.D. Candidate)</div>
              </div>
              <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm">
                <div className="text-2xl sm:text-3xl font-bold text-emerald-400">7+</div>
                <div className="text-xs text-slate-400 mt-1">Peer-Reviewed Scientific Publications</div>
              </div>
              <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm">
                <div className="text-2xl sm:text-3xl font-bold text-indigo-400">100%</div>
                <div className="text-xs text-slate-400 mt-1">Real-time Visibility &amp; Automation</div>
              </div>
              <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm">
                <div className="text-2xl sm:text-3xl font-bold text-teal-400">70%</div>
                <div className="text-xs text-slate-400 mt-1">Query Performance Acceleration</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-slate-900/40 border-y border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700 text-cyan-400 text-xs font-semibold">
                <ShieldCheck className="w-4 h-4" />
                Executive Bio &amp; Expertise
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 tracking-tight">
                Bridging Deep Analytics with Production Systems
              </h2>
              <p className="text-slate-300 leading-relaxed">
                <strong>Bala Ajizentu Garba</strong> is a research-driven specialist working across the full data lifecycle—from relational database administration and cloud/on-premise pipelines to predictive machine learning, scientific modeling, and high-impact business systems in the energy sector.
              </p>
              <p className="text-slate-400 leading-relaxed text-sm">
                With a strong academic foundation in quantitative statistics (M.Sc., pursuing Ph.D.) and hands-on experience with organizations like Waltersmith Petroman and Chevron Nigeria Limited, Bala translates raw, complex infrastructure into production-grade workflows and publishes research contributions through his <a href="https://www.researchgate.net/profile/Bala-Ajizentu-Garba" target="_blank" rel="noreferrer" className="text-cyan-400 hover:text-cyan-300 underline underline-offset-4">ResearchGate profile</a>.
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all space-y-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                  <Database className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-200">Data Engineering &amp; DBA</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Relational schema optimization, T-SQL query execution tuning, non-clustered indexing, stored procedures, and automated ETL data ingestion pipelines.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all space-y-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <Cpu className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-200">AI &amp; Data Science</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Physics-Informed Neural Networks (PINN), Bayesian uncertainty bounds, econometric modeling, and multivariate machine learning algorithms in Python and R.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all space-y-3">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                  <Layout className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-200">Power Apps &amp; Automate</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Production-grade Power Apps Canvas tools with role-based security, automated workflow triggers, and enterprise dataverse/SharePoint integrations.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all space-y-3">
                <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400">
                  <BarChart3 className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-200">Executive Power BI</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Star-schema dimensional modeling, complex DAX time-intelligence formulas, dynamic Row-Level Security (RLS), and interactive visual reporting.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-cyan-400 text-xs font-semibold">
              <Layers className="w-4 h-4" />
              Technical Stack &amp; Depth
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-100">Interactive Capability Matrix</h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Filter competencies by domain area to view proficiency depth and core technology frameworks.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
              <button
                onClick={() => setActiveTab('all')}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                  activeTab === 'all'
                    ? 'bg-gradient-to-r from-cyan-500 to-emerald-500 text-slate-950 shadow-md'
                    : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
                }`}
              >
                All Capabilities
              </button>
              {skillCategories.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-2 ${
                    activeTab === cat.id
                      ? 'bg-slate-100 text-slate-950 shadow-md'
                      : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
                  }`}
                >
                  {cat.icon}
                  {cat.name}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {filteredSkills.map(category => (
              <div key={category.id} className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 flex flex-col justify-between hover:border-slate-700 transition-all">
                <div className="space-y-6">
                  <div className="flex items-center gap-3 pb-4 border-b border-slate-800">
                    <div className="p-2.5 rounded-xl bg-slate-800/80 border border-slate-700">
                      {category.icon}
                    </div>
                    <h3 className="font-bold text-slate-200 text-base">{category.name}</h3>
                  </div>

                  <div className="space-y-5">
                    {category.skills.map((skill, idx) => (
                      <div key={idx} className="space-y-2">
                        <div className="flex items-center justify-between text-xs font-medium">
                          <span className="text-slate-200">{skill.name}</span>
                          <span className="text-cyan-400 font-mono font-bold">{skill.level}%</span>
                        </div>
                        <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-cyan-500 to-emerald-400 rounded-full transition-all duration-1000"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {skill.tags.map((tag, tIdx) => (
                            <span key={tIdx} className="px-2 py-0.5 rounded bg-slate-800/60 border border-slate-700/60 text-[10px] text-slate-400">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="certifications" className="py-20 bg-slate-900/30 border-t border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-violet-400 text-xs font-semibold">
              <CheckCircle2 className="w-4 h-4" />
              Certifications &amp; Credentials
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-100">Professional Learning &amp; Technical Validation</h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Continuing education across cloud AI, data analysis, and safety-driven operational excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6 shadow-xl hover:border-cyan-500/30 transition-all">
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-400">Cloud AI</div>
              <h3 className="mt-4 text-xl font-bold text-slate-100">AWS AI Practitioner Certificate</h3>
              <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                Fundamental AWS AI and machine learning knowledge, covering practical cloud-based AI concepts and enterprise use-case understanding.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6 shadow-xl hover:border-emerald-500/30 transition-all">
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-400">Data &amp; AI Career Track</div>
              <h3 className="mt-4 text-xl font-bold text-slate-100">Data Scientist, Associate Data Analyst &amp; Associate AI Engineer</h3>
              <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                DataCamp training in data science, data analysis, and AI engineering fundamentals delivered through hands-on applied learning.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6 shadow-xl hover:border-indigo-500/30 transition-all">
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-indigo-400">Analytics &amp; Safety</div>
              <h3 className="mt-4 text-xl font-bold text-slate-100">Google Analytics Professional Certificate &amp; HSE 1, 2 &amp; 3</h3>
              <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                Certifications from Udemy, Udacity, and related learning platforms covering digital analytics, reporting, and health, safety, and environment standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="education" className="py-20 bg-slate-900/30 border-t border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-amber-400 text-xs font-semibold">
              <CheckCircle2 className="w-4 h-4" />
              Education
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-100">Academic Background</h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Statistical, analytical, and research foundations underpinning applied data, AI, and business intelligence work.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6 shadow-xl hover:border-amber-500/30 transition-all">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-400">Doctoral Study</div>
                  <h3 className="mt-2 text-xl font-bold text-slate-100">Doctor of Philosophy (PhD) in Statistics (In View)</h3>
                </div>
                <div className="text-sm text-slate-400">Abubakar Tafawa Balewa University (ATBU), Bauchi, Nigeria</div>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6 shadow-xl hover:border-cyan-500/30 transition-all">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-400">Master’s Degree</div>
                  <h3 className="mt-2 text-xl font-bold text-slate-100">Master of Science (MSc) in Statistics</h3>
                </div>
                <div className="text-sm text-slate-400">Abubakar Tafawa Balewa University (ATBU), Bauchi, Nigeria (2025)</div>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6 shadow-xl hover:border-emerald-500/30 transition-all">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-400">Undergraduate Degree</div>
                  <h3 className="mt-2 text-xl font-bold text-slate-100">Bachelor of Science (BSc) in Statistics</h3>
                </div>
                <div className="text-sm text-slate-400">University of Calabar, Calabar, Nigeria (2017)</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="py-20 bg-slate-900/30 border-t border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-cyan-400 text-xs font-semibold">
              <Server className="w-4 h-4" />
              Professional Experience
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-100">Oil &amp; Gas Analytics &amp; Digital Transformation</h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Delivering high-impact BI, Power Platform, data engineering, and AI solutions for upstream and enterprise operations.
            </p>
          </div>

          <div className="space-y-8">
            <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6 sm:p-8 shadow-xl">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 pb-4 border-b border-slate-800">
                <div>
                  <div className="text-lg sm:text-xl font-bold text-slate-100">Waltersmith Petroman Oil Limited</div>
                  <div className="text-base text-cyan-400 mt-1 font-medium">Business Intelligence &amp; Analytics Consultant</div>
                </div>
                <div className="text-sm text-slate-400">Lagos, Nigeria</div>
              </div>
              <div className="mt-4 text-sm italic text-slate-300">Jan 2026 – Present</div>
              <ul className="mt-5 space-y-3 text-sm text-slate-300 leading-relaxed">
                <li className="flex gap-3"><span className="mt-2 h-2 w-2 rounded-full bg-cyan-400 flex-shrink-0" />Architecting and engineering the Waltersmith Enterprise Board Review &amp; Approval Management Dashboards, establishing a multi-page Power BI executive solution tracking daily/gross oil production (639.79K+ bbls), gas production (987.49+ MMscf), and water cut metrics across active fields and wells.</li>
                <li className="flex gap-3"><span className="mt-2 h-2 w-2 rounded-full bg-cyan-400 flex-shrink-0" />Integrating custom AI-generated insight modules alongside automated approval workflows, monitoring manager approvals, pending records, and rejected or returned drafts across 500+ operational records to accelerate executive decision-making.</li>
                <li className="flex gap-3"><span className="mt-2 h-2 w-2 rounded-full bg-cyan-400 flex-shrink-0" />Designing dedicated analytical views for Board Members, Field Analysis, Well Performance, and Management Approvals using advanced DAX modeling and TMDL schema configurations.</li>
              </ul>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6 sm:p-8 shadow-xl">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 pb-4 border-b border-slate-800">
                <div>
                  <div className="text-lg sm:text-xl font-bold text-slate-100">Chevron Nigeria Limited</div>
                  <div className="text-base text-emerald-400 mt-1 font-medium">Graduate Intern (BI Analyst / Data Scientist / DBA Support / Power Platform Developer)</div>
                </div>
                <div className="text-sm text-slate-400">Lekki, Lagos, Nigeria</div>
              </div>
              <div className="mt-4 text-sm italic text-slate-300">Aug 2025 – Present</div>

              <div className="mt-6 space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-slate-100">1. Power BI Architecture &amp; Business Intelligence Solutions</h3>
                  <ul className="mt-3 space-y-3 text-sm text-slate-300 leading-relaxed">
                    <li className="flex gap-3"><span className="mt-2 h-2 w-2 rounded-full bg-emerald-400 flex-shrink-0" />Spearheaded the architectural redesign and deployment of the intelligent DBA Monitoring Dashboard in Power BI, decommissioning obsolete legacy SSRS infrastructure and writing optimized SQL stored procedures to eliminate reporting latency.</li>
                    <li className="flex gap-3"><span className="mt-2 h-2 w-2 rounded-full bg-emerald-400 flex-shrink-0" />Designed and deployed the NMA UAV Operations Dashboard, blending predictive AI telemetry data with Power BI, Power Apps, and SharePoint integrations for real-time site safety spatial analytics.</li>
                    <li className="flex gap-3"><span className="mt-2 h-2 w-2 rounded-full bg-emerald-400 flex-shrink-0" />Co-authored and launched the NMA Integrated Planning &amp; Scheduling (IP&amp;S) Dashboard utilizing Power BI, Power Apps, and Power Automate to consolidate fragmented operational timelines.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-slate-100">2. Power Platform App Architecture &amp; Automated Workflows</h3>
                  <ul className="mt-3 space-y-3 text-sm text-slate-300 leading-relaxed">
                    <li className="flex gap-3"><span className="mt-2 h-2 w-2 rounded-full bg-emerald-400 flex-shrink-0" />Built and scaled the NMA DNI Inventory Tracking Tool and EGTL Catalyst Inventory Consumption Tool using Power Apps and Power Automate to prevent critical asset leakage.</li>
                    <li className="flex gap-3"><span className="mt-2 h-2 w-2 rounded-full bg-emerald-400 flex-shrink-0" />Automated high-frequency DBA monitoring and exception reporting by combining SQL stored procedures with Power Automate workflows for proactive threat detection.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-slate-100">3. Advanced Data Science &amp; Intelligent Engineering Pipelines</h3>
                  <ul className="mt-3 space-y-3 text-sm text-slate-300 leading-relaxed">
                    <li className="flex gap-3"><span className="mt-2 h-2 w-2 rounded-full bg-emerald-400 flex-shrink-0" />Architected and trained an AI-powered License Plate Identification system using custom Python computer vision workflows paired with SharePoint and Excel.</li>
                    <li className="flex gap-3"><span className="mt-2 h-2 w-2 rounded-full bg-emerald-400 flex-shrink-0" />Developed custom Python ETL and automated OCR pipelines for Well File Data Log Extraction and Well Header Modernization.</li>
                    <li className="flex gap-3"><span className="mt-2 h-2 w-2 rounded-full bg-emerald-400 flex-shrink-0" />Directed technical data validation and schema mapping verification during a massive core migration from Oracle to SQL Server.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-slate-100">4. Scrum Leadership &amp; HR Automation</h3>
                  <ul className="mt-3 space-y-3 text-sm text-slate-300 leading-relaxed">
                    <li className="flex gap-3"><span className="mt-2 h-2 w-2 rounded-full bg-emerald-400 flex-shrink-0" />Served as Scrum Master in select Digital Innovation (DNI) sprint cycles, managing velocity tracking and unblocking technical barriers across analytics workflows.</li>
                    <li className="flex gap-3"><span className="mt-2 h-2 w-2 rounded-full bg-emerald-400 flex-shrink-0" />Architected an automated HR orchestration platform deploying AI classification models to auto-respond to and route critical employee data requests with full audit traceability.</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6 sm:p-8 shadow-xl">
              <h3 className="text-xl font-bold text-slate-100">Selected Project Simulations</h3>
              <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
                  <div className="text-base font-semibold text-cyan-400">BCG X (Forage) — Data Science Simulation</div>
                  <div className="mt-2 text-sm text-slate-300">Nov 2025</div>
                  <p className="mt-3 text-sm text-slate-300 leading-relaxed">Engineered and optimized a predictive Random Forest machine learning model using Python to pinpoint core attrition indicators.</p>
                </div>
                <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
                  <div className="text-base font-semibold text-emerald-400">Quantium (Forage) — Data Analytics Simulation</div>
                  <div className="mt-2 text-sm text-slate-300">Nov 2025</div>
                  <p className="mt-3 text-sm text-slate-300 leading-relaxed">Applied advanced exploratory data analysis (EDA) to commercial transaction data to evaluate performance uplift metrics.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="case-studies" className="py-20 bg-slate-900/30 border-t border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-emerald-400 text-xs font-semibold">
              <Workflow className="w-4 h-4" />
              Proven Enterprise Impact
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-100">Featured Case Studies</h2>
            <p className="text-slate-400 text-sm sm:text-base">
              End-to-end technical implementations demonstrating architecture design, full-stack code execution, and measurable business performance.
            </p>
          </div>

          <div className="space-y-12">
            {caseStudies.map((study) => (
              <div
                key={study.id}
                className={`p-6 sm:p-8 rounded-3xl bg-slate-900/90 border bg-gradient-to-b ${study.accentColor} shadow-xl relative overflow-hidden`}
              >
                <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-800">
                  <div className="space-y-1">
                    <span className="px-3 py-1 rounded-md bg-slate-800 text-cyan-400 text-xs font-mono font-semibold uppercase tracking-wider">
                      {study.badge}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-bold text-slate-100 pt-2">{study.title}</h3>
                    <p className="text-xs text-slate-400 font-medium">{study.category}</p>
                  </div>
                  <a href="C:/Users/DELL/Downloads/Bala A G CV.docx" download className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition-all">
                    <Download className="w-3.5 h-3.5" />
                    Download CV
                  </a>
                </div>

                <div className="my-6 p-4 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs text-cyan-300 overflow-x-auto whitespace-pre leading-relaxed">
                  <div className="text-[10px] text-slate-500 uppercase tracking-widest mb-2 font-sans font-semibold">
                    System Data Pipeline &amp; Architecture Flow:
                  </div>
                  {study.archDiagram}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 my-6">
                  <div className="lg:col-span-5 p-5 rounded-2xl bg-slate-950/60 border border-slate-800/80 space-y-3">
                    <div className="flex items-center gap-2 text-rose-400 text-xs font-bold uppercase tracking-wider">
                      <Zap className="w-4 h-4" />
                      The Business Challenge
                    </div>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {study.problem}
                    </p>
                  </div>

                  <div className="lg:col-span-7 p-5 rounded-2xl bg-slate-950/60 border border-slate-800/80 space-y-3">
                    <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider">
                      <CheckCircle2 className="w-4 h-4" />
                      Technical Implementation
                    </div>
                    <ul className="space-y-2">
                      {study.solution.map((item, iIdx) => (
                        <li key={iIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800/80">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                    {study.metrics.map((metric, mIdx) => (
                      <div key={mIdx} className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
                        <div className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                          {metric.value}
                        </div>
                        <div className="text-xs text-slate-400 mt-1 font-medium">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mt-6">
                  {study.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="px-2.5 py-1 rounded-md bg-slate-800/80 text-xs text-slate-300 border border-slate-700">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="audience" className="py-20 bg-slate-950 border-t border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-violet-400 text-xs font-semibold">
              <BarChart3 className="w-4 h-4" />
              Audience Dashboard
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-100">Viewer Analytics Overview</h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Track portfolio traffic, lead quality, and audience engagement across your most important periods.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
            {(['7d', '30d', '90d'] as const).map((range) => (
              <button
                key={range}
                type="button"
                onClick={() => setViewerRange(range)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                  viewerRange === range
                    ? 'bg-gradient-to-r from-violet-500 to-cyan-500 text-slate-950 shadow-lg shadow-violet-500/20'
                    : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
                }`}
              >
                {range === '7d' ? 'Last 7 Days' : range === '30d' ? 'Last 30 Days' : 'Last 90 Days'}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
            {activeAnalytics.summary.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5">
                <div className="text-xs uppercase tracking-wider text-slate-400">{stat.label}</div>
                <div className="mt-4 flex items-end justify-between gap-3">
                  <div className="text-3xl font-extrabold text-slate-100">{stat.value}</div>
                  <div className="rounded-full bg-emerald-500/10 border border-emerald-500/20 px-2 py-1 text-[10px] font-bold text-emerald-300">
                    {stat.delta}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 grid grid-cols-1 xl:grid-cols-[1.7fr_0.9fr] gap-6">
            <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <div className="text-xs uppercase tracking-wider text-slate-400">Traffic Trend</div>
                  <div className="text-xl font-bold text-slate-100">Portfolio Viewers</div>
                </div>
                <div className="rounded-full bg-cyan-500/10 border border-cyan-500/20 px-3 py-1 text-xs font-semibold text-cyan-300">
                  Live signal
                </div>
              </div>

              <div className="flex items-end justify-between gap-3 h-56 pt-4">
                {activeAnalytics.chart.map((item) => (
                  <div key={item.label} className="flex flex-1 flex-col items-center gap-3">
                    <div className="flex h-44 w-full items-end justify-center">
                      <div
                        className="w-full max-w-12 rounded-t-2xl bg-gradient-to-t from-cyan-500 via-sky-500 to-emerald-400 shadow-[0_0_20px_rgba(34,211,238,0.2)]"
                        style={{ height: `${Math.max(item.value, 12)}%` }}
                      />
                    </div>
                    <div className="text-[10px] font-medium text-slate-400">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6">
              <div className="text-xs uppercase tracking-wider text-slate-400">Traffic Sources</div>
              <div className="mt-5 space-y-5">
                {activeAnalytics.sources.map((source) => (
                  <div key={source.label}>
                    <div className="mb-2 flex items-center justify-between text-sm text-slate-300">
                      <span>{source.label}</span>
                      <span className="font-semibold text-slate-100">{source.value}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-slate-800 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-violet-500 to-cyan-500"
                        style={{ width: `${source.value}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 border-t border-slate-800 pt-5">
                <div className="text-xs uppercase tracking-wider text-slate-400">Top Regions</div>
                <div className="mt-4 space-y-3">
                  {activeAnalytics.countries.map((country) => (
                    <div key={country.label}>
                      <div className="mb-1 flex items-center justify-between text-sm text-slate-300">
                        <span>{country.label}</span>
                        <span>{country.value}%</span>
                      </div>
                      <div className="h-2 rounded-full bg-slate-800 overflow-hidden">
                        <div className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-cyan-400" style={{ width: `${country.value}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 rounded-3xl border border-cyan-500/20 bg-gradient-to-r from-cyan-500/10 to-emerald-500/10 p-6">
            <div className="text-xs uppercase tracking-wider text-cyan-300">Insight</div>
            <div className="mt-2 text-xl font-bold text-slate-100">{activeAnalytics.insight}</div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-indigo-400 text-xs font-semibold">
                <Mail className="w-4 h-4" />
                Initiate Engagement
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-100">
                Let&apos;s Build Enterprise Data Solutions Together
              </h2>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                Available for enterprise consulting, high-impact data engineering and AI projects, Power Platform modernization, or full-time strategic leadership roles.
              </p>

              <div className="space-y-4 pt-4">
                <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-900 border border-slate-800">
                  <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">Direct Email</div>
                    <a href="mailto:ajizentubala5@gmail.com" className="text-sm font-semibold text-slate-200 hover:text-cyan-400 transition-colors">
                      ajizentubala5@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-900 border border-slate-800">
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-label="WhatsApp icon">
                      <path d="M12.04 2C6.58 2 2.13 6.41 2.13 11.86c0 2.07.62 4.08 1.7 5.77L2 22l4.53-1.46A9.82 9.82 0 0 0 12.04 21c5.46 0 9.91-4.41 9.91-9.86C21.95 6.41 17.5 2 12.04 2Zm0 17.95a8.03 8.03 0 0 1-4.12-1.13l-.29-.17-2.69.86.9-2.62-.18-.29a8.08 8.08 0 0 1-1.26-4.14c0-4.47 3.64-8.11 8.13-8.11s8.13 3.64 8.13 8.11-3.64 8.11-8.13 8.11Zm4.47-6.24c-.25-.13-1.47-.72-1.7-.8-.22-.08-.38-.12-.54.12-.16.25-.62.8-.76.96-.14.16-.28.18-.53.06-.25-.13-1.06-.39-2.02-1.25-.75-.67-1.25-1.5-1.4-1.75-.15-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.54-1.3-.74-1.77-.19-.46-.39-.4-.54-.41h-.46c-.16 0-.42.06-.64.31-.22.25-.84.82-.84 2s.86 2.31.98 2.47c.12.16 1.68 2.56 4.07 3.59.57.25 1.01.4 1.35.51.57.18 1.09.16 1.5.1.46-.07 1.47-.6 1.68-1.18.2-.58.2-1.08.14-1.18-.06-.11-.23-.17-.48-.3Z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">WhatsApp</div>
                    <a href="https://wa.me/2348130253318" target="_blank" rel="noreferrer" className="text-sm font-semibold text-slate-200 hover:text-emerald-400 transition-colors">
                      +234 813 025 3318
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-900 border border-slate-800">
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">LinkedIn Profile</div>
                    <a href="https://www.linkedin.com/in/bala-ajizentu-005958325/?isSelfProfile=true" target="_blank" rel="noreferrer" className="text-sm font-semibold text-slate-200 hover:text-emerald-400 transition-colors flex items-center gap-1">
                      Bala Ajizentu <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-900 border border-slate-800">
                  <div className="w-10 h-10 rounded-lg bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">ResearchGate</div>
                    <a href="https://www.researchgate.net/profile/Bala-Ajizentu-Garba" target="_blank" rel="noreferrer" className="text-sm font-semibold text-slate-200 hover:text-violet-400 transition-colors flex items-center gap-1">
                      All Research Papers <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-900 border border-slate-800">
                  <div className="w-10 h-10 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                    <Server className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">Location</div>
                    <div className="text-sm font-semibold text-slate-200">
                      Lagos / Bauchi, Nigeria (Open to Global Remote &amp; On-Site)
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 p-8 rounded-3xl bg-slate-900 border border-slate-800">
              {formSubmitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center p-8 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-100">Message Received!</h3>
                  <p className="text-slate-400 text-sm max-w-md">
                    Thank you for reaching out. I will review your inquiry and get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h3 className="text-xl font-bold text-slate-100">Send an Enterprise Inquiry</h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">Your Name</label>
                      <input type="text" required placeholder="John Doe" className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 placeholder-slate-600 focus:outline-none focus:border-cyan-500 text-sm" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">Your Email</label>
                      <input type="email" required placeholder="john@organization.com" className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 placeholder-slate-600 focus:outline-none focus:border-cyan-500 text-sm" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">Engagement Subject</label>
                    <input type="text" required placeholder="e.g., Enterprise Power Platform Migration & AI Project" className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 placeholder-slate-600 focus:outline-none focus:border-cyan-500 text-sm" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">Project Scope / Details</label>
                    <textarea rows={5} required placeholder="Outline your database, machine learning, or Power Platform project requirements..." className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 placeholder-slate-600 focus:outline-none focus:border-cyan-500 text-sm resize-none" />
                  </div>

                  <button type="submit" className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-500 text-slate-950 font-bold text-sm hover:opacity-90 transition-all shadow-lg shadow-cyan-500/20">
                    Submit Project Inquiry
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 border-t border-slate-800/80 bg-slate-950 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            © {new Date().getFullYear()} Bala Ajizentu Garba. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <a href="#about" className="hover:text-slate-300 transition-colors">About</a>
            <a href="#skills" className="hover:text-slate-300 transition-colors">Skills Matrix</a>
            <a href="#case-studies" className="hover:text-slate-300 transition-colors">Case Studies</a>
            <a href="C:/Users/DELL/Downloads/Bala A G CV.docx" download className="hover:text-cyan-400 transition-colors">CV</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
