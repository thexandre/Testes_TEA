import React from 'react';
import { Container, TitleContainer} from './styles';
interface IcontentHeaderProps{
    title:string;
    lineColor:string;
    }

const ContentHeader: React.FC<IcontentHeaderProps>=({title,lineColor}) => {
    return (
        <Container>
           <TitleContainer>
                <h1>{title}</h1>         
            </TitleContainer>    
        
             
        </Container>
       
    );
}

export default ContentHeader;

