type PortfolioType = {
  id: number,
  title: string,
  img: string,
  stack: string[],
  link: string
}

let portfolio: PortfolioType[] = []

export default portfolio = [
  {
    id: 1,
    title: "Nursery Management App",
    img: "/assets/dev-portfolio.jpg",
    stack: ["HTML", "CSS", "JS", "Laravel"],
    link: "https://greenhouse.screencraft.net.au/",
  },
  {
    id: 2,
    title: "To Be Added",
    img: "/assets/dev-portfolio.jpg",
    stack: ["To Be Added"],
    link: "https://github.com/dat-dotcom",
  },
  {
    id: 3,
    title: "Developer Portfolio",
    img: "/assets/dev-portfolio.jpg",
    stack: ["Nextjs", "TailwindCSS", "Typescript"],
    link: "https://github.com/dat-dotcom",
  },
];
