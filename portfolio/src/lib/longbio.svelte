<script>
    import Box from "../lib/Box.svelte";
	let src = "src/assets/static/longbio.txt"
    let name = "Long Bio"
</script>

<div class = BioBox>
    <Box>
		<text> 
			{src} alt = "{name}"
		</text> 
    </Box>
</div>
<p>
	Facination with Engineering and design spans back to early childhood where he would spent time building wooden planes with his father in their garage. 
	Over time, the facination grew to encompass architecture leading eventually to Brandon discovering Minecraft. Shortly after discovering the community, he became enemored with the logical simulator of the game called Redstone. 
	This lead Brandon down the path to discovering electrical engineering at a level that he could never imagine. As his skills and passion continued to grow, he eventually moved deeper into minecraft where he would eventually learn how to program in Lua. 
	From these basic building blocks, Brandon was hooked on programming computers. He signed up for his Middle School's Robotics Team and managed to win several regional competitions before qualifing for the State Championships. 

	Through his time in highschool, Brandon would continue to learn and devleop his skills in Lua and then eventually migrate into C. Once he joined the Highschool Robotics Team, he would then go on to win a handful of programming awards in robotics;
	chiefly the "Highest Complexity of Automous Movement" Award, given out to the team with the most points scored during the Autonomus portion of the Skills Challenge. 
	Following the conclusion of that year's Robotics Team, he was accepted into the South Carolina Govenors School of Science and Mathematics Accelerate Engineering program, where he would go on to take advanced courses to get a head start on college coursework. 
	Brandon then chose to attend Clemson University whom sponsored his coursework at the Govenor's School and elected to major in Computer Science, minoring in Engineering. Though, uncertain at first of his decision, he took the skills he learned on his own and thrived under the guidance of Clemson's top rate faculty and staff. 
	
	
	During his sophomore year, he was asked to join one of Clemson's Undergraduate Research Projects for Micro Arial Vehicles Autonomus Flight. Shortly after joining, the lead research professor requested that Brandon continue the research over the summer and present at the Clemson COVID Solutions Showcase.
	During that presentation, Brandon was awarded the Showcase Award for Technology. Shortly after returning back to campus, he was approached with an opportunity to study more complex topics such as Data Science, Parallel Computing Design, and GPU Programming where he'd work directly with Clemson's Supercomputer Palmetto Cluster. 
	This would lead Brandon to meeting with another Clemson Faculty Researcher who requested that he join their project focusing on Supercomputing and Highly Optimized Programming Methodologies. During his research, he met several former professors who requested he come in for an interview for their company, that he would shortly after, accept the position as a Software Engineer. 
	Brandon would then graduate from Clemson Unviersity and begin working for the company shortly after.
</p>
<ol>
	<slot>
		<h3> Skills:</h3>
		<li>Toolkits: CUDA, AWS Cloud, Sveltekit </li>
		<li>Programming Languages: Python, C, C++, C#, R, JavaScript, Rust, HTML</li> 
		<li>Quantitative Research Topics: 3D Object Detection and Avoidance, Statistical Classification and Modeling, Weather Patterning and 3D Rendering, Color Based Kenetic Model Detection, 3D to 2D Movement Computer Tracing, Quantitative Stock Analysis, NFL Projection Performance Ratings </li> 
		<li>Libraries and Services: Catkin, SOLiDWORKS, Azure Tools, SciKit, Pandas, NumPy, OpenCL, OpenGL, Quandl, BeautifulSoup4, Docker, D3, React, Svelte, Microsoft DevOps  </li> 
		<li>Developer Environments: Windows 7/8/10, Ubuntu: 16.04/18.02/20.04, Clemson University's Palmetto Cluster (PSB), MacOs 10.12/12.1 </li> 
		<li>Communication: English (native)</li>	
	</slot>
	<slot>
		<h3> Technical Experience:</h3>
			<li> Software Engineer FastFetch LLC</li> 
			<li> Student Consulting Lead CCIT </li> 
			<li> Undergraduate Research and Software Developer - Supercomputing Software Developer Clemson Univesity Dept. Electrical Engineering</li> 
			<li> Student Software Consultant CCIT </li> 
			<li> Undergraduate Research Assistant - M.A.V Openpose Developer Clemson Univesity Dept. Mechanical Engineering </li>
	</slot>
	<slot>
		<h3> Education:</h3>
			<ol>
				<li>Clemson University, Bachelors of Science in Computer Science: Minor in Engineering</li>
				<li>White Knoll Highschool, High School Diploma: Ephasis in Engineering Design</li>	  
			</ol>
	</slot>
	<slot>
		<h3> Awards and Distinctions</h3>
		<ol>
			<li>IEEE Student Member (2021)</li>
			<li>CUHackIT Hack-a-Thon: Machine Learning in Daily Life Award (2021)</li> 
			<li> Clemson ACM Student Chapter Member (2019)</li>
			<li>Clemson University M.A.V Creative Inquiry COVID Solutions Showcase Award: Technology (2020)</li>
			<li>SCGSSM Accelerate Engineering Award (2018)</li>
			<li>Eagle Scout Award (2014)</li>	  
		</ol>
	</slot>

</ol>


<!-- !TODO Stylize -->
<style>
  	.BioBox {
		width: 300px;
		border: 1px solid #aaa;
		border-radius: 2px;
		box-shadow: 2px 2px 8px rgba(0,0,0,0.1);
		padding: 1em;
		margin: 0 0 1em 0;
	}
</style>