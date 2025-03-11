import React from 'react'

const cards = [
    { id: 1, label: "Health", title: "MORU", image: "https://via.placeholder.com/300x200" },
    { id: 2, label: "Health", title: "DGFI", image: "https://via.placeholder.com/300x200" },
    { id: 3, label: "RMG", title: "JW Apparel", image: "https://via.placeholder.com/300x200" },
    { id: 4, label: "Ecommerce", title: "Emedi Pharma", image: "https://via.placeholder.com/300x200" },

  ];

const Work = () => {
  return (
    <div className='max-w-screen-xl mx-auto'>
        <p className='text-[90px] text-center font-semibold'>Our Recent Works</p>
         <div className="grid grid-cols-2 gap-6 mt-2">
      {cards.map((card) => (
        <div key={card.id} className="relative group">
          <img
            src={card.image}
            alt={card.title}
            className="w-full h-auto rounded-2xl shadow-lg"
          />
          <div
            className="absolute inset-0 bg-black bg-opacity-50  rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <div className='flex flex-col justify-center items-center h-full'>
                <div>
            <p className='text-sm bg-gray-400 text-white rounded-full py-1 px-3 text-center'>{card.label}</p>
            <p className="text-white text-lg font-semibold text-center">{card.title}</p>
            </div>
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>
  )
}
export default Work;