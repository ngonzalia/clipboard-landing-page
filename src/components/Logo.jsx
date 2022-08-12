import LogoImg from '../assets/logo.svg';

const Logo = () => {
  return (
    <header className="logo">
      <h2 className='hide'>Some title</h2>
      <img src={LogoImg} alt="logo" />
    </header>
  );
};

export default Logo;