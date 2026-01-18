export enum SkillNames {
  PYTHON = "python",
  TENSORFLOW = "tensorflow",
  PYTORCH = "pytorch",
  LANGCHAIN = "langchain",
  NUMPY = "numpy",
  PANDAS = "pandas",
  STREAMLIT = "streamlit",
  OPENAI = "openai",
  FAISS = "faiss",
  GIT = "git",
  GITHUB = "github",
  SQL = "sql",
  LUA = "lua",
  VIM = "vim",
  REINFORCEMENT_LEARNING = "reinforcement_learning",
  NLP = "nlp",
  DEEP_LEARNING = "deep_learning",
  TRANSFORMERS = "transformers",
  OPENAI_GYM = "openai_gym",
  SCIKIT_LEARN = "scikit_learn",
  RAG = "rag",
  JS = "js",
  TS = "ts",
  UNREAL = "unreal",
}
export type Skill = {
  id: number;
  name: string;
  label: string;
  shortDescription: string;
  color: string;
  icon: string;
};
// Legacy icon (Python) - used as fallback for skills without specific icons
export const LEGACY_ICON = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg";

export const SKILLS: Record<SkillNames, Skill> = {
  [SkillNames.PYTHON]: {
    id: 1,
    name: "python",
    label: "Python",
    shortDescription: "The snake that bit me and now I can't stop coding! 🐍💻",
    color: "#3776ab",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  [SkillNames.TENSORFLOW]: {
    id: 2,
    name: "tensorflow",
    label: "TensorFlow",
    shortDescription: "Making AI understand humans - still working on understanding myself! 🤖🤔",
    color: "#4ecdc4",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
  },
  [SkillNames.PYTORCH]: {
    id: 3,
    name: "pytorch",
    label: "PyTorch",
    shortDescription: "Teaching AI to make decisions - meanwhile I can't decide what to eat! 🚦🍕",
    color: "#ff6b6b",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg",
  },
  [SkillNames.LANGCHAIN]: {
    id: 4,
    name: "langchain",
    label: "LangChain",
    shortDescription: "Chaining AI models like a boss - but can it chain me to my desk? 🔗⛓️",
    color: "#45b7d1",
    icon: LEGACY_ICON,
  },
  [SkillNames.NUMPY]: {
    id: 5,
    name: "numpy",
    label: "NumPy",
    shortDescription: "Arrays that go brrrr - faster than my brain at 2 AM! 🔢⚡",
    color: "#4dabcf",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg",
  },
  [SkillNames.PANDAS]: {
    id: 6,
    name: "pandas",
    label: "Pandas",
    shortDescription: "The panda that eats data for breakfast - I wish I could eat data! 🐼🍽️",
    color: "#150458",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg",
  },
  [SkillNames.STREAMLIT]: {
    id: 7,
    name: "streamlit",
    label: "Streamlit",
    shortDescription: "Making ML models look pretty - because beauty is in the eye of the beholder! 📊✨",
    color: "#ff4b4b",
    icon: LEGACY_ICON,
  },
  [SkillNames.OPENAI]: {
    id: 8,
    name: "openai",
    label: "OpenAI",
    shortDescription: "GPT models - making AI chat better than my social skills! 🤖💬",
    color: "#00a67e",
    icon: LEGACY_ICON,
  },
  [SkillNames.FAISS]: {
    id: 9,
    name: "faiss",
    label: "FAISS Vec DB",
    shortDescription: "Finding needles in haystacks - but can it find my motivation? 🔍🧲",
    color: "#a29bfe",
    icon: LEGACY_ICON,
  },
  [SkillNames.GIT]: {
    id: 10,
    name: "git",
    label: "Git",
    shortDescription: "The code's personal bodyguard - protecting me from myself! 🕵️‍♂️🛡️",
    color: "#f1502f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  [SkillNames.GITHUB]: {
    id: 11,
    name: "github",
    label: "GitHub",
    shortDescription: "Sliding into those pull requests - smoother than my pickup lines! 🐙💕",
    color: "#000000",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  [SkillNames.SQL]: {
    id: 12,
    name: "sql",
    label: "SQL",
    shortDescription: "Making databases go zoom zoom - faster than my WiFi! 🚀📡",
    color: "#336791",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  [SkillNames.LUA]: {
    id: 13,
    name: "lua",
    label: "Lua",
    shortDescription: "FiveM scripting - making games do things they weren't meant to! 🎮😈",
    color: "#000080",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/lua/lua-original.svg",
  },
  [SkillNames.VIM]: {
    id: 14,
    name: "vim",
    label: "Vim",
    shortDescription: "Exit? In this economy? Ight, imma head out! 🚪🏃",
    color: "#019733",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vim/vim-original.svg",
  },
  [SkillNames.REINFORCEMENT_LEARNING]: {
    id: 15,
    name: "reinforcement_learning",
    label: "RL",
    shortDescription: "Teaching AI to make decisions - still better than my life choices! 🚦🤷",
    color: "#ff6b6b",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg",
  },
  [SkillNames.NLP]: {
    id: 16,
    name: "nlp",
    label: "NLP",
    shortDescription: "Making AI understand humans - a task harder than understanding myself! 🤖🧠",
    color: "#4ecdc4",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
  },
  [SkillNames.DEEP_LEARNING]: {
    id: 17,
    name: "deep_learning",
    label: "Deep Learning",
    shortDescription: "Neural networks going deep - like my existential crisis at 3 AM! 🧠🌙",
    color: "#6c5ce7",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
  },
  [SkillNames.TRANSFORMERS]: {
    id: 18,
    name: "transformers",
    label: "Transformers",
    shortDescription: "Attention is all you need - said no one to me ever! 🤖👀",
    color: "#ffd700",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
  },
  [SkillNames.OPENAI_GYM]: {
    id: 19,
    name: "openai_gym",
    label: "OpenAI Gym",
    shortDescription: "Where AI agents go to get swole - I should probably go too! 🏋️🤖",
    color: "#96ceb4",
    icon: LEGACY_ICON,
  },
  [SkillNames.SCIKIT_LEARN]: {
    id: 20,
    name: "scikit_learn",
    label: "Scikit-learn",
    shortDescription: "Machine learning made easy - unlike my life! 📊😅",
    color: "#f7931e",
    icon: LEGACY_ICON,
  },
  [SkillNames.RAG]: {
    id: 21,
    name: "rag",
    label: "RAG",
    shortDescription: "Making LLMs smarter with context - I need context for my life too! 🔗🧠",
    color: "#45b7d1",
    icon: LEGACY_ICON,
  },
  [SkillNames.JS]: {
    id: 22,
    name: "js",
    label: "JavaScript",
    shortDescription: "Yeeting code into the DOM since '95 - no cap, all facts! 💯🚀",
    color: "#f0db4f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  [SkillNames.TS]: {
    id: 23,
    name: "ts",
    label: "TypeScript",
    shortDescription:
      "JavaScript's overachieving cousin - always flexing with types! 💯🔒",
    color: "#007acc",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  [SkillNames.UNREAL]: {
    id: 24,
    name: "unreal",
    label: "Unreal Engine",
    shortDescription: "Building worlds where AI can drive - still safer than my driving! 🎮🚗",
    color: "#313131",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unrealengine/unrealengine-original.svg",
  },
};

// Reverse lookup: Map Spline object names to SkillNames enum values
export const SPLINE_NAME_TO_SKILL: Record<string, SkillNames> = {
  "python": SkillNames.PYTHON,
  "tensorflow": SkillNames.TENSORFLOW,
  "pytorch": SkillNames.PYTORCH,
  "langchain": SkillNames.LANGCHAIN,
  "numpy": SkillNames.NUMPY,
  "pandas": SkillNames.PANDAS,
  "streamlit": SkillNames.STREAMLIT,
  "openai": SkillNames.OPENAI,
  "faiss": SkillNames.FAISS,
  "git": SkillNames.GIT,
  "github": SkillNames.GITHUB,
  "sql": SkillNames.SQL,
  "lua": SkillNames.LUA,
  "vim": SkillNames.VIM,
  "reinforcement_learning": SkillNames.REINFORCEMENT_LEARNING,
  "nlp": SkillNames.NLP,
  "deep_learning": SkillNames.DEEP_LEARNING,
  "transformers": SkillNames.TRANSFORMERS,
  "openai_gym": SkillNames.OPENAI_GYM,
  "scikit_learn": SkillNames.SCIKIT_LEARN,
  "rag": SkillNames.RAG,
  "js": SkillNames.JS,
  "ts": SkillNames.TS,
  "unreal": SkillNames.UNREAL,
};

export type Experience = {
  id: number;
  startDate: string;
  endDate: string;
  title: string;
  company: string;
  description: string[];
  skills: SkillNames[];
};

export const EXPERIENCE: Experience[] = [
  {
    id: 1,
    startDate: "Dec 2024",
    endDate: "Present",
    title: "Full Stack Engineer",
    company: "OmniNexus",
    description: [
      "Developing scalable full-stack applications involved in complex systems.",
      "Optimizing database performance and query efficiency.",
      "Collaborating on architectural decisions and technical strategy.",
    ],
    skills: [
      SkillNames.NEXTJS,
      SkillNames.TS,
      SkillNames.POSTGRES,
      SkillNames.DOCKER,
      SkillNames.AWS,
    ],
  },
  {
    id: 2,
    startDate: "Apr 2022",
    endDate: "Dec 2024",
    title: "Freelance Developer",
    company: "Live & Learn",
    description: [
      "Delivered custom web solutions for diverse clients.",
      "Managed full project lifecycles from design to deployment.",
      "Maintained high client satisfaction through effective communication.",
    ],
    skills: [
      SkillNames.REACT,
      SkillNames.NODEJS,
      SkillNames.MONGODB,
      SkillNames.TAILWIND,
      SkillNames.WORDPRESS,
    ],
  },
];

export const themeDisclaimers = {
  light: [
    "Warning: Light mode emits a gazillion lumens of pure radiance!",
    "Caution: Light mode ahead! Please don't try this at home.",
    "Only trained professionals can handle this much brightness. Proceed with sunglasses!",
    "Brace yourself! Light mode is about to make everything shine brighter than your future.",
    "Flipping the switch to light mode... Are you sure your eyes are ready for this?",
  ],
  dark: [
    "Light mode? I thought you went insane... but welcome back to the dark side!",
    "Switching to dark mode... How was life on the bright side?",
    "Dark mode activated! Thanks you from the bottom of my heart, and my eyes too.",
    "Welcome back to the shadows. How was life out there in the light?",
    "Dark mode on! Finally, someone who understands true sophistication.",
  ],
};

