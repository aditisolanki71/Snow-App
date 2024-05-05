import Avatars from '../../src/components/Avatar/Avatars';

import {
  Notification1,
  Notification2,
  Notification4,
  Activities1,
  Activities2,
  Activities3,
  Activities4,
  Activities5,
  Contacts1,
  Contacts2,
  Contacts3,
  Contacts4,
  Contacts5,
  CorporateIcon,
  ListChecksIcon,
  BatteryChargingIcon,
  ProjectsIcon,
  CurrencyCircleIcon,
} from '../config/Icons';

import {
  MyProjectsCard1,
  MyProjectsCard2,
  MyProjectsCard3,
  MyProjectsCard4,
  MyProjectsCard5,
  MyProjectsCard6,
  MyProjectsCard7,
  MyProjectsCard8,
  MyProjectsCard9,
  MyProjectsCard10,
  MyProjectsCard11,
  MyProjectsCard12,
  MyProjectAvatar1,
  MyProjectAvatar2,
  MyProjectAvatar3,
  MyProjectAvatar4,
  MyProjectAvatar5,
  MyProjectAvatar6,
  MyProjectAvatar8,
  MyProjectAvatar9,
  MyProjectAvatar10,
  MyProjectAvatar11,
  MyProjectAvatar12,
} from '../config/images';

export const notificationsData = [
  {
    icon: <Notification1 />,
    text: 'You have a bug that needs to...',
  },
  {
    icon: <Notification2 />,
    text: 'New user registered',
  },
  {
    icon: <Notification1 />,
    text: 'You have a bug that needs to...',
  },
  {
    icon: <Notification4 />,
    text: 'Andi Lane subscribed to you',
  },
];

export const activitiesData = [
  {
    avatar: <Activities1 />,
    text: 'Edited the details of Project X',
  },
  {
    avatar: <Activities2 />,
    text: 'Released a new version',
  },
  {
    avatar: <Activities3 />,
    text: 'Submitted a bug',
  },
  {
    avatar: <Activities4 />,
    text: 'Modified A data in Page X',
  },
  {
    avatar: <Activities5 />,
    text: 'Deleted a page in Project X',
  },
];

export const contactsData = [
  {
    id: 1,
    icon: <Contacts1 />,
    text: 'Natali Craig',
  },
  {
    id: 2,
    icon: <Contacts2 />,
    text: 'Drew Cano',
  },
  {
    id: 3,
    icon: <Contacts3 />,
    text: 'Orlando Diggs',
  },
  {
    id: 4,
    icon: <Contacts4 />,
    text: 'Andi Lane',
  },
  {
    id: 5,
    icon: <Contacts5 />,
    text: 'Kate Morrison',
  },
  {
    id: 6,
    icon: <Contacts5 />,
    text: 'Koray Okumus',
  },
];

export const projectTasksColumns = [
  {
    title: 'Title',
    dataIndex: 'title',
    key: 'title',
    // render: (text) => <a>{text}</a>,
  },
  {
    title: 'Assigned to',
    dataIndex: 'assignedTo',
    key: 'assignedTo',
    render: (_, { assignedTo }) => (
      <div className="delivered-meals">
        <div className="delivered-imgs">
          {assignedTo.map(() => {
            return <Avatars size={40} img={<Activities1 />} />;
          })}
        </div>
      </div>
    ),
  },
  {
    title: 'Time Spend',
    dataIndex: 'timeSpend',
    key: 'timeSpend',
  },
  {
    title: 'Status',
    key: 'status',
    dataIndex: 'status',
    render: (text) => (
      <div className="temp" style={{ display: 'flex' }}>
        <div className="dot" />
        {text}
      </div>
    ),
  },
];

export const projectTasksData = [
  {
    key: '1',
    title: 'Coffee detail page',
    assignedTo: [1],
    timeSpend: '3hr 20min',
    status: 'In Progress',
  },
  {
    key: '2',
    title: 'JDrinking bottle graphics',
    assignedTo: [1, 2],
    timeSpend: '12hr 21min',
    status: 'Completed',
  },
  {
    key: '3',
    title: 'App design and development',
    assignedTo: [1, 2, 3],
    timeSpend: '78hr 5min',
    status: 'Pending',
  },
  {
    key: '4',
    title: 'Poster illustation design',
    assignedTo: [1],
    timeSpend: '26hr 58min',
    status: 'Approved',
  },
  {
    key: '5',
    title: 'App UI design',
    assignedTo: [1],
    timeSpend: '17hr 22min',
    status: 'Rejected',
  },
];

export const projectDashboardData = [
  {
    text: 'Total Projects',
    number: '29',
    color: '#E3F5FF',
    icon: <ProjectsIcon />,
  },
  {
    text: 'Total Tasks',
    number: '715',
    color: '#E5ECF6',
    icon: <ListChecksIcon />,
  },
  {
    text: 'Members',
    number: '31',
    color: '#E3F5FF',
    icon: <CorporateIcon />,
  },
  {
    text: 'Productivity',
    number: '93.8%',
    color: '#E5ECF6',
    icon: <BatteryChargingIcon />,
    isProductivity: true,
  },
];

export const myProjectData = [
  {
    text: 'Current Projects',
    number: '237',
    color: '#E3F5FF',
    icon: <ProjectsIcon />,
  },
  {
    text: 'Project Finance',
    number: '$3290',
    color: '#E3F5FF',
    icon: <CurrencyCircleIcon />,
  },
  {
    text: 'Our Clients',
    number: '49',
    color: '#E3F5FF',
    icon: <CorporateIcon />,
  },
];

export const MyProjectsCards = [
  {
    id: '1',
    projectName: 'Poster illustation design',
    cardImg: MyProjectsCard1,
    projectDueDate: 'Due Date: Nov 10, 2022',
    avatarImg: MyProjectAvatar1,
    status: 'In Progress',
    statusPercent: '75',
    statusColor: '#95A4FC',
    totalTask: '13 / 49',
  },
  {
    id: '2',
    projectName: 'Coffee detail page - Main Page',
    cardImg: MyProjectsCard2,
    projectDueDate: 'Due Date: Jun 20, 2022',
    avatarImg: MyProjectAvatar2,
    status: 'Completed',
    statusPercent: '100',
    statusColor: '#A1E3CB',
    totalTask: '56 / 56',
  },
  {
    id: '3',
    projectName: 'Drinking bottle graphics',
    cardImg: MyProjectsCard3,
    projectDueDate: 'Due Date: Nov 10, 2022',
    avatarImg: MyProjectAvatar3,
    status: 'Rejected',
    statusPercent: '45',
    statusColor: 'rgba(0, 0, 0, 0.40)',
    totalTask: '16 / 65',
  },
  {
    id: '4',
    projectName: 'Company logo design',
    cardImg: MyProjectsCard4,
    projectDueDate: 'Due Date: Feb 21, 2022',
    avatarImg: MyProjectAvatar4,
    status: 'Completed',
    statusPercent: '100',
    statusColor: '#BAEDBD',
    totalTask: '20 / 20',
  },
  {
    id: '5',
    projectName: 'Landing page design',
    cardImg: MyProjectsCard5,
    projectDueDate: 'Due Date: Jun 20, 2022',
    avatarImg: MyProjectAvatar5,
    status: 'In progress',
    statusPercent: '36',
    statusColor: '#B1E3FF',
    totalTask: '13 / 49',
  },
  {
    id: '6',
    projectName: 'Product page redesign',
    cardImg: MyProjectsCard6,
    projectDueDate: 'Due Date: Jun 20, 2022',
    avatarImg: MyProjectAvatar6,
    status: 'In Progress',
    statusPercent: '38',
    statusColor: '#95A4FC',
    totalTask: '12 / 49',
  },
  {
    id: '7',
    projectName: 'Coffee detail page',
    cardImg: MyProjectsCard7,
    projectDueDate: 'Due Date: Jun 24, 2022',
    avatarImg: MyProjectAvatar1,
    status: 'Rejected',
    statusPercent: '78',
    statusColor: 'rgba(0, 0, 0, 0.40)',
    totalTask: '8 / 12',
  },
  {
    id: '8',
    projectName: 'Aviasales App',
    cardImg: MyProjectsCard8,
    projectDueDate: 'Due Date: Oct 25, 2022',
    avatarImg: MyProjectAvatar8,
    status: 'Aprroved',
    statusPercent: '100',
    statusColor: '#FFE999',
    totalTask: '23 / 23',
  },
  {
    id: '9',
    projectName: 'Finance Dispatch',
    cardImg: MyProjectsCard9,
    projectDueDate: 'Due Date: Nov 10, 2022',
    avatarImg: MyProjectAvatar9,
    status: 'Pending',
    statusPercent: '18',
    statusColor: '#B1E3FF',
    totalTask: '5 / 19',
  },
  {
    id: '10',
    projectName: 'Fitnes App',
    cardImg: MyProjectsCard10,
    projectDueDate: 'Due Date: Nov 10, 2022',
    avatarImg: MyProjectAvatar10,
    status: 'Pending',
    statusPercent: '45',
    statusColor: '#B1E3FF',
    totalTask: '13 / 49',
  },
  {
    id: '11',
    projectName: 'Atica Banking',
    cardImg: MyProjectsCard11,
    projectDueDate: 'Due Date: Nov 10, 2022',
    avatarImg: MyProjectAvatar11,
    status: 'In progress',
    statusPercent: '36',
    statusColor: '#95A4FC',
    totalTask: '10 / 49',
  },
  {
    id: '12',
    projectName: 'Coffee detail page',
    cardImg: MyProjectsCard12,
    projectDueDate: 'Due Date: Nov 10, 2022',
    avatarImg: MyProjectAvatar12,
    status: 'In Progress',
    statusPercent: '69',
    statusColor: '#95A4FC',
    totalTask: '40 / 49',
  },
];

const contactIcons = [Contacts1, Contacts2, Contacts3, Contacts4, Contacts5];
export const usersColumns = [
  {
    title: 'User',
    dataIndex: 'user',
    render: (text, index) => {
      const validIndex = index.key % contactIcons.length;
      const ContactIcon = contactIcons[validIndex];

      return (
        <div style={{ display: 'flex', alignContent: 'center' }}>
          <div style={{ paddingTop: '10px' }}>
            <Avatars img={<ContactIcon />} />
          </div>
          <div style={{ padding: '14px' }}>{text}</div>
        </div>
      );
    },
  },
  {
    title: 'Email',
    dataIndex: 'email',
    render: (text) => <div style={{ padding: '14px' }}>{text}</div>,
  },
  {
    title: 'Registration Date',
    dataIndex: 'registrationDate',
    render: (text) => <div style={{ padding: '14px' }}>{text}</div>,
  },
  {
    title: '',
    dataIndex: 'action',
  },
];

export const usersData = [
  {
    key: '1',
    user: 'Keddi Morrison',
    email: `smith@kpmg.com`,
    registrationDate: 'Just now',
  },
  {
    key: '2',
    user: 'Koray Okumus',
    email: `melody@atbox.com`,
    registrationDate: 'A minute ago',
  },
  {
    key: '3',
    user: 'Lana Steiner',
    email: `max@kt.com`,
    registrationDate: '1 hour ago',
  },
  {
    key: '4',
    user: 'Natali Craig',
    email: `sean@dellito.com`,
    registrationDate: 'Yesterday',
  },
  {
    key: '5',
    user: 'Olivia Rhye',
    email: `brian@exchange.com`,
    registrationDate: 'Yesterday',
  },
  {
    key: '6',
    user: 'Kate Morrison',
    email: `smith@kpmg.com`,
    registrationDate: 'Feb 2, 2023',
    action: '...',
  },
  {
    key: '7',
    user: 'Koray Okumus',
    email: `melody@altbox.com`,
    registrationDate: 'Feb 3, 2023',
  },
  {
    key: '8',
    user: 'Lana Steiner',
    email: `max@kt.com`,
    registrationDate: 'Feb 4, 2023',
  },
  {
    key: '9',
    user: 'Natali Craig',
    email: `sean@dellito.com`,
    registrationDate: 'Feb 5, 2023',
  },
  {
    key: '10',
    user: 'Olivia Rhye',
    email: `brian@exchange.com`,
    registrationDate: 'Feb 6, 2023',
  },
  {
    key: '11',
    user: 'Keddi',
    email: `smith@kpmg.com`,
    registrationDate: 'Just now',
  },
  {
    key: '12',
    user: 'Koray',
    email: `melody@atbox.com`,
    registrationDate: 'A minute ago',
  },
  {
    key: '13',
    user: 'Lana',
    email: `max@kt.com`,
    registrationDate: '1 hour ago',
  },
  {
    key: '14',
    user: 'Natali',
    email: `sean@dellito.com`,
    registrationDate: 'Yesterday',
  },
  {
    key: '15',
    user: 'Olivia',
    email: `brian@exchange.com`,
    registrationDate: 'Yesterday',
  },
  {
    key: '16',
    user: 'Kate',
    email: `smith@kpmg.com`,
    registrationDate: 'Feb 2, 2023',
  },
  {
    key: '17',
    user: 'Koray',
    email: `melody@altbox.com`,
    registrationDate: 'Feb 3, 2023',
  },
  {
    key: '18',
    user: 'Lana',
    email: `max@kt.com`,
    registrationDate: 'Feb 4, 2023',
  },
  {
    key: '19',
    user: 'Natali',
    email: `sean@dellito.com`,
    registrationDate: 'Feb 5, 2023',
  },
  {
    key: '20',
    user: 'Olivia',
    email: `brian@exchange.com`,
    registrationDate: 'Feb 6, 2023',
  },
  {
    key: '21',
    user: 'Keddi',
    email: `smith@kpmg.com`,
    registrationDate: 'Just now',
  },
  {
    key: '22',
    user: 'Koray',
    email: `melody@atbox.com`,
    registrationDate: 'A minute ago',
  },
  {
    key: '23',
    user: 'Lana',
    email: `max@kt.com`,
    registrationDate: '1 hour ago',
  },
  {
    key: '24',
    user: 'Natali',
    email: `sean@dellito.com`,
    registrationDate: 'Yesterday',
  },
  {
    key: '25',
    user: 'Olivia',
    email: `brian@exchange.com`,
    registrationDate: 'Yesterday',
  },
  {
    key: '26',
    user: 'Kate',
    email: `smith@kpmg.com`,
    registrationDate: 'Feb 2, 2023',
  },
  {
    key: '27',
    user: 'Koray',
    email: `melody@altbox.com`,
    registrationDate: 'Feb 3, 2023',
  },
  {
    key: '28',
    user: 'Lana',
    email: `max@kt.com`,
    registrationDate: 'Feb 4, 2023',
  },
  {
    key: '29',
    user: 'Natali',
    email: `sean@dellito.com`,
    registrationDate: 'Feb 5, 2023',
  },
  {
    key: '30',
    user: 'Olivia',
    email: `brian@exchange.com`,
    registrationDate: 'Feb 6, 2023',
  },
  {
    key: '31',
    user: 'Keddi',
    email: `smith@kpmg.com`,
    registrationDate: 'Just now',
  },
  {
    key: '32',
    user: 'Koray',
    email: `melody@atbox.com`,
    registrationDate: 'A minute ago',
  },
  {
    key: '33',
    user: 'Lana',
    email: `max@kt.com`,
    registrationDate: '1 hour ago',
  },
  {
    key: '34',
    user: 'Natali',
    email: `sean@dellito.com`,
    registrationDate: 'Yesterday',
  },
  {
    key: '35',
    user: 'Olivia',
    email: `brian@exchange.com`,
    registrationDate: 'Yesterday',
  },
  {
    key: '36',
    user: 'Kate',
    email: `smith@kpmg.com`,
    registrationDate: 'Feb 2, 2023',
  },
  {
    key: '37',
    user: 'Koray',
    email: `melody@altbox.com`,
    registrationDate: 'Feb 3, 2023',
  },
  {
    key: '38',
    user: 'Lana',
    email: `max@kt.com`,
    registrationDate: 'Feb 4, 2023',
  },
  {
    key: '39',
    user: 'Natali',
    email: `sean@dellito.com`,
    registrationDate: 'Feb 5, 2023',
  },
  {
    key: '40',
    user: 'Olivia',
    email: `brian@exchange.com`,
    registrationDate: 'Feb 6, 2023',
  },
  {
    key: '41',
    user: 'Keddi',
    email: `smith@kpmg.com`,
    registrationDate: 'Just now',
  },
  {
    key: '42',
    user: 'Koray',
    email: `melody@atbox.com`,
    registrationDate: 'A minute ago',
  },
  {
    key: '43',
    user: 'Lana',
    email: `max@kt.com`,
    registrationDate: '1 hour ago',
  },
  {
    key: '44',
    user: 'Natali',
    email: `sean@dellito.com`,
    registrationDate: 'Yesterday',
  },
  {
    key: '45',
    user: 'Olivia',
    email: `brian@exchange.com`,
    registrationDate: 'Yesterday',
  },
  {
    key: '46',
    user: 'Kate',
    email: `smith@kpmg.com`,
    registrationDate: 'Feb 2, 2023',
  },
  {
    key: '47',
    user: 'Koray',
    email: `melody@altbox.com`,
    registrationDate: 'Feb 3, 2023',
  },
  {
    key: '48',
    user: 'Lana',
    email: `max@kt.com`,
    registrationDate: 'Feb 4, 2023',
  },
  {
    key: '49',
    user: 'Natali',
    email: `sean@dellito.com`,
    registrationDate: 'Feb 5, 2023',
  },
  {
    key: '40',
    user: 'Olivia',
    email: `brian@exchange.com`,
    registrationDate: 'Feb 6, 2023',
  },
];
