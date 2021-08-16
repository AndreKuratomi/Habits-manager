import { Container, InputContainer } from "./styles";

const Input = ({
  icon: Icon,
  register,
  name,
  error,
  pass,
  setShow,
  show,
  ...rest
}) => {
  return (
    <Container isErrored={!!error}>
      <InputContainer isErrored={!!error}>
        <input {...register(name)} {...rest} />
        {Icon && pass ? (
          <button
            type="button"
            onClick={() => {
              setShow(!show);
            }}
          >
            <Icon />
          </button>
        ) : (
          <Icon />
        )}
      </InputContainer>
    </Container>
  );
};

export default Input;
