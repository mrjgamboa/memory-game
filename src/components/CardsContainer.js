import Wrapper from './Wrapper/Wrapper';
import Card from './Card/Card';

export default function CardsContainer({dataArray, onCardClick}) {
  return (
    <Wrapper>
      {(dataArray.length === 4) &&
        dataArray.map((item) => (
          <Card 
            key={item.id} 
            data={item} 
            onCardClick={() => onCardClick(
              item.clicked, 
              item.id,
              item.name,
            )}
          />
        ))
      }
    </Wrapper>
  );
};
