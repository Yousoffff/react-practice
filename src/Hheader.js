import './Hheader.css';


function Hheader() {
    return <div className='hheader'>
      <div className='brand text-light' >GOT</div>
        
        <ul className='menu'>
          <li className='menu-list'><a className="text-light" href="a">Home</a></li>
          <li className='menu-list'><a className="text-light" href="a">Projects</a></li>
          <li className='menu-list'><a className="text-light" href="a">Contacts</a></li>
          <li className='menu-list'><a className="text-light" href="a">About</a></li>
        </ul>
      
    </div>;
  }

  export default Hheader;