const SkeletnLoading = () => {
  return (
    <div className="border-[2px] p-[10px] relative h-[485px] rounded-lg">
      <div className="border-[2px] p-[10px] relative h-[485px] rounded-lg animate-pulse">
        <div className="w-[100%] h-[250px] bg-gray-300 rounded-lg"></div>
        <div className="text-[#6e2431] text-[18px] w-[385x] h-[20px] bg-gray-300 rounded mt-[5px]"></div>
        <div className="text-[16px] text-[#202224] bg-gray-300 rounded mt-[5px] h-[20px]"></div>
        <div className="text-[14px] text-[#9ba2a8] bg-gray-300 rounded mt-[12px] h-[40px]"></div>
        <div className="text-[14px] bg-gray-300 rounded absolute right-[20px] bottom-[15px] h-[14px] w-[80px]"></div>
      </div>
    </div>
  );
};

export default SkeletnLoading;
