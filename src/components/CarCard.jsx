
import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const CarCard = ({ car }) => {
  const currency = import.meta.env.VITE_CURRENCY || '$'  // fallback
  const navigate = useNavigate();

  return (
    <div 
      onClick={() => { 
        navigate(`/car-details/${car._id}`); 
        scrollTo(0, 0); 
      }}
      className="group rounded-xl overflow-hidden shadow-lg hover:-translate-y-1 
      transition-transform duration-500 cursor-pointer bg-white"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={car.image}
          alt={`${car.brand} ${car.model}`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Available Now tag */}
        {car.isAvaliable && (
          <p className='absolute top-4 left-4 bg-primary/90 text-white text-xs px-2.5 py-1 rounded-full z-30'>
            Available Now
          </p>
        )}

        {/* Price tag */}
        {car.pricePerDay != null && (
          <div className="absolute bottom-4 right-4 z-20 bg-black/80 backdrop-blur-sm text-white px-3 py-2 rounded-lg">
            <span className="font-semibold">{currency}{car.pricePerDay}</span>
            <span className="text-sm text-white/80">/ day</span>
          </div>
        )}
      </div>

      <div className="p-4 sm:p-5">
        <h3 className="text-lg font-medium">{car.brand} {car.model}</h3>
        <p className="text-gray-500 text-sm">{car.category} · {car.year}</p>

        <div className="mt-4 grid grid-cols-2 gap-y-2 gap-x-4 text-gray-600">
          <div className="flex items-center text-sm">
            <img src={assets.users_icon} alt="Seats icon" className="h-4 mr-2" />
            <span>{car.seating_capacity} Seats</span>  
          </div>
          <div className="flex items-center text-sm">
            <img src={assets.fuel_icon} alt="Fuel icon" className="h-4 mr-2" />
            <span>{car.fuel_type}</span>
          </div>
          <div className="flex items-center text-sm">
            <img src={assets.car_icon} alt="Transmission icon" className="h-4 mr-2" />
            <span>{car.transmission}</span>
          </div>
          <div className="flex items-center text-sm">
            <img src={assets.location_icon} alt="Location icon" className="h-4 mr-2" />
            <span>{car.location}</span>
          </div>
        </div>
      </div>
    </div>
  )
}  

export default CarCard;
