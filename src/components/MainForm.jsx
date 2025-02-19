import React from 'react'
import '../assets/css/style.css'

const MainForm = () => {
  return (
    <>
  <form className='form-body'>

<div className="container mt-5" >

  <div id="header-text" className="text-center text-white w-full">
    
    <h2 className="text-decoration-underline mb-5">Startup Registration Form</h2>

    <div className="container mt-4 position-relative" style={{width:"63%"}}>
      <div className="progress-labels text-white d-flex justify-content-between px-2"
        style={{position: "absolute", width: "100%", top: "-25px"}}>
        <span>Personal</span>
        <span>Startup</span>
        <span>Business</span>
        <span>Facility</span>
      </div>

      <div className="progress">
        <div id="progress-bar" className="progress-bar" role="progressbar" style={{width: "0%", background: "#374151"}}
          aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
        </div>
      </div>
    </div>
  </div>

  <div className="container mt-5">
    <section className="form-card  shadow-lg" id="section1">
      <div className="card-body">
        <h4 className="card-title mb-4 text-decoration-underline">
          Personal Details
        </h4>

        <div className="row">

          <div className="col-md-6">
            <div className="mb-4">
              <label htmlFor="name" className="form-label">Full Name</label>
              <input type="text" className="form-control" id="name" placeholder required="Full Name" />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email ID</label>
              <input type="email" className="form-control" id="email" placeholder required="Email" />
            </div>

            <div className="mb-3">
              <label htmlFor="department" className="form-label">Department/Course</label>
              <select className="form-select form-control custom-dropdown" id="department" placeholder
                required="Select Department/Course">
                <option value="" selected disabled hidden>
                  Select Department/Course
                </option>
                <option value="A">Subject-1</option>
                <option value="B">Subject-2</option>
                <option value="C">Subject-3</option>
                <option value="D">Subject-4</option>
                <option value="E">Subject-5</option>
              </select>
            </div>
          </div>

          <div className="col-md-6">
            <div className="mb-4">
              <label htmlFor="studentID" className="form-label">Student ID</label>
              <input type="text" className="form-control" id="studentID" placeholder required="Student ID" />
            </div>

            <div className="mb-3">
              <label htmlFor="phone_number" className="form-label">Phone Number</label>
              <input type="tel" className="form-control" id="phone_number" placeholder required="Phone Number" />
            </div>

            <div className="mb-3">
              <label htmlFor="year_of_study" className="form-label">Year of Study</label>
              <input type="date" className="form-control" id="year_of_study" placeholder required="Year of Study" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>

  <div className="container mt-5">
    <section className="form-card  shadow-lg" id="section2">
      <div className="card-body">
        <h4 className="card-title mb-4 text-decoration-underline">
          Startup Details
        </h4>

        <div className="row">
          <div className="col-md-6">
            <div className="mb-3">
              <label htmlFor="startup_name" className="form-label">Startup Name</label>
              <input type="text" className="form-control" id="startup_name" />
            </div>
          </div>

          <div className="col-md-6">
            <div className="mb-3">
              <label htmlFor="industry_sector" className="form-label">Industry Sector</label>
              <input type="text" className="form-control" id="industry_sector" placeholder required="health.."  />
            </div>
          </div>
        </div>

        <div className="mb-2">
          <label htmlFor="description" className="form-label">
            Brief Description</label>
          <textarea className="form-control" id required="description" rows="3"></textarea>
        </div>

        <div className="mb-3">
          <label htmlFor="problemStatementAndSolution" className="form-label">Problem Statement And Solution</label>
          <textarea className="form-control" id required="problemStatementAndSolution" rows="3"></textarea>
        </div>

        <div className="row">
          <div className="col-md-6">
            <div className="mb-3">
              <label htmlFor="current_stage" className="form-label">Current Stage</label>
              <textarea className="form-control" id="current_stage" placeholder
                required="Idea, Prototype, MVP, Revenue Generate" onInput="updateProgress()"></textarea>
            </div>
          </div>

          <div className="col-md-6">
            <div className="mb-3">
              <label htmlFor="website/socialMedia" className="form-label">Website/Social Media</label>
              <input type="url" className="form-control" id="website_socialMedia" onInput="updateProgress()" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  <div className="container mt-5">
    <section className="form-card  shadow-lg" id="section3">
      <div className="card-body">
        <h4 className="card-title mb-4 text-decoration-underline">
          Buisness Details
        </h4>

        <div className="container mt-5">
          <div className="row">
            <div className="col-md-6">
              <div className="mb-3">
                <label htmlFor="checkboxId" className="form-label">Functioning Required</label>
                <div className="form-check">
                  <input type="checkbox" className="form-check-input" id required="checkboxId" />
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="mb-3">
                <label htmlFor="expected_investment" className="form-label">Expected Investment</label>
                <input type="text" className="form-control" id="industry_sector" placeholder required=" " />
              </div>
            </div>
          </div>

          <div className="mb-2">
            <label htmlFor="revenue_model" className="form-label">Revenue Model</label>
            <textarea className="form-control" id required="revenue_model" rows="3"></textarea>
          </div>

          <div className="row">
            <div className="col-md-6">
              <div className="mb-3">
                <label htmlFor="current_stage" className="form-label">Competition Analysis</label>
                <textarea className="form-control" id="current_stage" placeholder
                  required="Existing Competior, Market Size etc.." onInput="updateProgress()"></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>

  <div className="container mt-5">
    <section className="form-card  shadow-lg" id="section4">
      <div className="card-body">
        <h4 className="card-title mb-4 text-decoration-underline">Facility Required</h4>

        <div className="row d-flex align-items-center justify-content-between">

          <div className="col-md-4 d-flex flex-column align-items-start">
            <label className="form-label fw-bold mb-2">Office Space:</label>
            <div className="d-flex gap-3">
              <div className="form-check form-switch">
                <input className="form-check-input" type="checkbox" id="cabin" />
                <label className="form-check-label" htmlFor="cabin">Cabin</label>
              </div>
              <div className="form-check form-switch">
                <input className="form-check-input" type="checkbox" id="bench" />
                <label className="form-check-label" htmlFor="bench">Bench</label>
              </div>
            </div>
          </div>

          <div className="col-md-4 d-flex flex-column align-items-start">
            <label className="form-label fw-bold mb-2">Mentorship Required</label>
            <div className="d-flex gap-3">
              <div className="form-check form-switch">
                <input className="form-check-input mentorship-switch" type="checkbox" id="yes_mentorship" />
                <label className="form-check-label" htmlFor="yes_mentorship">Yes</label>
              </div>
              <div className="form-check form-switch">
                <input className="form-check-input mentorship-switch" type="checkbox" id="no_mentorship" />
                <label className="form-check-label" htmlFor="no_mentorship">No</label>
              </div>
            </div>
          </div>

          <div className="col-md-4 d-flex flex-column align-items-start">
            <label className="form-label fw-bold mb-2">Networking Support</label>
            <div className="d-flex gap-3">
              <div className="form-check form-switch">
                <input className="form-check-input facility-switch" type="checkbox" id="additional_yes" />
                <label className="form-check-label" htmlFor="additional_yes">Yes</label>
              </div>
              <div className="form-check form-switch">
                <input className="form-check-input facility-switch" type="checkbox" id="additional_no" />
                <label className="form-check-label" htmlFor="additional_no">No</label>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  </div>

</div>

<div className="container mt-5 mb-5 text-center">
  <button type="submit" className="btn-primary" onClick="updateProgress()">Submit Application</button>
</div>
</form>
    </>)
}

export default MainForm
