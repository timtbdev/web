import Profile from "../components/Profile";
import Body from "../components/Project/Body";
import Container from "../components/Container";
import Head from "../components/Head";
import { GetStaticPropsContext } from "next";

interface Props {
  pageTitle: string;
  keywords: string;
  description: string;
  author: string;
  date: string;
  baseUrl: string;
  ogImage: string;
}

export async function getStaticProps(context: GetStaticPropsContext) {
  // Meta data
  const pageTitle = "Projects";
  const keywords =
    "Tim, Tumur, Bazarragchaa, San-Francisco, Bay Area, Android Developer, Kotlin, Android Jetpack, Jetpack Compose";
  const description = "I'm an Android developer and this is my portfolio.";
  const author = "Tim";
  const date = "February, 2022";
  const baseUrl = "https://timtb.dev/";

  const ogImage = baseUrl + "og.png";
  return {
    props: {
      pageTitle,
      keywords,
      description,
      author,
      date,
      baseUrl,
      ogImage,
    },
  };
}

export default function Home({
  pageTitle,
  keywords,
  description,
  author,
  date,
  baseUrl,
  ogImage,
}: Props) {
  return (
    <div>
      <Head
        title={pageTitle}
        description={description}
        keywords={keywords}
        author={author}
        date={date}
        url={baseUrl}
        image={ogImage}
      />
      <Profile />

      {data.map((project, idx) => (
        <Container key={idx} url={project.url}>
          <Body item={project} index={idx} />
        </Container>
      ))}
    </div>
  );
}

// JSON
const data = [
  {
    title: "Mongolian Sign Language",
    releaseDate: "2022-12-26",
    icon: "/placeholder/sign_icon.png",
    iconDescription: "App icon",
    type: "Android App",
    author: "Android-Kotlin",
    keywords: ["Dictionary", "Sign of the Day", "Learning Games"],
    url: "https://github.com/timtbdev/msign",
    features: [
      {
        description: "See MSL come alive with video-based learning material.",
        title: "MSL in Motion",
      },
      {
        description:
          "Engage in active learning with interactive exercises, quick lectures, and reviews.",
        title: "Interactive Learning",
      },
      {
        description:
          "Focus on learning the MSL most relevant to you with a modular curriculum.",
        title: "Time Efficient",
      },
    ],
    images: ["/placeholder/s.png", "/placeholder/s.png", "/placeholder/s.png"],
    text: "This app aims to promote MSL learning in the hearing community to improve everyday communication accessibility between the Deaf and hearing",
  },
  {
    title: "Cheap Flights to Mongolia",
    releaseDate: "2022-12-26",
    icon: "/placeholder/flight_icon.png",
    iconDescription: "App icon",
    type: "Android-App",
    author: "Android-Java",
    keywords: ["Flights", "Hotels", "Tours"],
    url: "https://github.com/timtbdev/cheapflights",
    features: [
      {
        description: "Find the best deals and save money.",
        title: "Best Deals",
      },
      {
        description: "The prices you see aren't affected by your searches.",
        title: "Search Without Worry",
      },
      {
        description: "It's completely free to use – no hidden charges or fees.",
        title: "Trusted and Free",
      },
    ],
    images: ["/placeholder/s.png", "/placeholder/s.png", "/placeholder/s.png"],
    text: "Find cheap flights to Mongolia. Compare every airline, find the best time to fly, and the best route.",
  },
];
