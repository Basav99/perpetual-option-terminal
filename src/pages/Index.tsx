import { OptionChain } from "@/components/trading/OptionChain";

const Index = () => {
  return (
    <div className="min-h-screen bg-neutral-50 py-8">
      <div className="container">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-neutral-800">
            Perpetual American Options Trading
          </h1>
          <button className="px-4 py-2 text-sm font-medium text-neutral-600 hover:text-neutral-800 transition-colors">
            View Portfolio
          </button>
        </div>
        <OptionChain />
      </div>
    </div>
  );
};

export default Index;