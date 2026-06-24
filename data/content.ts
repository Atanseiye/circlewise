import {
  Apple,
  BookOpen,
  Brain,
  Calendar,
  Droplets,
  GraduationCap,
  HandHeart,
  Heart,
  HeartPulse,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Users
} from "lucide-react";

export const site = {
  name: "CircleWise Initiative",
  tagline: "Health, dignity, and knowledge for every girl and woman.",
  description:
    "CircleWise Initiative supports girls and women with menstrual education, period tracking tools, reproductive health awareness, hygiene, dignity, nutrition, mental wellness, and community-based care."
};

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/tracker", label: "Period Tracker" },
  { href: "/resources", label: "Resources" },
  { href: "/programs", label: "Programs" },
  { href: "/get-involved", label: "Get Involved" },
  { href: "/contact", label: "Contact" }
];

export const impactHighlights = [
  {
    title: "Menstrual Education",
    text: "Practical lessons that help girls understand their cycles, hygiene, and body changes.",
    icon: GraduationCap
  },
  {
    title: "Girl-Child Care",
    text: "Safe conversations, confidence-building support, and wellness guidance for school girls.",
    icon: Heart
  },
  {
    title: "Hygiene Support",
    text: "Period dignity kits and simple hygiene routines that protect health and comfort.",
    icon: Droplets
  },
  {
    title: "Community Outreach",
    text: "School, family, and community sessions designed for women with limited access to care.",
    icon: Users
  }
];

export const values = [
  {
    title: "Dignity",
    text: "Every girl and woman deserves to manage her health without shame.",
    icon: Sparkles
  },
  {
    title: "Care",
    text: "We lead with empathy, patience, and respect for lived experiences.",
    icon: HandHeart
  },
  {
    title: "Education",
    text: "Clear information helps young people make safer, healthier decisions.",
    icon: BookOpen
  },
  {
    title: "Privacy",
    text: "Sensitive health information should stay personal and protected.",
    icon: ShieldCheck
  },
  {
    title: "Access",
    text: "Reliable health knowledge should reach communities that need it most.",
    icon: HeartPulse
  },
  {
    title: "Community",
    text: "Lasting change grows through families, schools, leaders, and health workers.",
    icon: Users
  }
];

export const programPreviews = [
  {
    title: "School Health Sessions",
    text: "Age-appropriate menstrual and puberty education delivered in schools.",
    href: "/programs#school-menstrual-health-education"
  },
  {
    title: "Period Dignity Kits",
    text: "Pads, hygiene essentials, and care notes for girls who need support.",
    href: "/programs#period-dignity-kit-distribution"
  },
  {
    title: "Mother-Daughter Circles",
    text: "Guided conversations that make body education easier at home.",
    href: "/programs#mother-daughter-health-conversations"
  }
];

export const programs = [
  {
    id: "school-menstrual-health-education",
    title: "School Menstrual Health Education",
    purpose:
      "Teach girls what menstruation is, how to care for themselves, and when to ask for help.",
    serves: "Primary and secondary school girls, teachers, school counselors, and parents.",
    impact:
      "Girls feel less afraid of their bodies, miss fewer school days, and receive safer information early.",
    icon: GraduationCap
  },
  {
    id: "period-dignity-kit-distribution",
    title: "Period Dignity Kit Distribution",
    purpose:
      "Provide basic menstrual and hygiene supplies to girls and women who cannot access them consistently.",
    serves: "Underserved school girls, rural communities, outreach groups, and vulnerable households.",
    impact:
      "More girls can manage their periods with comfort, privacy, and confidence.",
    icon: Droplets
  },
  {
    id: "girl-child-wellness-outreach",
    title: "Girl-Child Wellness Outreach",
    purpose:
      "Create safe spaces for girls to learn about hygiene, nutrition, confidence, and mental wellness.",
    serves: "Girls in schools, faith communities, youth centers, and underserved neighborhoods.",
    impact:
      "Young girls gain practical life skills and a stronger sense of self-worth.",
    icon: Heart
  },
  {
    id: "community-health-awareness",
    title: "Community Health Awareness",
    purpose:
      "Bring preventive health education to women through simple talks, screenings, and referrals.",
    serves: "Women, mothers, caregivers, community leaders, and local support groups.",
    impact:
      "Women recognize warning signs earlier and know where to seek trusted support.",
    icon: HeartPulse
  },
  {
    id: "mother-daughter-health-conversations",
    title: "Mother-Daughter Health Conversations",
    purpose:
      "Help mothers and guardians talk openly with girls about puberty, periods, boundaries, and care.",
    serves: "Mothers, daughters, aunties, guardians, mentors, and family support networks.",
    impact:
      "Families build trust, reduce stigma, and make home a safer place for health questions.",
    icon: MessageCircle
  }
];

export const involvementOptions = [
  {
    title: "Volunteer",
    text: "Support school sessions, outreach events, packing days, community follow-up, or digital education.",
    action: "Volunteer",
    href: "/contact?interest=Volunteer",
    icon: HandHeart
  },
  {
    title: "Partner With Us",
    text: "Collaborate as a school, nonprofit, clinic, faith group, business, or community organization.",
    action: "Partner With Us",
    href: "/contact?interest=Partnership",
    icon: Users
  },
  {
    title: "Sponsor a Girl",
    text: "Help provide dignity kits, educational materials, and wellness support for girls who need them.",
    action: "Sponsor a Girl",
    href: "/contact?interest=Sponsorship",
    icon: Sparkles
  },
  {
    title: "Invite CircleWise",
    text: "Bring a menstrual health, hygiene, or girl-child wellness session to your school or community.",
    action: "Invite CircleWise",
    href: "/contact?interest=School%20or%20Community%20Invitation",
    icon: GraduationCap
  }
];

export const resources = [
  {
    slug: "menstrual-health",
    title: "Menstrual Health",
    category: "Periods",
    description:
      "Understand what periods are, what is normal, and how to care for yourself each month.",
    icon: Calendar,
    article: [
      {
        heading: "What is menstruation?",
        body:
          "Menstruation, often called a period, is a normal monthly body process. It happens when the lining of the womb leaves the body through the vagina. A first period can feel surprising, but it is not dirty or shameful."
      },
      {
        heading: "What can be normal?",
        body:
          "Periods can last a few days or up to a week. Some people have cramps, tiredness, mood changes, acne, or breast tenderness. Your cycle may not be regular at first, especially during the first few years."
      },
      {
        heading: "When to ask for help",
        body:
          "Talk to a trusted adult or health worker if bleeding is very heavy, pain stops you from normal activities, your period suddenly changes, or you feel worried about what is happening."
      }
    ],
    tips: [
      "Change pads or menstrual products regularly.",
      "Wash your hands before and after changing products.",
      "Track your period so you can notice patterns."
    ]
  },
  {
    slug: "puberty",
    title: "Puberty",
    category: "Body Changes",
    description:
      "Learn about body changes, emotions, growth, and why every person develops at a different pace.",
    icon: Sparkles,
    article: [
      {
        heading: "Your body is growing",
        body:
          "Puberty is the time when a child's body begins changing into an adult body. You may notice breast growth, body hair, sweat, acne, height changes, and the start of periods."
      },
      {
        heading: "Feelings can change too",
        body:
          "Hormones can affect mood and emotions. Feeling shy, excited, confused, or worried is common. It helps to speak with someone safe and informed."
      },
      {
        heading: "Everyone has their own timing",
        body:
          "Some girls begin puberty earlier and some later. Different timing does not make anyone better or worse. If you have concerns, ask a trusted health worker."
      }
    ],
    tips: [
      "Keep your body clean and wear fresh underwear.",
      "Ask questions when you do not understand a body change.",
      "Be kind to yourself as your body grows."
    ]
  },
  {
    slug: "hygiene",
    title: "Hygiene",
    category: "Daily Care",
    description:
      "Simple hygiene habits for periods, school days, shared bathrooms, and everyday confidence.",
    icon: Droplets,
    article: [
      {
        heading: "Daily hygiene matters",
        body:
          "Good hygiene helps prevent discomfort, odor, irritation, and infection. Simple habits like handwashing, bathing, and using clean menstrual products make a real difference."
      },
      {
        heading: "During your period",
        body:
          "Change your pad or product before it becomes too full. Wrap used pads properly before disposal. If clean water is limited, use what is available safely and wash hands when possible."
      },
      {
        heading: "Avoid harsh products",
        body:
          "The vagina cleans itself naturally. Avoid putting perfumes, harsh soaps, or unsafe products inside the vagina. If there is itching, pain, or unusual discharge, ask for medical advice."
      }
    ],
    tips: [
      "Carry an extra pad when possible.",
      "Wear breathable underwear.",
      "Dry reusable products fully in clean sunlight if using them."
    ]
  },
  {
    slug: "fertility-awareness",
    title: "Fertility Awareness",
    category: "Cycle Knowledge",
    description:
      "Understand ovulation, fertile days, cycle tracking, and why estimates are never perfect.",
    icon: HeartPulse,
    article: [
      {
        heading: "What is ovulation?",
        body:
          "Ovulation is when an ovary releases an egg. It often happens around the middle of a menstrual cycle, but timing can change because of stress, illness, travel, age, or natural body differences."
      },
      {
        heading: "What are fertile days?",
        body:
          "Fertile days are the days when pregnancy is more likely if sperm meets an egg. Tracking can help you learn your body, but it should not be treated as a perfect prediction."
      },
      {
        heading: "Use trusted guidance",
        body:
          "Cycle apps and trackers give estimates only. For pregnancy prevention, pregnancy planning, or health concerns, speak with a qualified health worker."
      }
    ],
    tips: [
      "Track your period start dates for several months.",
      "Notice changes in discharge, cramps, or energy.",
      "Do not rely on estimates alone for medical decisions."
    ]
  },
  {
    slug: "nutrition",
    title: "Nutrition",
    category: "Food and Strength",
    description:
      "Helpful food ideas for energy, iron, hydration, and period comfort using everyday meals.",
    icon: Apple,
    article: [
      {
        heading: "Food supports your cycle",
        body:
          "Eating enough food helps your body grow, learn, and handle monthly bleeding. A balanced plate can include grains, beans, vegetables, fruits, fish, eggs, nuts, or other local options."
      },
      {
        heading: "Iron is important",
        body:
          "Blood loss during periods can reduce iron in the body. Iron-rich foods include beans, leafy greens, meat, fish, and fortified cereals. Vitamin C foods like oranges or tomatoes can help the body use iron."
      },
      {
        heading: "Water and rest help",
        body:
          "Drinking water and resting when possible can reduce tiredness. If you feel dizzy, extremely weak, or your bleeding is very heavy, ask for medical help."
      }
    ],
    tips: [
      "Eat before school when possible.",
      "Pair iron-rich foods with fruits or vegetables.",
      "Limit skipping meals during your period."
    ]
  },
  {
    slug: "mental-wellness",
    title: "Mental Wellness",
    category: "Emotional Health",
    description:
      "Gentle guidance for mood changes, stress, confidence, and knowing when to seek support.",
    icon: Brain,
    article: [
      {
        heading: "Your feelings matter",
        body:
          "Body changes and period symptoms can affect emotions. Feeling worried, sad, tired, or irritable sometimes does not make you weak. It means your body and mind need care."
      },
      {
        heading: "Small supports can help",
        body:
          "Talking to someone safe, breathing slowly, resting, journaling, praying, moving gently, or taking a quiet moment can help you feel more steady."
      },
      {
        heading: "When to get help quickly",
        body:
          "Tell a trusted adult or health worker if sadness, fear, or stress feels too heavy, lasts a long time, or makes you think of harming yourself."
      }
    ],
    tips: [
      "Name what you are feeling without judging it.",
      "Stay close to safe people.",
      "Ask for help early when something feels too heavy."
    ]
  },
  {
    slug: "reproductive-health",
    title: "Reproductive Health",
    category: "Health Awareness",
    description:
      "Basic information on body safety, infections, warning signs, and trusted health support.",
    icon: ShieldCheck,
    article: [
      {
        heading: "Know your body",
        body:
          "Reproductive health includes the parts of the body involved in periods, pregnancy, sexual health, and body safety. Learning about it helps you recognize what is healthy and what needs attention."
      },
      {
        heading: "Warning signs",
        body:
          "Pain, sores, bad-smelling discharge, itching, fever, very heavy bleeding, or bleeding between periods can be signs to speak with a qualified health worker."
      },
      {
        heading: "You deserve respectful care",
        body:
          "Health questions should be answered with respect and privacy. If you feel unsafe or confused, reach out to a trusted adult, clinic, school counselor, or community health worker."
      }
    ],
    tips: [
      "Do not ignore pain or unusual symptoms.",
      "Choose trusted sources for health information.",
      "You have a right to ask questions about your body."
    ]
  },
  {
    slug: "myths-and-facts",
    title: "Myths and Facts",
    category: "Confidence",
    description:
      "Clear answers to common period myths so girls can replace fear with facts.",
    icon: BookOpen,
    article: [
      {
        heading: "Myth: Periods are dirty",
        body:
          "Fact: A period is a normal body process. Period blood is not a sign that someone is dirty. Hygiene matters, but shame is not needed."
      },
      {
        heading: "Myth: You should never talk about periods",
        body:
          "Fact: Safe, respectful conversations help girls prepare, ask for supplies, and get help when something is wrong."
      },
      {
        heading: "Myth: Every cycle must be exactly 28 days",
        body:
          "Fact: Many cycles are not exactly 28 days. Cycle length can vary, especially for young girls. Big changes or worrying symptoms should be discussed with a health worker."
      }
    ],
    tips: [
      "Ask questions when you hear confusing advice.",
      "Choose health information from trusted educators or workers.",
      "Support friends with kindness, not teasing."
    ]
  }
];
