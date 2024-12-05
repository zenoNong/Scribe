import { useParams } from 'react-router-dom'
import './RequestDetails.css'

function RequestDetails() {
  const { id } = useParams()

  // This would typically come from an API
  const mockRequest = {
    id: id,
    title: "Scribe needed for Medical Examination",
    location: "New York",
    date: "2024-03-20",
    requirements: "Must have medical terminology knowledge. Minimum typing speed of 60 WPM.",
    description: "Looking for a professional scribe to assist in medical examinations. The role involves accurate and rapid documentation of patient encounters.",
  }

  return (
    <div className="request-details">
      <h2>{mockRequest.title}</h2>
      <div className="details-card">
        <p><strong>Location:</strong> {mockRequest.location}</p>
        <p><strong>Date:</strong> {mockRequest.date}</p>
        <h3>Requirements</h3>
        <p>{mockRequest.requirements}</p>
        <h3>Description</h3>
        <p>{mockRequest.description}</p>
      </div>
    </div>
  )
}

export default RequestDetails