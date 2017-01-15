// org introduction
var txtIntro = {
    title: 'Organization: Introduction',
    comment: [
        'In this section, we will be discussing the various facets of a Scrum project organization as well as core and non-core roles and how to form high performance Scrum Teams. Organization, as defined in A Guide to the Scrum Body of Knowledge (SBOK™ Guide), is applicable to the following:',
        '•	Portfolios, programs, and/or projects in any industry',
        '•	Products, services, or any other results to be delivered to stakeholders',
        '•	Projects of any size or complexity',
        'The term “product” in the SBOK™ Guide may refer to a product, service, or other deliverable. Scrum can be applied effectively to any project in any industry—from small projects or teams with as few as six team members to large, complex projects with up to several hundred team members. '
    ]
};

var txtRoles = {
    title: 'Organization: Roles Guide',
    comment: [
        '1.	Product Owner—It is imperative for Product Owners to read the entire chapter.',
        '2.	Scrum Master—The Scrum Master should also be familiar with this entire chapter with primary focus on sections 3.3, 3.5, 3.6, 3.8 and 3.10.4.',
        '3.	Scrum Team— The Scrum Team should mainly focus on sections 3.3, 3.6, and 3.8.'
    ]
};

var txtProject = {
    title: 'Scrum Project Roles',
    overview: {
        title: 'Overview',
        comment: [
        'Understanding defined roles and responsibilities is very important for ensuring the successful implementation of Scrum projects.',
        'Scrum roles fall into two broad categories:',
        '<b>1.	Core Roles</b>—Core roles are those roles which are mandatorily required for producing the product of the project, are committed to the project, and ultimately are responsible for the success of each Sprint of the project and of the project as a whole.',
        '<b>2.	Non-core Roles</b>—Non-core roles are those roles which are not mandatorily required for the Scrum project, and may include team members who are interested in the project, have no formal role on the project team, may interface with the team, but may not be responsible for the success of the project. The non-core roles should also be taken into account in any Scrum project.'
        ]
    },
    core: {
        title: 'Core Roles',
        image: '../images/scrum_roles.png',
        comment: [
            'There are three core roles in Scrum that are ultimately responsible for meeting the project objectives. The core roles are the Product Owner, Scrum Master, and Scrum Team. Together they are referred to as the Scrum Core Team. It is important to note that, of these three roles, no role has authority over the others.'
        ],
        roles: [
            {
                title: '1. Product Owner',
                comment: [
                    'The Product Owner is the person responsible for maximizing business value for the project. He or she is responsible for articulating customer requirements and maintaining business justification for the project. The Product Owner represents the Voice of the Customer. ',
                    'Corresponding to a Product Owner role in a project, there could be a Program Product Owner for a program or a Portfolio Product Owner for a portfolio.'
                ]
            },
            {
                title: '2. Scrum Master',
                comment: [
                    'The Scrum Master is a facilitator who ensures that the Scrum Team is provided with an environment conducive to completing the product’s development successfully. The Scrum Master guides, facilitates, and teaches Scrum practices to everyone involved in the project; clears impediments for the team; and, ensures that Scrum processes are being followed. Note that the Scrum Master role is very different from the role played by the Project Manager in a traditional Waterfall model of project management, in which the Project Manager works as a manager or leader for the project. The Scrum Master only works as a facilitator and he or she is at the same hierarchical level as anyone else in the Scrum Team—any person from the Scrum Team who learns how to facilitate Scrum projects can become the Scrum Master for a project or for a Sprint.',
                    'Corresponding to a Scrum Master role in a project, there could be a Program Scrum Master for a program or a Portfolio Scrum Master for a portfolio.'
                ]
            },
            {
                title: '3. Scrum Team',
                comment: [
                    'The Scrum Team is a group or team of people who are responsible for understanding the business requirements specified by the Product Owner, estimating User Stories, and final creation of the project Deliverables.'
                ]
            }
        ]
    },
    noncore: {
        title: 'Non-core Roles',
        comment: [
            'The non-core roles are those roles which are not mandatorily required for the Scrum project and may not be continuously or directly involved in the Scrum process. However, knowing non-core roles is important as they could play a significant part in some Scrum projects.',
            'Non-core roles can include the following:'
        ],
        roles: [
            {
                title: '1.	Stakeholder(s)',
                comment: [
                    'Stakeholder(s) is a collective term that include customers, users, and sponsors, who frequently interface with the Product Owner, Scrum Master and Scrum Team to provide them with inputs and facilitate creation of the project’s product, service, or other result. Stakeholder(s) influence the project throughout the project’s development. Stakeholders may also have a role to play during the Develop Epic(s), Create Prioritized Product Backlog, Conduct Release Planning, Retrospect Sprint, and other important processes in Scrum.',
                    '<b>•	Customer</b>',
                    'The customer is the individual or the organization that acquires the project’s product, service, or other result. For any organization, depending on the project, there can be both internal customers (i.e., within the same organization) or external customers (i.e., outside of the organization).',
                    '<b>•	Users</b>',
                    'Users are the individual or the organization that directly uses the project’s product, service, or other result. Like customers, for any organization, there can be both internal and external users. Also, in some industries customers and users may be the same.',
                    '<b>•	Sponsor</b>',
                    'The sponsor is the individual or the organization that provides resources and support for the project. The sponsor is also the stakeholder to whom everyone is accountable in the end. At times, the same person or organization can play multiple stakeholder roles; for example, the sponsor and the customer may be the same.'
                ]
            },
            {
                title: '2.	Vendors',
                comment: [
                    'Vendors include external individuals or organizations that provide products and services that are not within the core competencies of the project organization.'
                ]
            },
            {
                title: '3.	Scrum Guidance Body',
                comment: [
                    'The Scrum Guidance Body (SGB) is an optional role. It generally consists of a group of documents and/or a group of experts who are typically involved with defining objectives related to quality, government regulations, security, and other key organizational parameters. These objectives guide the work carried out by the Product Owner, Scrum Master, and Scrum Team. The Scrum Guidance Body also helps capture the best practices that should be used across all Scrum projects in the organization.',
                    'The Scrum Guidance Body does not make decisions related to the project. Instead it acts as a consulting or guidance structure for all the hierarchy levels in the project organization—the portfolio, program, and project. Scrum Teams have the option of asking the Scrum Guidance Body for advice as required.'
                ]
            }
        ]
    }
    
};

exports.txtIntro = txtIntro;
exports.txtRoles = txtRoles;
exports.txtProject = txtProject;
