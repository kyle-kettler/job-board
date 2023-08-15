-- Use SQL insert statements to add any
-- starting/dummy data to your database tables

    insert into "users" ("username", "hashedPassword")
    values ('user', '$argon2id$v=19$m=4096,t=3,p=1$GYiw47kNwpgIp5Y7/E/1CA$sIiwZ9k59xmUpLTVPna5bGnkhok+mRMPDkUO4W/j5aA');

    insert into "jobs" ("title", "description", "companyName", "companyImgUrl", "salaryFloor", "salaryCeiling", "level", "location", "active")
    values
    (
      'Design Engineer',
      -- Markdown content for Humanloop job description
      E'Humanloop is helping the coming wave of AI startups build impactful applications on top of large language models. Our tools add capabilities, evaluate performance and align these systems with human feedback to create real world value.

      \n\nHere''s a recent video interview between YC and Raza explaining what we do: <https://www.youtube.com/watch?v=hQC5O3WTmuo>

      \n\nWe''re looking for exceptional engineers that can work at varying levels of the stack (frontend, backend, infra), who are customer obsessed and thoughtful about product (we think you have to be -- our customers are "living in the future" and we''re building what''s needed).

      \n\nOur stack is Typescript, Python, GPT-3.

      \n\n**Location**

      \n\nWe have an office in Farringdon, Central London which we meet in person two days a week. The rest of the time we are good at remote. You can be remote if you''re exceptional, but it helps for ideation, knowledge transfer and fun to be in person.

      \n\n**Interview process**

      \n\n- 20 minute phone call with a team member discussing background and your goals

      \n\n- 45 minute code screen or portfolio review

      \n\n- 60 minute product interview

      \n\n- Interview loop

      \n\nWhole thing in a week is the aim. This is an exciting and urgent time in AI space and we move fast.',
      'Humanloop',
      'images/humanloop.png',
      100000,
      150000,
      'Mid-Level',
      'San Francisco, CA',
      true),
    (
      'Software Engineer, Product',
    -- Markdown content for Meta job description
      E'We are the teams who create all of Meta''s products used by billions of people around the world. Want to build new features and improve existing products like Messenger, Video, Groups, News Feed, Search and more? Want to solve unique, large scale, highly complex technical problems? Meta is seeking experienced full-stack Software Engineers to join our product teams. You can help build products that help us connect the next billion people, create new features that have billions of interactions per day and be a part of a team that’s working to help people connect with each other around the globe. Join us!

      \n\n### Software Engineer, Product Responsibilities

      \n\n- Full stack web/mobile application development with a variety of coding languages

      \n\n- Create consumer products and features using internal programming language Hack

      \n\n- Implement web or mobile interfaces using XHTML, CSS, and JavaScript

      \n\n- Work closely with our PM and design teams to define feature specifications and build the next generation of products leveraging frameworks such as React & React Native

      \n\n- Work closely with operations and infrastructure to build and scale back-end services

      \n\n- Build report interfaces and data feeds

      \n\n- Complete medium to large features (each with many tasks) independently without guidance

      \n\n- Proactively identify and drive changes as needed for assigned codebase, product area and/or systems

      \n\n### Minimum Qualifications

      \n\n- 2+ years of programming experience

      \n\n- 2+ years relevant experience building large-scale applications or similar experience

      \n\n- 1+ years of experience designing and completing medium to large features independently without guidance

      \n\n- 1+ years of experience identifying and driving changes to applications as needed

      \n\n- Must obtain work authorization in country of employment at the time of hire, and maintain ongoing work authorization during employment

      \n\n- Currently has, or is in the process of obtaining a Bachelor''s degree in Computer Science, Computer Engineering, relevant technical field, or equivalent practical experience. Degree must be completed prior to joining Meta.',
      'Meta',
      'images/meta.png',
      116000,
      168000,
      'Entry-Level',
      'Bellevue, WA',
      true),
    (
      'Product Engineer',
      -- Markdown content for Campsite job description
      E'We''re on a mission to simplify how software teams build products together. We''re building a platform to help share work openly, get feedback from the right people, and know what''s happening across other teams and functions.

      \n\nWe''re a small group of generalists that love working on challenging problems, have a high bar for fit and finish, ship quickly, and are eager to learn from our customers through feedback and data.

      \n\nWe''re looking for someone with strong experience with Next.js, React, and CSS (Tailwind).

      \n\n### **At Campsite you will...**

      \n\n- Ship user-facing features for our customers using the tools and technologies best suited for the problem. Check out our [changelog](https://www.campsite.design/changelog) to see what we''ve been building.

      \n\n- Work directly with customers to understand their workflows and provide hands-on support.

      \n\n- Work closely with the tools and file formats that people rely on to make software together, including images, videos, prototypes, and other content from third-party apps.

      \n\n- Build integrations with other tools, like Linear and GitHub, to help people work seamlessly across functions and teams.

      \n\n- Consider the impact of everything you ship by evaluating product analytics, customer feedback, and proactive user outreach.

      \n\n
      \n\n### **You''ll succeed here if you...**

      \n\n- Have deep expertise writing front-end code with React, TypeScript (or JavaScript), HTML, and CSS.

      \n\n- Love talking to customers and thinking about how to solve their problems end-to-end.

      \n\n- Value fit and finish in what you ship, from visual craft to performance and reliability.

      \n\n- Bias towards action and love fast iteration loops.

      \n\n- Can work autonomously in a remote-first environment.

      \n\n- Communicate clearly and proactively about areas we can improve and challenges you''re facing.

      \n\n- Have strong opinions about how to improve the ways teams build software together.

      \n\n- Celebrate outcomes over output.
      \n\n

      \n\n### **Our tools**

      \n\n**Frontend** — we have a React + TypeScript frontend with [Tailwind](https://tailwindcss.com/) for styling. We use [Next.js](https://nextjs.org/) for our app structure and routing. We use [TanStack Query](https://tanstack.com/query/latest) (React Query) for data fetching and cache synchronization. We''ve built an [Electron desktop app](https://todesktop.com/), a [Figma plugin](https://www.campsite.design/figma/plugin), and we''re building rich experiences on top of [TipTap](https://tiptap.dev/) and [ProseMirror](https://prosemirror.net/).

      \n\n**Backend** — our API is a [Ruby on Rails](https://rubyonrails.org/) application backed by [PlanetScale](https://planetscale.com/) and MySQL. We maintain a handful of small services to power our integrations with modern tools like Slack.

      \n\n**Cloud** — our web application is hosted on [Vercel](https://vercel.com/), our API is hosted on [Fly](https://fly.io/), and AWS powers our media storage and processing.

      \n\n**Collaboration** — we communicate primarily on Campsite, Slack, and Linear. We generally use Campsite to build Campsite; read our [Field Guide](https://www.campsite.design/field-guide) to learn more.

      \n\n
      \n\n### **Benefits**

      \n\n- Competitive salary and meaningful equity

      \n\n- Health, vision, and dental

      \n\n- Flexible time off

      \n\n- Office and equipment upgrades

      \n\n- In-person meetups to work and connect

      \n\n
      \n\n### **Our team**

      \n\nWe''re a lean team of generalists distributed across the US. We are focused on building tools people love to use, ship new features weekly, and sweat the details to ensure Campsite meets our high bar for craft and quality.

      \n\nOur team has worked on startups and large-scale projects at companies like GitHub, Instagram, Stripe, Zendesk, and Facebook.',
      'Campsite',
      'images/campsite.png',
      75000,
      130000,
      'Entry-Level',
      'Remote',
      true),
      (
        'design engineer',
        -- Markdown content for Amie job description
        E'you should just reach out if you can design polished UI and write production react code. there are no other requirements. just email [dennis@amie.so](mailto:dennis@amie.so)

        \n\n### **What we love about working here**

        \n\n### **Above all, we care about good design**

        \n\n> _To make something great, just re-do it, re-do it, re-do it._

        \n\nAmie is the joyful productivity app. That means focusing on few experiences but perfecting those. Everyone on the team cares about design and chat to users daily. We don’t just replicate what’s already been made, we build what we think will truly matter. And then we re-do it re-do it re-do it.

        \n\n### **We get to try the wild ideas we never got to before**

        \n\nWhen we see something that can be improved, anyone on the team is free to improve it instead of putting a ticket through the process loop. Everyone on the team have massive impact on how the product will turn out and what we work on.

        \n\nEngineers design and designers write code. We think in days, not weeks. Projects never span across more than a couple of weeks, and are scoped by a small group of 2 or 3 people. [This blog post](https://jsomers.net/blog/speed-matters) explains well why being fast matters, and why it’s sooo much fun.

        \n\n### **We’re remote first, with lots of time to do what we love**

        \n\nWe do meetings when they''re really needed. Not by default. This means most of our days are spent doing what we love and do best–writing code or designing. No busy work, lots of flow.

        \n\nIt also means we get to work from wherever we want. A couple of people work from our Berlin office, the rest are spread out across Belgium, Cyprus, Ukraine, France, Sweden, Colombia, Georgia, and Turkey. Amie supports us in setting up our home office, or if we prefer to work from a co-working place.

        \n\n### **The Amie team ❤️**

        \n\nOur team is the best part about Amie. We are a small and tight-knit team of 10 and has built some of the best apps, like Intercom, Framer and N26. This is how Polly put it:

        \n\n> _the team and the product are a reflection of each other - the playfulness, joy, attention to detail, transparency, always caring, always learning, always growing and always improving!_',
        'Amie',
        'images/amie.png',
        90000,
        135000,
        'Mid-Level',
        'Remote',
        true
      ),
      (
        'Software Engineer, Front End',
        E'\n\n**About Replit**
        \n\nWe’re building the world’s most ubiquitous programming environment. We focus on inspiring creativity and generating value for creators through community, and we design simple yet scalable infrastructure primitives for the next generation of creators. We want to blur the line between learning and making– a place where you can hang out, tinker with ideas, learn new concepts, and launch a business all in the same day.
        \n\n**About the role**:
        \n\nAs a Software Engineer on the Workspace/IDE team, your job is to improve the core software creation experience on Replit, while also enabling other engineers to expand Replit’s power. You’ll work to make features like Ghostwriter Code Completion and Ghostwriter Chat more performant and easier to use. You’ll also make it easier for anybody at the company to build the next great AI development assistance features at Replit.
        \n\n**Examples of what you could do**:
        \n\n- Keep users in the flow of building by bringing our AI assistant, Ghostwriter, [to the Workspace](https://blog.replit.com/gw-chat-launch).
        \n\n- Deeply integrate AI features into the core editor, like our Ghostwriter [code completion feature](https://blog.replit.com/ghostwriter).
        \n\n- Push the future of open source editors by integrating and contributing to [CodeMirror 6](https://blog.replit.com/codemirror).
        \n\n- Work closely with designers to ship new [Bret Victor-inspired feedback mechanisms](https://blog.replit.com/kaboomdraw).
        \n\n**You will…**:
        \n\n- Improve the performance and quality of our existing AI features like Ghostwriter code completion and Ghostwriter Chat, to be the best in the industry.
        \n\n- Build reusable infrastructure primitives, so anybody at Replit can contribute to integrating AI assistance into Replit’s IDE.
        \n\n- Build the core product surface of Replit: the Workspace. This is where users build their code, their development environment, and view their code running.
        \n\n- Ship features and build infrastructure using: JavaScript, TypeScript, React, NodeJS, and CodeMirror 6.
        \n\n**Required skills and experience**:
        \n\n- Excited about the future of AI assisted software development.
        \n\n- Working experience in at least one of the following:
        \n\n    - Building rich browser-based applications
        \n\n    - Building frontend infrastructure used by 100+ other developers
        \n\n    - Shipping your own products to, and working with, users
        \n\n- Self-directed and comfortable working autonomously.
        \n\n_**Bonus Points**_:
        \n\n- Built side projects using LLMs from OpenAI or others.
        \n\n- Experience working with IDEs, terminals, or other common developer tools.
        \n\n**Full-Time Employee Benefits Include**:
        \n\n🌎 Remote-First and Autonomous Working Environment
        \n\n🧑‍💻 Flexible Work Hours
        \n\n💰 Competitive Salary & Equity
        \n\n🖥 Home Office Set-Up Stipend
        \n\n⚕️ Health, Dental, Vision and Life Insurance
        \n\n🩼 Short Term and Long Term Disability
        \n\n📱 Monthly Expenses Stipend
        \n\n🚼 Parental and Baby Bonding Leave
        \n\n🏝 Flexible PTO (2 Weeks Minimum Required) + Holidays
        \n\n📈 401k
        \n\n🚀 Annual company/team offsites (4/year)
        \n\n**Want to Learn More?**:
        \n\n- Replit Product
        \n\n    - [Getting started with Replit](https://youtu.be/ZAC0TQEU5gI)
        \n\n    - [Repl from Repo](https://youtu.be/O2fZ_B6juNc)
        \n\n    - [Replit Multiplayer](https://www.youtube.com/watch?v=v6tqWlxcg-4)
        \n\n- Interviewing + Culture
        \n\n    - [My First Software Engineering Job Interview](https://youtu.be/kABh44IVWMo)
        \n\n    - [Life at Replit](https://youtu.be/yodlVoBo278)
        \n\n    - [Operating Principles](https://blog.replit.com/operating-principles)
        \n\n    - [Reasons not to work at Replit](https://blog.replit.com/reasons-not-to-join-replit)
        \n\nTo achieve our mission of making programming more accessible around the world, we need our team to be representative of the world. We welcome your unique perspective and experiences in shaping this product. We encourage people from all kinds of backgrounds to apply, including and especially candidates from underrepresented and non-traditional backgrounds.
        \n\nThe overall market range of base compensation for roles in this area of Replit is typically $90,000 - $180,000. Compensation offered will be determined by additional factors such as location and experience.',
        'Replit',
        'images/replit.png',
        90000,
        180000,
        'Mid-Level',
        'Remote',
        true
      ),
      (
        'Sofware Engineer (React, Node)',
        E'\n\n## About Us\n\n
        \n\n---\n\n
        \n\nReplo helps companies build websites with less code. Today, we sell this product to e-commerce companies (e.g. [Hexclad](https://www.youtube.com/watch?v=tuDbSVyClzI), [Studs](https://studs.com/)) who use it to build everything from their latest products to giveaways. Our goal is to create a **single platform for businesses to design, develop, and market content on the internet**.\n\n
        \n\nFor more information about us, please visit [Careers at Replo](https://www.notion.so/Careers-at-Replo-296bf9dd8d6d45bf9e6f9b3b1ab19a6c?pvs=21)\n\n
        \n\n### Our Mission\n\n
        \n\n> **Make it easy for businesses to build and launch content on the internet.**\n\n
        \n\n ## **About the Role**\n\n
        \n\nWe''re **open to remote positions**, but for this role, we prefer if you''re located in the San Francisco Bay Area, New York, or within +/- 3 hours of these timezones.\n\n
        \n\n
        \n\n## **Your responsibilities**\n\n
        \n\n---\n\n
        \n\nBuild products across our stack (using React, Typescript, and more) that enable our customers to build differentiated user experiences online\n\n
        \n\nWork with the other engineers on our team to execute on projects big and small together (from fixing bugs and improving the usability of the Replo Editor, to creating an SSR publishing flow for Replo components)\n\n
        \n\nCollaborate directly with our customers to ship stable, maintainable code while iterating as fast as possible\n\n
        \n\nHopefully have a blast working with us 😇\n\n
        \n\n## **Looking for someone who**\n\n
        \n\n---\n\n
        \n\nHas experience building performant frontend web applications (at least 2 years of professional experience)\n\n
        \n\nHas a very product and customer focused mindset\n\n
        \n\nIs experienced in Typescript, React, HTML, CSS\n\n
        \n\nUnderstands the value of writing clean, maintainable software, including documentation\n\n
        \n\nIs comfortable with ambiguity and defining software architecture patterns to solve customer pain points\n\n
        \n\nIs self-driven and can roll with the punches in a fast-paced environment where priorities and requirements may change frequently\n\n
        \n\n## **Bonus points if you have**\n\n
        \n\n---\n\n
        \n\nNot wasted hours interview-prepping on Leetcode 😭\n\n
        \n\nWorked at or founded an early-stage startup previously\n\n
        \n\nHave experience with modern center-stack React frameworks like Next.js or Remix (the founder of NextJS/Vercel is one of our investors)\n\n
        \n\nExperience in Python or other programming languages, or interest in learning\n\n
        \n\nAn eye for visual design (or past experience in product design, Figma, etc)',
        'Replo',
        'images/replo.png',
        70000,
        110000,
        'Entry-Level',
        'New York, NY',
        true
      ),
      (
        'Software Engineer - TV UI',
        E'\n\n## About the job\n\n
        \n\nOur cross-platform team delivers novel product features on Netflix, including the flagship TV application. Our work helps members discover and connect with stories they''ll love. Your work will delight millions of customers worldwide on hundreds of different TV devices, from game consoles to smart TVs to cable boxes.\n\n
        \n\nOur responsibilities include working on large-scale A/B tests of features - ranging from highly visible product experiences to core infrastructure that enables existing and future innovations. We care deeply about UI performance, quality, and accessibility of the Netflix TV experience. To bring new kinds of engaging and cinematic experiences to life, we partner closely with many cross-functional teams including product management, experience design, and creative production.\n\n
        \n\nPeople who excel on our team are growth-oriented, intensely curious, selfless, and highly collaborative. We are part of a global, diverse organization that includes people of all genders, sexual orientation, parents, self-taught or formally educated, and people of a wide variety of nationalities, ages, and socio-economic backgrounds. We encourage anyone who is passionate about building compelling UI experiences that touch audiences around the world to apply.\n\n

        \n\n## What’s Different About Us\n\n
        \n\n- We validate our judgment by A/B testing product variants with real customers, instead of assuming we know what is best\n\n
        \n\n- Your work will have a direct and measurable impact on the business. Really\n\n
        \n\n- You will build features that run on TV devices, while working side-by-side with colleagues that deliver features on our mobile apps and website\n\n
        \n\n- Our culture is unique, and we live by our values, so it’s worth learning more about us at jobs.netflix.com\n\n

        \n\n## Every Day\n\n
        \n\n- Build, improve, and optimize UI experiences on the leading TV app that pushes the boundaries of what’s possible on performance and memory-constrained devices.\n\n
        \n\n- Almost all of your code will be TypeScript and JavaScript (React-based), building on top of our purpose-built TV platform\n\n
        \n\n- Partner with engineering teams, designers, and product managers to define and refine concepts that will shape the future of entertainment on TV-connected devices\n\n
        \n\n- Collaborate with our device platform and backend service teams to create functionality to support your projects\n\n
        \n\n- Effective at developing strong relationships with cross-functional teams through clear communication.\n\n
        \n\n- Partner with our test engineers to write testable code that allows us to ship high-quality features\n\n

        \n\nAt Netflix, we carefully consider a wide range of compensation factors to determine your personal top of market. We rely on market indicators to determine compensation and consider your specific job, skills, and experience to get it right. These considerations can cause your compensation to vary and will also be dependent on your location.\n\n
        \n\nThe overall market range for roles in this area of Netflix is typically $100,000 - $700,000\n\n
        \n\nThis market range is based on total compensation (vs. only base salary), which is in line with our compensation philosophy. Netflix is a unique culture and environment. Learn more here.',
        'Netflix',
        'images/netflix.png',
        100000,
        700000,
        'Mid-Level',
        'Remote',
        true
      ),
      (
        'Senior Software Engineer, Design Systems',
        E'\n\n## About the job\n\n
        \n\nThe Design Systems team develops the core primitives and standards that engineers and designers use to build Discord’s products. Designers and engineers on this team collaborate closely to accelerate product feature teams’ ability to ship new features with UI that are accessible, consistent, and high quality. This team also sets the standard for accessibility on Discord, and supports other engineering teams in achieving it. As such, the Design Systems team plays a critical role enabling Discord to achieve its core mission: creating a space for everyone to find belonging.\n\n
        \n\n
        \n\n## What you''ll be doing\n\n
        \n\n- Help build the foundation of our design system (design tokens, components, and other code patterns) and improve it over time.\n\n
        \n\n- Write code that works across our iOS, Android, desktop, and web platforms.\n\n
        \n\n- Create and maintain Figma plugins that synchronize our designs to code (and vice versa).\n\n
        \n\n- Create lightweight developer tooling to aid in migration and communicating best practices (e.g. linting rules, CI jobs, codemods).\n\n
        \n\n- Collaborate closely with other engineers and designers to understand the needs and influence of your work.\n\n
        \n\n- Provide guidance to teams on the best way to use design systems components and tools across their projects.\n\n
        \n\n- Build internal tools to empower all of our engineers and designers to use the design system to the fullest extent.\n\n
        \n\n- Work with Staff+ level engineers to grow your skills and aptitudes.
        \n\n
        \n\n## What you should have\n\n
        \n\n- 4+ years of work experience as a software engineer building, shipping, and iterating on product features or internal tools.\n\n
        \n\n- Expertise with web (React, TypeScript) or mobile (React Native, Swift, Objective-C, Kotlin) client-focused development. We''re a cross-platform team and believe that engineers should be empowered to work across a variety of tech stacks. We''ll support you in learning the stacks you don''t know!\n\n
        \n\n- A deep understanding of accessibility fundamentals and its application in creating robust user interfaces.\n\n
        \n\n- Strong, clear written communication skills and a healthy appreciation for good documentation.\n\n
        \n\n- Experience working on cross-functional teams with designers or product managers.\n\n
        \n\n- Willingness and excitement to learn new technical skills and expand your toolkit.\n\n
        \n\n- A consistent track record of delivering multi-milestone project on time and at a high level.\n\n
        \n\n- Experience safely migrating existing front-end codebases to new technical patterns at scale.\n\n
        \n\n- Experience working on a design system.\n\n
        \n\nThe US base salary range for this full-time position is $190,000 to $204,000 + equity + benefits. Our salary ranges are determined by role and level. Within the range, individual pay is determined by additional factors, including job-related skills, experience, and relevant education or training. Please note that the compensation details listed in US role postings reflect the base salary only, and do not include equity, or benefits.\n\n
        \n\n
        \n\n## Benefits and Perks\n\n
        \n\n- Comprehensive medical insurance including Health, Dental and Vision (plus up to $20,000 for gender affirmation procedures)\n\n
        \n\n- Mental health resources and quarterly wellness stipends\n\n
        \n\n- 14+ paid holidays, 4 weeks of PTO + use-what-you-need sick days\n\n
        \n\n- Paid parental leave (plus fertility, adoption and other family planning benefits)\n\n
        \n\n- Flexible long-term work options (remote and hybrid)\n\n
        \n\n- Volunteer time off\n\n
        \n\n- A diverse slate of Employee Resource Groups\n\n
        \n\n- Plus commuter contributions and other perks for office-based employees\n\n
        \n\n**About Us**\n\n
        \n\nDiscord is a voice, video and text app that helps friends and communities come together to hang out and explore their interests — from artists and activists, to study groups, sneakerheads, plant parents, and more. With 150 million monthly users across 19 million active communities, called servers, Discord has grown to become one of the most popular communications services in the world. Discord was built without selling ads or user data and instead, offers a premium subscription called Nitro that gives users special perks like higher quality streams and fun customizations.\n\n
        \n\nWe’re working toward an inclusive world where no one feels like an outsider, where genuine human connection is a click, text chat, or voice call away. A place where everyone can find belonging. Challenging? Heck yes. Rewarding? Double heck yes. It’s a mission that gives us the chance to positively impact millions of people all over the world. **So if this strikes a chord with you, come build belonging with us!**',
        'Discord',
        'images/discord.png',
        190000,
        204000,
        'Senior',
        'San Francisco, CA',
        true
      ),
      (
        'Frontend Engineer - Web Foundations',
        E'\n\n## About the job\n\n
        \n\n**Company Description**\n\n
        \n\nIt all started with an idea at Block in 2013. Initially built to take the pain out of peer-to-peer payments, Cash App has gone from a simple product with a single purpose to a dynamic ecosystem, developing unique financial products, including Afterpay/Clearpay, to provide a better way to send, spend, invest, borrow and save to our 47 million monthly active customers. We want to redefine the world’s relationship with money to make it more relatable, instantly available, and universally accessible.\n\n
        \n\nToday, Cash App has thousands of employees working globally across office and remote locations, with a culture geared toward innovation, collaboration and impact. We’ve been a distributed team since day one, and many of our roles can be done remotely from the countries where Cash App operates. No matter the location, we tailor our experience to ensure our employees are creative, productive, and happy.\n\n
        \n\nCheck out our locations, benefits, and more at cash.app/careers.\n\n
        \n\n
        \n\n**Job Description**\n\n
        \n\n**The Team:**\n\n
        \n\nThe Cash Core Web team is building out future web experiences and systems across Cash App. We are responsible for building products and features, and the foundational environments and systems they are built with. We collaborate with and support numerous product teams across Cash App, including Banking, Payments, Commerce, Investing and Support.\n\n
        \n\n**The Job:**\n\n
        \n\nThe Web Foundations team (part of Core Web) spans a broad spectrum of web development; from foundational frontend architecture, design systems, analytics pipelines, to i18n and region customizations. We implement frameworks and libraries used by other frontend teams. We also build and ship product experiences. Our work is incremental, shipping to production multiple times per week. Together we explore business and growth opportunities as well.\n\n
        \n\n**As a Frontend Engineer you will work together with the team to:**\n\n
        \n\n- Design, build and own customer facing experiences and the systems that power them\n\n
        \n\n- Bring experience and knowledge to the team, advancing the web profession at Cash App, and learning from others along the way\n\n
        \n\n- Help implement foundational frontend libraries, promote their adoption, and uphold quality\n\n
        \n\n- Craft durable, well-tested code with an unwavering commitment to product quality\n\n
        \n\n- Ship new experiences and improvements regularly\n\n
        \n\n
        \n\n**Qualifications**\n\n
        \n\n**You have**:\n\n
        \n\n- 2+ years of frontend engineering experience\n\n
        \n\n- A strong motivation to contribute to the growth of a meaningful product that will fundamentally change the way people interact with their money\n\n
        \n\n- Ability to thrive in ambiguous, fast-paced environments, prioritizing opportunities and weighing impact\n\n
        \n\n- A good depth or breadth of experience crafting modern JavaScript applications (Experience building and working on projects that ship)\n\n
        \n\n- Proficiency creating readable, well-crafted, and maintainable code\n\n
        \n\n- A commitment to continuous improvement (yourself, your teammates, your software)\n\n
        \n\n- Demonstrated technical initiative\n\n
        \n\n
        \n\n**Tools we use and teach**:\n\n
        \n\n- Frontend: React, Preact, Next, Javascript, Typescript, CSS\n\n
        \n\n- Communication: HTTP, JSON, gRPC, and Proto Buffers\n\n
        \n\n- Server (less emphasis): Node, Java, Kotlin, Amazon Web Services\n\n
        \n\n
        \n\n**Additional Information**\n\n
        \n\nThis role is remote-friendly and can accommodate candidates from any time zone across North America.\n\n
        \n\n
        \n\nBlock takes a market-based approach to pay, and pay may vary depending on your location. U.S. locations are categorized into one of four zones based on a cost of labor index for that geographic area. The successful candidate’s starting pay will be determined based on job-related skills, experience, qualifications, work location, and market conditions. These ranges may be modified in the future.\n\n
        \n\n
        \n\nZone A: USD $152,100 - USD $185,900\n\n
        \n\n
        \n\nZone B: USD $144,500 - USD $176,700\n\n
        \n\n
        \n\nZone C: USD $136,900 - USD $167,300\n\n
        \n\n
        \n\nZone D: USD $129,300 - USD $158,100\n\n
        \n\n
        \n\nTo find a location’s zone designation, please refer to this resource. If a location of interest is not listed, please speak with a recruiter for additional information.\n\n
        \n\nFull-time employee benefits include the following:\n\n
        \n\n- Healthcare coverage (Medical, Vision and Dental insurance)\n\n
        \n\n- Health Savings Account and Flexible Spending Account\n\n
        \n\n- Retirement Plans including company match\n\n
        \n\n- Employee Stock Purchase Program\n\n
        \n\n- Wellness programs, including access to mental health, 1:1 financial planners, and a monthly wellness allowance\n\n
        \n\n- Paid parental and caregiving leave\n\n
        \n\n',
        'Cash App',
        'images/cash.png',
        152100,
        185900,
        'Mid-Level',
        'Remote',
        true
      )
