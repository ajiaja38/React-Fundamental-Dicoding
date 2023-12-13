import { Card, CardBody, CardFooter } from "@material-tailwind/react";

const CardSkeleton = () => {
  return (
    <Card className="w-full md:w-72 2xl:w-72 border animate-pulse bg-gray-400 dark:bg-blue-gray-700 dark:border-blue-gray-600">
      <CardBody>
        <div className="w-full h-32 p-2 rounded-lg bg-gray-200 dark:bg-blue-gray-400 shadow-md animate-pulse mb-3"></div>
        <div className="w-32 p-2 rounded-lg bg-gray-200 dark:bg-blue-gray-400 shadow-md animate-pulse mb-3"></div>
        <div className="flex flex-col gap-1 animate-pulse">
          <div className="w-40 p-2 rounded-lg bg-gray-200 dark:bg-blue-gray-400 shadow-md"></div>
          <div className="w-32 p-2 rounded-lg bg-gray-200 dark:bg-blue-gray-400 shadow-md"></div>
          <div className="w-40 p-2 rounded-lg bg-gray-200 dark:bg-blue-gray-400 shadow-md"></div>
        </div>
      </CardBody>
      <CardFooter className="pt-0">
        <div className="w-20 p-4 rounded-lg bg-gray-200 dark:bg-blue-gray-400 shadow-md animate-pulse"></div>
      </CardFooter>
    </Card>
  );
};

export default CardSkeleton;
