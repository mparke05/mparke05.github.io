export const projects = [
  {
    id: '01',
    slug: 'gas-flow-robot',
    title: 'Automated Gas Flow Robot',
    category: 'RTX — Additive Manufacturing R&D',
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
        body: `I designed and manufactured a custom robot from scratch, integrating multiple sensor types and custom actuation mechanisms within the tight internal geometry of the machine. Over 20 unique 3D-printed components were designed specifically for this system. The design had to be compact enough to deploy inside active machines while rigid enough to produce repeatable, trustworthy measurements.`,
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
      'I have owernship of the design, simulation, and manufacturing of various drivetrain elements for our competition vehicle. This includes two sizes of the differential sprocket. Additionally, I worked to determine an optimal final drive ratio for the car by using a point-mass laptime simulation and a decision matrix that weighed the projected gained/lost points across different dynamic events. ',
    tags: ['SolidWorks FEA', 'Ansys Mechanical', 'CAD', 'GD&T'],
    featured: true,
    highlights: [
      { metric: '15', label: 'Sprocket Iterations' },
      { metric: '19%', label: 'Diff sprocket weight reduction' },
      { metric: '450g', label: 'Total system weight reduction' },
    ],
    overview: `As Drivetrain member for Villanova Formula SAE, I have ownership of the design, manufacturing, and implementation of various drivetrain elements for our competition vehicle.`,
    galleryFeatured: '/images/Drivetrain/RENDEREXPLODE.png',
    gallery: [
      '/images/Drivetrain/iter1.png',
      '/images/Drivetrain/iter2.png',
      '/images/Drivetrain/iter3.png',
      '/images/Drivetrain/iter4.png',
      '/images/Drivetrain/iter4.5.jpg',
      '/images/Drivetrain/iter5.jpg',
      '/images/Drivetrain/finalrender.png',
      '/images/Drivetrain/finaldrives.jpg',
    ],
    sections: [
      {
        heading: 'Chassis Rocker Optimization',
        body: `Using SolidWorks FEA, I analyzed stress distributions in the force-distributing chassis rocker under realistic load cases. Through iterative topology-informed redesign — removing material from low-stress regions while preserving critical load paths — I achieved a 14% weight reduction without compromising structural integrity.`,
      },
      {
        heading: 'Rear Sprocket Redesign',
        body: `I performed a full FEA study of the drivetrain rear sprocket using both SolidWorks and Ansys Mechanical, mapping stress concentrations under peak torque conditions. The redesigned sprocket geometry reduced mass by 8% while maintaining the required factor of safety, validated against the original loading cases.`,
      },
      {
        heading: 'Technical Documentation',
        body: `All drivetrain components I designed were documented with full technical drawings produced to ASME Y14.5 GD&T standards, ready for external manufacturing. This included tolerance stacks, datum references, and surface finish callouts appropriate for each fabrication method.`,
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
    tags: ['Ansys Fluent', 'CFD', 'SolidWorks Thermal', 'MATLAB'],
    featured: true,
    highlights: [
      { metric: '+11°C', label: 'Steady-State Hand temperature increase' },
      { metric: 'WINNER', label: 'ME3950 Final Project "Best Computational Analysis" award' },
      { metric: '3-way', label: 'CFD + thermal + real-world validation' },
    ],
    overview: `This project (November 2025) applied computational fluid dynamics and heat transfer simulation to a practical problem: cold hands during winter cycling. Starting from first principles, I built a full CFD model of airflow and convective heat loss around a cyclist's hands, then designed and validated a windshield to mitigate it.`,
    gallery: [
      '/images/CFDWindshield/flow10.png',
      '/images/CFDWindshield/flow20.png',
      '/images/CFDWindshield/heat10.png',
      '/images/CFDWindshield/heat20.png',
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
      'Modeled the thermal and fluid behavior of a high-density GPU rack cooling system. Analyzed airflow distribution, heat dissipation pathways, and cooling efficiency across multiple rack configurations.',
    tags: ['CFD', 'SolidWorks Thermal', 'Heat Transfer', 'MATLAB'],
    featured: true,
    highlights: [
      { metric: 'TBD', label: 'impedance reduction at identical flow rate' },
      { metric: 'TBD', label: 'Placeholder metric — eddit in projects.js' },
      { metric: 'TBD', label: 'Placeholder metric — edit in projects.js' },
    ],
    overview: `[Placeholder — edit this in src/data/projects.js] This project focused on modeling the thermal and fluid dynamics of a GPU rack cooling system. Starting from component-level heat loads, a full rack CFD model was constructed to evaluate airflow distribution, identify thermal bottlenecks, and optimize cooling architecture for high-density compute environments.`,
    sections: [
      {
        heading: 'Problem & Motivation',
        body: `[Placeholder — edit this in src/data/projects.js] High-density GPU racks present significant thermal management challenges. Concentrated heat loads, constrained airflow paths, and recirculation zones can lead to hotspots that throttle performance or cause hardware failure. This project aimed to characterize those dynamics through simulation before physical implementation.`,
      },
      {
        heading: 'Modeling Approach',
        body: `[Placeholder — edit this in src/data/projects.js] A full 3D thermal model of the rack was built, incorporating realistic component heat loads, fan curves, and ducting geometry. CFD analysis was performed to map velocity and temperature distributions throughout the enclosure, with particular focus on inlet/outlet conditions and inter-component interference.`,
      },
      {
        heading: 'Results & Findings',
        body: `[Placeholder — edit this in src/data/projects.js] Simulation results identified key recirculation zones and thermal hotspots within the rack. Configuration changes informed by the model produced meaningful improvements in temperature uniformity across the GPU array. Quantitative results and specific outcomes to be filled in here.`,
      },
    ],
  },
  {
    id: '06',
    slug: 'fiber-composites',
    title: 'Fiber Composites Manufacturing',
    category: 'Manufacturing — Composite Structures',
    description:
      'Hands-on design and fabrication of fiber composite structures, exploring layup techniques, cure processes, and structural performance.',
    tags: ['Composites', 'Manufacturing', 'Materials'],
    featured: true,
    highlights: [
      { metric: 'TBD', label: 'Placeholder metric — edit in projects.js' },
      { metric: 'TBD', label: 'Placeholder metric — edit in projects.js' },
      { metric: 'TBD', label: 'Placeholder metric — edit in projects.js' },
    ],
    overview: `[Placeholder — edit this in src/data/projects.js] This project covered the design, manufacturing, and mechanical evaluation of fiber composite structures. Working with woven and unidirectional fiber systems, the work explored how layup schedule, fiber orientation, and cure parameters affect the structural performance of finished laminates.`,
    sections: [
      {
        heading: 'Materials & Layup',
        body: `[Placeholder — edit this in src/data/projects.js] Fiber selection, resin systems, and layup sequence were determined based on structural requirements and manufacturing constraints. Multiple layup schedules were evaluated, with attention to fiber orientation angles and ply counts needed to achieve target stiffness and strength properties.`,
      },
      {
        heading: 'Manufacturing Process',
        body: `[Placeholder — edit this in src/data/projects.js] Parts were fabricated using [wet layup / vacuum infusion / prepreg — edit as appropriate] and cured under controlled temperature and pressure conditions. Process parameters including cure cycle, vacuum integrity, and consolidation pressure were monitored throughout to ensure consistent laminate quality.`,
      },
      {
        heading: 'Testing & Analysis',
        body: `[Placeholder — edit this in src/data/projects.js] Finished specimens were evaluated through mechanical testing to characterize stiffness, strength, and failure modes. Results were compared against classical laminate theory predictions to assess the accuracy of the analytical models and the consistency of the manufacturing process.`,
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
    tags: ['Ansys Fluent', 'CFD', 'SolidWorks', 'External Aero'],
    featured: true,
    highlights: [
      { metric: 'CFD', label: 'Full-vehicle external aero simulation' },
      { metric: 'L/D', label: 'Lift-to-drag ratio optimization' },
      { metric: 'VU17', label: 'Villanova FSAE competition vehicle' },
    ],
    overview: `As part of the Villanova Formula SAE team, I performed full-vehicle external aerodynamics analysis using ANSYS Fluent on the VU17 competition car. The goal was to simulate real on-track airflow conditions and evaluate the effectiveness of the aero package — quantifying downforce and drag contributions across the car's geometry to guide design decisions.`,
    sections: [
      {
        heading: 'CFD Setup & Meshing',
        body: `A half-car geometry was meshed within Ansys Fluent meshing to create a watertight mesh. Boundary conditions were set to replicate on-track conditions at 50 mph, with the K-Omega SST turbulence model used to capture flow separation and wake behavior. Results were cross-validated against Siemens Star-CCM simulations to ensure consistency.`,
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
