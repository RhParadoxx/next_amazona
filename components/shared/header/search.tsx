import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { APP_NAME } from "@/lib/constants";

const categories = ["men", "women", "kids", "accessories"];

export default async function Search() {
  return (
    <form action='/search' method='GET'>
      <div className='flex w-full items-stretch h-10'>
        <Select name='category'>
          <SelectTrigger className='mt-[1px] w-auto h-[38px] bg-gray-600 text-black rounded-none cursor-pointer border-none rounded-s-md'>
            <SelectValue placeholder='All' />
          </SelectTrigger>

          <SelectContent position='popper' className='bg-white border-none  '>
            <SelectItem key={"All"} value={"all"}>
              All
            </SelectItem>

            {categories.map((category) => (
              <SelectItem
                key={category}
                value={category}
                className='cursor-pointer'
              >
                {category}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Input
          name='q'
          type='search'
          className='flex-1  rounded-none dark:border-gray-200 bg-gray-100 text-black text-base h-full'
          placeholder={`Search Site ${APP_NAME}`}
        />
        <Button
          type='submit'
          className='bg-primary text-primary-foreground rounded-none h-[38px] mt-[1px] px-3 py-2 rounded-e-md cursor-pointer'
        >
          <SearchIcon className='w-6 h-6' />
        </Button>
      </div>
    </form>
  );
}

import * as React from "react";
