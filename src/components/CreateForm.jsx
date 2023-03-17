import React, { useState } from 'react';

const CreateForm = () => {
  const [tickets, setTickets] = useState([
    { title: '', price: 0, quantity: 0 },
  ]);

  const handleServiceChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...tickets];
    list[index][name] = value;
    setTickets(list);
  };

  const handleServiceRemove = (index) => {
    const list = [...tickets];
    list.splice(index, 1);
    setTickets(list);
  };

  const handleServiceAdd = () => {
    setTickets([...tickets, { title: '', price: 0, quantity: 0 }]);
  };

  return (
    <div class='flex items-center justify-center p-12'>
      <div class='mx-auto w-full max-w-[550px] bg-white rounded-xl'>
        <form class='py-6 px-9'>
          <div class='mb-5'>
            <label class='mb-3 block text-base font-medium text-[#07074D]'>
              Event Title
            </label>
            <input
              type='text'
              placeholder='Enter Title'
              class='w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md'
            />
          </div>
          <div class='mb-5'>
            <label class='mb-3 block text-base font-medium text-[#07074D]'>
              Event Description
            </label>
            <input
              type='text'
              placeholder='Enter Description'
              class='w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md'
            />
          </div>

          {tickets.map((singleService, index) => (
            <div key={index} className='services'>
              <div class='flex flex-wrap -mx-3 mb-2'>
                <div class='w-full md:w-1/3 px-3 mb-6 md:mb-0'>
                  <label class='mb-3 block text-base font-medium text-[#07074D]'>
                    Category Title
                  </label>
                  <input
                    name='title'
                    type='text'
                    value={singleService.title}
                    onChange={(e) => handleServiceChange(e, index)}
                    required
                    class='w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md'
                  />
                </div>
                <div class='w-full md:w-1/3 px-3 mb-6 md:mb-0'>
                  <label class='mb-3 block text-base font-medium text-[#07074D]'>
                    Price
                  </label>
                  <input
                    name='price'
                    type='number'
                    value={singleService.price}
                    onChange={(e) => handleServiceChange(e, index)}
                    required
                    class='w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md'
                  />
                </div>
                <div class='w-full md:w-1/3 px-3 mb-6 md:mb-0'>
                  <label class='mb-3 block text-base font-medium text-[#07074D]'>
                    Quantity
                  </label>
                  <input
                    name='quantity'
                    type='text'
                    value={singleService.quantity}
                    onChange={(e) => handleServiceChange(e, index)}
                    required
                    class='w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md'
                  />
                </div>
                {tickets.length - 1 === index && tickets.length < 4 && (
                  <button
                    type='button'
                    onClick={handleServiceAdd}
                    className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-3'
                  >
                    <span>Add a Tickets</span>
                  </button>
                )}
              </div>
              <div>
                {tickets.length !== 1 && (
                  <button
                    type='button'
                    onClick={() => handleServiceRemove(index)}
                    className='bg-fouth-color hover:bg-second-color text-white font-bold py-2 px-4 rounded-full'
                  >
                    <span>Remove Tickets</span>
                  </button>
                )}
              </div>
            </div>
          ))}
          <div class='flex flex-wrap -mx-3 mb-2'>
            <div class='w-full md:w-1/3 px-3 mb-6 md:mb-0'>
              <label class='mb-3 block text-base font-medium text-[#07074D]'>
                Date
              </label>
              <input
                type='date'
                class='w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md'
              />
            </div>
            <div class='w-full md:w-1/3 px-3 mb-6 md:mb-0'>
              <label class='mb-3 block text-base font-medium text-[#07074D]'>
                Start Time
              </label>
              <input
                type='time'
                class='w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md'
              />
            </div>
            <div class='w-full md:w-1/3 px-3 mb-6 md:mb-0'>
              <label class='mb-3 block text-base font-medium text-[#07074D]'>
                End Time
              </label>
              <input
                type='time'
                class='w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md'
              />
            </div>
          </div>

          <div class='mb-6 pt-4'>
            <label class='mb-5 block text-xl font-semibold text-[#07074D]'>
              Upload Image File
            </label>

            <div class='mb-8'>
              <input type='file' name='file' id='file' class='sr-only' />
              <label
                for='file'
                class='relative flex min-h-[200px] items-center justify-center rounded-md border border-dashed border-[#e0e0e0] p-12 text-center'
              >
                <div>
                  <span class='mb-2 block text-xl font-semibold text-[#07074D]'>
                    Drop files here
                  </span>
                  <span class='mb-2 block text-base font-medium text-[#6B7280]'>
                    Or
                  </span>
                  <span class='inline-flex rounded border border-[#e0e0e0] py-2 px-7 text-base font-medium text-[#07074D]'>
                    Browse
                  </span>
                </div>
              </label>
            </div>
          </div>
          <div>
            <button class='hover:shadow-form hover:bg-second-color w-full rounded-md bg-fouth-color py-3 px-8 text-center text-base font-semibold text-white outline-none'>
              Create Event
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateForm;
