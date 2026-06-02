// import React, { useState } from 'react'
// import './Dashboard.css'
// import { Link, NavLink } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faGauge, faCamera, faHouse, faUser } from '@fortawesome/free-solid-svg-icons';

// const Dashboard = () => {
//     let [value, setValue] = useState(3000)
//     return (
//         <div className='mainDash container-fluid'>
//             <nav>
//                 {/* <div className="logo">
//                     HopeHands
//                 </div> */}
//                 <h1>HopeHands</h1>

//                 <div className="cart">
//                     <Link >
//                         <FontAwesomeIcon icon={faGauge} className='icon' />
//                         Dashboard
//                     </Link>
//                     <Link >
//                         <FontAwesomeIcon icon={faGauge} className='icon' />
//                         Dashboard
//                     </Link>
//                     <Link >
//                         <FontAwesomeIcon icon={faGauge} className='icon' />
//                         Dashboard
//                     </Link>
//                     <Link >
//                         <FontAwesomeIcon icon={faGauge} className='icon' />
//                         Dashboard
//                     </Link>
//                     <Link >
//                         <FontAwesomeIcon icon={faGauge} className='icon' />
//                         Dashboard
//                     </Link>
//                 </div>

//             </nav>

//             <div className="count">
//                 <div className="box">
//                     total Reports
//                     <h1>{value}</h1>
//                 </div>
//                 <div className="box">
//                     total Reports
//                     <h1>1200</h1>
//                 </div>
//                 <div className="box">
//                     total Reports
//                     <h1>1200</h1>
//                 </div>
//                 <div className="box">
//                     total Reports
//                     <h1>1200</h1>
//                 </div>

//             </div>

//             <div className="section">
//                 <div className="leftSection">
//                     <h4>Recent reports</h4>
//                     <div className="customer">
//                         <div className="people">
//                             <div className="profileimage">🤦‍♀️</div>
//                             <div className="contents">
//                                 <h4>Anna Nagar Chennai</h4>
//                                 <p>Elderly man, appears disoriented, near signal junction</p>

//                                 <span>New</span>
//                             </div>
//                         </div>
//                         <div className="people">
//                             <div className="profileimage">🤦‍♀️</div>
//                             <div className="contents">
//                                 <h4>Anna Nagar Chennai</h4>
//                                 <p>Elderly man, appears disoriented, near signal junction</p>

//                                 <span>New</span>
//                             </div>
//                         </div>
//                         <div className="people">
//                             <div className="profileimage">🤦‍♀️</div>
//                             <div className="contents">
//                                 <h4>Anna Nagar Chennai</h4>
//                                 <p>Elderly man, appears disoriented, near signal junction</p>

//                                 <span>New</span>
//                             </div>
//                         </div>
//                         <div className="people">
//                             <div className="profileimage">🤦‍♀️</div>
//                             <div className="contents">
//                                 <h4>Anna Nagar Chennai</h4>
//                                 <p>Elderly man, appears disoriented, near signal junction</p>

//                                 <span>New</span>
//                             </div>
//                         </div>

//                     </div>
//                 </div>
//                 <div className="rightSection">
//                     <div className="top">
//                         <h4>Live Location Map</h4>
//                         <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52708.607614881716!2d77.71997566154472!3d10.918678492683666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba99b99c13a854b%3A0x45329ed366ee37a8!2sSri%20Murugan%20Mahal!5e0!3m2!1sen!2sin!4v1780325875952!5m2!1sen!2sin" frameborder="0"></iframe>
//                     </div>
//                     <div className="leftSection leftSection2">
//                         <h4>Recent reports</h4>
//                         <div className="customer">
//                             <div className="people">
//                                 <div className="profileimage">🤦‍♀️</div>
//                                 <div className="contents">
//                                     <h4>Anna Nagar Chennai</h4>
//                                     <p>Elderly man, appears disoriented, near signal junction</p>

//                                     <span>New</span>
//                                 </div>
//                                 <button>Notify</button>
//                             </div>
//                             <div className="people">
//                                 <div className="profileimage">🤦‍♀️</div>
//                                 <div className="contents">
//                                     <h4>Anna Nagar Chennai</h4>
//                                     <p>Elderly man, appears disoriented, near signal junction</p>

//                                     <span>New</span>
//                                 </div>
//                                  <button>Notify</button>
//                             </div>
//                             <div className="people">
//                                 <div className="profileimage">🤦‍♀️</div>
//                                 <div className="contents">
//                                     <h4>Anna Nagar Chennai</h4>
//                                     <p>Elderly man, appears disoriented, near signal junction</p>

//                                     <span>New</span>
//                                 </div>
//                                  <button>Notify</button>
//                             </div>
//                             <div className="people">
//                                 <div className="profileimage">🤦‍♀️</div>
//                                 <div className="contents">
//                                     <h4>Anna Nagar Chennai</h4>
//                                     <p>Elderly man, appears disoriented, near signal junction</p>

//                                     <span>New</span>
//                                 </div>
//                                  <button>Notify</button>
//                             </div>

//                         </div>
//                     </div>
//                 </div>
//             </div>

//         </div>
//     )
// }

// export default Dashboard
