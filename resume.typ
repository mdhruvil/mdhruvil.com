// --- Helper Functions ---

#let dates-helper(start-date: "", end-date: "") = {
  start-date + " " + $dash.em$ + " " + end-date
}

#let two-by-two(top-left: "", top-right: "", bottom-left: "", bottom-right: "") = {
  [
    #top-left #h(1fr) #top-right \
    #bottom-left #h(1fr) #bottom-right
  ]
}

#let one-by-two(left: "", right: "") = {
  [
    #left #h(1fr) #right
  ]
}

// --- Section Components ---

#let edu(institution: "", dates: "", degree: "", location: "") = {
  two-by-two(
    top-left: strong(institution),
    bottom-left: emph(degree),
    top-right: location,
    bottom-right: emph(dates),
  )
}

#let work(title: "", dates: "", company: "", company-url: "", location: "") = {
  two-by-two(
    top-left: [#strong(company) (#link(company-url)[link])],
    bottom-left: text(size: 0.9em, fill: rgb("#555555"))[#title],
    top-right: location,
    bottom-right: emph(dates),
  )
}

#let project(name: "", url: "", repo: "", demo-video: "", dates: "") = {
  [
    #strong(name)
    #if url != "" { link(url)[(Live)] }
    #if repo != "" { link(repo)[(Repo)] }
    #if demo-video != "" { link(demo-video)[(Demo)] }
    #if dates != "" { emph(dates) }
  ]
}

// --- Main Resume Template ---

#let resume(
  author: "",
  author-position: left,
  personal-info-position: left,
  email: "",
  github: "",
  linkedin: "",
  personal-site: "",
  accent-color: "#000000",
  font: "New Computer Modern",
  paper: "a4",
  author-font-size: 20pt,
  font-size: 10pt,
  body,
) = {
  // Document metadata
  set document(author: author, title: author)

  // Document-wide formatting
  set text(
    font: font,
    size: font-size,
    lang: "en",
    weight: "regular",
    tracking: 0.1pt,
    ligatures: false, // Disable for ATS compatibility
  )

  // Page margins
  set page(margin: 0.5in, paper: paper)

  // Link styles
  show link: underline

  // Section headings (== Heading)
  show heading.where(level: 2): it => [
    #pad(top: 0pt, bottom: -10pt, [#smallcaps(it.body)])
    #line(length: 100%, stroke: 1pt)
  ]

  // Accent color for headings and links
  show heading: set text(fill: rgb(accent-color))
  show link: set text(fill: rgb(accent-color))

  // Author name heading (= Heading)
  show heading.where(level: 1): it => [
    #set align(author-position)
    #set text(weight: 700, size: author-font-size)
    #pad(it.body)
  ]

  // Render author name
  [= #(author)]

  // Contact info helper
  let contact-item(value, link-type: "") = {
    if value != "" {
      if link-type != "" {
        link(link-type + value)[#value]
      } else {
        value
      }
    }
  }

  // Personal info bar
  pad(
    top: 0.25em,
    align(personal-info-position)[
      #{
        let items = (
          contact-item(email),
          contact-item(github, link-type: "https://"),
          contact-item(linkedin, link-type: "https://"),
          contact-item(personal-site, link-type: "https://"),
        )
        items.filter(x => x != none).join("  |  ")
      }
    ],
  )

  // Main body
  set par(justify: true)
  body
}

// ============================================================================
// RESUME CONTENT
// ============================================================================

#let name = "Dhruvil M."
#let email = "hey@mdhruvil.com"
#let github = "github.com/mdhruvil"
#let linkedin = "linkedin.com/in/mdhruvil"
#let website = "mdhruvil.com"

#show: resume.with(
  author: name,
  email: email,
  github: github,
  linkedin: linkedin,
  personal-site: website,
  accent-color: "#26428b",
  paper: "a4",
  font-size: 10.5pt,
  author-position: left,
  personal-info-position: left,
)

== Education

#edu(
  institution: "L.D. College of Engineering",
  location: "Ahmedabad, Gujarat",
  dates: dates-helper(start-date: "2022", end-date: "2026"),
  degree: "Bachelor of Engineering in Electronics & Communication",
)

== Work Experience

#work(
  title: "AI Intern",
  location: "Remote",
  company: "Puch AI",
  company-url: "https://puch.ai",
  dates: dates-helper(start-date: "Jul 2025", end-date: "Aug 2025"),
)
- Tech Stack: Python, FastAPI, FastMCP, Grafana, Docker, MongoDB, Caddy
- Worked on vibecoding and implemented initial prototype for global caching and versioning for vibecoded sites
- Added Image output support for MCP client, Improved Reminder tool to improve the accuracy of delivery
- Developed Grafana dashboards for monitoring the latency and other metrics for API

#work(
  title: "FullStack Development Intern",
  location: "Remote",
  company: "SlidesAI.io",
  company-url: "https://slidesai.io",
  dates: dates-helper(start-date: "Jul 2024", end-date: "Aug 2024"),
)
- Tech Stack: NextJS, TailwindCSS, TypeScript, Cloudflare Workers, Elastic APM, Feathers.js
- Single-handedly revamped the entire Google Workspace Add-on UI, delivering a modern, intuitive user experience
- Successfully migrated all microservices from Node.js v12 to v18, significantly enhancing performance and compatibility
- Implemented Elastic APM across all microservices, providing real-time visibility into errors and performance bottlenecks

#work(
  title: "FullStack Development Intern",
  location: "Ahmedabad, GJ",
  company: "AllEvents",
  company-url: "https://allevents.in",
  dates: dates-helper(start-date: "Apr 2024", end-date: "Jun 2024"),
)
- Tech Stack: VueJS (Options API), PHP, jQuery
- Developed Efficient Event Management Dashboard: Designed and built an internal dashboard to streamline event management processes, improving operational efficiency
- Enhanced "Things to Do" Activity Page: Contributed to the development and improvement of the activity page, enhancing user engagement

== Projects

#project(
  name: "Gitflare - Serverless Self-hosted GitHub Alternative",
  url: "https://gitflare.mdhruvil.com",
  repo: "https://github.com/mdhruvil/gitflare",
  demo-video: "https://youtu.be/KkUD8fo1WVE",
)
- Tech Stack: Tanstack Start, Cloudflare Workers, Cloudflare Durable Objects, Cloudflare D1
- Gitflare is a fully open-source serverless git hosting platform
- Implemented Git smart HTTP protocol handlers from scratch to natively handle git cli requests without long running servers
- Implemented a VFS on top of Durable Objects SQLite to store git objects

#project(
  name: "Deplit - My attempt to create Vercel",
  url: "https://deplit.tech",
  repo: "https://github.com/mdhruvil/deplit",
  demo-video: "https://youtu.be/a4w8_rXajl4",
)
- Tech Stack: Docker, Azure, Cloudflare Workers, D1, Hono, tRPC, React
- Deplit is a hosting platform like Vercel, Netlify and Cloudflare Pages
- Supports static sites, global CDN, preview deployments, instant rollbacks and custom subdomain for projects

== Achievements

- Led a team that secured 6th place in the national-level hackathon, SIH-2023
- Vibes Award winner for #link("https://www.convex.dev/hackathons/tanstack")[Tanstack Start Hackathon], Category winner for #link("https://honc.dev/honcathon")[Honcathon]

== Skills

- *Languages*: JavaScript, TypeScript, C, C++, PHP, Python, Go (Learning)
- *Frontend*: HTML, CSS, React, Svelte, NextJS, SvelteKit, VueJS (Options API)
- *Backend*: NodeJS, ExpressJS, Hono, Cloudflare Workers, tRPC, Feathers.js, Elastic APM, FastAPI
- *Languages Spoken*: Fluent in Hindi, Gujarati; Conversational in English
