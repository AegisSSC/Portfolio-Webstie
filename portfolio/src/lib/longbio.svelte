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

<ol>
	<h3> Skills</h3>
		<li>Toolkits: </li> <p> CUDA, AWS Cloud, Sveltekit</p>
		<li>Programming Languages: </li>  <p> Python, C, C++, C#, R, JavaScript, Rust, HTML</p>
		<li>Quantitative Research Topics: </li> <p> 3D Object Detection and Avoidance, Statistical Classification and Modeling, Weather Patterning and 3D Rendering, Color Based Kenetic Model Detection, 3D to 2D Movement Computer Tracing</p>
		<li>Libraries and Services: </li> <p> Catkin, SOLiDWORKS, Azure Tools, SciKit, Pandas, NumPy, OpenCL, OpenGL, Quandl, BeautifulSoup4, Docker, D3, React, Svelte, Microsoft DevOps  </p>
		<li>Developer Environments: </li> <p> Windows 7/8/10, Ubuntu: 16.04/18.02/20.04, Clemson University's Palmetto Cluster (PSB), MacOs 10.12/12.1</p> 
		<li>Communication: </li>	<p> English (native)</p>
	<h3> Technical Experience</h3>
		<li> Software Engineer</li> <p> FastFetch LLC</p>
		<li> Student Consulting Lead</li> <p> CCIT</p>
		<li> Undergraduate Research and Software Developer - Supercomputing Software Developer </li> <p>Clemson Univesity Dept. Electrical Engineering</p>
		<li> Student Software Consultant</li> <p> CCIT</p>
		<li> Undergraduate Research Assistant - M.A.V Openpose Developer </li> <p>Clemson Univesity Dept. Mechanical Engineering</p>
		
		<h3> Education</h3>
		<ol>
			<li>Clemson University, Bachelors of Science in Computer Science: Minor in Engineering</li>
			<li>White Knoll Highschool, High School Diploma: Ephasis in Engineering Design</li>	  
		</ol>
	<h3> Awards and Distinctions</h3>
	<ol>
		<li>SCGSSM Accelerate Engineering Award (2018)</li>
		<li>Eagle Scout Award (2014)</li>	  
	</ol>

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