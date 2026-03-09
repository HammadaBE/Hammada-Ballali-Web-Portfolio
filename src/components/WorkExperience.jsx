import Card from "./Card"

const WorkExperience = () => {

    return (
        <section id="workExperience" className="w-full flex justify-center items-center bg-white backdrop-blur-lg  text-cyan-800  py-12 h-auto border border-orange-300">
            
            <div className="container md:mx-12 my-10 px-6 flex flex-col items-center justify-center gap-6 ">
                <h1 className="text-4xl font-bold mb-6">Work Experience</h1>
                <Card imageUrl="/images/CentredSolutions-logo.png"
                    title="Technical Specialist L2+ Infrastructure Engineer"
                    company="Centred Solutions"
                    duration="April 2025 - Present"
                    description="• Manage, deploy and update Network and Computing resources. 
                                • Deploying Django applications in Linux Servers 
                                • Administering and managing VMware ESXi and Proxmox hypervisors, for optimal 
                                performance, uptime, and security for virtualized environments. 
                                • Manage and monitor and update PostgreSQL servers (Linux – Ubuntu servers) 
                                • Writing and running Ansible scripts. 
                                • Nginx deployment and troubleshooting. 
                                • Manage IT aspects of servers: DNS, routing, interfaces, firewalls and certificates. 
                                • Customize and run PowerShell and Python scripts. 
                                • Ensuring Ensure compliance with internal security policies and regulatory 
                                  requirements (e.g., GDPR, ISO27001, Cyber Essentials). 
                                • Deploy Docker, Kafka, and Kubernetes. 
                                • Assist developer team in ClickUp by updating user stories and testing features. 
                                • Support customers in troubleshooting application issues, and root cause analysis 
                                as well as monitoring tickets in Odoo. "
                    link="https://www.centredsolutions.co.uk/" />


                <Card imageUrl="/images/zoll-logo.jpg"
                    title="Application Support Specialist"
                    company="Zoll Medical"
                    duration="June 2023 - April 2025"
                    description="• Deploy and install applications on Windows and Ubuntu servers. 
                                • Handle Active Directory and LDAP communications with application servers. 
                                • Manage and monitor Windows EC2 instances for IIS and SQL servers, as well as 
                                Linux EC2 instances in AWS hosting various applications. 
                                • Monitor costs and services in AWS. 
                                • Manage IT aspects of servers, including DNS, routing, interfaces, firewalls, security 
                                groups, and certificates. 
                                • Customize and run PowerShell and Python scripts. 
                                • Support Company SDK use for Android, SWIFT, and .NET. 
                                • Deploy Docker, Kafka, and Kubernetes. 
                                • Ensuring Ensure compliance with internal security policies and regulatory 
                                requirements (e.g., GDPR, ISO27001, Cyber Essentials). 
                                • Support customers in troubleshooting application servers and SQL servers, as well 
                                as monitoring ticketing systems Zendesk/Salesforce/Jira 
                                • Pre-sales support within the Sales Engineering Team  "
                    link="https://www.zoll.com/en-gb" />

                <Card imageUrl="/images/hope-uni-logo.jpg"
                    title="Technical Assistant"
                    company="Liverpool Hope University"
                    duration="October 2022 - June 2023"
                    description="Assisted primary mathematics department professors in research by processing 
                                and presenting data using Tableau, Power BI, and Excel. Created presentations with 
                                PowerPoint to effectively communicate findings. "
                    link="https://www.hope.ac.uk/" />




            </div>
        </section>
    );
}


export default WorkExperience;