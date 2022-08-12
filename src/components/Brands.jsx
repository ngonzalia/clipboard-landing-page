import Google from '../assets/logo-google.png';
import IBM from '../assets/logo-ibm.png';
import Microsoft from '../assets/logo-microsoft.png';
import HP from '../assets/logo-hp.png';
import VG from '../assets/logo-vector-graphics.png';

const Brands = () => {
  return (
    <section className='brands'>
      <h2 className='hide'>Some title</h2>
      <img src={Google} alt='Google logo' />
      <img src={IBM} alt='IBM logo' />
      <img src={Microsoft} alt='Microsoft logo' />
      <img src={HP} alt='HP logo' />
      <img src={VG} alt='Vector graphics logo' />
    </section>
  );
};

export default Brands;