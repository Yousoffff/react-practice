import './Hheader.css';


function Hheader() {
    return <div className='hheader'>
      <div className='brand text-light' >Younix</div>
      <div className='menu'>
        <ul className='navbar-nav'>
          <li className='menu-list'><a className="text-light" href="a">Home</a></li>
          <li className='menu-list'><a className="text-light" href="a">Projects</a></li>
          <li className='menu-list'><a className="text-light" href="a">Contacts</a></li>
          <li className='menu-list'><a className="text-light" href="a">About</a></li>
        </ul>
      </div>
    </div>;
  }

  export default Hheader;