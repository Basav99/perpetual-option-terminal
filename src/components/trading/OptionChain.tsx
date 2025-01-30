import { ActionButton } from "./ActionButton";
import { DataCell } from "./DataCell";
import { Select } from "@/components/ui/select";
import { ChevronDown } from "lucide-react";

const mockData = [
  {
    id: 1,
    openInterest: "5.25 L",
    ltpChange: 32.36,
    ltp: 707.15,
    strike: 22450,
    ltpRight: 4.00,
    ltpChangeRight: -32.36,
    openInterestRight: "5.25 L",
    value: -1.04,
  },
  {
    id: 2,
    openInterest: "35600",
    ltpChange: 38.55,
    ltp: 680.70,
    strike: 22500,
    ltpRight: 6.60,
    ltpChangeRight: -38.55,
    openInterestRight: "35600",
    value: 425,
  },
  {
    id: 3,
    openInterest: "1.76 L",
    ltpChange: 44.72,
    ltp: 623.00,
    strike: 22550,
    ltpRight: 9.00,
    ltpChangeRight: -44.72,
    openInterestRight: "1.76 L",
    value: -16250,
  },
];

export const OptionChain = () => {
  return (
    <div className="w-full max-w-7xl mx-auto p-6 bg-white rounded-lg shadow-sm animate-fade-in">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-neutral-800 mb-2">
          Option Chain - Perpetual American Options
        </h1>
        <div className="flex gap-4 mb-4">
          <Select>
            <Select.Trigger className="w-[200px]">
              <Select.Value placeholder="Select asset" />
            </Select.Trigger>
            <Select.Content>
              <Select.Item value="btc">Bitcoin (BTC)</Select.Item>
              <Select.Item value="eth">Ethereum (ETH)</Select.Item>
            </Select.Content>
          </Select>
          <Select>
            <Select.Trigger className="w-[200px]">
              <Select.Value placeholder="Select expiry" />
            </Select.Trigger>
            <Select.Content>
              <Select.Item value="1w">1 Week</Select.Item>
              <Select.Item value="2w">2 Weeks</Select.Item>
            </Select.Content>
          </Select>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-neutral-50">
              <th className="px-4 py-2 text-left text-sm font-semibold text-neutral-600">Action</th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-neutral-600">OI</th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-neutral-600">LTP Chg%</th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-neutral-600">LTP</th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-neutral-600">Strike</th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-neutral-600">LTP</th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-neutral-600">LTP Chg%</th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-neutral-600">OI</th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-neutral-600">Action</th>
            </tr>
          </thead>
          <tbody>
            {mockData.map((row) => (
              <tr key={row.id} className="border-b border-neutral-100 hover:bg-neutral-50 transition-colors">
                <td className="px-4 py-2">
                  <div className="flex gap-2">
                    <ActionButton variant="buy">Buy</ActionButton>
                    <ActionButton variant="sell">Sell</ActionButton>
                  </div>
                </td>
                <td>
                  <DataCell value={row.openInterest} />
                </td>
                <td>
                  <DataCell value={row.ltpChange} type="percentage" isPositive={row.ltpChange > 0} />
                </td>
                <td>
                  <DataCell value={row.ltp} type="price" />
                </td>
                <td>
                  <DataCell value={row.strike} type="strike" />
                </td>
                <td>
                  <DataCell value={row.ltpRight} type="price" />
                </td>
                <td>
                  <DataCell value={row.ltpChangeRight} type="percentage" isPositive={row.ltpChangeRight > 0} />
                </td>
                <td>
                  <DataCell value={row.openInterestRight} />
                </td>
                <td className="px-4 py-2">
                  <div className="flex gap-2">
                    <ActionButton variant="sell">Sell</ActionButton>
                    <ActionButton variant="buy">Buy</ActionButton>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};