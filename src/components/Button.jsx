const Button = props => {

  const isiOS = value => {
    return value === 'iOS';
  };

  return (
    <button
      className={`button-text center bold button ${isiOS(props.os) ? 'button--ios' : 'button--mac'}`}>
      Download for {props.os}
    </button>
  );
};

export default Button;