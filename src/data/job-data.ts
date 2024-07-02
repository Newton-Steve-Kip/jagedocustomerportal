export const jobData = [
  {
    id: '3416',
    date: '2022-11-10T06:22:01.621Z',
    firstName: 'Newton',
    lastName: 'Steve',
    phone: '0712345678',
    email: 'steve@gmail.com',
    gender: 'Male',
    age: '63',
    location: 'Kome,Homabay',
    inProcess: 25,
    hired: 3,
    category: ['UI/UX', 'Design', 'Figma', 'Adobe', 'Sketch'],
    status: 'Live',
  },
  {
    id: '3443',
    date: '2022-11-10T06:22:01.621Z',
    firstName: 'Sheila',
    lastName: 'Wambua',
    phone: '0712345678',
    email: 'sha@gmail.com',
    gender: 'Female',
    age: '33',
    location: 'Kome,Homabay',
    inProcess: 25,
    hired: 3,
    category: ['UI/UX', 'Design', 'Figma', 'Adobe', 'Sketch'],
    status: 'Closed',
  },
];

export const requisitions = [
  {
    id: '3416',
    date: '2022-11-10T06:22:01.621Z',
    category: 'Fundi',
    subCategory: 'Electrician',
    requestType: 'Emergency',
    description: 'plumbing work',
    location: 'Kome,Homabay',
    status: 'under review',
  },
  {
    id: '3419',
    date: '2022-11-10T06:22:01.621Z',
    category: 'Professional',
    subCategory: 'Engineer',
    requestType: 'Emergency',
    description: 'repair faulty wires',
    location: 'Kome,Homabay',
    status: 'under quotation',
  },
];

export const completeJobs = [
  {
    id: '3416',
    completedDate: '2022-11-10T06:22:01.621Z',
    reqDate: '2022-11-02T06:22:01.621Z',
    specification: 'pedrollo pump',
    description: 'plumbing work',
    fundi: 'Juma,Hamisi',
    review: 'reviewed',
  },
  {
    id: '3417',
    completedDate: '2022-11-10T06:22:01.621Z',
    reqDate: '2022-11-02T06:22:01.621Z',
    specification: 'pedrollo pump',
    description: 'plumbing work',
    fundi: 'Moses,Hamisi',
    review: 'add a review',
  },
];

export const activeJobs = [
  {
    id: '3416',
    date: '2022-11-10T06:22:01.621Z',
    category: 'Fundi',
    subCategory: 'Mason',
    requestType: '2.0',
    description: 'Boundary wall construction',
    location: 'reviewed',
    status: 'ongoing',
  },
  {
    id: '3417',
    date: '2022-11-10T06:22:01.621Z',
    category: 'Fundi',
    subCategory: 'Mason',
    requestType: 'Emergency',
    description: 'Boundary wall construction',
    location: 'reviewed',
    status: 'ongoing',
  },
];
