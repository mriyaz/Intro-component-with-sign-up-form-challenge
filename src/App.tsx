// src/App.tsx
import React from 'react';
import { SignupForm } from './components/SignupForm';
import bgMobile from './images/bg-intro-mobile.png';
import bgDesktop from './images/bg-intro-desktop.png';

const App: React.FC = () => {
  return (
    <div className=' container min-h-screen mx-auto bg-primary-red pb-12 sm:max-w-full sm:p-20 sm:flex sm:items-center'
      style={{ backgroundImage: `url(${bgMobile})`, backgroundSize: 'cover' }}>

      {/* This div is shown only on sm screens and larger */}
      <div
        className="hidden sm:flex "
        style={{
          backgroundImage: `url(${bgDesktop})`, // Desktop background image
        }}
      ></div>


      <div className="max-w-xs mx-auto pt-20 px-6 text-center sm:max-w-md sm:px-1 sm:text-left">

        <h1 className='text-3xl text-white mb-6 font-semibold sm:text-5xl sm:font-bold'>Learn to code by watching others</h1>
        <p className='text-sm text-white mb-6 '>
          See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable.
        </p>
      </div>

      <div className=" max-w-xs mx-auto  px-6 text-center sm:max-w-md sm:px-1 ">
        <div className='bg-accent-blue text-white mb-6 px-12 py-4 rounded-md shadow-lg'>
          <p className='text-sm'>
            <b>Try it free 7 days</b> then $20/mo. thereafter
          </p>
        </div>
        <SignupForm />
      </div>
    </div>
  );
};

export default App;
