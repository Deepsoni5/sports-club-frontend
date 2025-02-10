import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export function SearchBar() {
  return (
    <div className="relative">
      <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
      <Input placeholder="Search for something" className="pl-8" />
    </div>
  );
}
