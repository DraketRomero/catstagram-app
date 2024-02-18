import { useContext, useEffect } from "react";
import { CatsContext } from "../context/cats/CatsContext";
import ig from './../assets/ig.png';

export const Navbar = () => {
  const { breeds, getBreeds, onSelectedBreed } = useContext(CatsContext);

  useEffect(() => {
    getBreeds();
  }, []);

  return (
    <section>
      <nav className="mt-[40px] mr-[90px]">
        <div className="flex justify-between">
          <div className="flex">
            <div className="ml-[40px]">
              <img src={ig} alt="" className="aspect-square h-14" />
            </div>
            <div className="flex ml-[20px] items-center justify-center">Catstagram Inc.</div>
          </div>

          <div>
            <select className="w-full h-[40px] rounded-md bg-[#0969da] text-white cursor-pointer text-center justify-center">
              <option value="">Select breed</option>
              {breeds.length > 0 &&
                breeds.map((breed) => (
                  <option
                    value={breed.id}
                    key={breed.id}
                    onClick={() => onSelectedBreed(breed.id)}
                  >
                    {breed.name}
                  </option>
                ))}
            </select>
          </div>
        </div>
      </nav>
    </section>
  );
};
