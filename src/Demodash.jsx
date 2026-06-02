
import React from 'react'
import './Demodash.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faBell, faTriangleExclamation, faVanShuttle, faHome, faLocationCrosshairs } from '@fortawesome/free-solid-svg-icons'

const Demodash = () => {
  return (
    <>
      <div className='navBar'>
        <div className="logo">
          <h1>HopeHands ❤</h1>
        </div>

        <div className="navRight">
          <FontAwesomeIcon icon={faBell} className='Bellicon' />
          <div className="adminIcon">
            <button>
              <FontAwesomeIcon icon={faUser} className='adminI' />
              Admin
            </button>
          </div>
        </div>
      </div>

      <div className="mainContainer">
        <div className="reports">
          <div className="iconplusp">
            <FontAwesomeIcon icon={faTriangleExclamation} className="reportIcon" />Reports
          </div>
          <h1>1228</h1>
          <p>12 days</p>
        </div>

        <div className="reports">
          <div className="iconplusp">
            <FontAwesomeIcon icon={faVanShuttle} className='rescueIcon' />Rescued
          </div>
          <h1>1228</h1>
          <p>12 days</p>
        </div>

        <div className="reports">
          <div className="iconplusp">
            <FontAwesomeIcon icon={faHome} className='shelterIcon' />Shelters
          </div>
          <h1>1228</h1>
          <p>12 days</p>
        </div>

        <div className="reports">
          <div className="iconplusp">
            <FontAwesomeIcon icon={faUser} className='userIcon' />Volunteers
          </div>
          <h1>1228</h1>
          <p>12 days</p>
        </div>
      </div>

     
      <div className="mapSection">

       
        <div className="dashboardCard mapBox">
          <div className="cardHeader">
            <FontAwesomeIcon icon={faLocationCrosshairs} className="cardIcon" />
            <h3>LIVE MAP</h3>
          </div>
          <div className="mapContainer">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52708.607614881716!2d77.71997566154472!3d10.918678492683666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba99b99c13a854b%3A0x45329ed366ee37a8!2sSri%20Murugan%20Mahal!5e0!3m2!1sen!2sin!4v1780325875952!5m2!1sen!2sin" 
              frameBorder="0"
              title="live-map"
            ></iframe>
          </div>
        </div>

        {/* BOX 2: RECENT RESCUE REPORTS */}
        <div className="dashboardCard reportsBox">
          <div className="cardHeader">
            <FontAwesomeIcon icon={faLocationCrosshairs} className="cardIcon" />
            <h3>RECENT RESCUE REPORTS</h3>
          </div>
          
          <div className="rescueList">
            {/* Report Item 1 */}
            <div className="rescueDetails">
              <div className="left">
                <h4>Elderly person in distress</h4>
                <p>Chennai, Tnagar</p>
              </div>
              <div className="right">
                <p className="status status-critical">Critical</p>
                <span>2 min ago</span>
              </div>
            </div>

            {/* Report Item 2 */}
            <div className="rescueDetails">
              <div className="left">
                <h4>Elderly person in distress</h4>
                <p>Chennai, Tnagar</p>
              </div>
              <div className="right">
                <p className="status status-critical">Critical</p>
                <span>2 min ago</span>
              </div>
            </div>

            {/* Report Item 3 */}
            <div className="rescueDetails">
              <div className="left">
                <h4>Elderly person in distress</h4>
                <p>Chennai, Tnagar</p>
              </div>
              <div className="right">
                <p className="status status-critical">Critical</p>
                <span>2 min ago</span>
              </div>
            </div>
          </div>
        </div>

      </div>

    {/* ROW 2: NEARBY SHELTERS & VOLUNTEER ACTIVITY (SIDE-BY-SIDE) */}
<div className="mapSection" style={{ paddingTop: '0' }}>

    {/* BOX 3: NEARBY SHELTERS */}
    <div className="dashboardCard shelterContainer">
        <div className="cardHeader">
            <FontAwesomeIcon icon={faLocationCrosshairs} className="cardIcon" />
            <h3>NEARBY SHELTERS</h3>
        </div>

        <div className="shelterList">
            {/* Shelter Item 1 */}
            <div className="shelterDetails">
                <div className="shelterLeft">
                    <h4>Hope Shelter</h4>
                    <p>Anna Nagar, Chennai • 12km</p>
                </div>
                <div className="shelterRight">
                    <span>68% full</span>
                    <div className="progressBarBg">
                        <div className="progressBarFill" style={{ width: '68%' }}></div>
                    </div>
                </div>
            </div>
            
            {/* Shelter Item 2 */}
            <div className="shelterDetails">
                <div className="shelterLeft">
                    <h4>Grace Care Centre</h4>
                    <p>Trichy Main, Trichy • 8km</p>
                </div>
                <div className="shelterRight">
                    <span>91% full</span>
                    <div className="progressBarBg">
                        <div className="progressBarFill" style={{ width: '91%', backgroundColor: '#ef4444' }}></div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    {/* BOX 4: VOLUNTEER ACTIVITY */}
    <div className="dashboardCard volunteerContainer">
        <div className="cardHeader">
            <FontAwesomeIcon icon={faUser} className="cardIcon" />
            <h3>VOLUNTEER ACTIVITY</h3>
        </div>

        <div className="volunteerList">
            {/* Volunteer Item 1 */}
            <div className="volunteerDetails">
                <div className="volunteerAvatar" style={{ backgroundColor: '#eff6ff', color: '#1e40af' }}>AR</div>
                <div className="volunteerLeft">
                    <h4>Arun accepted a rescue report</h4>
                    <p>Chennai • 5 min ago</p>
                </div>
                <div className="volunteerRight">
                    <span className="badge status-active">Active</span>
                </div>
            </div>

            {/* Volunteer Item 2 */}
            <div className="volunteerDetails">
                <div className="volunteerAvatar" style={{ backgroundColor: '#f0fdf4', color: '#166534' }}>PR</div>
                <div className="volunteerLeft">
                    <h4>Priya completed a rescue</h4>
                    <p>Trichy • 23 min ago</p>
                </div>
                <div className="volunteerRight">
                    <span className="badge status-done">Done</span>
                </div>
            </div>
        </div>
    </div>

</div>
    </>
  )
}

export default Demodash