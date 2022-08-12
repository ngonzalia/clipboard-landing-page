import Computer from '../assets/image-computer.png'
import SnippetsCard from './SnippetsCard';

const Snippets = () => {
  return (
    <section className='snippets'>
      <h2 className='section-title center bold dark-grealish-blue'>
        Keep track of your snippets
      </h2>
      <p className='text center grealish-blue snippets__text'>
        Clipboard instantly stores any item you
        copy in the cloud, meaning you can
        access your snippets immediately on all
        your devices. Our Mac and iOS apps will
        help you organize everything.
      </p>

      <div className='snippets__section'>
        <img 
          src={Computer}
          alt="Computer"
          className='snippets__img'
        />
        
        <div className='snippets__cards'>
          <SnippetsCard
            title='Quick Search'
            text='Easily search your snippets by content,
            category, web address, application, and
            more.' />
          <SnippetsCard
            title='iCloud Sync'
            text='Instantly saves and syncs snippets
                  across all your devices.' />
          <SnippetsCard
            title='Complete History'
            text='Retrieve any snippets from the first
            moment you started using the app.' />
          </div>
      </div>
    </section>
  );
};

export default Snippets;