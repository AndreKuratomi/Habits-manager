import { Container, InputContainer } from "./styles";

const Input = ({ icon: Icon, register, name, error, ...rest }) => {
  return (
    <Container isErrored={!!error}>
      <InputContainer isErrored={!!error}>
        <input {...register(name)} {...rest} />
        {Icon && <Icon />}
      </InputContainer>
      <div>
        {!!error && <p>{error}</p>}
      </div>
    </Container>
  );
}

export default Input;
