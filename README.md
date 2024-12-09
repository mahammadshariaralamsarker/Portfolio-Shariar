# React Developer Portfolio template
#### Live Demo https://portfolio-main-sigma-blond.vercel.app/
#### Figma Design https://www.figma.com/community/file/1116246660507537002
### Preview ( Dark Mode )

<img src="/preview.gif" alt="preview" width="600px" />

## Follow Below instructions to add your deatils in the portfolio.

### Change and customize every section according to your need, All you need to do is edit `/src/Details.js`

#### Open `/src/Details.js` & modify it as per your need.

```javascript
/ Enter your Personal Details here
export const personalDetails = {
  name: "shariar",
  tagline: "I build things for web",
  img: profile,
  about: `As a dedicated Computer Science and Engineering student at the Institute of Science and Technology in Dhanmondi, I have immersed myself in the MERN stack—MongoDB, Express.js, React, and Node.js—over the past year. This journey has honed my skills in developing dynamic, responsive web applications. I am passionate about leveraging technology to solve real-world problems and am eager to apply my expertise in collaborative, innovative environments.`,
};

// Enter your Social Media URLs here
export const socialMediaUrl = {
  linkdein: "https://www.linkedin.com/",
  github: "https://www.github.com/",
  twitter: "https://twitter.com/",
  instagram: "https://www.instagram.com/",
};

// Enter your Work Experience here
export const workDetails = [
  {
    Position: "Frontend Web Developer",
    Company: `Company Name here`,
    Location: "Bengaluru",
    Type: "Full Time",
    Duration: "Sep 2021 - Dec 2021",
  }
];

// Enter your Education Details here
export const eduDetails = { ... };

// Tech Stack and Tools
export const techStackDetails = { ... };

// Enter your Project Details here
export const projectDetails = [ ... ];

// Enter your Contact Details here
export const contactDetails = { ... };
```
