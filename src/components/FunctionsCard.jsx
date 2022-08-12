const Card = (props) => {
  return (
    <div className='card'>
      <div className='img-container'>
        <img
          src={props.img}
          alt={props.title} />
      </div>
      <h3 className='subtitle bold center dark-grealish-blue'>
        {props.title}
      </h3>
      <p className='text center grealish-blue'>
        {props.text}
      </p>
    </div>
  );
};

export default Card;