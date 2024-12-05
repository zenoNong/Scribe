import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './SubmitRequest.css'

function SubmitRequest() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    title: '',
    location: '',
    date: '',
    requirements: '',
    description: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the data to an API
    console.log('Form submitted:', formData)
    navigate('/')
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="submit-request">
      <h2>Submit a Scribe Request</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="location">Location</label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="requirements">Requirements</label>
          <textarea
            id="requirements"
            name="requirements"
            value={formData.requirements}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Submit Request</button>
      </form>
    </div>
  )
}

export default SubmitRequest