"use client";
import React, { useState } from "react";
import { Slider } from "../ui/slider";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FilterIcon } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";

const formSchema = z.object({
  price: z.number(),
  size: z.number(),
  category: z.string(),
});

function Filter() {
  const [value, setValue] = useState(500);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      price: 500,
      size: 1,
      category: "Solid",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <div className="title w-auto h-10 bg-white dark:bg-[#313338] p-5 rounded-sm font-bold text-xl flex justify-between items-center cursor-pointer ">
          Filter By <FilterIcon size={20} className="ml-2" />
        </div>
      </PopoverTrigger>
      <PopoverContent className="mx-16 max-sm:mx-3">
        <div className="w-full h-auto bg-white dark:bg-[#313338] my-3 rounded-sm p-4">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                control={form.control}
                name="price"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel className="font-semibold text-lg">
                      Price:
                    </FormLabel>
                    <FormControl>
                      <>
                        <div className="flex flex-col">
                          <Slider
                            onValueChange={field.onChange}
                            defaultValue={[field.value]}
                            max={10000}
                            step={500}
                          />
                          <span className="w-full my-3">
                            500 - {field.value}
                          </span>
                        </div>
                      </>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="size"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel className="font-semibold text-lg">
                      Size(in inch):
                    </FormLabel>
                    <FormControl>
                      <>
                        <div className="flex flex-col">
                          <Slider
                            onValueChange={field.onChange}
                            defaultValue={[field.value]}
                            max={10}
                            step={1}
                          />
                          <span className="w-full my-3">1 - {field.value}</span>
                        </div>
                      </>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="category"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-semibold text-lg">
                      Category:
                    </FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="bg-[#252422]">
                          <SelectValue placeholder="Select Category" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Solid">Solid</SelectItem>
                        <SelectItem value="Pattern">Pattern</SelectItem>
                        <SelectItem value="Spotted">Spotted</SelectItem>
                        <SelectItem value="Wild">Wild</SelectItem>
                        <SelectItem value="Something New">
                          Something New
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </form>
          </Form>
        </div>
      </PopoverContent>
    </Popover>
  );
}

export default Filter;
