import { useContext, useEffect, useState } from "react";
import { fetchCatData } from "../helpers/fetchCatData";
import { CatsContext } from "../context/cats/CatsContext"

export const CatsImages = () => {

  const { toggleModal, setSelectedCat } = useContext(CatsContext);

  useEffect(() => {
    getCats();
  }, []);

  const [randomImagesCats, setRandomImageCats] = useState([]);

  const getCats = async () => {
    await fetchCatData('/images/search?limit=6')
      .then(response => response.json())
      .then(response => setRandomImageCats(response));
  }

  const getInfoCat = async (catInfo) => {
    const { breeds } = catInfo;
    const dataCat = {
      description: breeds[0]?.description ? breeds[0]?.description : '',
      name: breeds[0]?.name ? breeds[0]?.name : '',
      url: breeds[0]?.url ? breeds[0]?.url : catInfo.url
    }

    setSelectedCat(dataCat);
    toggleModal();
  }

  return (
    <div className="flex justify-around mt-[80px] mx-32 mb-[20px]">
      {
        randomImagesCats.map((catImage, index) => (
          <div
            key={catImage.id + index}>
            <div>
              <img src={catImage.url} alt={`Gato de raza ${catImage.breeds[0]?.name + 1}`} className="rounded-[100%] aspect-square w-40 h-40 sm:w-14 sm:h-14 md:w-20 md:h-20 lg:w-30 lg:h-30 xl:w-35 xl:h-35 2xl:w-40 2xl:h-40 hover:scale-110 duration-300 cursor-pointer" onClick={() => getInfoCat(catImage)} />
            </div>

            <div className="text-center pt-7">
              <span className="sm:text-[12px] md:text-[17px] lg:text-[20px]">{catImage.breeds[0]?.name}</span>
            </div>
          </div>
        ))
      }
    </div>
  );
};
