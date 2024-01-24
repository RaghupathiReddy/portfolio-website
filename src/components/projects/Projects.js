import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree, projectFour} from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Pronto woven"
          des="Pronto woven in a platform to develop the e-commerce site and besides just e-commerce, it offers CRM solutions. I have worked on developing CRM from scratch, Implementing multiple user friendly 
          features in Ecommerce, invoice payment and service connect. Integrated multiple third party API's and payment gateways with PCI compliance and maintenance of 200+ active customers using Proto Woven for their business."
          src={projectOne}
          websiteLink="https://www.woven.com.au/"
        />
        <ProjectsCard
          title="Clinithink"
          des="Clinithink is a AI ML based health care project which is intended to parse the unstructured patient records and provide an accurated results to help doctors and insurance companies. I have worked on integrating the 
          CLIX engine to the web application to parse the medical records and display the results to the users. Implemented reusable react components and integrated socket.io to maintain bi directional communicaiton between server and client."
          src={projectTwo}
          websiteLink="https://www.clinithink.com/"
        />
        <ProjectsCard
          title="Odoo CRM"
          des="Odoo is an opensource CRM platform which can be customized to meet the customer needs. Integrated odoo with python to help clinithink manage its clients"
          src={projectThree}
          websiteLink="https://www.odoo.com/app/crm"
        />
        <ProjectsCard
          title="CToC timezone"
          des="Now don't get worried about converting time from server timezone to client timezone and handling formats. CToC is here to handle this complex task for you. It's simple and easy to use the CtoC-timezone."
          src={projectFour}
          websiteLink="https://github.com/GaneshKurcheti/ctoc_timezone"
        />
         <ProjectsCard
          title="Chat Application"
          des="Implemented an secure platform to communicate with frieds and family. The messages sent are encrypted using AES encryption and can only be decrypted at the receivers end. "
        />
        <ProjectsCard
          title="Others"
          des="Proposed the idea of custom dashboard to help business people better understand the jenkins build reports. Implemented custom dashboards in clinithink internal application by using jenkins end points and also implemented in azure dashboards by deploying it in marketplace"
          src={projectFour}
          websiteLink="https://www.clinithink.com/"
        />
      </div>
    </section>
  );
}

export default Projects