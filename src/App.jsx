import React from 'react';
import './App.css';

function App(){
  return(
  <>
<DataCards/>
  </>
  );

}
export default App;

function DataCards(){
  const Free={
    type:"FREE",
    price:{
      value:0,
      style:"abled",
    },
    Storage:{
      value:50,
      style:"abled"
    },
    access:{
      value:"Single User",
      style:"abled",
    },
    features:{
      one:{
        Des:" Unlimited Public Projects",
        state:true,
      },
       two:{
        Des:"Community Access",
        state:true,
       },
     three: {
      Des:"Unlimited Private Projects",
      state:false,
     },
     four:{
       Des: "Dedicated Phone Support",
       state:false,
     },
     five:{ 
     Des:"Free Subdomain",
     state:false,
     },
      six:{
        Des:"Monthly Status Reports",
        state:false,
      },
    },
    fullyaccess:false,
  };
  const Plus={
    type:"PLUS",
    price:{
      value:9,
      style:"abled",
    },
    Storage:{
      value:50,
      style:"abled",
    },
    access:{
      value:"5 Users",
      style:"abled",
    },
    features:{
      one:{
        Des:" Unlimited Public Projects",
        state:true,
      },
       two:{
        Des:"Community Access",
        state:true,
       },
     three: {
      Des:"Unlimited Private Projects",
      state:true,
     },
     four:{
       Des: "Dedicated Phone Support",
       state:true,
     },
     five:{ 
     Des:"Free Subdomain",
     state:true,
     },
      six:{
        Des:"Monthly Status Reports",
        state:false,
      },
  },
  fullyaccess:false,
};
  const Pro={
    type:"PRO",
    price:{
      value:49,
      style:"abled",
    },
    Storage:{
      value:50,
      style:"abled",
    },
    access:{
      value:"Unlimited Users",
      style:"abled",
    },
    features:{
      one:{
        Des:" Unlimited Public Projects",
        state:true,
      },
       two:{
        Des:"Community Access",
        state:true,
       },
     three: {
      Des:"Unlimited Private Projects",
      state:true,
     },
     four:{
       Des: "Dedicated Phone Support",
       state:true,
     },
     five:{ 
     Des:"Free Subdomain",
     state:true,
     },
      six:{
        Des:"Monthly Status Reports",
        state:true,
      },
    },
    fullyaccess:true,
  };
  return(
    <div className='all-cards'>
    <Datapackcard  model={Free}/>
    <Datapackcard  model={Plus}/>
    <Datapackcard  model={Pro}/>
    
  
    </div>
  );
}



      
function Datapackcard({model}) {
  return(
    <div  className='Data-card'>
    <h5>{model.type}</h5>
    <h1>${model.price.value}/month</h1>
    <p><span className="material-symbols-outlined">check_small</span>{model.access.value}</p>
    <p><span className="material-symbols-outlined">check_small</span>{model.Storage.value}GB Storage </p>
                                                                                                                
    <div className='paragrah'> 
     {/* using Terynary opretor to showing tick , cross symbols.  */}
   
     {model.features.one.state ? (
      <p><span className="material-symbols-outlined">check_small</span>{model.features.one.Des}</p>
          
    ):(
      <p><span className="material-symbols-outlined">close_small</span>{model.features.one.Des}</p>
       
    )} 
    </div>
    
   <div className='paragrah'>
    
    {model.features.two.state ? (
     <p><span className="material-symbols-outlined">check_small</span>{model.features.two.Des}</p>
    ):(
      <p className='close'><span className="material-symbols-outlined">close_small</span>{model.features.two.Des}</p>
    )}
   
    </div>
    <div className='paragrah'>
    
    {model.features.three.state ? (
      <p><span className="material-symbols-outlined">check_small</span>{model.features.three.Des}</p>
    ):(
      <p className='close'><span className="material-symbols-outlined">close_small</span>{model.features.three.Des}</p>
    )}
   
    </div>
    <div className='paragrah'>
    
    {model.features.four.state ? (
      <p><span className="material-symbols-outlined">check_small</span>{model.features.four.Des}</p>
    ):(
      <p className='close'><span className="material-symbols-outlined">close_small</span>{model.features.four.Des}</p>
    )}
    
    </div>
    <div className='paragrah'>
    
    {model.features.five.state ? (
      <p><span className="material-symbols-outlined">check_small</span>{model.features.five.Des}</p>
    ):(
      <p className='close'><span className="material-symbols-outlined close">close_small</span>{model.features.five.Des}</p>
    )}
   
    </div>
    <div className='paragrah'>
    {model.features.six.state ? (
     <p><span className="material-symbols-outlined">check_small </span>{model.features.six.Des}</p>
      
    ):(
      <p className='close'> <span className="material-symbols-outlined">close_small  </span>{model.features.six.Des}</p>
      
    )}
    
     </div>
    
   { model.fullyaccess ? (<button>BUTTON</button>):(<button className='close'>BUTTON</button>)}
   
  </div>

)
}
  
  

