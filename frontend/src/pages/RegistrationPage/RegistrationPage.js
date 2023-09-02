import { Logo } from '../../components/Header';

const RegistrationPage = () => {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-200 ">
      <div className="flex justify-center items-center py-4">
        <Logo />
      </div>
      <div className="flex flex-col flex-auto justify-center items-center w-[420px]">
        <div className="flex-auto bg-white">Register using</div>
      </div>
    </div>
  );
};

export { RegistrationPage };
