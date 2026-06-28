export const projects = [
  {
    id: '01',
    slug: 'gas-flow-robot',
    title: 'Automated Gas Flow Robot',
    category: 'RTX — Additive Manufacturing R&D',
    notice: 'Due to export control regulations and preservation of RTX proprietary information, pictures and specific technical details regarding the project are unavailable.',
    description:
      'Solo-designed and manufactured a robot to measure gas flow inside metal additive (LPBF) machines under heavy spatial constraints, integrating custom sensors and actuation devices. Supported aerospace-grade qualification and root-cause analysis across multiple machines. Received an RTX Collaboration Award.',
    tags: ['LPBF', 'Mechatronics', 'SolidWorks', '3D Printing'],
    featured: true,
    highlights: [
      { metric: 'Solo', label: 'End-to-end design & build' },
      { metric: '80+', label: 'Components designed and/or integrated' },
      { metric: 'RTX', label: 'Collaboration Award recipient' },
    ],
    overview: `During my Additive Manufacturing R&D internship at RTX (East Hartford, CT, Summer 2025), I was tasked as a solo engineer to solve a persistent measurement challenge inside laser powder bed fusion (LPBF) machines: accurately characterizing gas flow across the build volume under tight spatial constraints.`,
    sections: [
      {
        heading: 'The Problem',
        body: `Metal LPBF machines rely on precise inert gas flow to sweep combustion byproducts (spatter, condensate) away from the laser path during printing. Inconsistent flow leads to defects, failed builds, and costly qualification failures on aerospace-grade components. Previous solutions were crude and inconsistent procedures yielded irreplicable data.`,
      },
      {
        heading: 'Design & Build',
        body: `I designed and manufactured a custom robot from scratch, integrating multiple sensor types and custom actuation mechanisms within the tight internal geometry of the machine. Over 20 unique 3D-printed components were designed specifically for this system. The design had to be compact enough to deploy inside active machines while rigid enough to produce repeatable, trustworthy measurements. I owned all decisions for every component of the project, including:`,
        bullets: [
          'Structural design',
          'Method(s) of actuation and kinematic coordinate system',
          'Sensor integration',
          'Actuator integration',
          'Software regarding robot programming and data collection',
          'Testing, iteration, and validation',
        ],
      },
      {
        heading: 'Testing & Impact',
        body: `The completed robot was able to collect consistent gas flow data, allowing the team to better understand the flow dynamics within each of their machines. The robot was able to collect over 10,000 data points on a single test run, and the team plans to replicate the robot for other business units. The project earned an RTX Collaboration Award for fast turnaround and high-quality deliverables.`,
      },
    ],
  },
  {
    id: '02',
    slug: 'formula-sae-drivetrain',
    title: 'Formula SAE Drivetrain',
    category: 'Villanova Formula SAE — Drivetrain Lead',
    description:
      'I have owernship of the design, simulation, and validation of various drivetrain elements for our competition vehicle. This includes two sizes of the differential sprocket. Additionally, I performed static load testing to physically validate simulated factors of safety for differential mounting components. ',
    tags: ['SolidWorks FEA', 'Ansys Mechanical', 'CAD', 'GD&T'],
    featured: true,
    highlights: [
      { metric: '9', label: 'Sprocket Iterations' },
      { metric: '35%', label: 'Sprocket weight reduction' },
      { metric: '450g', label: 'Total system weight reduction' },
    ],
    overview: `As a drivetrain member for Villanova Formula SAE, I have ownership of the design, manufacturing, and implementation of various drivetrain elements for our competition car.`,
    galleryFeatured: '/images/Drivetrain/RENDEREXPLODE.png',
    closingImage: { src: '/images/Drivetrain/RENDEREXPLODE.png', caption: 'Exploded view of the drivetrain assembly. Created in SolidWorks Visualize.' },
    sections: [
      {
        heading: 'Design Goals',
        body: `The goal of changing the final drive ratio this year was to maximize tractive force while keeping the engine within its power band across our typical operating range. Although lap-time simulations predicted highest performance for a 44 tooth sprocket, further analysis showed that a 44 tooth sprocket delivered a torque that broke traction with the ground. Choosing 40 teeth for this year's sprocket reduced torque multiplication to match the traction limit and raised the RPM range relative to wheel speed across typical endurance speeds. In turn, the engine was closer to peak output power.`,
        images: [
          { src: '/images/Drivetrain/optimumlap2.jpg' },
          { src: '/images/Drivetrain/44T dummy.jpg' },
        ],
      },
      {
        heading: 'Constraints',
        body: `A larger sprocket combined with the smaller, confined chassis created significant space issues. The larger sprocket also experiences a larger moment about the center, requiring critical factor of safety considerations. Above is an image of a dummy sprocket, sized to 44 Teeth, to determine if it would fit in the chassis and if it would create too sharp an angle for the halfshaft tripod bearings.`,
      },
      {
        heading: 'Original Design',
        body: `The original design approach used patterned slots throughout the sprocket for weight reduction. Early iterations showed strong weight savings and good performance, but the designs were ultimately rejected due to DFM concerns.`,
        images: [
          { src: '/images/Drivetrain/iter1.png' },
          { src: '/images/Drivetrain/iter2.png' },
          { src: '/images/Drivetrain/iter3.png' },
          { src: '/images/Drivetrain/iter4.png' },
        ],
      },
      {
        heading: 'First Iterations & Analysis',
        body: `Initial iterations performed well with strong weight savings, but the same manufacturability concerns made them infeasible. The complexity of the pattern geometry would create challenges in the machining process.`,
      },
      {
        heading: 'Final Design',
        body: `The final iterations incorporated feedback from manufacturing constraints, resulting in a simple, producible geometry. The mesh contained roughly 46,000 elements. Using both SolidWorks FEA and Ansys Mechanical, I determined a factor of safety of 2.56 at 393 grams. A zero-based fatigue life analysis was performed with a 1.25 scale factor applied to account for shock loading. The final design uses easy-to-manufacture cuts from simple radii and tangent lines connecting them. The resulting sprocket achieved a 35% reduction from the blank sprocket weight of 605 grams.This design is only 30g heavier than the smaller 36T sprocket despite having a significantly larger radius. The 40T sprocket was then tested over 200 miles of track driving, validating the design under real conditions.`,
        images: [
          { src: '/images/Drivetrain/mesh.jpg' },
          { src: '/images/Drivetrain/sim 256.jpg' },
          { src: '/images/Drivetrain/iter5.jpg' },
          { src: '/images/Drivetrain/zero-based.jpg' },
          { src: '/images/Drivetrain/fatigue.jpg' },
          { src: '/images/Drivetrain/physicalbuild.jpeg' },
        ],
      },
      {
        heading: 'Turnbuckle Mechanical Testing',
        body: `FEA simulations of the turnbuckle assembly showed unreasonably low factors of safety due to idealized thread geometry creating severe stress concentrations. I had an extra set of turnbuckles ordered, so I decided to perform mechanical testing to determine the true factor of safety. Testing was performed with an Instron mechanical testing machine set at 1mm displacement per minute, pressing the turnbuckle until buckling was detected. The aluminum turnbuckle showed a factor of safety of 3.03 on the critical sprocket-side mount and 16.25 on the exhaust side. Given the criticality of the sprocket-side turnbuckle, I selected titanium for the turnbuckle shaft to achieve higher reliability while accounting for buckling support present during testing.`,
        images: [
          { src: '/images/Drivetrain/turnbuck.jpeg' },
          { src: '/images/Drivetrain/turnbuckle.jpeg' },
          { src: '/images/Drivetrain/chart.jpeg' },
        ],
      },
    ],
  },
  {
    id: '03',
    slug: 'cfd-bike-windshield',
    title: 'CFD Bike Windshield',
    category: 'Heat Transfer & CFD Simulation',
    description:
      'Used ANSYS Fluent to simulate heat transfer from hands during cold-weather cycling and optimized a custom windshield geometry that increased hand temperature by 11°C. Validated results with SolidWorks thermal simulations and real-world physical testing.',
    tags: ['Ansys Fluent', 'CFD', 'SolidWorks Thermal'],
    featured: true,
    highlights: [
      { metric: '+11°C', label: 'Steady-State Hand temperature increase' },
      { metric: 'WINNER', label: 'ME3950 Final Project "Best Computational Analysis" award' },
      { metric: '3-way', label: 'CFD + thermal + real-world validation' },
    ],
    overview: `This project (November 2025) applied computational fluid dynamics and heat transfer simulation to a practical problem: cold hands during winter cycling. Starting from first principles, I built a full CFD model of airflow and convective heat loss around a cyclist's hands, then designed and validated a windshield to mitigate it.`,
    gallery: [
      { src: '/images/CFDWindshield/flow10.png', caption: 'Flow visualization of 10mph biking conditions.' },
      { src: '/images/CFDWindshield/flow20.png', caption: 'Flow visualization of 20mph biking conditions.' },
      { src: '/images/CFDWindshield/heat10.png', caption: 'Steady-state thermal simulation of 10mph biking conditions.' },
      { src: '/images/CFDWindshield/heat20.png', caption: 'Steady-state thermal simulation of 20mph biking conditions.' },
    ],
    sections: [
      {
        heading: 'CFD Modeling with ANSYS Fluent',
        body: `I constructed a 3D model of the hand-handlebar-airflow geometry and ran steady-state conjugate heat transfer simulations in ANSYS Fluent. The baseline model established convective heat loss as a function of cycling speed and ambient temperature, identifying the most exposed regions of the hand to cold airflow.`,
      },
      {
        heading: 'Windshield Optimization',
        body: `Using the CFD results as a baseline, I iterated through windshield geometries designed to redirect airflow away from the hands. The final geometry achieved an 11°C increase in simulated hand temperature by creating a sheltered low-velocity region around the grip area — a meaningful improvement for cold-weather usability.`,
      },
      {
        heading: 'Validation',
        body: `Results were cross-validated using SolidWorks thermal simulations to measure hand warmth under the modeled boundary conditions. Physical prototypes were then fabricated and tested in real cycling conditions, confirming both the thermal improvement and the structural effectiveness of the windshield geometry.`,
      },
    ],
  },
  {
    id: '05',
    slug: 'gpu-rack-cooling',
    title: 'GPU Rack Cooling System',
    category: 'Thermal Systems — CFD & Modeling',
    description:
      'Modeled the thermal and fluid behavior of a high-density GPU rack cooling system. Analyzed fluid distribution, heat dissipation pathways, and cooling efficiency across multiple rack configurations.',
    tags: ['Heat Transfer', 'MATLAB'],
    featured: true,
    highlights: [
      { metric: 'End-to-End', label: 'thermal and hydraulic solver developed' },
      { metric: 'Parametric Optimization', label: 'between cooling capacity and loop impedance' },
      { metric: '18-server', label: 'NVIDIA GB200 NVL72 configuration' },
    ],
    overview: `This project involved the development of a thermal and hydraulic model for an NVIDIA GB200 NVL72 GPU liquid cooling system, with the solver incorporating everything from the custom cold plates to the CDU heat exchanger design.`,
    gallery: [
      { src: '/images/Cooling Rack/optigraph.jpg', caption: 'Visualized optimization results of lid temperature based on pin count and pin thickness within a size constraint. ' },
      { src: '/images/Cooling Rack/optimize.jpg',  caption: 'Carpet plot outlining the pressure loss given a plate gap and plate count for a brazed-plate heat exchanger.' },
      { src: '/images/Cooling Rack/percent.jpg',   caption: 'Percentage of total pressure drop by component for an 8-GPU server loop.' },
    ],
    sections: [
      {
        heading: 'Problem & Motivation',
        body: `In today's ever-growing demand for high performance computing, thermal engineers face the challenge of efficiently cooling high-power electronic components within tight spatial constraints and at a low long-term cost. This project aimed to model the thermal and fluid behavior of a high-density GPU rack cooling system, analyzing flow distribution, heat dissipation, and hydraulic penalties across multiple rack configurations to inform design decisions for optimal and efficient performance.`,
      },
      {
        heading: 'Modeling Approach',
        body: `The MATLAB solver began at the cold plate level, where cold plates were optimized to maintain a maximum GPU lid temperature at a minimum pressure loss. The model then scaled to the server level, where piping configurations were evaluated based on flow distribution and hydraulic impedance. All components were modeled with realistic loss coefficients derived from empirical data. Finally, the model scaled to the rack level, where the intake and exhaust manifolds were designed alongside a CDU (coolant distribution unit) and buffer tank to complete the loop.`,
      },
      {
        heading: 'Results & Findings',
        body: `As Dr. Alfonso Ortega would say during lecture, there's "no free lunch" in thermal systems design. Improving thermal performance is always accompanied by a hydraulic penalty, and this project quantified that tradeoff across hundreds of design iterations. The final design achieved the target GPU lid temperatures while maintaining feasibility in terms of pump requirements and overall system cost, including a full bill of materials and considerations for facility water chilling costs.`,
      },
    ],
  },
  {
    id: '06',
    slug: 'fiber-composites',
    title: 'Fiber Composites Manufacturing',
    category: 'Manufacturing — Composite Structures',
    description:
      'Design and fabrication of fiber composite structures, exploring layup techniques, cure processes, and structural performance.',
    tags: ['Composites', 'Manufacturing', 'Materials'],
    featured: true,
    highlights: [
      { metric: '20+', label: 'CF layups completed' },
      { metric: 'end-to-end', label: 'ownership from setup to post-processing' },
      { metric: '3', label: 'unique molding techniques explored'},
    ],
    gallery: [
      { src: '/images/Fiber-Composites/IMG_5996.jpg', caption: 'Uncut blue carbon sidepod with surface resin finish.' },
      { src: '/images/Fiber-Composites/IMG_6007.jpg', caption: 'Curved front-wing airfoil vacuum layup.' },
      { src: '/images/Fiber-Composites/IMG_6008.jpg', caption: 'Another curved front-wing airfoil vacuum layup.' },
      { src: '/images/Fiber-Composites/IMG_6014.jpg', caption: 'Photo of me processing a blue carbon sidepod.' },
    ],
    overview: `My work with fiber composites manufacturing spans the entire setup and fabrication processes. Currently, in preparation for my aerodynamics capstone project, I'm learning advanced mold manufacturing techniques, like milling MDF molds and 3D printing complex mold geometries.`,
    sections: [
      {
        heading: 'Materials & Layup',
        body: `Fiber ply count, weave orientation, resin system, and layup technique were determined based on manufacturing constraints, such as mold geometry, mass budget constraints, and available tools.`,
      },
      {
        heading: 'Manufacturing Process',
        body: `As part of the development of the VU17 aerodynamics package, the composite elements were made using both resin lamination and vacuum infusion techniques under vacuum. Process parameters include resin recipe, cure time, vacuum integrity, and release agents (PVA, caranuba wax).`,
      },
      {
        heading: 'Post-Processing and Evaluation',
        body: `I've performed various post processing techniques on finished composite parts, such as trimming, sanding, drilling, and coating. Structural performance of each element was validated during the physical testing of the package, where the package experienced testing hours on VU17.`,
      },
    ],
  },
  {
    id: '04',
    slug: 'fsae-aerodynamics',
    title: 'FSAE Aerodynamics',
    category: 'Villanova Formula SAE — Aero Package',
    description:
      'As a member of the Formula SAE senior capstone design team, I am spearheading the integration of nTop, a CAD-CFD platform, into the aerodynamics design process.',
    tags: ['Ansys Fluent', 'CFD', 'External Aero'],
    featured: true,
    highlights: [
      { metric: 'CFD', label: 'Full-vehicle external aero simulation' },
      { metric: 'VU17', label: 'Villanova FSAE competition vehicle' },
    ],
    gallery: [
      { src: '/images/Aerodynamics/fullcarCFD.jpg',  caption: 'Particle pathlines of full-vehicle external aero CFD.' },
      { src: '/images/Aerodynamics/fullcarCFD2.jpg', caption: 'Velocity vectors of full-vehicle external aero CFD.' },
    ],
    overview: `As part of the Villanova Formula SAE team, I performed full-vehicle external aerodynamics analysis using ANSYS Fluent on the VU17 competition car. The goal was to simulate real on-track airflow conditions and evaluate the effectiveness of the aero package — quantifying downforce and drag contributions across the car's geometry to guide design decisions.`,
    sections: [
      {
        heading: 'CFD Setup & Meshing',
        body: `A half-car geometry was meshed within Ansys Fluent meshing to create a watertight mesh. Boundary conditions were set to replicate on-track conditions at 50 mph, with the K-Omega SST turbulence model used to capture flow and wake behavior. Results were cross-checked against Siemens Star-CCM simulations to ensure consistency.`,
      },
      {
        heading: 'Aerodynamic Performance Analysis',
        body: `Although I did not directly design the aerodynamics package for VU17, my simulations helped inform design decisions by quantifying downforce and drag contributions from the aero assembly.`,
      },
      {
        heading: 'Design Implications',
        body: `CFD results were used to evaluate trade-offs in the aero package configuration — identifying regions where geometry modifications could improve net downforce without proportional drag increase. Findings fed directly into the team's design review process, with visualizations used to communicate aerodynamic behavior to the broader engineering group.`,
      },
    ],
  },
]
