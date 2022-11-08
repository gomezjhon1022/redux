import { StarButton } from './StarButton'
import { Card } from 'antd';
import Meta from 'antd/lib/card/Meta';
import { useDispatch } from 'react-redux';
import { setFavorite } from '../actions'

const PokemonCard = ({name, image, types, id, favorite }) => {
  const dispatch = useDispatch();
  const typesString = types.map(Element => Element.type.name).join (', ')
  const handleOnFavorite = () => {
    dispatch(setFavorite({pokemonId: id}))
  }
  return (<Card
    title={name}
    cover={<img src={image} alt={name} />}
    extra={<StarButton isFavorite={favorite} onClick={handleOnFavorite}/>}
  >
    <Meta description={typesString}/>
  </Card>
  );
};

export { PokemonCard };