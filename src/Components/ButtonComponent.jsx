const ButtonComponent = (props) => {
  return (
    <>
      <button style={{ backgroundColor: props.backgroundColor }}>
        {props.title}
      </button>
    </>
  );
};

export default ButtonComponent;
