
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const languages = [
  { code: "es", name: "Spanish", flag: "🇪🇸" },
  { code: "fr", name: "French", flag: "🇫🇷" },
  { code: "de", name: "German", flag: "🇩🇪" },
  { code: "it", name: "Italian", flag: "🇮🇹" },
  { code: "jp", name: "Japanese", flag: "🇯🇵" },
  { code: "kr", name: "Korean", flag: "🇰🇷" },
  { code: "cn", name: "Mandarin", flag: "🇨🇳" },
];

const LanguageSelector = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="outline" 
          className="bg-white border border-gray-200 rounded-xl flex items-center gap-2 px-4 py-2 h-auto"
        >
          <span className="text-xl">{selectedLanguage.flag}</span>
          <span className="font-medium">{selectedLanguage.name}</span>
          <ChevronDown size={16} className="text-gray-400" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuRadioGroup 
          value={selectedLanguage.code} 
          onValueChange={(value) => {
            const selected = languages.find(lang => lang.code === value);
            if (selected) setSelectedLanguage(selected);
          }}
        >
          {languages.map((language) => (
            <DropdownMenuRadioItem 
              key={language.code} 
              value={language.code}
              className="flex items-center gap-2 py-2 cursor-pointer"
            >
              <span className="text-xl">{language.flag}</span>
              <span>{language.name}</span>
              {language.code === selectedLanguage.code && (
                <Check size={16} className="ml-auto text-lingua-teal" />
              )}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSelector;
