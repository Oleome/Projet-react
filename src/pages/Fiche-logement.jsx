import Appartement from '../appartements';
import styled from 'styled-components';

const StyledContainer = styled.div`
  padding: 150px;
  background-color: #E5E5E5;
  min-width: 300px;
`

function FicheLogement () {
    return (
        <StyledContainer>
          <Appartement />
        </StyledContainer>
      )}
    
export default FicheLogement;