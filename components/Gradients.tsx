import React from 'react';

const Gradients: React.FC = () => {
  return (
    <>
      <div className="absolute top-0 left-0 w-96 h-96 gradient-blue-dark opacity-10 blur-3xl rounded-full -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-96 h-96 gradient-purple-dark opacity-10 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 gradient-green-dark opacity-10 blur-3xl rounded-full -translate-x-1/2 translate-y-1/2 z-0 pointer-events-none" />
    </>
  );
};

export default Gradients;