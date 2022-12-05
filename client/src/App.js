import './App.css';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import heroImage from './assets/shero-image.svg';
import { useState } from 'react';
import Contact from './components/Contact/Contact';
import { useDispatch, useSelector } from 'react-redux';
import { phoneActions } from './store/phone-slice';

function App() {
  const [inputNumber, setInputNumber] = useState('');
  const phoneInput = useSelector((state) => state.phoneNumber.phoneNumber);
  const dispatch = useDispatch();

  const handleInput = (e) => {
    console.log(phoneInput);
    e.preventDefault();
    dispatch(
      phoneActions.addPhone({
        inputNumber,
      })
    );
  };

  return (
    <>
      <Navbar />
      <main>
        <div className='image-container'>
          <img src={heroImage} alt='Hero' className='hero-image' />
        </div>
        <div>
          <div className='content'>
            <h3>Learn and Earn from Stock Market with Fun</h3>
            <h2>Launching STOCKSY App (beta version)</h2>
          </div>
          <div className='input-field-number'>
            <h3>Get Early Access</h3>
            <div className='group-input'>
              <input
                type=''
                className='number-input'
                value={inputNumber}
                placeholder='Enter Phone No.'
                onChange={(e) => setInputNumber(e.target.value)}
              />
              <button className='btn' onClick={handleInput}>
                Get Link
              </button>
            </div>
          </div>
        </div>
      </main>
      <Contact />
      <Footer />
    </>
  );
}

export default App;
