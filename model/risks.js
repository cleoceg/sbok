var txtRoles = {
    title: 'Roles Guide',
    roles: [
        {
            title: 'Product Owner',
            role : 'The major responsibilities of handling risks in a project lie with the Product Owner; therefore, the entire chapter on risks is most applicable to this role.',
            links: [
                
            ]
        },
        {
            title: 'Scrum Master',
            role : 'The Scrum Master should be familiar with this entire chapter with primary focus on sections What is Riks?, Risk management, and Risk Summary.',
            links: [
                ['risk_what','What?'],
                ['risk_mgt','Management'],
                ['risk_summary','Summary']
            ]
        },
        {
            title: 'Scrum Team',
            role : 'The Scrum Team should focus primarily on sections What is Riks? and Risk Summary.',
            links: [
                ['risk_what','What?'],
                ['risk_summary','Summary']
            ]
        }
    ]
};

var txtSummary = {
     title: "Summary of Responsibilities",
     intro: 'In Scrum, the risk management activities are divided among various roles \n\
with some responsibility resting with everyone in the Scrum Team and the Scrum Master facilitating the process.',
     table: [
         {
             owner: 'Scrum Guidance Body',
             comments: [
                 'Provides overall guidance for the risk management procedure to be followed throughout the project'
             ]
         },
         {
             owner: 'Portfolio Product Owner',
             comments: [
                 'Captures and assesses risks for portfolios',
                 'Prioritizes and communicates risks to relevant stakeholders, program, and project teams '
             ]
         },
         {
             owner: 'Portfolio Scrum Master',
             comments: [
                 'Facilitates identification, assessment and communication of risks portfolios Program Product'
             ]
         },
         {
             owner: 'Owner',
             comments: [
                 'Captures and assesses risks for programs',
                 'Prioritizes and communicates risks to relevant stakeholders and project teams'
             ]
         },
         {
             owner: 'Program Scrum Master',
             comments: [
                 'Facilitates identification, assessment and escalation of risks for programs Stakeholder(s)',
                 'Interfaces with the Scrum Core Team to provide them inputs on management of risks that affect the achievement of expected outcomes and benefits from the project'
             ]
         },
         {
             owner: 'Product Owner',
             comments: [
                 'Captures and assesses risks for project'
             ]
         }
     ]
 };
 
var txtWhat = {
     title: 'What is Risk?',
     gen_title: 'What is Risk?',
     issue_title: 'Difference between risks and issues',
     attitude_title: 'Risk Attitude',
     gen: [
         'Risk is defined as an uncertain event that can affect the objectives of a project and may contribute to its success or failure. Risks with a potential for positive impact on the project are called opportunities, whereas threats are risks that could negatively impact a project. Managing risk must be done proactively, and it is an iterative process that should begin at project inception and continue throughout the life of the project. The process of managing risk should follow some standardized steps to ensure that risks are identified, evaluated, and a proper course of action is determined and acted upon accordingly.',
         'Risks should be identified, assessed, and responded to based primarily on two factors: the probability of an occurrence and the probable impact in the event of the occurrence. Risks with high probability and high impact rating should be addressed before those with a lower rating. In general, once a risk is identified, it is important to understand the basic aspects of the risk with regard to the possible causes, the area of uncertainty, and the potential effects if the risk occurs.'
     ],
     risks: [
         'Risks are the uncertainties related to a project that could significantly alter the outcome of the project in a positive or negative way. Since risks are future uncertainties, they have no current impact on the project, but could have a potential impact on the future. The following are some examples of risks:',
         '•	Even after extensive training, the customer service representatives might not be ready to take orders on the go-live date.',
         '•	The painting crew might be delayed due to heavy rain, which could negatively impact the project schedule.'
     ],
     issues: [
         'Issues are generally well-defined certainties that are currently happening on the project: so there is no need for conducting a probability assessment as we would for a risk. Issues must be dealt with. Some examples of issues include the following:',
         '•	Funding is not approved.',
         '•	Requirements are unclear.'
     ],
     risk_conclusion: 'Risks, if not addressed in time, may become issues. The goal of risk management is to be prepared, with plans in place to deal with any risks that may occur.',
     attitude: [
         'Stakeholders include all people or organizations impacted by the project as well as those that have the ability to impact the project. It is important to understand the risk attitude of the stakeholders. Risk attitude is influenced by the following three factors:',
         '1.	Risk appetite: refers to how much uncertainty the stakeholder or organization is willing to take on.',
         '2.	Risk tolerance: indicates the degree, amount, or volume of risk stakeholders will withstand.',
         '3.	Risk threshold: refers to the level at which a risk is acceptable to the stakeholder organization. A risk will fall above or below the risk threshold. If it is below, then the stakeholder or organization is more likely to accept the risk.',
         'Essentially, the risk attitude of the stakeholders determines how much risk the stakeholders consider acceptable and hence when they will decide to take actions to mitigate potential adverse impacts of risks.',
         'Therefore, it is important to understand the tolerance levels of the stakeholders in relation to various factors including cost, quality, scope, and schedule.'
     ],
     utility: [
         '<b>Utility Function</b> is a model used for measuring stakeholder risk preference or attitude toward risk. It defines the stakeholders’ level or willingness to accept risk. The three categories of Utility Function are the following:',
         '<b>1.	Risk averse</b>: Stakeholder is unwilling to accept a risk no matter what the anticipated benefit or opportunity.',
         '<b>2.	Risk neutral</b>: Stakeholder is neither risk averse nor risk seeking and any given decision is not affected by the level of uncertainty of the outcomes. When two possible scenarios carry the same level of benefit, the risk neutral stakeholder will not be concerned if one scenario is riskier than the other.',
         '<b>3.	Risk seeking</b>: Stakeholder is willing to accept risk even if it delivers a marginal increase in return or benefit to the project.'
     ]
 };
 
var txtManagement = {
     title: 'Risk Management',
     gen: [
         'Risk Management consists of five steps:',
         '<b>1.	Risk identification</b>: Using various techniques to identify all potential risks.',
         '<b>2.	Risk assessment</b>: Evaluating and estimating the identified risks.',
         '<b>3.	Risk prioritization</b>: Prioritizing risk to be included in the Prioritized Product Backlog.',
         '<b>4.	Risk mitigation</b>: Developing an appropriate strategy to deal with the risk.',
         '<b>5.	Risk communication</b>: Communicating the findings from the first four steps to the appropriate stakeholders and determining their perception regarding the uncertain events.'
     ],
     identification: {
        introduction: [
        'The Scrum Team members should attempt to identify all risks that could potentially impact the project. Only by looking at the project from different perspectives, using a variety of techniques, can they do this job thoroughly. Risk Identification is done throughout the project and Identified Risks become inputs to several Scrum processes including Create Prioritized Product Backlog, Groom Prioritized Product Backlog, and Demonstrate and Validate Sprint.',
        'The following techniques are commonly used to identify risks.'
        ],
        techniques: [
            {
                title: '1.	Review Lessons Learned from Retrospect Sprint or Retrospect Project Processes',
                comment: 'Learning from similar projects and earlier Sprints in the same project and exploring the uncertainties that affected those projects and Sprints can be a useful way to identify risks.'
            },
            {
                title: '2.	Risk Checklists',
                comment: 'Risk checklists can include key points to be considered when identifying risks, common risks encountered in the Scrum project, or even categories of risks that should be addressed by the team. Checklists are a valuable tool to help ensure comprehensive risk identification.'
            },
            {
                title: '3.	Risk Prompt Lists',
                comment: 'Risk prompt lists are used in stimulating thoughts regarding the source from which risks may originate. Risk prompt lists for various industries and project types are available publicly.'
            },
            {
                title: '4.	Brainstorming',
                comment: 'Sessions where relevant stakeholders and members in the Scrum Core Team openly share ideas through discussions and knowledge sharing sessions, which are normally conducted by a facilitator.'
            },
            {
                title: '5.	Risk Breakdown Structure (RBS)',
                comment: 'One of the key tools used in identifying risks is a risk breakdown structure. In this structure, risks are grouped based on their categories or commonalities. For example, risks may be categorized as financial, technical, or safety related. This allows the team to better plan for and address each risk.'
            }
        ],
        spike: '<p><b>Risk-Based Spike</b><p>A concept that can be useful in identifying risks is that of a risk-based spike. A spike is an experiment that involves research or prototyping to better understand potential risks. In a spike, an intense two to three day exercise is conducted (preferably at the beginning of a project before the Develop Epic(s) or Create Prioritized Product Backlog processes) to help the team determine the uncertainties that could affect the project. Risk-based spikes are useful when the Scrum Team is working with and getting accustomed to new technologies or tools, or when User Stories are lengthy. They also help in estimating time and effort more accurately.'
    },
     assessment: {
         gen: [
             'The assessment of risk helps in understanding the potential impact of a risk, how likely it is to occur, and when the risk could materialize. The overall effect on business value should be estimated; if that impact is significant enough to outweigh the business justification, a decision must be made whether to continue the project.',
             'The assessment of risks is done with regard to probability, proximity, and impact. Probability of risks refers to the likelihood of the risks occurring, whereas proximity refers to when the risk might occur. Impact refers to the probable effect of the risks on the project or the organization.',
             'To estimate the probability of a risks, various techniques may be used, including Probability Trees, Pareto Analysis, and a Probability and Impact Matrix. In addition to probability, risk assessment also evaluates the potential net effect of risks on the project or organization. These effects can be estimated using techniques such as Risk Models and Expected Monetary Value.'
         ],
         techniques: [
             {
                title: '<b>1.	Risk Meeting</b>',
                comment: [
                    'Risks could be easily prioritized by the Product Owner by calling a meeting of the Scrum Core Team and optionally inviting relevant Stakeholders to the meeting. The team could meet and prioritize different risks based on their subjective assessment of the impact of the risks on project objectives.'
                ]
             },
             {
                title: '<b>2.	Probability Trees</b>',
                comment: [
                    'Potential events are represented in a tree with a branch extended for each possible outcome of a risk event. The probability of each possible outcome is indicated on the appropriate branch and then multiplied by its assessed impact to get an expected value for each outcome possibility. The outcome values are then summed together to calculate the overall expected impact of a risk to a project (see Figure 7-1).'
                ]
             },
             {
                title: '<b>3.	Pareto Analysis</b>',
                comment: [
                    'This technique of assessing risk involves ranking risks by magnitude which helps the Scrum Team address the risks in the order of their potential impact on the project. For example, in Figure 7-2, Risk 1 has the highest impact and should preferably be addressed first.'
                ]
             },
             {
                title: '<b>4.	Probability Impact Grid</b>',
                comment: [
                    'Each risk is assessed for its probability of occurrence and for its potential impact on project objectives. Generally, a numerical rating is assigned for both probability and impact independently.',
                    'The two values are then multiplied to derive a risk severity score (or PI value), which can be used to prioritize risks.',
                    'For example, the risk severity score for a risk with a Probability of 50% and an Impact rating of .6 would be calculated as follows: ',
                    '<center>0.5(Probability) x 0.6(Impact) = 0.3</center>',
                    'The rating schemes used are determined within the organization or for the project. Often a decimal scale is used, from zero to one, where a 0.5 probability rating would indicate 50% likelihood. Other options include a scale of one to ten, or High (3), Medium (2), and Low (1).',
                    'The method of assigning probability and impact values to risks varies depending on the project and number of risks being evaluated, as well as existing organizational processes and procedures. However, by applying the simple P x I formula, risk severity can be calculated on a numerical or categorical scale.'
                ]
             },
             {
                title: '<b>5.	Expected Monetary Value (EMV)</b>',
                comment: [
                    'The monetary value of the risk is based on its Expected Monetary Value (EMV). EMV is calculated by multiplying the monetary impact by the risk’s probability, as approximated by the customer. Expected Monetary Value = Risk impact (in dollars) x Risk probability (as percentage) For example, a risk with an estimated negative impact of $1,000 and a 50% probability of occurring would result in an EMV as follows:',
                    '<center>EMV = $1,000 x 0.50 = $500</center>',
                    
                ]
             }
         ]
     },
     prioritization: {
         gen: [
             'Scrum allows for quick identification and assessment of risks. Identified Risks are taken into account when creating a Prioritized Product Backlog during the Create Prioritized Product Backlog process, or when we update the Prioritized Product Backlog during the Groom Prioritized Product Backlog process—so a Prioritized Product Backlog could also be referred to as a Risk Adjusted Prioritized Product Backlog.',
             'The risks could be identified and assessed based on any of the Risk Identification and Risk Assessment techniques mentioned earlier. ',
             'In the Create Prioritized Product Backlog or Groom Prioritized Product Backlog processes, the prioritized User Stories from the existing Prioritized Product Backlog and the prioritized list of risks are then combined to create an updated Prioritized Product Backlog which includes the Identified Risks:',
             'Steps for updating a Prioritized Product Backlog with Identified Risks:',
             '1.	Create a list of prioritized risks. (e.g., the risks can be prioritized by value using Expected Monetary Value technique).',
             '2.	Select those Identified Risks that can be mitigated; and for which the team decides to take specific risk action during the Sprint to mitigate such risks.',
             '3.	Create a list of User Stories in the Prioritized Product Backlog, which are prioritized by value (e.g., the value of each User Story may be evaluated based on its expected Return on Investment).',
             '4.	Combine lists in step 2 and step 3 and prioritize them by value to arrive at the Updated Prioritized Product Backlog.'
         ],
         image: '../images/risk_prior.png'
     },
     mitigation: {
         gen: [
             'The response to each risk will depend on the probability and impact of the risk. However, the iterative nature of Scrum with its rapid turnaround time and feedback cycles allows for early detection of failures; therefore, practically speaking, it has a natural mitigation feature built in.',
             'Risk can be mitigated by implementing a number of responses. In most situations, responses are proactive or reactive. In the case of a risk, a plan B may be formulated, which can be used as a fall-back in case the risk materializes—such a plan B is a reactive response. Sometimes risks are accepted and are an example of a risk response which is neither proactive nor reactive. Risks are accepted because of various reasons, as in a situation where the probability or impact of the risk is too low for a response. ',
             'Acceptance can also be the case in a situation where the apprehension of secondary risks may deter the product owner from taking any action. The effort made by the Product Owner to reduce the probability or impact—or both—of the risk is an example of a proactive response to mitigating risks.',
             'Once Identified Risks are included as part of the Prioritized Product Backlog (see Figure: risk prioritization), several risks get mitigated during the Create Deliverables process when the Tasks related to User Stories defined in the Prioritized Product Backlog process get completed.',
             'In Scrum, the ownership of risk is clearly on the Product Owner for managing risks related to business aspects and on the Scrum Team for implementing risk responses during the course of a Sprint. The Scrum Guidance Body can be approached for advice on the way risk responses are implemented and whether the actions align with the guidelines of the organization as a whole. The Scrum Master keeps a close eye on the potential risks that could affect the project and keeps the Product Owner and Scrum Team informed.'
         ]
     },
     communication: {
         gen: [
             'Because stakeholders have an interest in the project, it is important to communicate with them regarding risks. Information provided to stakeholders related to risk should include potential impact and the plans for responding to each risk. This communication is on-going and should occur in parallel with the four sequential steps discussed thus far—risk identification, assessment, prioritization and mitigation. The Scrum Team may also discuss specific risks related to their Tasks with the Scrum Master during Daily Standup Meetings. The Product Owner is responsible for the prioritization of risks and for communicating the prioritized list to the Scrum Team.',
             'An important tool which can be used for communicating information related to risks is the Risk Burndown Chart.'
         ],
         burndown: [
             '<b>Risk Burndown Chart</b>',
             'Risk management is integral to ensuring value creation; therefore, risk management activities are performed throughout the project lifecycle and not just during project initiation.',
             'Each risk could be assessed using different Risk Assessment tools. However, the preferred tool for assessing risks to create a Risk Burndown Chart is Expected Monetary Value (EMV) as described in section 7.4.2.1.',
             'The information gathered during risk assessment may be used to create a Risk Burndown Chart. This depicts cumulative project risk severity over time. The likelihoods of the various Risks are plotted on top of each other to show cumulative risk on the y-axis. The initial identification and evaluation of risks on the project and the creation of the Risk Burndown Chart are done initially. Then, at predetermined time intervals, new risks may be identified and assessed and remaining risks should be re-evaluated and updated accordingly on the chart. An appropriate time to do this is during the Sprint Planning Meeting. Tracking risks in this manner allows the team to recognize trends in risk exposure and take appropriate action, as necessary.'
         ],
         image: '../images/rbc.png'
     }
 };
 
var txtMinimizing = {
     title: 'Minimizing Risks through Scrum',
     intro: 'Being an Agile, iterative process, the Scrum framework inherently minimizes risk. The following Scrum practices facilitate the effective management of risk:',
     items: [
         {
             title: '<b>1.	Flexibility reduces business-environment-related risk</b>',
             comment: 'Risk is largely minimized in Scrum due to the flexibility in adding or modifying requirements at any time in the project lifecycle. This enables the organization to respond to threats or opportunities from the business environment and unforeseen requirements whenever they arise, with usually low cost of managing such risks.'
         },
         {
             title: '<b>2.	Regular feedback reduces expectations-related risk</b>',
             comment: 'Being iterative, the Scrum framework gives ample opportunities to obtain feedback and set expectations throughout the project lifecycle. This ensures that the project stakeholders, as well as the team, are not caught off guard by miscommunicated requirements.'
         },
         {
             title: '<b>3.	Team ownership reduces estimation risk</b>',
             comment: 'The Scrum Team estimates and takes ownership of the Sprint Backlog Items, which leads to more accurate estimation and timely delivery of product increments'
         },
         {
             title: '<b>4.	Transparency reduces non-detection risk</b>',
             comment: 'The Scrum principle of transparency around which the framework is built ensures that risks are detected and communicated early, leading to better risk handling and mitigation. Moreover, when conducting Scrum of Scrums Meetings, Impediments that one team is currently facing may be deemed a risk for other Scrum Teams in the future. This should be recognized in the Updated Impediments Log.'
         },
         {
             title: '<b>5.	Iterative delivery reduces investment risk</b>',
             comment: 'Continuous delivery of value throughout the Scrum project lifecycle, as potentially shippable Deliverables are created after every Sprint, reduces investment risk for the customer.'
         }
     ]
 };
 
var txtPortfolio = {
    title: 'Risks in Portfolios and Programs',
    intro: [
        'While some risks are specifically related to individual projects, others may originate in programs or portfolios and will generally be managed there itself. However, risks related to a portfolio or program will also impact projects that are part of the respective portfolio or program. During risk assessment in portfolios and programs, if it is determined that a risk may affect an individual project, relevant information about the risk must be communicated to the Product Owner and Scrum Team.',
        'Depending on the severity or priority, when the program or portfolio team communicates a risk that will impact an individual project, the Scrum Team may have to stop and re-plan the current Sprint to address the risk. For less urgent risks, the team can continue the current Sprint and address the risk in a subsequent Sprint.'
    ],
    inportfolio: [
        '<b>In Portfolio</b>',
        '1.	When risks in Portfolio are identified, the Portfolio Product Owner will need to capture them and assess the proximity, probability, and impact of each identified risk in order to prioritize it and determine the appropriate response for the portfolio.',
        '2.	The Portfolio Product Owner will also need to communicate the risks to the relevant stakeholders, the program teams, and the project teams. In some cases, the portfolio team may have to assume the ownership of specific risks.'
    ],
    inprogram: [
        '<b>In Program</b>',
        '1.	When program risks are identified, the Program Product Owner should enter them in the program Risk Adjusted Prioritized Product Backlog, assess the proximity, probability, and impact of each identified risk in order to prioritize it and determine the appropriate responses for programs.',
        '2.	The Program Product Owner will also need to communicate the risks to relevant stakeholders and the project teams. In some cases, the program team would have to assume ownership of specific risks.'
    ],
    image: '../images/risk_portfolio.png'
};
 
var txtVs = {
    title: 'Scrum vs. Traditional Project Management',
    comment: [
        'Scrum and most of the traditional project management methods define risk as ‘uncertain event(s) that could positively or negatively affect the achievement of project objectives.’ Also, risks are identified, assessed, planned for, and communicated continually.',
        'In Traditional project management models, there is emphasis on detailed upfront planning to identify, assess, and determine risk responses for all project risks. During project execution, any project team member can identify risks and the project manager or the project management office or project support staff can update them in the Risk Log or Risk Register. The project manager regularly monitors and controls all risks and usually identifies specific individuals in the team to take responsibility for different aspects of risks.',
        'In Scrum, any Scrum Team member can identify risks and the Product Owner can update the identified risks in the Risk Adjusted Prioritized Product Backlog. The Scrum principles of Empirical Process Control and Iterative Development enable the Scrum Team to constantly keep identifying risks and adding them to the Prioritized Product Backlog, where such risks are prioritized with other existing User Stories in the backlog, to be mitigated in subsequent Sprints. The Scrum Team has collective responsibilities for managing all risks for the Sprint.'
    ]
};

exports.txtRoles = txtRoles
exports.txtSummary = txtSummary
exports.txtwhat = txtWhat;
exports.txtmanagement = txtManagement;
exports.txtminimizing = txtMinimizing;
exports.txtportfolio = txtPortfolio;
exports.txtvs = txtVs;