import Card from './FunctionsCard';

// images
import BlacklistsIcon from '../assets/icon-blacklist.svg'
import PlainTextIcon from '../assets/icon-text.svg'
import PreviewIcon from '../assets/icon-preview.svg'

const Functions = () => {
  return (
    <section className='functions'>
      <h2 className='section-title bold center dark-grealish-blue'>
        Supercharge your workflow
      </h2>
      <p className='text center grealish-blue'>
        We’ve got the tools to boost 
        your productivity.
      </p>

      <div className='cards'>
        <Card
          img={BlacklistsIcon}
          title='Create blacklists'
          text='Ensure sensitive information never makes its way to your clipboard by excluding certain sources.' />
        <Card 
          img={PlainTextIcon}
          title='Plain text snippets'
          text='Remove unwanted formatting from copied text for a consistent look.' />
        <Card
          img={PreviewIcon}
          title='Sneak preview'
          text='Quick preview of all snippets on your Clipboard for easy access.' />
      </div>
    </section>
  );
};

export default Functions;