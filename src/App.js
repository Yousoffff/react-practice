import Hheader from './Hheader';
import Bbody from './Bbody';
import Ffooter from './Ffooter';
import './App.css';
import GOT from './GOT';
import Drawing from './Drawing';

// const formatName=(user)=> {
//   return user.firstName + ' ' + user.lastName;
// }

// const user = {
//   firstName: 'Harper',
//   lastName: 'Perez'
// };



function App() {
  return (
      <div>
        <Hheader />
        <Bbody />
        <GOT />
        <Drawing />
        <Ffooter />
        
      </div>
  );
}

export default App;
