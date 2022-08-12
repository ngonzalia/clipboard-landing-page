import DevicesImg from '../assets/image-devices.png';

const Devices = () => {
  return (
    <section className='devices'>
      <h2 className='section-title bold center dark-grealish-blue'>
        Access Clipboard anywhere
      </h2>

      <p className='text center grealish-blue'>
        Whether you’re on the go, or at your
        computer, you can access all your
        Clipboard snippets in a few simple clicks.
      </p>

      <img 
        className='devices__img'
        src={DevicesImg}
        alt='Devices' />
    </section>
  );
};

export default Devices;