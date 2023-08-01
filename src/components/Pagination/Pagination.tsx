import { Container } from "./Pagination.styles";

export const Pagination : React.FC =()=>{
  return(
    <Container>
      <div className="pager">
        <button><span></span></button>
        <button><span></span></button>
        <button><span></span></button>
        <button><span></span></button>
        <button><span></span></button>
      </div>
    </Container>
  );
};