import Button from './Button'

const Download = () => {
  return (
    <section className='download'>
      <h2 className='section-title bold center dark-grealish-blue'>
        Clipboard for iOS and Mac OS
      </h2>
      <p className='text center grealish-blue'>
        Available for free on the App Store.
        Download for Mac or iOS, sync with
        iCloud and you’re ready to start adding to
        your clipboard.
      </p>

      <div className='buttons'>
      <Button os='iOS' />
      <Button os='Mac' />
      </div>
    </section>
  );
};

export default Download;