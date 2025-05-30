import logo from './logo.svg';
import './App.css';
import Homepage from "./Component/Homepage"
import  LoginPage from "./Component/LoginPage"
import Counter from './Component/Counter';
import UseMemodemo from './Component/UseMemodemo';
import Form from './Component/Form';
import Counterbehav from './Component/Counterbehav';
// import StudentTable from './Component/Studentinfo';
import StudentTable2 from './Component/studentinfo2';
import StudentTable from './Component/Studentinfo';
import StyleDemo from './Component/StyledDemo';
import TooltipOnOverflow from './Component/Tooltip';
import Ddemo from './Ddemo';
import MediaDemo from './MediaDemo';
import TooltipDemo from './TooltipDemo';
import SortableTree from './SortableTree';
import Checkloop from './Checkloop';
import TestUseEffect from './TestUseEffect';
import ComponentA from './ComponentA';
import Bhavesh from './Bhavesh';
function App() {
  let user={name:"bhavesh",email:"bhavesh@gmail.com"}
  return (
   <>
   <h1></h1>
   {/* <Homepage/>
   <LoginPage/>
   <Counter/>
   <UseMemodemo/> */}
   {/* <Form/> */}
   {/* <Counter user={user} /> */}
   {/* <Counterbehav/> */}
   {/* <StudentTable2/>
   <StyleDemo/>
   <TooltipOnOverflow/> */}
   {/* <Ddemo/> */}
   {/* <MediaDemo/> */}
   {/* <TooltipDemo/> */}
   {/* <SortableTree/> */}
   {/* <Checkloop/> */}
   {/* <TestUseEffect/> */}
   {/* <ComponentA/> */}
   <Bhavesh/>
   </>
  );
}

export default App;
