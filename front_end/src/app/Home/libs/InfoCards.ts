import {
  AlarmClockOff,
  ArrowDownNarrowWide,
  ArrowUpNarrowWide,
  LucideIcon,
} from "lucide-react";

interface IInfoCard {
  title: string;
  icon: LucideIcon;
  bodyText: string;
  id: number;
}

interface IInfoCard {
  title: string;
  bodyText: string;
  buttonText: string; // Add buttonText property
  icon: React.ElementType; // Assuming your icon type is a React element type
  id: number;
  href: string; 
}

const infoCards: IInfoCard[] = [
  {
    title: "GameIt",
    bodyText:
      "Immerse yourself in the world of technology with GameIt! This page hosts an interactive QuizBot and an AI Chat Helper to challenge and enhance your tech knowledge. ",
    buttonText: "Play Now", // Add buttonText
    icon: ArrowUpNarrowWide,
    id: 1,
    href: "../Gameit",
  },
  {
    title: "SkillHive",
    bodyText:
      "Showcase your tech prowess on Skillhive! Here, you can upload and display your tech projects, creating a portfolio that highlights your skills and accomplishments. ",
    buttonText: "Explore", // Add buttonText
    icon: AlarmClockOff,
    id: 2,
    href: "../SkillHive/Login", 
  },
  {
    title: "ByteBriefs",
    bodyText:
      "Stay informed in a flash with ByteBriefs! This page delivers tech news in short, concise forms, making it easy for you to stay updated on the latest happenings in the tech industry.",
    buttonText: "Read More", // Add buttonText
    icon: ArrowDownNarrowWide,
    id: 3,
    href: "../ByteBriefs",
  },
];

export default infoCards;
