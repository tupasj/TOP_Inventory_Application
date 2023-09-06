import { Logo } from '../../components/Header';
import { SignupForm } from '../../components/Form/SignupForm';

const RegistrationPage = () => {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-200 ">
      <div className="flex justify-center items-center py-4">
        <Logo />
      </div>
      <div className="flex-auto p-6 w-[420px] rounded-md shadow-md border-t-8 border-solid border-peach-light bg-white">
        <div className="p-4 mt-4 mb-2 rounded text-center text-extra-dark-blue bg-blue border-t-4 border-solid border-dark-blue">
          Sign up and get 25% OFF your first purchase over $50!
        </div>
        <h2 className="py-6 text-center text-xl font-semibold">
          Register using
        </h2>
        <div className="flex justify-between py-6 px-8 text-slate-600">
          <i class="fa-brands fa-facebook text-2xl cursor-pointer"></i>
          <i class="fa-brands fa-google text-2xl cursor-pointer"></i>
          <i class="fa-brands fa-paypal text-2xl cursor-pointer"></i>
          <i class="fa-brands fa-apple text-2xl cursor-pointer"></i>
          <i class="fa-brands fa-tiktok text-2xl cursor-pointer"></i>
        </div>
        <div className="flex justify-center items-center gap-4 py-6">
          <i class="fa-solid fa-circle text-[5px]"></i>
          <i class="fa-solid fa-circle text-[5px]"></i>
          <i class="fa-solid fa-circle text-[5px]"></i>
        </div>
        <div className="text-center text-sm">or make a Lorem Ipsum account</div>
        <div className="pt-6">
          <SignupForm></SignupForm>
        </div>
      </div>
    </div>
  );
};

export { RegistrationPage };
