import './App.css';
let curdate=new Date();
curdate=curdate.getHours();
let greet='';
const obj={};
if(curdate>=3 && curdate<=11)
{
  greet='Good Morning!';
  obj.color="green";
}
else if(curdate>11 && curdate<=16) 
{
  greet='Good Afternoon!';
  obj.color="orange";
}
else if(curdate>16 && curdate<=19)
{
  greet='Good Evening!';  
  obj.color="blue";
}
else
{
  greet='Good Night!';
  obj.color="black";  
}
function App() {
  return (
    <>
    <div> 
    <h1>Hello Shreya,<span style={obj}>{greet}</span></h1>
    </div>
    </>
  );
}

export default App;

