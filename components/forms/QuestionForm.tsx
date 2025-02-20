/* eslint-disable tailwindcss/no-custom-classname */
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { MDXEditorMethods } from "@mdxeditor/editor";
import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { AskQuestionSchema } from "@/lib/validations";

import TagCard from "../cards/TagCard";
import Editor from "../editor";
import { Button } from "../ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";

const QuestionForm = () => {
  const editorRef = useRef<MDXEditorMethods>(null);
  const form = useForm<z.infer<typeof AskQuestionSchema>>({
    resolver: zodResolver(AskQuestionSchema),
    defaultValues: {
      title: "",
      content: "",
      tags: [],
    },
  });

  const handleCreateQuestion = () => {
    // TODO: Create question logic here
    console.log(form.getValues());
    form.reset();
    // Redirect to the dashboard or show a success message.
  };

  const handleTagRemove = (tag : string , field : {value: string[]}) =>{
    // TODO: Remove selected tag logic here
    console.log(tag , field);
  } 

  const handleInputKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    field: { value: string[] }
  ) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const tagInput = e.currentTarget.value.trim();

      if (tagInput && tagInput.length < 15 && !field.value.includes(tagInput)) {
        form.setValue("tags", [...field.value, tagInput]);
        e.currentTarget.value = "";
        form.clearErrors("tags");
      } else if (tagInput.length > 15) {
        form.setError("tags", {
          type: "manual",
          message: "Tag length should be less than 15 characters",
        });
      } else if (field.value.includes(tagInput)) {
        form.setError("tags", {
          type: "manual",
          message: "Tag already exists",
        });
      }
    }
  };

  return (
    <Form {...form}>
      <form
        className="flex w-full flex-col gap-10"
        onSubmit={form.handleSubmit(handleCreateQuestion)}
      >
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem className="flex w-full flex-col gap-2.5 ">
              <FormLabel className=" paragraph-semibold text-dark400_light800">
                Question Title <span className=" text-primary-500">*</span>
              </FormLabel>
              <FormControl>
                <Input
                  required
                  {...field}
                  className=" paragraph-regular background-light700_dark300 light-border-2 text-dark300_light700 no-focus rounded-1.5 min-h-[56px] border"
                />
              </FormControl>
              <FormDescription className=" body-regular text-light-500 mt-2.5">
                Be specific and imagine you&apos;re asking a question to another
                person
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem className="flex w-full flex-col gap-2.5 ">
              <FormLabel className=" paragraph-semibold text-dark400_light800">
                Detailed explanation of your problem{" "}
                <span className=" text-primary-500">*</span>
              </FormLabel>
              <FormControl>
                <Editor
                  editorRef={editorRef}
                  value={field.value}
                  fieldChange={field.onChange}
                />
              </FormControl>
              <FormDescription className=" body-regular text-light-500 mt-2.5">
                Introduce the problem and expand on what you&apos;ve put in the
                title
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="tags"
          render={({ field }) => (
            <FormItem className="flex w-full flex-col gap-2.5 ">
              <FormLabel className=" paragraph-semibold text-dark400_light800">
                Tags <span className=" text-primary-500">*</span>
              </FormLabel>
              <FormControl>
                <div>
                  <Input
                    placeholder="Add Tags..."
                    required
                    onKeyDown={(e) => handleInputKeyDown(e, field)}
                    className=" paragraph-regular background-light700_dark300 light-border-2 text-dark300_light700 no-focus rounded-1.5 min-h-[56px] border"
                  />
                  {field.value.length > 0 && (
                    <div className="flex-start mt-2.5 flex-wrap gap-2.5 ">
                      {field.value.map((tag: string) => (
                        <TagCard key={tag} _id={tag} name={tag} compact remove isButton handleRemove={()=> handleTagRemove(tag, field)}/>
                      ))}
                    </div>
                  )}
                </div>
              </FormControl>
              <FormDescription className=" body-regular text-light-500 mt-2.5">
                Add up to three tags to describe what your question is about.
                You need to press enter to add a tag
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="mt-16 flex justify-end">
          <Button
            type="button"
            className="primary-gradient !text-light-900 w-fit"
          >
            Ask Question
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default QuestionForm;
