import React from 'react';

const Page = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>

  {/* Developer Block */}
  <div style={{ 
    flex: 1, 
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',  // Aligns the content to the middle vertically
    justifyContent: 'center',  // Centers the content horizontally
    padding: '20px', 
    background: 'linear-gradient(to bottom, #E6F7FF, #B3E0FF)',
    height: '70vh',
    overflowY: 'auto'
  }}>
    <h1 style={{ fontSize: '2em' }}> For <strong style={{ color: 'blue' }}>Students</strong></h1>
    <p>We are the market–leading platform to identify and hire developers with the right skills.</p>
    <button 
      style={{ backgroundColor: 'blue', color: 'white', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer', marginTop: '20px' }}
    >
      Login
    </button>
    <p>Don't have an account?</p>
<p>Sign up.</p>
  </div>

  {/* College Block */}
  <div style={{ 
    flex: 1, 
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px', 
    background: 'linear-gradient(to bottom, #CCF5FF, #99E6FF)',
    height: '70vh',
    overflowY: 'auto'
  }}>
    <h1 style={{ fontSize: '2em' }}> For <strong style={{ color: 'blue' }}>College</strong></h1>
    <p>We are the market–leading platform to identify and hire developers with the right skills.</p>
    <button 
      style={{ backgroundColor: 'blue', color: 'white', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer', marginTop: '20px' }}
    >
      Login
    </button>
    <p>Don't have an account?</p>
<p>Sign up.</p>
  </div>

  {/* Company Block */}
  <div style={{ 
    flex: 1, 
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px', 
    background: 'linear-gradient(to bottom, #B3E0FF, #66B2FF)',
    height: '70vh',
    overflowY: 'auto'
  }}>
    <h1 style={{ fontSize: '2em' }}> For <strong style={{ color: 'blue' }}>Company</strong></h1>
    <p>We are the market–leading platform to identify and hire developers with the right skills.</p>
    <button 
      style={{ backgroundColor: 'blue', color: 'white', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer', marginTop: '20px' }}
    >
      Login
    </button>
    <p>Don't have an account?</p>
<p>Sign up.</p>
  </div>

</div>

  );
};
 
export default Page;