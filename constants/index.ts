import {
  BiSearchAlt,
  BiBook,
  BiFirstAid,
  BiHealth,
  BiMoney,
  BiHeart,
  BiDotsHorizontalRounded,
  BiRocket,
  BiDonateHeart,
} from "react-icons/bi";

export const navLinks = [
  {
    title: "Search",
    href: "/search",
    icon: BiSearchAlt,
  },
  {
    title: "Categories",
    href: "/categories",
    children: [
      {
        title: "Education",
        href: "/categories/education",
        description: "Help students and teachers with educational resources.",
        icon: BiBook,
      },
      {
        title: "Emergency",
        href: "/categories/emergency",
        description: "Provide urgent assistance to those in crisis.",
        icon: BiFirstAid,
      },
      {
        title: "Medical",
        href: "/categories/medical",
        description: "Support access to essential healthcare.",
        icon: BiHealth,
      },
      {
        title: "Monthly Bill",
        href: "/categories/monthly-bill",
        description: "Help families cover their monthly expenses.",
        icon: BiMoney,
      },
      {
        title: "Memorial",
        href: "/categories/memorial",
        description: "Support memorial services and expenses.",
        icon: BiHeart,
      },
      {
        title: "Other",
        href: "/categories/other",
        description: "Assist with unique and urgent needs.",
        icon: BiDotsHorizontalRounded,
      },
    ],
  },
  {
    title: "Take Action",
    href: "/take-action",
    children: [
      {
        title: "Start a Campaign",
        href: "/take-action/start-a-campaign",
        description: "Raise funds for a meaningful cause.",
        icon: BiRocket,
      },
      {
        title: "Donate",
        href: "/take-action/donate",
        description: "Support a campaign with your contribution.",
        icon: BiDonateHeart,
      },
    ],
  },
];
