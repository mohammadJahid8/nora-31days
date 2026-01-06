import GlobalStyles from './global-styles';

const Loading = () => {
  return (
    <div className='h-screen bg-[#0D1642] flex flex-col items-center justify-center'>
      <GlobalStyles />
      <div className='w-16 h-16 border-t-2 border-[#D4AF37] rounded-full animate-spin mb-6' />
      <p className='text-[#D4AF37] tracking-[0.5em] text-[0.6rem] uppercase font-black'>
        Initializing Sovereign Node
      </p>
    </div>
  );
};

export default Loading;
