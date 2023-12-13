const LoadingNote = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="bg-blue-gray-100 dark:bg-blue-gray-800 p-6 w-full rounded-lg animate-pulse"></div>
      <div className="bg-blue-gray-100 dark:bg-blue-gray-800 p-3 w-3/4 rounded-lg animate-pulse"></div>
      <div className="bg-blue-gray-100 dark:bg-blue-gray-800 p-3 w-4/5 rounded-lg animate-pulse"></div>
      <div className="bg-blue-gray-100 dark:bg-blue-gray-800 p-3 w-4/6 rounded-lg animate-pulse"></div>
      <div className="bg-blue-gray-100 dark:bg-blue-gray-800 p-3 w-4/5 rounded-lg animate-pulse"></div>
      <div className="flex flex-col md:flex-row gap-2 mt-3">
        <div className="bg-blue-gray-100 dark:bg-blue-gray-800 p-4 md:p-5 w-full md:w-52 rounded-lg animate-pulse "></div>
        <div className="bg-blue-gray-100 dark:bg-blue-gray-800 p-4 md:p-5 w-full md:w-52 rounded-lg animate-pulse"></div>
      </div>
    </div>
  );
};

export default LoadingNote;
