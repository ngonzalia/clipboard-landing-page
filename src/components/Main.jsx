import Button from './Button'

const Main = () => {
  return (
    <main className='main'>
      <h1 className='main-title center dark-grealish-blue'>
        A history of everything you copy
      </h1>
      <p className='text center grealish-blue'>
        Clipboard allows you to track and
        organize everything you copy. Instantly
        access your clipboard on all your devices.
      </p>
      <div className='buttons'>
        <Button os='iOS' />
        <Button os='Mac' />
      </div>
    </main>
  );
};

export default Main;