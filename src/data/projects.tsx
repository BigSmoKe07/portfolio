import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight, ExternalLink, Link2, MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from "react-icons/ri";
import {
  SiChakraui,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReactquery,
  SiSanity,
  SiShadcnui,
  SiSocketdotio,
  SiSupabase,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiVuedotjs,
  SiPytorch,
  SiTensorflow,
  SiOpenai,
  SiStreamlit,
  SiUnrealengine,
  SiGo,
  SiRedis,
  SiFastapi,
  SiTerraform,
  SiGrafana,
  SiPrometheus,
  SiAmazonaws,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({ live, repo }: { live: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      {live && live !== "#" && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={live}
        >
          <Button variant={"default"} size={"sm"}>
            Visit Website
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
      {repo && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};
const PROJECT_SKILLS = {
  next: {
    title: "Next.js",
    bg: "black",
    fg: "white",
    icon: <RiNextjsFill />,
  },
  chakra: {
    title: "Chakra UI",
    bg: "black",
    fg: "white",
    icon: <SiChakraui />,
  },
  node: {
    title: "Node.js",
    bg: "black",
    fg: "white",
    icon: <RiNodejsFill />,
  },
  python: {
    title: "Python",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  prisma: {
    title: "prisma",
    bg: "black",
    fg: "white",
    icon: <SiPrisma />,
  },
  postgres: {
    title: "PostgreSQL",
    bg: "black",
    fg: "white",
    icon: <SiPostgresql />,
  },
  mongo: {
    title: "MongoDB",
    bg: "black",
    fg: "white",
    icon: <SiMongodb />,
  },
  express: {
    title: "Express",
    bg: "black",
    fg: "white",
    icon: <SiExpress />,
  },
  reactQuery: {
    title: "React Query",
    bg: "black",
    fg: "white",
    icon: <SiReactquery />,
  },
  shadcn: {
    title: "ShanCN UI",
    bg: "black",
    fg: "white",
    icon: <SiShadcnui />,
  },
  aceternity: {
    title: "Aceternity",
    bg: "black",
    fg: "white",
    icon: <AceTernityLogo />,
  },
  tailwind: {
    title: "Tailwind",
    bg: "black",
    fg: "white",
    icon: <SiTailwindcss />,
  },
  docker: {
    title: "Docker",
    bg: "black",
    fg: "white",
    icon: <SiDocker />,
  },
  yjs: {
    title: "Y.js",
    bg: "black",
    fg: "white",
    icon: (
      <span>
        <strong>Y</strong>js
      </span>
    ),
  },
  firebase: {
    title: "Firebase",
    bg: "black",
    fg: "white",
    icon: <SiFirebase />,
  },
  sockerio: {
    title: "Socket.io",
    bg: "black",
    fg: "white",
    icon: <SiSocketdotio />,
  },
  js: {
    title: "JavaScript",
    bg: "black",
    fg: "white",
    icon: <SiJavascript />,
  },
  ts: {
    title: "TypeScript",
    bg: "black",
    fg: "white",
    icon: <SiTypescript />,
  },
  vue: {
    title: "Vue.js",
    bg: "black",
    fg: "white",
    icon: <SiVuedotjs />,
  },
  react: {
    title: "React.js",
    bg: "black",
    fg: "white",
    icon: <RiReactjsFill />,
  },
  sanity: {
    title: "Sanity",
    bg: "black",
    fg: "white",
    icon: <SiSanity />,
  },
  spline: {
    title: "Spline",
    bg: "black",
    fg: "white",
    icon: <SiThreedotjs />,
  },
  gsap: {
    title: "GSAP",
    bg: "black",
    fg: "white",
    icon: "",
  },
  framerMotion: {
    title: "Framer Motion",
    bg: "black",
    fg: "white",
    icon: <TbBrandFramerMotion />,
  },
  supabase: {
    title: "Supabase",
    bg: "black",
    fg: "white",
    icon: <SiSupabase />,
  },
  pytorch: {
    title: "PyTorch",
    bg: "black",
    fg: "white",
    icon: <SiPytorch />,
  },
  tensorflow: {
    title: "TensorFlow",
    bg: "black",
    fg: "white",
    icon: <SiTensorflow />,
  },
  openai: {
    title: "OpenAI",
    bg: "black",
    fg: "white",
    icon: <SiOpenai />,
  },
  pandas: {
    title: "Pandas",
    bg: "black",
    fg: "white",
    icon: <span className="text-lg font-bold">🐼</span>,
  },
  numpy: {
    title: "NumPy",
    bg: "black",
    fg: "white",
    icon: <span className="text-lg font-bold">📊</span>,
  },
  langchain: {
    title: "LangChain",
    bg: "black",
    fg: "white",
    icon: <span className="text-sm font-bold">🔗</span>,
  },
  langgraph: {
    title: "LangGraph",
    bg: "black",
    fg: "white",
    icon: <span className="text-sm font-bold">📈</span>,
  },
  faiss: {
    title: "FAISS",
    bg: "black",
    fg: "white",
    icon: <span className="text-sm font-bold">🔍</span>,
  },
  streamlit: {
    title: "Streamlit",
    bg: "black",
    fg: "white",
    icon: <SiStreamlit />,
  },
  gradio: {
    title: "Gradio",
    bg: "black",
    fg: "white",
    icon: <span className="text-sm font-bold">🎨</span>,
  },
  openaiGym: {
    title: "OpenAI Gym",
    bg: "black",
    fg: "white",
    icon: <span className="text-sm font-bold">🏋️</span>,
  },
  unrealEngine: {
    title: "Unreal Engine",
    bg: "black",
    fg: "white",
    icon: <SiUnrealengine />,
  },
  go: {
    title: "Go",
    bg: "black",
    fg: "white",
    icon: <SiGo />,
  },
  redis: {
    title: "Redis",
    bg: "black",
    fg: "white",
    icon: <SiRedis />,
  },
  fastapi: {
    title: "FastAPI",
    bg: "black",
    fg: "white",
    icon: <SiFastapi />,
  },
  terraform: {
    title: "Terraform",
    bg: "black",
    fg: "white",
    icon: <SiTerraform />,
  },
  grafana: {
    title: "Grafana",
    bg: "black",
    fg: "white",
    icon: <SiGrafana />,
  },
  prometheus: {
    title: "Prometheus",
    bg: "black",
    fg: "white",
    icon: <SiPrometheus />,
  },
  aws: {
    title: "AWS",
    bg: "black",
    fg: "white",
    icon: <SiAmazonaws />,
  },
  ollama: {
    title: "Ollama",
    bg: "black",
    fg: "white",
    icon: <span className="text-sm font-bold">🦙</span>,
  },
  huggingface: {
    title: "HuggingFace",
    bg: "black",
    fg: "white",
    icon: <span className="text-sm font-bold">🤗</span>,
  },
};
export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};
const projects: Project[] = [
  {
    id: "llm-inference-server",
    category: "Backend - ML Infrastructure",
    title: "LLM Inference Server",
    src: "/assets/projects-screenshots/llm bot.jpg",
    screenshots: ["landing.png"],
    skills: {
      frontend: [PROJECT_SKILLS.python, PROJECT_SKILLS.fastapi],
      backend: [
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.fastapi,
        PROJECT_SKILLS.aws,
        PROJECT_SKILLS.postgres,
        PROJECT_SKILLS.terraform,
        PROJECT_SKILLS.docker,
        PROJECT_SKILLS.huggingface,
        PROJECT_SKILLS.prometheus,
        PROJECT_SKILLS.grafana,
      ],
    },
    live: "#",
    github: "https://github.com/BigSmoKe07/llm-inference-server",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Async ML Inference Platform at Scale
          </TypographyP>
          <TypographyP className="font-mono">
            A queue-based async inference platform that decouples a thin FastAPI tier from a
            dedicated worker fleet on AWS ECS Fargate, handling 500+ concurrent users at
            sub-50ms API latency. Workers auto-scale (1→3→6→10) based on SQS queue depth,
            with full Terraform IaC, GitHub Actions CI/CD, and Prometheus/Grafana observability.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Impact</TypographyH3>
          <ul className="list-disc ml-6 font-mono mb-4">
            <li>500+ concurrent users at sub-50ms API response time</li>
            <li>Worker autoscaling: 1→3→6→10 on SQS queue depth</li>
            <li>595,000-request load test — 28 unit tests, 0 failures</li>
            <li>8-module Terraform IaC; GitHub Actions OIDC CI/CD</li>
            <li>DynamoDB result store with 24h TTL; full local stack via Docker Compose + LocalStack</li>
          </ul>
          <TypographyH3 className="my-4 mt-8">Technology Stack</TypographyH3>
          <p className="font-mono mb-2">
            Python, FastAPI, AWS ECS Fargate, SQS, DynamoDB, Terraform, HuggingFace Transformers (distilbert), Prometheus, Grafana, Docker
          </p>
        </div>
      );
    },
  },
  {
    id: "phir",
    category: "Backend - LLM Infrastructure",
    title: "PHIR — Predictive Hybrid Inference Router",
    src: "/assets/projects-screenshots/ai task.jpg",
    screenshots: ["landing.png"],
    skills: {
      frontend: [PROJECT_SKILLS.go, PROJECT_SKILLS.docker],
      backend: [
        PROJECT_SKILLS.go,
        PROJECT_SKILLS.redis,
        PROJECT_SKILLS.ollama,
        PROJECT_SKILLS.openai,
        PROJECT_SKILLS.prometheus,
        PROJECT_SKILLS.docker,
      ],
    },
    live: "#",
    github: "https://github.com/BigSmoKe07/phir",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Smart LLM Router: Edge vs. Cloud in &lt;10ms
          </TypographyP>
          <TypographyP className="font-mono">
            A middleware layer written in Go that intelligently routes LLM prompts to either
            local edge models (Ollama) or cloud APIs (OpenAI, Anthropic, Gemini) based on
            prompt complexity — making the routing decision in under 10ms. Acts as a drop-in
            OpenAI-compatible API with streaming support, cutting inference costs by keeping
            simple requests local.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Key Features</TypographyH3>
          <ul className="list-disc ml-6 font-mono mb-4">
            <li>Routing decision in &lt;10ms via heuristic complexity scoring (~50µs classification)</li>
            <li>Seamless edge→cloud context migration mid-conversation without token loss</li>
            <li>Multi-node Ollama cluster load balancing with health checking</li>
            <li>Drop-in OpenAI-compatible REST API with streaming support</li>
            <li>Automatic failover and de-escalation; 7 Prometheus metrics</li>
          </ul>
          <TypographyH3 className="my-4 mt-8">Technology Stack</TypographyH3>
          <p className="font-mono mb-2">
            Go 1.22+, Ollama (phi3:mini / llama3.2:3b / mistral:7b), OpenAI / Anthropic / Gemini APIs, Redis, Prometheus, Docker
          </p>
        </div>
      );
    },
  },
  {
    id: "llm-support-bot",
    category: "AI/ML - RAG System",
    title: "LLM-Powered Customer Support Bot",
    src: "/assets/projects-screenshots/llm bot.jpg",
    screenshots: ["landing.png"],
    skills: {
      frontend: [PROJECT_SKILLS.python, PROJECT_SKILLS.streamlit],
      backend: [PROJECT_SKILLS.python, PROJECT_SKILLS.openai, PROJECT_SKILLS.langchain, PROJECT_SKILLS.faiss, PROJECT_SKILLS.pandas],
    },
    live: "#",
    github: "https://github.com/gurusarank/llm-support-bot",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Adaptive RAG System for EdTech Support
          </TypographyP>
          <TypographyP className="font-mono ">
            An intelligent customer support bot for BlueArise (edtech platform) that embeds student tickets using adaptive RAG (Retrieval-Augmented Generation), automating 70% of repeat queries such as course enrollment and technical access issues.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Impact</TypographyH3>
          <ul className="list-disc ml-6 font-mono mb-4">
            <li>Reduced support workload by 40%</li>
            <li>Response times under 5 minutes</li>
            <li>CSAT increased by 25%</li>
            <li>85% accuracy on edtech queries</li>
            <li>Automated 500+ queries</li>
          </ul>
          <TypographyH3 className="my-4 mt-8">Technology Stack</TypographyH3>
          <p className="font-mono mb-2">
            Python, LangChain, OpenAI APIs, FAISS (vector database), Streamlit
          </p>
          <p className="font-mono mb-2 text-sm text-zinc-500">
            Collaborated with Jaidev Parthiban
          </p>
        </div>
      );
    },
  },
  {
    id: "task-planner",
    category: "AI/ML - LLM Planner",
    title: "Task Planner",
    src: "/assets/projects-screenshots/ai task.jpg",
    screenshots: ["landing.png"],
    skills: {
      frontend: [PROJECT_SKILLS.python, PROJECT_SKILLS.streamlit],
      backend: [PROJECT_SKILLS.python, PROJECT_SKILLS.pandas, PROJECT_SKILLS.numpy, PROJECT_SKILLS.langchain, PROJECT_SKILLS.langgraph],
    },
    live: "https://z9svpxajzxrfgkuwcgbwaw.streamlit.app/",
    github: "https://github.com/gurusarank",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            LLM-Powered Daily Scheduling Assistant
          </TypographyP>
          <TypographyP className="font-mono ">
            An intelligent task planner that uses LLM capabilities to cut daily scheduling time by 35% for 50 beta users via LangGraph workflows, providing personalized roadmaps in under 2 seconds.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Impact</TypographyH3>
          <ul className="list-disc ml-6 font-mono mb-4">
            <li>Reduced daily scheduling time by 35%</li>
            <li>On-time task completions improved from 62% to 82%</li>
            <li>Personalized roadmaps generated in &lt;2 seconds</li>
            <li>Served 50 beta users successfully</li>
          </ul>
          <TypographyH3 className="my-4 mt-8">Technology Stack</TypographyH3>
          <p className="font-mono mb-2">
            Python, Pandas, NumPy, LangChain, LangGraph, Streamlit
          </p>
        </div>
      );
    },
  },
  {
    id: "traffic-signal",
    category: "AI/ML - Reinforcement Learning",
    title: "Intelligent Traffic Signal Network",
    src: "/assets/projects-screenshots/rl traffic.jpg",
    screenshots: ["landing.png"],
    skills: {
      frontend: [PROJECT_SKILLS.python],
      backend: [PROJECT_SKILLS.python, PROJECT_SKILLS.pandas, PROJECT_SKILLS.numpy, PROJECT_SKILLS.openaiGym, PROJECT_SKILLS.unrealEngine],
    },
    live: "#",
    github: "https://github.com/BigSmoKe07/Virtual-Traffic-Dynamics/",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            RL-Based Traffic Controller for Smart Cities
          </TypographyP>
          <TypographyP className="font-mono ">
            A reinforcement learning-based traffic signal controller that boosts intersection throughput by approximately 30% in Unreal Engine simulations. This research project was presented at IconDeepCom 2025 and accepted for publication in Springer proceedings.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Impact</TypographyH3>
          <ul className="list-disc ml-6 font-mono mb-4">
            <li>Increased intersection throughput by ~30%</li>
            <li>Reduced wait times by 22%</li>
            <li>Validated over 10,000 training episodes</li>
            <li>Converged in &lt;75 iterations</li>
            <li>Published in IconDeepCom 2025 (Springer)</li>
          </ul>
          <TypographyH3 className="my-4 mt-8">Technology Stack</TypographyH3>
          <p className="font-mono mb-2">
            Python, Pandas, NumPy, OpenAI Gym, Unreal Engine
          </p>
          <p className="font-mono mb-2 text-sm text-zinc-500">
            Open-sourced on GitHub
          </p>
        </div>
      );
    },
  },
  {
    id: "pronunciation-training",
    category: "AI/ML - Speech Recognition",
    title: "AI-Driven Pronunciation Training",
    src: "/assets/projects-screenshots/ai pro.jpg",
    screenshots: ["landing.png"],
    skills: {
      frontend: [PROJECT_SKILLS.python],
      backend: [PROJECT_SKILLS.python, PROJECT_SKILLS.tensorflow, PROJECT_SKILLS.pytorch],
    },
    live: "#",
    github: "https://github.com/BigSmoKe07/pronunciation-analysis/tree/main",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Speech Coach for ESL Learners
          </TypographyP>
          <TypographyP className="font-mono ">
            An AI-powered speech coach designed for 120+ ESL learners, improving pronunciation accuracy by 18% in 6 weeks using adaptive LLMs and real-time speech detection.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Impact</TypographyH3>
          <ul className="list-disc ml-6 font-mono mb-4">
            <li>Improved pronunciation accuracy by +18% in 6 weeks</li>
            <li>Real-time detection with ≤120ms latency</li>
            <li>21% WER (Word Error Rate) baseline</li>
            <li>20% error reduction for beginners</li>
            <li>Served 120+ ESL learners</li>
          </ul>
          <TypographyH3 className="my-4 mt-8">Technology Stack</TypographyH3>
          <p className="font-mono mb-2">
            Python, TensorFlow, PyTorch, Wav2Vec 2.0, Speech APIs
          </p>
        </div>
      );
    },
  },
  {
    id: "toxic-comment-classification",
    category: "AI/ML - NLP",
    title: "Toxic Comment Classification",
    src: "/assets/projects-screenshots/toxic.jpg",
    screenshots: ["landing.png"],
    skills: {
      frontend: [PROJECT_SKILLS.python, PROJECT_SKILLS.gradio],
      backend: [PROJECT_SKILLS.python, PROJECT_SKILLS.tensorflow, PROJECT_SKILLS.pandas],
    },
    live: "#",
    github: "https://github.com/BigSmoKe07/CommentToxicity",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            6-Label Deep Learning Classifier
          </TypographyP>
          <TypographyP className="font-mono ">
            A deep learning classifier for toxic comment detection trained on 160k comments, achieving micro-F1 score of 0.92. The system provides 3x faster inference and 40% reduction in preprocessing time.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Impact</TypographyH3>
          <ul className="list-disc ml-6 font-mono mb-4">
            <li>Micro-F1 score of 0.92</li>
            <li>3x faster inference compared to baseline</li>
            <li>40% reduction in preprocessing time</li>
            <li>Served 210+ predictions via Gradio demo</li>
            <li>Trained on 160k comment dataset</li>
          </ul>
          <TypographyH3 className="my-4 mt-8">Technology Stack</TypographyH3>
          <p className="font-mono mb-2">
            Python, TensorFlow, Pandas, Bi-LSTM, Gradio
          </p>
        </div>
      );
    },
  },
];
export default projects;
