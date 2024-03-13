import './profile.css'


function Profile({close}) {
  return (
    <section className="main">
  <div className="profile-card">
    <div className="image">
      {/* <img src="images/profile.jpg" alt="" className="profile-pic"> */}
    </div>
    <div className="data">
      <h2>Olivia Gomez</h2>
    </div>
    <div className="row">
      <div className="info">
        <h3>UID :</h3>
        <span>1207879</span>
      </div>
    </div>
    <div className="buttons">
      <a href="#" className="btn">Logout</a>
    </div>
  </div>
</section>
  )
}

export default Profile;