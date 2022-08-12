const SnippetsCard = (props) => {
  return (
    <div className='snippets__card'>
      <h3 className='subtitle center bold dark-grealish-blue'>
        {props.title}
      </h3>
      <p className='text center grealish-blue'>
        {props.text}
      </p>
    </div>
  );
};

export default SnippetsCard;