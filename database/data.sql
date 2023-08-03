-- Use SQL insert statements to add any
-- starting/dummy data to your database tables

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
      )
