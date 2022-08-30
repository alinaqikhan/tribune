import Image from 'next/image';

const Jumbotron = () => {
  return (
    <div>
      <div className='flex items-center justify-center gap-3'>
        <Image src={'/logo.png'} width={60} height={60} />
        <p className="font-stylish text-2xl font-semibold">UET Tribune</p>
      </div>
      <p className="font-stylish font-normal text-lg mt-2 text-center rulers">
        The Largest and Official Media Network of UET
      </p>
    </div>
  );
};

export default Jumbotron;
