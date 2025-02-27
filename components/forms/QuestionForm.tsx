"use client";

import { AskQuestionSchema } from "@/lib/validations";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { Form, FormDescription } from "../ui/form";

import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const QuestionForm = () => {

    // 1. Create new Form. Create a Resolver with ZodResolver, and pass the Schema. Then Create the empty default values
    const form = useForm({
        resolver: zodResolver(AskQuestionSchema),
        defaultValues: {
            title: "",
            content: "",
            tags: []
        }
    });

    // 2. Create Form from ShadCN, return it. Spread the form component we created. Then create a regular HTML Form. Make sure it is a client component
    // 3. Pass an onSumbit Handler, form.handleSubmit(handlerFn)

    const handleCreateQuestion = {

    };

    // 4. Initialize Form Fields. Copy it from prev

  return (  
        <Form {...form} >
            <form className="flex w-full flex-col gap-8" onSubmit={form.handleSubmit(handleCreateQuestion)}>
                <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                    <FormItem className="flex w-full flex-col gap-2.5">
                        <FormLabel className="text-psm">
                            Question Title 
                            <span className="text-psm !text-orange-500 ml-1">*</span>
                        </FormLabel>
                        <FormControl className="!-mt-1">
                        <Input
                            {...field}
                            className="text-psm no-focus"
                        />
                        </FormControl>
                        <FormDescription className="text-pxs">
                            Be specific on your question
                        </FormDescription>
                        <FormMessage />
                    </FormItem>
                )}
                />

                <FormField
                    control={form.control}
                    name="content"
                    render={({ field }) => (
                    <FormItem className="flex w-full flex-col gap-2.5">
                        <FormLabel className="text-psm">
                            Problem
                            <span className="text-psm !text-orange-500 ml-1">*</span>
                        </FormLabel>
                        <FormControl className="!-mt-1">
                        <Input
                            {...field}
                            className="text-psm no-focus"
                        />
                        </FormControl>
                        <FormDescription className="text-pxs">
                            Introduce the problem, and expand what you put in the title
                        </FormDescription>
                        <FormMessage />
                    </FormItem>
                )}
                />


                <FormField
                    control={form.control}
                    name="tags"
                    render={({ field }) => (
                    <FormItem className="flex w-full flex-col gap-2.5">
                        <FormLabel className="text-psm">
                            Tags
                            <span className="text-psm !text-orange-500 ml-1">*</span>
                        </FormLabel>
                        <FormControl className="!-mt-1">
                            <div>
                            <Input
                            {...field}
                            className="text-psm no-focus"
                            placeholder="Add Tags..."
                            />
                            </div>
                            

                        </FormControl>
                        <FormDescription className="text-pxs">
                            Add up to three tags to describe what your question is about. Press enter to add a tag
                        </FormDescription>
                        <FormMessage />
                    </FormItem>
                )}
                />  

                <div className="mt-16 flex justify-end">
                    <Button type="submit" className="!bg-orange-500">Submit Question</Button>
                </div>


            </form>
        </Form>

  );
};

export default QuestionForm;