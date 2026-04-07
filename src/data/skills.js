export const skillCategories = [
  {
    id: '01',
    category: 'CAD & Design',
    description: 'Parametric 3D modeling, assemblies, and detailed technical drawings for manufactured components.',
    skills: [
      { name: 'SolidWorks', level: 95, note: 'Primary CAD tool — parts, assemblies, drawings' },
      { name: 'Creo Parametric', level: 30, note: 'Currently self-studying' },
      { name: 'nTop', level: 20, note: 'Aerodynamics CAD iteration' },
      { name: 'GD&T, DFM', level: 45, note: 'FSAE design for out-of-house manufacturing'}
    ],
  },
  {
    id: '02',
    category: 'Simulation & Analysis',
    description: 'Computational fluid dynamics and finite element analysis for thermal, structural, and aerodynamic problems.',
    skills: [
      { name: 'Ansys Fluent', level: 82, note: 'CFD — external flow, heat transfer' },
      { name: 'Ansys Mechanical', level: 80, note: 'FEA — static structural, modal, fatigue' },
      { name: 'SolidWorks Thermal', level: 78, note: 'Transient and steady-state thermal analysis & validation' },
      { name: 'nTop', level: 25, note: 'Automated simulation for aerodynamics design iteration'}
    ],
  },
  {
    id: '03',
    category: 'Programming & Data',
    description: 'Scripting, data analysis, and mathematical solvers.',
    skills: [
      { name: 'MATLAB', level: 80, note: 'Data analysis, thermal fluids modeling, scripting' },
      { name: 'Python', level: 72, note: 'Automation, data processing, data analysis and visualization' },
      { name: 'C++', level: 20, note: 'Exposure - self-studying' },
    ],
  },
  {
    id: '04',
    category: 'Manufacturing',
    description: 'Hands-on fabrication, additive processes, and mechatronic system integration.',
    skills: [
      { name: 'LPBF Additive Mfg.', level: 88, note: 'Laser powder bed fusion — RTX internship' },
      { name: '3D Printing / FDM', level: 100, note: '10 years of FDM experience' },
      { name: 'Mechatronics', level: 75, note: 'Sensor integration, actuation, robot design' },
      { name: 'Prototyping', level: 85, note: 'Rapid iteration, physical testing, hardware validation' },
    ],
  },
  {
    id: '05',
    category: 'Engineering Methods',
    description: 'Technical documentation, standards, and systematic engineering practices.',
    skills: [
      { name: 'GD&T / ASME Y14.5', level: 75, note: 'Technical drawings for manufacturing, Quality engineerring with Lockheed Martin ' },
      { name: 'Root Cause Analysis', level: 80, note: 'Aerospace qualification at RTX' },
      { name: 'Technical Documentation', level: 85, note: 'SOP/SW authoring, reports, drawings, specifications' },
      { name: 'Lean / Six Sigma', level: 45, note: 'Exposure — principles & concepts' },
    ],
  },
]

export const tools = [
  'SolidWorks', 'Creo', 'Ansys Fluent', 'Ansys Mechanical',
  'MATLAB', 'Python', 'nTop', 'Materialise Magics',
  'Microsoft Office', 'Git',
]
