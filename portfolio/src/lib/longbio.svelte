<script>
    import Box from "../lib/Box.svelte";
	import Longbio from "../assets/static/longbio.svelte"
import { text } from "svelte/internal";
    let name = "Long Bio"
</script>


<div class = BioBox>
	<h1> Biography</h1>
    <Box>
		<Longbio biotext/>
    </Box>
</div>

<Box>
	<h1> Skills Overview</h1>
	<ol>
		<Box>
			<li>Toolkits: CUDA, AWS Cloud, Sveltekit </li>
			<li>Programming Languages: Python, C, C++, C#, R, JavaScript, Rust, HTML</li> 
			<li>Quantitative Research Topics: 3D Object Detection and Avoidance, Statistical Classification and Modeling, Weather Patterning and 3D Rendering, Color Based Kenetic Model Detection, 3D to 2D Movement Computer Tracing, Quantitative Stock Analysis, NFL Projection Performance Ratings </li> 
			<li>Libraries and Services: Catkin, SOLiDWORKS, Azure Tools, SciKit, Pandas, NumPy, OpenCL, OpenGL, Quandl, BeautifulSoup4, Docker, D3, React, Svelte, Microsoft DevOps  </li> 
			<li>Developer Environments: Windows 7/8/10, Ubuntu: 16.04/18.02/20.04, Clemson University's Palmetto Cluster (PSB), MacOs 10.12/12.1 </li> 
			<li>Communication: English (native)</li>	
		</Box>
		<h1> Technical Experience:</h1>
		<Box>
				<li> Software Engineer FastFetch LLC</li> 
				<li> Student Consulting Lead CCIT </li> 
				<li> Undergraduate Research and Software Developer - Supercomputing Software Developer Clemson Univesity Dept. Electrical Engineering</li> 
				<li> Student Software Consultant CCIT </li> 
				<li> Undergraduate Research Assistant - M.A.V Openpose Developer Clemson Univesity Dept. Mechanical Engineering </li>
		</Box>
		<h1> Education:</h1>
		<Box>
				<ol>
					<li>Clemson University, Bachelors of Science in Computer Science: Minor in Engineering</li>
					<li>White Knoll Highschool, High School Diploma: Ephasis in Engineering Design</li>	  
				</ol>
		</Box>
		<h1> Awards and Distinctions</h1>
		<Box>
			<ol>
				<li>IEEE Student Member (2021)</li>
				<li>CUHackIT Hack-a-Thon: Machine Learning in Daily Life Award (2021)</li> 
				<li> Clemson ACM Student Chapter Member (2019)</li>
				<li>Clemson University M.A.V Creative Inquiry COVID Solutions Showcase Award: Technology (2020)</li>
				<li>SCGSSM Accelerate Engineering Award (2018)</li>
				<li>Eagle Scout Award (2014)</li>	  
			</ol>
		</Box>
	
	</ol>
</Box>


<!-- !TODO Stylize -->
<style>
  	.BioBox {
		width: 100%;
		border: 4px solid #aaa;
		border-radius: 2px;
		box-shadow: 2px 2px 8px rgba(0,0,0,0.1);
		padding: 3%;
		margin: 2em 0 3em 0;
	}
</style>