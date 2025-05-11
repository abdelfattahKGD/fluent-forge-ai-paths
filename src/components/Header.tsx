
import { Bell, Book, Calendar, MessageCircle, Search, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-white shadow-sm py-4 px-6 flex items-center justify-between sticky top-0 z-10">
      <div className="flex items-center space-x-2">
        <div className="font-bold text-2xl text-lingua-teal flex items-center">
          <Book className="mr-2 text-lingua-teal" />
          <span>Lingua</span>
          <span className="text-lingua-orange">Flow</span>
        </div>
      </div>
      
      <div className="flex-1 max-w-xl mx-10 relative hidden md:block">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          <input
            type="text"
            placeholder="Search lessons, vocabulary, or grammar..."
            className="w-full bg-gray-50 border border-gray-100 rounded-full pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-lingua-teal/20"
          />
        </div>
      </div>
      
      <nav className="flex items-center space-x-1 sm:space-x-2">
        <Button variant="ghost" size="icon" className="text-gray-600 hidden sm:flex">
          <Calendar size={20} />
        </Button>
        <Button variant="ghost" size="icon" className="text-gray-600 hidden sm:flex">
          <MessageCircle size={20} />
        </Button>
        <Button variant="ghost" size="icon" className="text-gray-600 relative">
          <Bell size={20} />
          <span className="absolute top-1 right-1 w-2 h-2 bg-lingua-orange rounded-full"></span>
        </Button>
        <Button variant="ghost" size="icon" className="rounded-full bg-gray-100 text-gray-800">
          <User size={20} />
        </Button>
      </nav>
    </header>
  );
};

export default Header;
