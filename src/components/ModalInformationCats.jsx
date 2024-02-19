import { useContext, useEffect, useState } from "react"
import { CatsContext } from "../context/cats/CatsContext"

export const ModalInformationCats = () => {
    const { isOpenModal, toggleModal, selectedCat } = useContext(CatsContext);

    const [catInfo, setCatInfo] = useState([{}]);

    useEffect(() => {
        setCatInfo({
            title: selectedCat.name !== '' ? selectedCat.name : 'No breed name available at the moment, we are working on it :)',
            img: selectedCat.url,
            description: selectedCat.description
        });
    }, [selectedCat])

    return (
        <div id="cats-informations-modal" className={`fixed inset-0 ${isOpenModal ? '' : 'hidden'}`}>
            <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <div className="fixed inset-0 bg-gray-700 bg-opacity-75"></div>

                <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg w-full">

                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                {catInfo?.title !== '' ? catInfo.title : 'No breed information available at the moment, we are working on it :)'}
                            </h3>
                            <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="default-modal" onClick={toggleModal}>
                                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                </svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>

                        <div className="grid place-items-center p-4 md:p-5 space-y-4">
                            <div className="items-center">
                                <img src={catInfo?.img} alt="" className="block m-0 mx-w-[100%] mx-h-[100%] aspect-square h-96 w-80" />
                            </div>
                            <div>
                                <p className="text-white">{catInfo?.description !== '' ? catInfo.description : 'No information available at the moment, we are working on it :)'}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}