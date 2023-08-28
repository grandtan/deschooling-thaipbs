import { YoutubeResponse } from '@/types/teacher';
import React from 'react';

interface Props {
  item: YoutubeResponse | undefined;
}

const ViedoCard = ({ item }: Props) => {
  return <div>{item?.kind}</div>;
};

export default ViedoCard;
