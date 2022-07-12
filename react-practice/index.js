function MainContent(){
    return(
        <div>
            <h1>Wahyu Dwi Prastika</h1>
            <h3>Hello guys, welcome to my website</h3>
            <p>abcdefghijklmnopqrstuvwxyz</p>
        </div>
    )
}

function Navbar(){
    return(
    <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Wahyu Dwi Prastika</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
)
}

ReactDOM.render(
    <div>
        <Navbar />
        <MainContent />
    </div>
,
document.getElementById("fastfood")
);