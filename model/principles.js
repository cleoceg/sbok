
var txtIntroduction = {
    title: 'Principles introduction',
    comment: [
        'Scrum principles are the foundation on which the Scrum framework is based. The principles of Scrum can be applied to any type of project or organization, and they must be adhered to in order to ensure appropriate application of Scrum. The aspects and processes of Scrum can be modified to meet the requirements of the project, or the organization using it, but Scrum principles are non-negotiable and must be applied as described in the framework presented in A Guide to the Scrum Body of Knowledge (SBOK™ Guide).',
        'Keeping the principles intact and using them appropriately instills confidence to the user of the Scrum framework with regard to attaining the objectives of the project. Principles are considered to be the core guidelines for applying the Scrum framework.',
        '<b>Principles</b>, as defined in the SBOK™ Guide, are applicable to the following:',
        '•	Portfolios, programs, and/or projects in any industry',
        '•	Products, services, or any other results to be delivered to stakeholders',
        '•	Projects of any size or complexity',
        'The term “product” in the SBOK™ Guide may refer to a product, service, or other deliverable. Scrum can be applied effectively to any project in any industry—from small projects or teams with as few as six team members to large, complex projects with up to several hundred team members.'
    ]
};

var txtEpc = {
    title: 'Empirical Process Control',
    introduction: [
        'In Scrum, decisions are made based on observation and experimentation rather than on detailed upfront planning. Empirical process control relies on the three main ideas of transparency, inspection, and adaptation.'
    ],
    Transparency: {
        comment: [
        'Transparency allows all facets of any Scrum process to be observed by anyone. This promotes an easy and transparent flow of information throughout the organization and creates an open work culture. In Scrum, transparency is depicted through the following:',
        '•	A Project Vision Statement which can be viewed by all stakeholders and the Scrum Team',
        '•	An open Prioritized Product Backlog with prioritized User Stories that can be viewed by everyone, both within and outside the Scrum Team',
        '•	A Release Planning Schedule which may be coordinated across multiple Scrum Teams',
        '•	Clear visibility into the team’s progress through the use of a Scrumboard, Burndown Chart, and other information radiators',
        '•	Daily Standup Meetings conducted during the Conduct Daily Standup process, in which all team members report what they have done the previous day, what they plan to do today, and any problems preventing them from completing their tasks in the current Sprint',
        '•	Sprint Review Meetings conducted during the Demonstrate and Validate Sprint process, in which the Scrum Team demonstrates the potentially shippable Sprint Deliverables to the Product Owner and Stakeholders'
        ],
        image: '../images/transparency.png'
    },
    Inspection: {
        comment: [
            'Inspection in Scrum is depicted through the following:',
            '•	Use of a common Scrumboard and other information radiators which show the progress of the Scrum Team on completing the tasks in the current Sprint.',
            '•	Collection of feedback from the customer and other stakeholders during the Develop Epic(s), Create Prioritized Product Backlog, and Conduct Release Planning processes.',
            '•	Inspection and approval of the Deliverables by the Product Owner and the customer in the Demonstrate and Validate Sprint process.'
        ],
        image: '../images/inspection.png'
    },
    Adaptation: {
        part1: [
            'Adaptation happens as the Scrum Core Team and Stakeholders learn through transparency and inspection and then adapt by making improvements in the work they are doing. Some examples of adaptation include:',
            '•	In Daily Standup Meetings, Scrum Team members openly discuss impediments to completing their tasks and seek help from other team members. More experienced members in the Scrum Team also mentor those with relatively less experience in knowledge of the project or technology.',
            '•	Risk identification is performed and iterated throughout the project. Identified risks become inputs to several Scrum processes including Create Prioritized Product Backlog, Groom Prioritized Product Backlog, and Demonstrate and Validate Sprint.',
            '•	Improvements can also result in Change Requests, which are discussed and approved during the Develop Epic(s), Create Prioritized Product Backlog, and Groom Prioritized Product Backlog processes.',
            '•	The Scrum Guidance Body interacts with Scrum Team members during the Create User Stories, Estimate Tasks, Create Deliverables, and Groom Prioritized Product Backlog processes to offer guidance and also provide expertise as required.',
            '•	In the Retrospect Sprint process, Agreed Actionable Improvements are determined based on the outputs from the Demonstrate and Validate Sprint process.',
            '•	In Retrospect Project Meeting, participants document lessons learned and perform reviews looking for opportunities to improve processes and address inefficiencies.'
        ],
        image1: '../images/adaptation.png',
        part2: [
            'With other methods, like the traditional Waterfall model, considerable planning needs to be done in advance and the customer generally does not review product components until near the end of a phase, or the end of the entire project. This method often presents huge risks to the project’s success because it may have more potential for significantly impacting project delivery and customer acceptance. The customer’s interpretation and understanding of the finished product may be very different from what was actually understood and produced by the team and this may not be known until very late in the project’s development.'
        ],
        image2: '../images/challenges.png'
    }
};

var txtSelforg = {
    title: 'Self-organization',
    overview: [
        'Scrum believes that employees are self-motivated and seek to accept greater responsibility. So, they deliver much greater value when self-organized.',
        'The preferred leadership style in Scrum is “servant leadership”, which emphasizes achieving results by focusing on the needs of the Scrum Team. See section 3.10.3 for a discussion of various leadership and management styles.'
    ],
    benefits: [
        'Self-organization as an essential principle in Scrum leads to the following:',
        '•	Team buy-in and shared ownership',
        '•	Motivation, which leads to an enhanced performance level of the team',
        '•	Innovative and creative environment conducive to growth',
        'Self-organization does not mean that team members are allowed to act in any manner that they want to. It just means that once the Product Vision is defined in the Create Project Vision process, the Product Owner, Scrum Master, and Scrum Team get identified. Also the Scrum Core Team itself works very closely with relevant Stakeholder(s) for refining requirements better as they go through the Develop Epic(s) and Create User Stories process. Team expertise is used to assess the inputs needed to execute the planned work of the project. This judgment and expertise are applied to all technical and management aspects of the project during the Create Deliverables process.',
        'Although prioritization is primarily done by the Product Owner who represents the Voice of Customer, the self-organized Scrum Team is involved in task breakdown and estimation during the Create Tasks and Estimate Tasks processes. During these processes, each team member is responsible for determining what work he or she will be doing. During the execution of a Sprint, if team members need any help with completing their tasks, Scrum addresses this through the regular interaction mandatory with the Daily Standup Meetings. The Scrum Team itself interacts with other teams through the Scrum of Scrums (SoS) Meetings and can look for additional guidance as required from the Scrum Guidance Body.',
        'Finally, the Scrum Team and Scrum Master work closely to demonstrate the product increment created during the Sprint in the Demonstrate and Validate Sprint process where properly completed deliverables are accepted. Since the Deliverables are potentially shippable, (and the Prioritized Product Backlog is prioritized by User Stories in the order of value created by them), the Product Owner and the customer can clearly visualize and articulate the value being created after every Sprint; and Scrum Teams in turn have the satisfaction of seeing their hard work being accepted by the customer and other stakeholders.'
    ],
    goals: [
        'The chief goals of self-organizing teams are as follows:',
        '•	Understand the Project Vision and why the project delivers value to the organization',
        '•	Estimate User Stories during the Approve, Estimate, and Commit User Stories process and assign tasks to themselves during the Create Sprint Backlog process',
        '•	Create tasks independently during the Create Tasks process',
        '•	Apply and leverage their expertise from being a cross-functional team to work on the tasks during the Create Deliverables process',
        '•	Deliver tangible results which are accepted by the customer and other stakeholders during the Demonstrate and Validate Sprint process',
        '•	Resolve individual problems together by addressing them during Daily Standup Meetings',
        '•	Clarify any discrepancies or doubts and be open to learning new things',
        '•	Upgrade knowledge and skill on a continuous basis through regular interactions within the team',
        '•	Maintain stability of team members throughout the duration of the project by not changing members, unless unavoidable'
    ],
    image: '../images/selforg.png'
};

var txtCollaboration = {
    title: 'Collaboration',
    overview: [
        'Collaboration in Scrum refers to the Scrum Core Team working together and interfacing with the stakeholders to create and validate the deliverables of the project to meet the goals outlined in the Project Vision. It is important to note the difference between cooperation and collaboration here. Cooperation occurs when the work product consists of the sum of the work efforts of various people on a team. ',
        'Collaboration occurs when a team works together to play off each other’s inputs to produce something greater.',
        'The core dimensions of collaborative work are as follows:',
        '•	<b>Awareness</b>—Individuals working together need to be aware of each other’s work.',
        '•	<b>Articulation</b>—Collaborating individuals must partition work into units, divide the units among team members, and then after the work is done, reintegrate it.',
        '•	<b>Appropriation</b>—Adapting technology to one’s own situation; the technology may be used in a manner completely different than expected by the designers.'
    ],
    benefits: [
        'The Agile Manifesto (Fowler & Highsmith, 2001) stresses “customer collaboration over contract negotiation.” Thus, the Scrum framework adopts an approach in which the Scrum Core Team members (Product Owner, Scrum Master, and Scrum Team), collaborate with each other and the stakeholders to create the deliverables that provide greatest possible value to the customer. This collaboration occurs throughout the project.',
        'Collaboration ensures that the following project benefits are realized:',
        '1.	The need for changes due to poorly clarified requirements is minimized. For example, during the Create Project Vision, Develop Epic(s), and Create Prioritized Product Backlog processes, the Product Owner collaborates with stakeholders to create the Project Vision, Epic(s), and Prioritized Product Backlog, respectively. This will ensure that there is clarity among Scrum Core Team members on the work that is required to complete the project. The Scrum Team collaborates continuously with the Product Owner and stakeholders through a transparent Prioritized Product Backlog to create the project deliverables. The processes Conduct Daily Standup, Groom Prioritized Product Backlog, and Retrospect Sprint provide scope to the Scrum Core Team members to discuss what has been done and collaborate on what needs to be done. Thus the number of Change Requests from the customer and rework is minimized.',
        '2.	Risks are identified and dealt with efficiently. For example, risks to the project are identified and assessed in the Develop Epic(s), Create Deliverables, and Conduct Daily Standup processes by the Scrum Core Team members. The Scrum meeting tools such as the Daily Standup Meeting, Sprint Planning Meeting, Prioritized Product Backlog Review Meeting, and so on provide opportunities to the team to not only identify and assess risks, but also to implement risk responses to high-priority risks.',
        '3.	True potential of the team is realized. For example, the Conduct Daily Standup process provides scope for the Scrum Team to collaborate and understand the strengths and weaknesses of its members. If a team member has missed a task deadline, the Scrum Team members align themselves collaboratively to complete the task and meet the targets agreed to for completing the Sprint.',
        '4.	Continuous improvement is ensured through lessons learned. For example, the Scrum Team uses the Retrospect Sprint process to identify what went well and what did not go well in the previous Sprint. This provides an opportunity to the Scrum Master to work with the team to rework and improve the team for the next scheduled Sprint. This will also ensure that collaboration is even more effective in the next Sprint.'
    ],
    importance: [
        'For many of the Scrum practices, high-bandwidth communication is required. To enable this, it is preferred that team members are colocated. Colocation allows both formal and informal interaction between team members. This provides the advantage of having team members always at hand for coordination, problem-solving, and learning. Some of the benefits of colocation are the following:',
        '•	Questions get answered quickly.',
        '•	Problems are fixed on the spot.',
        '•	Less friction occurs between interactions.',
        '•	Trust is gained and awarded much more quickly.',
        'Collaboration tools that can be used for colocated or distributed teams are as follows:'
    ],
    colocated: '1.	<b>Colocated Teams</b> (i.e., teams working in the same office)—In Scrum, it is preferable to have colocated teams. If colocated, preferred modes of communication include face-to-face interactions, Decision Rooms or War Rooms, Scrumboards, wall displays, shared tables, and so on.',
    distributed: '2.	<b>Distributed Teams</b> (i.e., teams working in different physical locations)—Although colocated teams are preferred, at times the Scrum Team may be distributed due to outsourcing, offshoring, different physical locations, work-from-home options, etc. Some tools that could be used for effective collaboration with distributed teams include video conferencing, instant messaging, chats, social media, shared screens, and software tools which simulate the functionality of Scrumboards, wall displays, and so on.',
    image: '../images/collaboration.png'
};

exports.txtIntroduction = txtIntroduction;
exports.txtEpc = txtEpc;
exports.txtSelforg = txtSelforg;
exports.txtCollaboration = txtCollaboration;