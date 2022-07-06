import { Fragment } from 'react';
import ButtonAdotar from '../ButtonAdotar';
import CarouselBody from '../CarouselBody';
import ConatinerContend from '../ContainerContend';
import handHeart from '../../assets/handHeart.png'
import searchHeartWhite from '../../assets/searchHeartWhite.png'
import ale from '../../assets/ale.png'
import lucas from '../../assets/lucas.png'
import * as S from './styles';

const BodyMenu = () => {
  return (
    <Fragment>
        <S.SytledContainer>
            <ButtonAdotar display = {true}  color='#1E1E1E'>
                Adotar um amigo
                <S.Img src= {searchHeartWhite}/> 
            </ButtonAdotar>

            <ButtonAdotar display = {true} color='white' margin={4}>
                Quero Doar
                <S.Img src= {handHeart}/>
            </ButtonAdotar>
        </S.SytledContainer>

        <S.SytledContainer>
            <ConatinerContend>
                <S.H4 color='#ED7957'>me.adota</S.H4>
                <S.ImgBody src= {ale} />
                <S.H1>Quem somos</S.H1>
                <S.P>
                    O me.adota começou a partir da ideia de facilitar o processo de adoção desburocratizando a comunicação entre os protetores e as pessoas que sonham em adotar um pet.<br/><br/>

                    Trazemos também a intenção de garantir um match entre o perfil do pet e dos interessados através de um filtro personalizado que vai dar a você a chance de encontrar o parceiro mais fiel da sua vida.<br/><br/>

                    Aprecie e se apaixone pelo bichinho que vai conquistar o seu coração.
                </S.P>
            </ConatinerContend>
        </S.SytledContainer>
        
        <S.SytledContainer>
            <ConatinerContend>
                <S.H4 color='#FAD673'>Adote, não compre.</S.H4>
                <S.ImgBody src= {lucas} />
                <S.H1>Quem somos</S.H1>
                <S.H4 color='black'>Adoção responsável</S.H4>
                <S.P bold='bold'>
                    Algumas coisinhas que você precisa saber antes de adotar:
                </S.P>

                <S.P bold='500'>
                - É ideal que todos da casa estejam de acordo com o novo membro; <br/><br/>

                - Ter tempo e disposição para cuidar dos peludinhos; <br/><br/>

                - Dar uma organizada nas finanças, pets exigem comprometimento financeiro;<br/><br/>

                - Estar preparado pra receber esse pet pela vida todinha, dele.

                </S.P>

                <S.P bold='bold'>
                    O pet perfeito para você
                </S.P>

                <S.P bold='500'>
                Se atente a características específicas da personalidade e raça do peludo, observe também caraterísticas do ambiente e clima no qual ele será inserido. Tudo isso influencia na adaptação e na relação que você terá com o seu novo pet.

                </S.P>
                <S.P bold='bold'>
                    Mais algumas dicas para o match perfeito
                </S.P>

                <S.P bold='500'>
                - Vibes sincronizadas. Os pets também tem energia ou nenhuma (risos)  que bate com a sua, então é bom saber se você é do time ligado no 220v ou sonequinha; <br/><br/>

                - Panela velha é que faz comida boa. Considerar adotar pets idosinhos é tudo de bom pra quem prefere um pouco de sossego e ter um bichinho com a personalidade formada;<br/><br/>

                - Tá emocionade? Segura o coração e não siga o impulso de adotar sem pensar na vidinha que vai acolher, a partir do momento que o pet entra na sua vida, você vira a família dele.           
                </S.P>

            </ConatinerContend>
        </S.SytledContainer>

        <S.SytledContainer>
            <S.H4 color='#77B291'>Aumigos</S.H4>
            <h2>Testemunhos</h2>
            <CarouselBody/>
        </S.SytledContainer>

        <S.SytledContainer>
            <S.H4 color='#FAD673'>Na plataforma</S.H4>
            <h2>Ongs Parceiras</h2>
            <CarouselBody/>
        </S.SytledContainer>


    </Fragment>

  );
}

export default BodyMenu;