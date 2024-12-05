import { Link } from 'react-router-dom'
import './Home.css'

function Home() {
  const mockRequests = [
    {
      id: 1,
      title: "Scribe needed for Medical Examination",
      location: "New York",
      date: "2024-03-20",
      department: "Cardiology",
      experience: "2+ years",
    },
    {
      id: 2,
      title: "Emergency Scribe Required",
      location: "Boston",
      date: "2024-03-22",
      department: "Emergency",
      experience: "1+ year",
    },
    {
      id: 3,
      title: "Medical Scribe Position Available",
      location: "Chicago",
      date: "2024-03-25",
      department: "General Medicine",
      experience: "Entry Level",
    },
    {
      id: 4,
      title: "Scribe for Neurology Department",
      location: "San Francisco",
      date: "2024-03-28",
      department: "Neurology",
      experience: "3+ years",
    },
  ]

  return (
    <div className="home">
      <h2>Available Scribe Positions</h2>
      <div className="requests-grid">
        {mockRequests.map((request) => (
          <Link to={`/request/${request.id}`} key={request.id} className="request-card">
            <h3>{request.title}</h3>
            <p>{request.location}</p>
            <p>{request.date}</p>
            <p>{request.department}</p>
            <p>{request.experience}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Home