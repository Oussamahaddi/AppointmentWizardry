import { TbClover } from "react-icons/tb";
const LoadingSpinner = () => {
return (
    <div className='flex h-screen flex-col items-center justify-center bg-primary-content'>
        <TbClover className="w-28 h-28 text-primary animate-spin"/>
        <span className='text-5xl font-bold text-primary'>Chargement . . .</span>
    </div>
);
};
export default LoadingSpinner;