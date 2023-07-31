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
      E'Humanloop is helping the coming wave of AI startups build impactful applications on top of large language models. Our tools add capabilities, evaluate performance and align these systems with human feedback to create real world value.\n
        We''re looking for exceptional engineers that can work at varying levels of the stack (frontend, backend, infra), who are customer obsessed and thoughtful about product (we think you have to beour customers are ''living in the future'' and we''re building what''s needed).\n
        Our stack is Typescript, Python, GPT-3.\n
        Location\n
        We have an office in Farringdon, Central London which we meet in person two days a week. The rest of the time we are good at remote. You can be remote if you''re exceptional, but it helps for ideation, knowledge transfer and fun to be in person.\n
        Interview process\n
        20 minute phone call with a team member discussing background and your goals\n
        45 minute code screen or portfolio review\n
        60 minute product interview\n
        Interview loop\n
        Whole thing in a week is the aim. This is an exciting and urgent time in AI space and we move fast.',
      'Humanloop',
      'images/humanloop.png',
      100000,
      150000,
      'Mid-Level',
      'San Francisco, CA',
      true),
    ('Software Engineer, Product',
      E'We are the teams who create all of Meta''s products used by billions of people around the world. Want to build new features and improve existing products like Messenger, Video, Groups, News Feed, Search and more? Want to solve unique, large scale, highly complex technical problems? Meta is seeking experienced full-stack Software Engineers to join our product teams. You can help build products that help us connect the next billion people, create new features that have billions of interactions per day and be a part of a team that''s working to help people connect with each other around the globe. Join us!\n
        Software Engineer, Product Responsibilities:\n
        Full stack web/mobile application development with a variety of coding languages\n
        Create consumer products and features using internal programming language Hack\n
        Implement web or mobile interfaces using XHTML, CSS, and JavaScript\n
        Work closely with our PM and design teams to define feature specifications and build the next generation of products leveraging frameworks such as React & React Native\n
        Work closely with operations and infrastructure to build and scale back-end services\n
        Build report interfaces and data feeds\n
        Complete medium to large features (each with many tasks) independently without guidance\n
        Proactively identify and drive changes as needed for assigned codebase, product area and/or systems\n
        Minimum Qualifications:\n
        2+ years of programming experience\n
        2+ years relevant experience building large-scale applications or similar experience\n
        1+ years of experience designing and completing medium to large features independently without guidance\n
        1+ years of experience identifying and driving changes to applications as needed\n
        Must obtain work authorization in country of employment at the time of hire, and maintain ongoing work authorization during employment\n
        Currently has, or is in the process of obtaining a Bachelor''s degree in Computer Science, Computer Engineering, relevant technical field, or equivalent practical experience. Degree must be completed prior to joining Meta.\n
        Meta is proud to be an Equal Employment Opportunity and Affirmative Action employer. We do not discriminate based upon race, religion, color, national origin, sex (including pregnancy, childbirth, reproductive health decisions, or related medical conditions), sexual orientation, gender identity, gender expression, age, status as a protected veteran, status as an individual with a disability, genetic information, political views or activity, or other applicable legally protected characteristics. You may view our Equal Employment Opportunity notice here. We also consider qualified applicants with criminal histories, consistent with applicable federal, state and local law. We may use your information to maintain the safety and security of Meta, its employees, and others as required or permitted by law. You may view Meta''s Pay Transparency Policy, Equal Employment Opportunity is the Law notice, and Notice to Applicants for Employment and Employees by clicking on their corresponding links. Additionally, Meta participates in the E-Verify program in certain locations, as required by law',
      'Meta',
      'images/meta.png',
      116000,
      168000,
      'Entry-Level',
      'Bellevue, WA',
      true)
