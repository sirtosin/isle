'use client'
import Search from '../icons/Search'

type Props = {
  style?: string;
  inputText: string;
  setInputText: (e: string) => void;
  disabled: boolean;
};

export function SearchField({ inputText, setInputText, disabled,style }: Props) {
  return (
    <div className={`w-[240px] md:w-[330px] xl:w-[350px] p-2 h-[47px] flex items-center space-x-3 pl-5 bg-[#F6F6F6] rounded-lg overflow-hidden ${style}`}>
      <Search />
      <input
        className="outline-none border-none p-3 text-[#BABABB] bg-[#F6F6F6] w-full"
        type="text"
        placeholder="Search here"
        value={inputText}
        disabled={disabled}
        onChange={(e: any) => setInputText(e.target.value)}
      />
    </div>
  )
}
