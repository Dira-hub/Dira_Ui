import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  useNavigate,
  Routes
} from 'react-router-dom';
import './LoginComponent.css';
import "@fontsource/eczar";
import "@fontsource/roboto";
import { Icon } from '@iconify/react';
import {  AirplaneTilt  } from "@phosphor-icons/react";
import CountryWorkComponent from './CountryWorkComponent';



const LoginComponent = () => {
const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [shouldRedirect, setShouldRedirect] = useState(false);
  const navigate = useNavigate();

   const handleLogin = () => {
    if (email === 'admin' && password === 'admin') {
      setShouldRedirect(true);
      navigate('/country');  // Programmatically navigating
    }
  }

  return (
    <div className="Homepage" style={{width: 1440, height: 1024, position: 'relative', background: 'white'}}>
      <div className="BackgroundImage" style={{width: 904, height: 1024, left: 0, top: 0, position: 'absolute', background: 'linear-gradient(98deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0) 61%, white 84%, white 93%)'}} />
      
      {/* Dira Intro */}
      <div className="DiraIntro" style={{
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    width: '50%',
    padding: 18,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
}}>
    <div className="HeadlineFrame" style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '4px'
    }}>
        <div className="Logoframe" style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: '4px'
        }}>
        <div className="FlightAnimation" style={{
            width: 32,
            height: 32,
            padding: '6px 1px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            animation: 'flightPath 5s infinite'
        }}>
        <AirplaneTilt size={10000} />

<div className="Vector" style={{
                    width: 30,
                    height: 22,
                    background: 'black'
                }}></div>
            </div>
            <div className="Dira" style={{
                color: '#002766',
                fontSize: 128,
                fontFamily: 'Eczar',
                fontWeight: '400',
                lineHeight: '153.60px',
                wordWrap: 'break-word'
            }}>
                DIRA
            </div>
        </div>
        <div className="1PlatformForYourNextStepInLife" style={{
            width: '100%',
            textAlign: 'right',
            color: 'black',
            fontSize: 24,
            fontFamily: 'Roboto',
            fontWeight: '400',
            lineHeight: '32px',
            wordWrap: 'break-word',
            padding: '0 18px' // To ensure the text doesn't touch the edge
        }}>
            #1 platform for your next step in life
        </div>
    </div>
</div>


      <div className="Signup" style={{height: 806, left: 870, top: 111, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 124}}>

        {/* Form Fields */}
        <div className="FormFields" style={{alignSelf: 'stretch', height: 250, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 10, display: 'flex'}}>
          {/* Social Fields */}
          <div className="SocialFields" style={{alignSelf: 'stretch', justifyContent: 'center', alignItems: 'center', gap: 64, display: 'inline-flex'}}>
          <button className="SignInWithGoogle" style={{
    height: 40, 
    paddingLeft: 16, 
    paddingRight: 16, 
    paddingTop: 8, 
    paddingBottom: 8, 
    borderRadius: 36, 
    border: '1.60px #002766 solid', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    display: 'flex',
    flexDirection: 'row',   // Make sure the items are displayed in a row
}}>
    <span className="Text" style={{
        textAlign: 'center', 
        color: '#002766', 
        fontSize: 15, 
        fontFamily: 'Roboto', 
        fontWeight: '400', 
        lineHeight: 24, 
        flex: '2 1 auto'   // Allow this to grow more than the icon div
    }}>
        Sign in with Google 
    </span>
    <div className="CustomIcons" style={{
        width: 24, 
        height: 24, 
        paddingTop: 2, 
        paddingBottom: 2, 
        paddingLeft: 2, 
        paddingRight: 2.40, 
        justifyContent: 'center', 
        alignItems: 'center', 
        display: 'inline-flex',
        flex: '0 1 auto'   // Don't let this grow, but it can shrink
    }}>
        <Icon icon="devicon:google" width="20" height="20"/>
    </div>
</button>

            <button className="SignInWithApple" style={{flex: '1 1 0', height: 40, paddingLeft: 16, paddingRight: 16, paddingTop: 8, paddingBottom: 8, borderRadius: 36, border: '1.60px #002766 solid', justifyContent: 'space-between', alignItems: 'center', display: 'flex'}}>
              <span className="Text" style={{flex: '1 1 0', textAlign: 'center', color: '#002766', fontSize: 15, fontFamily: 'Roboto', fontWeight: '400', lineHeight: 24}}>Sign in with Meta</span>
              <div className="CustomIcons" style={{width: 24, height: 24, paddingTop: 2, paddingBottom: 2, paddingLeft: 2, paddingRight: 2.40, justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
                {/* Place Apple SVG/Icon here */}
                <Icon icon="ri:meta-fill" width="24" height="24"/>
              </div>
            </button>
          </div>
          
          <div className="Or" style={{alignSelf: 'stretch', height: 16, justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
            <div className="Rectangle" style={{flex: '1 1 0', height: 1, background: 'black'}}></div>
            <span className="Text" style={{width: 32, textAlign: 'center', color: '#002766', fontSize: 14, fontFamily: 'Roboto', fontWeight: '400', lineHeight: 20, paddingLeft: 12, paddingRight: 12}}>OR</span>
            <div className="Rectangle" style={{flex: '1 1 0', height: 1, background: 'black'}}></div>
          </div>

          {/* Input Fields */}
          <div className="InputFields" style={{alignSelf: 'stretch', height: 188, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 20, display: 'flex'}}>
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" style={{width: '82%', padding: '10px', borderRadius: '8px', border: '1px solid #ccc',  backgroundColor: '#f5f5f5'}} />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" style={{width: '82%', padding: '10px', borderRadius: '8px', border: '1px solid #ccc',  backgroundColor: '#f5f5f5'}} />
            <button onClick={handleLogin} style={{width: '40%', padding: '10px', borderRadius: '32px',  fontSize: 16, background: '#1890FF', color: 'white', border: 'none'}}>Login</button>
          </div>

        </div>

        {/* Sign In Text */}
        <div className="SignInText" style={{width: 335, textAlign: 'center', marginLeft: '60px', paddingTop: '0' }}>
    <span style={{color: 'rgba(0, 0, 0, 0.85)', fontSize: 16, fontFamily: 'Roboto', fontWeight: '400', lineHeight: 0}}>Not a member? </span>
    <span style={{color: '#1890FF', fontSize: 16, fontFamily: 'Roboto', fontWeight: '500', lineHeight: 0}}>Sign Up</span>
    <span style={{color: 'rgba(0, 0, 0, 0.85)', fontSize: 16, fontFamily: 'Roboto', fontWeight: '400', lineHeight: 0}}>.</span>
</div>
      </div>
    </div>
  );
}


const LoginComp = () => {
    return (
      <Router>
        <Routes>
          <Route path="/country" element={<CountryWorkComponent />} />
          <Route path="/" element={<LoginComponent />} />
        </Routes>
      </Router>
    );
  }

export default LoginComp;
