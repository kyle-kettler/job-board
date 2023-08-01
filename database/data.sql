-- Use SQL insert statements to add any
-- starting/dummy data to your database tables

-- EXAMPLE:

--  insert into "todos"
--    ("task", "isCompleted")
--    values
--      ('Learn to code', false),
--      ('Build projects', false),
--      ('Get a job', false);
    insert into "jobs" ("title", "description", "companyName", "companyImgUrl", "salaryFloor", "salaryCeiling", "level", "location", "active")
    values
    (
      'Design Engineer',
      -- Markdown content for Humanloop job description
      'Humanloop is helping the coming wave of AI startups build impactful applications on top of large language models. Our tools add capabilities, evaluate performance and align these systems with human feedback to create real world value.

      Here''s a recent video interview between YC and Raza explaining what we do: <https://www.youtube.com/watch?v=hQC5O3WTmuo>

      We''re looking for exceptional engineers that can work at varying levels of the stack (frontend, backend, infra), who are customer obsessed and thoughtful about product (we think you have to be -- our customers are "living in the future" and we''re building what''s needed).

      Our stack is Typescript, Python, GPT-3.

      **Location**

      We have an office in Farringdon, Central London which we meet in person two days a week. The rest of the time we are good at remote. You can be remote if you''re exceptional, but it helps for ideation, knowledge transfer and fun to be in person.

      **Interview process**

      - 20 minute phone call with a team member discussing background and your goals

      - 45 minute code screen or portfolio review

      - 60 minute product interview

      - Interview loop

      Whole thing in a week is the aim. This is an exciting and urgent time in AI space and we move fast.',
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
      'We are the teams who create all of Meta''s products used by billions of people around the world. Want to build new features and improve existing products like Messenger, Video, Groups, News Feed, Search and more? Want to solve unique, large scale, highly complex technical problems? Meta is seeking experienced full-stack Software Engineers to join our product teams. You can help build products that help us connect the next billion people, create new features that have billions of interactions per day and be a part of a team that’s working to help people connect with each other around the globe. Join us!

      Software Engineer, Product Responsibilities

      - Full stack web/mobile application development with a variety of coding languages

      - Create consumer products and features using internal programming language Hack

      - Implement web or mobile interfaces using XHTML, CSS, and JavaScript

      - Work closely with our PM and design teams to define feature specifications and build the next generation of products leveraging frameworks such as React & React Native

      - Work closely with operations and infrastructure to build and scale back-end services

      - Build report interfaces and data feeds

      - Complete medium to large features (each with many tasks) independently without guidance

      - Proactively identify and drive changes as needed for assigned codebase, product area and/or systems

      Minimum Qualifications

      - 2+ years of programming experience

      - 2+ years relevant experience building large-scale applications or similar experience

      - 1+ years of experience designing and completing medium to large features independently without guidance

      - 1+ years of experience identifying and driving changes to applications as needed

      - Must obtain work authorization in country of employment at the time of hire, and maintain ongoing work authorization during employment

      - Currently has, or is in the process of obtaining a Bachelor''s degree in Computer Science, Computer Engineering, relevant technical field, or equivalent practical experience. Degree must be completed prior to joining Meta.',
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
      'We''re on a mission to simplify how software teams build products together. We''re building a platform to help share work openly, get feedback from the right people, and know what''s happening across other teams and functions.

      We''re a small group of generalists that love working on challenging problems, have a high bar for fit and finish, ship quickly, and are eager to learn from our customers through feedback and data.

      We''re looking for someone with strong experience with Next.js, React, and CSS (Tailwind).

      ### **At Campsite you will...**

      - Ship user-facing features for our customers using the tools and technologies best suited for the problem. Check out our [changelog](https://www.campsite.design/changelog) to see what we''ve been building.

      - Work directly with customers to understand their workflows and provide hands-on support.

      - Work closely with the tools and file formats that people rely on to make software together, including images, videos, prototypes, and other content from third-party apps.

      - Build integrations with other tools, like Linear and GitHub, to help people work seamlessly across functions and teams.

      - Consider the impact of everything you ship by evaluating product analytics, customer feedback, and proactive user outreach.


      ### **You''ll succeed here if you...**

      - Have deep expertise writing front-end code with React, TypeScript (or JavaScript), HTML, and CSS.

      - Love talking to customers and thinking about how to solve their problems end-to-end.

      - Value fit and finish in what you ship, from visual craft to performance and reliability.

      - Bias towards action and love fast iteration loops.

      - Can work autonomously in a remote-first environment.

      - Communicate clearly and proactively about areas we can improve and challenges you''re facing.

      - Have strong opinions about how to improve the ways teams build software together.

      - Celebrate outcomes over output.


      ### **Our tools**

      **Frontend** — we have a React + TypeScript frontend with [Tailwind](https://tailwindcss.com/) for styling. We use [Next.js](https://nextjs.org/) for our app structure and routing. We use [TanStack Query](https://tanstack.com/query/latest) (React Query) for data fetching and cache synchronization. We''ve built an [Electron desktop app](https://todesktop.com/), a [Figma plugin](https://www.campsite.design/figma/plugin), and we''re building rich experiences on top of [TipTap](https://tiptap.dev/) and [ProseMirror](https://prosemirror.net/).

      **Backend** — our API is a [Ruby on Rails](https://rubyonrails.org/) application backed by [PlanetScale](https://planetscale.com/) and MySQL. We maintain a handful of small services to power our integrations with modern tools like Slack.

      **Cloud** — our web application is hosted on [Vercel](https://vercel.com/), our API is hosted on [Fly](https://fly.io/), and AWS powers our media storage and processing.

      **Collaboration** — we communicate primarily on Campsite, Slack, and Linear. We generally use Campsite to build Campsite; read our [Field Guide](https://www.campsite.design/field-guide) to learn more.


      ### **Benefits**

      - Competitive salary and meaningful equity

      - Health, vision, and dental

      - Flexible time off

      - Office and equipment upgrades

      - In-person meetups to work and connect


      ### **Our team**

      We''re a lean team of generalists distributed across the US. We are focused on building tools people love to use, ship new features weekly, and sweat the details to ensure Campsite meets our high bar for craft and quality.

      Our team has worked on startups and large-scale projects at companies like GitHub, Instagram, Stripe, Zendesk, and Facebook.',
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
        'you should just reach out if you can design polished UI and write production react code. there are no other requirements. just email [dennis@amie.so](mailto:dennis@amie.so) and tell us you come from [read.cv](http://read.cv/)

        ### **What we love about working here**

        ### **Above all, we care about good design**

        > _To make something great, just re-do it, re-do it, re-do it._

        Amie is the joyful productivity app. That means focusing on few experiences but perfecting those. Everyone on the team cares about design and chat to users daily. We don’t just replicate what’s already been made, we build what we think will truly matter. And then we re-do it re-do it re-do it.

        ### **We get to try the wild ideas we never got to before**

        When we see something that can be improved, anyone on the team is free to improve it instead of putting a ticket through the process loop. Everyone on the team have massive impact on how the product will turn out and what we work on.

        Engineers design and designers write code. We think in days, not weeks. Projects never span across more than a couple of weeks, and are scoped by a small group of 2 or 3 people. [This blog post](https://jsomers.net/blog/speed-matters) explains well why being fast matters, and why it’s sooo much fun.

        ### **We’re remote first, with lots of time to do what we love**

        We do meetings when they''re really needed. Not by default. This means most of our days are spent doing what we love and do best–writing code or designing. No busy work, lots of flow.

        It also means we get to work from wherever we want. A couple of people work from our Berlin office, the rest are spread out across Belgium, Cyprus, Ukraine, France, Sweden, Colombia, Georgia, and Turkey. Amie supports us in setting up our home office, or if we prefer to work from a co-working place.

        ### **The Amie team ❤️**

        Our team is the best part about Amie. We are a small and tight-knit team of 10 and has built some of the best apps, like Intercom, Framer and N26. This is how Polly put it:

        > _the team and the product are a reflection of each other - the playfulness, joy, attention to detail, transparency, always caring, always learning, always growing and always improving!_',
        'Amie',
        'images/amie.png',
        90000,
        135000,
        'Mid-Level',
        'Remote',
        true
      )
