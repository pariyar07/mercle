import MercleLogo from '../public/mercle.svg';
import EngagementHelper from './components/EngagementHelper';

function App() {
  return (
    <main className='main-section'>
      <img src={MercleLogo} alt="Logo" />
      <section>
        <EngagementHelper />
      </section>
    </main>
  );
}

export default App;
