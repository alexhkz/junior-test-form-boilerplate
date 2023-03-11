import { useEffect, useState } from 'react';

import { ImageListWrapper, Ul } from './styles';

export const ImageList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [photos, setPhotos] = useState([]);

  const fetchData = () => {
    fetch(
      `https://api.unsplash.com/photos/?client_id=bnaNhON20Sbnx8PG2rRcrMhTNTURZdzW2_PEgU86Un4&per_page=5&page=${currentPage}&`,
    )
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setPhotos(res);
      });
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  const renderPhotos = () => {
    return photos.map((obj, id) => (
      <li key={id}>
        <div>
          <img src={obj.urls.small} alt="Фото с unsplash.com" />
        </div>
        <div>
          Дата создания: {obj.created_at}
          <br />
        </div>
      </li>
    ));
  };

  return (
    <ImageListWrapper>
      <Ul>{photos && renderPhotos()}</Ul>
      <li>Image1</li>
    </ImageListWrapper>
  );
};
