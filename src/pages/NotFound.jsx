import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center mt-32 p-8">
      <h1 className="text-4xl font-bold text-red-500 mb-4">404 - Sahifa Topilmadi</h1>
      <p className="text-xl text-gray-600 mb-6">Siz qidiryotgan sahifa mavjud emas.</p>
      <Link to="/table" className="text-lg text-blue-500 hover:underline">
        Asosiy sahifaga qaytish
      </Link>
    </div>
  );
};

export default NotFound;