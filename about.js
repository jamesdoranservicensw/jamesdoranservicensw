import './style.css';

function AboutUs() {
    return (

    <body> 
   
    
   <div className="info-container"> 
       
            <h1>About us.</h1>
            <h2>My Community Project.</h2>

            <p>My Community Project is all about local ideas, local projects and local decisions. </p>
        
            <p>The NSW Government is investing $24.6 million in 248 projects across NSW to help improve the 
                wellbeing of the people and communities that live there. </p>
            
            <p>My Community Project was the first community initiative funded by the 
                <a target="_blank" rel="noreferrer" href="https://www.budget.nsw.gov.au/nsw-generations-fund"> NSW Generations Fund</a>.
                The fund helps keep the state’s debt at a sustainable level, while sharing the benefits of 
                its returns with the people of NSW by funding community projects.It provided NSW residents 
                with an opportunity to propose and vote for new projects in their local area.</p>

            <p>The Government is reviewing options for future programs to be supported by the 
                NSW Generations Fund. People submitted great ideas to benefit local communities and 61,437 people voted for 
                their favourite local projects.</p>

            <p>Between $20,000 and $200,000 has been allocated to each successful project to make 
                the community more liveable, cultural, accessible, safe, revitalised and healthy. </p>

            <p>My Community Project’s successful projects were announced in September 2019 and can be 
                viewed on the <a target="_blank" rel="noreferrer" href="https://mycommunityproject.service.nsw.gov.au/projects">My Community Project</a> website.</p>


        
      
        <section class ="display-photo" >
          {/* <img src="./src/images/image1.jpg" alt="Project" height="450px" width="500px" > </img> */}
        </section>



    </div>   
<div class="info-container">  
<h2>Successful Projects</h2>

<p>The NSW Government is investing $24.7 million in projects that will help improve the wellbeing of people 
    and communities across NSW.The program received a great response with 61,437 people voting for their 
    favourite projects. Congratulations to the 248 projects who received support from their community for funding. 
</p>
</div> 

<h2>Featured Projects</h2>
    
<div class="row">
    <div class="column">
    <div class="project" onclick="expand(this)">
        <div class="project__banner" ></div>
        <div>
            <div class="project__pic">
                {/*<img src="images/snsw-em.png" alt="SNSW Emblem"> </img> */}
            </div>
            <div class="project__info">
                <span class="project__info-display">Spray and Play</span>
                <span class="project__info-location">@ Scone, NSW</span>
                
            </div>
        </div>
        <div class="project__data">
            <p>To install a spray pad for children to enjoy and get wet during the very hot summer months.</p>
            <span class="project__data-cost">
                <span class="project__data-cost">$121,220</span>
                <span class="project__data-cost-label">Cost</span> 
            </span>
            <span class="project__data-sponsor">
                <span class="project__data-sponsor">Scone Neighbourhood Resource Centre</span>
                <span class="project__data-sponsor-label">Sponsor</span>
            </span>
            <span class="project__data-status">
                <span class="project__data-status">Completed</span>
                <span class="project__data-status-label">Status</span>
            </span>
            <span class="project__data-photo">
                {/* <img src="images/project1.jpg" alt="Picture of Spray and Play"> </img> */}
            </span>
        </div>
    </div>
</div>

    <div class="column">
    <div class="project" onclick="expand(this)">
        <div class="project__banner"> </div>
        {/* <div class="project__banner" style={"background-color: #e2173d;"}></div> */}
        <div>
            <div class="project__pic">
                {/* <img src="images/snsw-em.png" alt="SNSW Emblem"> </img> */}
            </div>
            <div class="project__info">
                <span class="project__info-display">Fun on the Farm</span>
                <span class="project__info-location">@ Wollongong, NSW</span>
            </div>
        </div>
        <div class="project__data">
            <p>An educational play area and hands-on activities for children to connect with plants, animals and where food comes from.</p>
            <span class="project__data-cost">
                <span class="project__data-cost">$90,891</span>
                <span class="project__data-cost-label">Cost</span> 
            </span>
            <span class="project__data-sponsor">
                <span class="project__data-sponsor">Green Connect Illawarra</span> 
                <span class="project__data-sponsor-label">Sponsor</span> 
            </span>
            <span class="project__data-status">
                <span class="project__data-status">In Progress</span> 
                <span class="project__data-status">Status</span> 
            </span>
            <span class="project__data-photo">
                {/* <img src="images/project2.jpg" alt="Fun on the Farm" width="450" height="250"> </img> */}
            </span>
        </div>
    </div>
    </div>

    <div class="column">
    <div class="project" onclick="expand(this)">
        <div class="project__banner"></div>
        <div>
            <div class="project__pic">
                {/* <img src="images/snsw-em.png" alt="Rescue vessel for Marine Rescue Broken Bay"> </img> */}
            </div>
            <div class="project__info">
                <span class="project__info-display">Rescue vessel for Marine Rescue</span>
                <span class="project__info-location">@ Broken Bay, NSW</span>
            </div>
        </div>
        <div class="project__data">
            <p>A new, world-class rescue boat to enable Marine Rescue Broken Bay to save lives on the water.</p>
            <span class="project__data-cost">
                <span class="project__data-cost">$200,000</span>
                <span class="project__data-cost-label">Cost</span>
            </span>
            <span class="project__data-sponsor">
                <span class="project__data-sponsor">Marine Rescue Broken Bay</span>
                <span class="project__data-sponsor-label">Sponsor</span>
            </span>
            <span class="project__data-status">
                <span class="project__data-status">In Progress</span>
                <span class="project__data-status">Status</span>
            </span>
            <span class="project__data-photo"> 
               {/* <img src="images/project3.jpg" alt="Picture of Spray and Play" width="450" height="250"> </img> */}
            </span>
        </div>
    </div>
    </div>

    <div class="column">
    <div class="project" onclick="expand(this)">
        <div class="project__banner"> </div>
        <div>
            <div class="project__pic">
                {/* <img src="images/snsw-em.png"alt="SNSW Emblem"> </img> */}
            </div>
            <div class="project__info">
                <span class="project__info-display">Our Kitchen, Our Stories!</span>
                <span class="project__info-location">@ Cabramatta, NSW</span>
            </div>
        </div>
        <div class="project__data">
            <p>The Project, by teaching newly-arrived Migrants and Refugees active and healthy lifestyles, reconnects them to new family and community.</p>
            <span class="project__data-cost">
                <span class="project__data-cost">$27,819</span>
                <span class="project__data-cost-label">Cost</span>
            </span>
            <span class="project__data-sponsor">
                <span class="project__data-sponsor">Vietnamese Community in Australia NSW Chapter Inc.</span>
                <span class="project__data-sponsor-label">Sponsor</span>
            </span>
            <span class="project__data-status">
                <span class="project__data-status">In Progress</span>
                <span class="project__data-status">Status</span>
            </span>
            <span class="project__data-photo">
                {/* <img src="images/project4.jpg" alt="Our Kitchen, Our Stories!" width="450" height="250"> </img> */}
            </span>
        </div>
    </div>
    </div>

    <div class="column">
    <div class="project" onclick="expand(this)">
        <div class="project__banner" ></div>
        <div>
            <div class="project__pic">
                {/* <img src="images/snsw-em.png" alt="SNSW Emblem"> </img> */}
            </div>
            <div class="project__info">
                <span class="project__info-display">Child, Youth Play and Fitness Areas</span>
                <span class="project__info-location">@ Macquarie Links, NSW</span>
            </div>
        </div>
        <div class="project__data">
            <p>Provide play and fitness equipment at several locations around the suburb, where none currently exist.</p>
            <span class="project__data-cost">
                <span class="project__data-cost">$178,750</span>
                <span class="project__data-cost-label">Cost</span>
            </span>
            <span class="project__data-sponsor">
                <span class="project__data-sponsor">Macquarie Links Community Association</span>
                <span class="project__data-sponsor-label">Sponsor</span>
            </span>
            <span class="project__data-status">
                <span class="project__data-status">Completed</span>
                <span class="project__data-status">Status</span>
            </span>
            <span class="project__data-photo">
                {/* <img src="images/project5.jpg" alt="Child, Youth Play and Fitness Areas" width="450" height="250"> </img> */}
            </span>
        </div>
    </div>
    </div>

    <div class="column">
            <div class="project" onclick="expand(this)">
                <div class="project__banner" ></div>
                <div>
                    <div class="project__pic">
                        {/* <img src="images/snsw-em.png" alt="SNSW Emblems"> </img> */}
                    </div>
                    <div class="project__info">
                        <span class="project__info-display">Little Heroes Swim Centre</span>
                        <span class="project__info-location">@ Eastlakes, NSW</span>
                    </div>
                </div>
                <div class="project__data">
                    <p>To install a spray pad for children to enjoy and get wet during the very hot summer months.</p>
                    <span class="project__data-cost">
                        <span class="project__data-cost">$20,000</span>
                        <span class="project__data-cost-label">Cost</span>
                    </span>
                    <span class="project__data-sponsor">
                        <span class="project__data-sponsor">Little Heroes Swim Academy</span>
                        <span class="project__data-sponsor-label">Sponsor</span>
                    </span>
                    <span class="project__data-status">
                        <span class="project__data-status">In Progress</span>
                        <span class="project__data-status">Status</span>
                    </span>
                    <span class="project__data-photo">
                        {/* <img src="images/project6.jpg" alt="Little Heroes Swim Academy" width="450" height="250"> </img> */}
                    </span>
                </div>
            </div>
    </div>
    
    <div class="column">
            <div class="project" onclick="expand(this)">
                <div class="project__banner" ></div>
                <div>
                    <div class="project__pic">
                        {/* <img src="images/snsw-em.png" alt="SNSW Emblem"> </img> */}
                    </div>
                    <div class="project__info">
                        <span class="project__info-display">Oval Lighting Upgrade</span>
                        <span class="project__info-location">@ St Ives Chase, NSW</span>
                    </div>
                </div>
                <div class="project__data">
                    <p>Installation of two additional lighting towers at Warrimoo Oval , St Ives to increase lighting capacity.</p>
                    <span class="project__data-cost">
                        <span class="project__data-cost">$33,000</span>
                        <span class="project__data-cost-label">Cost</span>
                    </span>
                    <span class="project__data-sponsor">
                        <span class="project__data-sponsor">Ku-ring-gai Council</span>
                        <span class="project__data-sponsor-label">Sponsor</span>
                    </span>
                    <span class="project__data-status">
                        <span class="project__data-status">In Progress</span>
                        <span class="project__data-status">Status</span>
                    </span>
                    <span class="project__data-photo">
                        {/* <img src="images/project7.jpg" alt="Oval Lighting Upgrade" width="450" height="250"> </img> */}
                    </span>
                </div>
            </div>
    </div>

    <div class="column">
        <div class="project" onclick="expand(this)">
            <div class="project__banner"> </div>
            <div>
                <div class="project__pic">
                    {/* <img src="images/snsw-em.png" alt="SNSW Emblem"> </img> */}
                </div>
                <div class="project__info">
                    <span class="project__info-display">Install a Skate Park</span>
                    <span class="project__info-location">@ Yenda, NSW</span>
                </div>
            </div>
            <div class="project__data">
                <p>Install a skate park in Yenda to provide the community with a new recreational area that caters for all ages.</p>
                <span class="project__data-cost">
                    <span class="project__data-cost">$200,000</span>
                    <span class="project__data-cost-label">Cost</span>
                </span>
                <span class="project__data-sponsor">
                    <span class="project__data-sponsor">Yenda Public School</span>
                    <span class="project__data-sponsor-label">Sponsor</span>
                </span>
                <span class="project__data-status">
                    <span class="project__data-status">Completed</span>
                    <span class="project__data-status">Status</span>
                </span>
                <span class="project__data-photo">
                    {/* <img src="images/project8.jpg" alt="Skate Park" width="450" height="250"> </img> */}
                </span>
            </div>
        </div>
    </div>

</div>   

    <div class="more-projects">
      <h1>Browse More Projects</h1>
     <button class="browse"> <a target="_blank" rel="noreferrer" href="https://mycommunityproject.service.nsw.gov.au/projects">Browse</a> </button>
    </div>  

    </body>
)
}


export default AboutUs;
