
import React, { useState } from 'react'
import Title from '../../components/owner/Title'
import { assets } from '../../assets/assets'

const AddCar = () => {
  const currency = import.meta.env.VITE_CURRENCY

  const [image, setImage] = useState(null)
  const [car, setCar] = useState({
    brand: '',
    model: '',
    year: '',
    pricePerDay: '',
    category: '',
    tranasmission: '',
    fuel_type: '',
    seating_capacity: '',
    location: '',
    description: '',
  })

  const onSubmitHandler = async (e) => {
    e.preventDefault()
    // form submit logic
  }

  return (
    <div className='px-4 py-10 md:px-10 flex-1'>
      <Title
        title='Add New Car'
        subTitle='Fill details to list a new car for booking, including pricing, availability and car specification'
      />

      <form
        onSubmit={onSubmitHandler}
        className='flex flex-col gap-5 text-gray-500 text-sm mt-6 max-w-xl'
      >
        {/* Car Image */}
        <div className='flex items-center gap-2 w-full'>
          <label htmlFor='car-image' className='cursor-pointer'>
            <img
              src={image ? URL.createObjectURL(image) : assets.upload_icon}
              alt=''
              className='h-14 rounded cursor-pointer'
            />
            <input
              type='file'
              id='car-image'
              accept='image/*'
              hidden
              onChange={(e) => setImage(e.target.files[0])}
            />
          </label>
          <p className='text-sm text-gray-500'>Upload a picture of your car</p>
        </div>

        {/* Brand & Model */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <div className='flex flex-col w-full'>
            <label className='mb-1'>Brand</label>
            <input
              type='text'
              placeholder='e.g. BMW, Mercedes, Audi...'
              required
              className='w-full px-3 py-2 border border-gray-300 rounded-md outline-none focus:border-blue-500 focus:ring-0'
              value={car.brand}
              onChange={(e) => setCar({ ...car, brand: e.target.value })}
            />
          </div>
          <div className='flex flex-col w-full'>
            <label className='mb-1'>Model</label>
            <input
              type='text'
              placeholder='e.g. X5, E-Class, M4...'
              required
              className='w-full px-3 py-2 border border-gray-300 rounded-md outline-none focus:border-blue-500 focus:ring-0'
              value={car.model}
              onChange={(e) => setCar({ ...car, model: e.target.value })}
            />
          </div>
        </div>

        {/* Year, Price, Category */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
          <div className='flex flex-col w-full'>
            <label className='mb-1'>Year</label>
            <input
              type='number'
              placeholder='2025'
              required
              className='w-full px-3 py-2 border border-gray-300 rounded-md outline-none focus:border-blue-500 focus:ring-0'
              value={car.year}
              onChange={(e) => setCar({ ...car, year: e.target.value })}
            />
          </div>
          <div className='flex flex-col w-full'>
            <label className='mb-1'>Daily Price ({currency})</label>
            <input
              type='number'
              placeholder='100'
              required
              className='w-full px-3 py-2 border border-gray-300 rounded-md outline-none focus:border-blue-500 focus:ring-0'
              value={car.pricePerDay}
              onChange={(e) => setCar({ ...car, pricePerDay: e.target.value })}
            />
          </div>
          <div className='flex flex-col w-full'>
            <label className='mb-1'>Category</label>
            <select
              className='w-full px-3 py-2 border border-gray-300 rounded-md outline-none focus:border-blue-500 focus:ring-0'
              value={car.category}
              onChange={(e) => setCar({ ...car, category: e.target.value })}
              required
            >
              <option value=''>Select a category</option>
              <option value='Sedan'>Sedan</option>
              <option value='SUV'>SUV</option>
              <option value='Van'>Van</option>
            </select>
          </div>
        </div>

        {/* Transmission, Fuel type, Seating */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
          <div className='flex flex-col w-full'>
            <label className='mb-1'>Transmission</label>
            <select
              className='w-full px-3 py-2 border border-gray-300 rounded-md outline-none focus:border-blue-500 focus:ring-0'
              value={car.tranasmission}
              onChange={(e) =>
                setCar({ ...car, tranasmission: e.target.value })
              }
              required
            >
              <option value=''>Select Transmission</option>
              <option value='Automatic'>Automatic</option>
              <option value='Manual'>Manual</option>
              <option value='Semi-Automatic'>Semi-Automatic</option>
            </select>
          </div>
          <div className='flex flex-col w-full'>
            <label className='mb-1'>Fuel Type</label>
            <select
              className='w-full px-3 py-2 border border-gray-300 rounded-md outline-none focus:border-blue-500 focus:ring-0'
              value={car.fuel_type}
              onChange={(e) =>
                setCar({ ...car, fuel_type: e.target.value })
              }
              required
            >
              <option value=''>Select Fuel Type</option>
              <option value='Gas'>Gas</option>
              <option value='Diesel'>Diesel</option>
              <option value='Petrol'>Petrol</option>
              <option value='Hybrid'>Hybrid</option>
              <option value='Electric'>Electric</option>
            </select>
          </div>
          <div className='flex flex-col w-full'>
            <label className='mb-1'>Seating Capacity</label>
            <input
              type='number'
              placeholder='4'
              required
              className='w-full px-3 py-2 border border-gray-300 rounded-md outline-none focus:border-blue-500 focus:ring-0'
              value={car.seating_capacity}
              onChange={(e) =>
                setCar({ ...car, seating_capacity: e.target.value })
              }
            />
          </div>
        </div>

        {/* Location & Description */}
        <div className='flex flex-col w-full'>
          <label className='mb-1'>Location</label>
          <select
            className='w-full px-3 py-2 border border-gray-300 rounded-md outline-none focus:border-blue-500 focus:ring-0'
            value={car.location}
            onChange={(e) => setCar({ ...car, location: e.target.value })}
            required
          >
            <option value=''>Select a location</option>
            <option value='New York'>New York</option>
            <option value='Los Angeles'>Los Angeles</option>
            <option value='Houston'>Houston</option>
            <option value='Chicago'>Chicago</option>
          </select>
        </div>

        <div className='flex flex-col w-full'>
          <label className='mb-1'>Description</label>
          <textarea
            rows={5}
            placeholder='e.g. A luxurious SUV with a spacious interior and a powerful engine.'
            required
            className='w-full px-3 py-2 border border-gray-300 rounded-md outline-none focus:border-blue-500 focus:ring-0'
            value={car.description}
            onChange={(e) =>
              setCar({ ...car, description: e.target.value })
            }
          />
        </div>

        <button
          type='submit'
          className='flex items-center gap-2 px-4 py-2.5 mt-4 bg-primary text-white rounded-md font-medium w-max cursor-pointer'
        >
          <img src={assets.tick_icon} alt='' />
          List Your Car
        </button>
      </form>
    </div>
  )
}

export default AddCar
