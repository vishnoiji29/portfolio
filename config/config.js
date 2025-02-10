import profile from './profile.png';

export const navigation = {
  name: "Kuldeep Bishnoi",
  links: [
    {
      title: "About",
      link: "#about",
    },
    {
      title: "Projects",
      link: "#projects",
    },
    {
      title: "Contact",
      link: "#contact",
    }
  ],
}

export const intro = {
  title: "Hey, I'm Kuldeep Bishnoi",
  description: "A Web Developer creating modern and responsive websites.",
  image: profile.src,
  buttons: [
    {
      title: "Contact Me",
      link: "#contact",
      isPrimary: true,
    },
    {
      title: "GitHub",
      link: "https://github.com/vishnoiji29",
      isPrimary: false,
    },
  ],
}

export const about = {
  title: "Who I am",
  description: [
    "I am a passionate Web Developer with a keen interest in building modern, interactive, and scalable web applications.",
    "I focus on creating websites with a great user experience, smooth animations, and responsiveness.",
    "Apart from coding, I enjoy learning new technologies and contributing to open-source projects.",
  ],
}

export const work = {
  title: "What I do",
  cards: [
    {
      title: "Web Development",
      description: "I develop responsive and modern websites using HTML, CSS, JavaScript, and React.",
      icons: null,
    },
    {
      title: "Portfolio Design",
      description: "I design and build personal portfolios with smooth animations and transitions.",
      icons: null,
    }
  ],
}

export const contact = {
  title: "Get in touch",
  description: "Feel free to reach out via email or GitHub.",
  buttons: [
    {
      title: "Email Me",
      link: "mailto:kuldeep@example.com",
      isPrimary: true,
    },
    {
      title: "GitHub",
      link: "https://github.com/vishnoiji29",
      isPrimary: false,
    },
  ]
}

export const SEO = {
  title: "Kuldeep Bishnoi | Web Developer | JavaScript | React",
  description: "I create modern and responsive websites with animations and smooth transitions.",
  image: profile.src,
}
