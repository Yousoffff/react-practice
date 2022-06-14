import Hheader from './Hheader';
import Bbody from './Bbody';
import Ffooter from './Ffooter';
import './App.css';


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
        <Ffooter />
      </div>
  );
}

export default App;
