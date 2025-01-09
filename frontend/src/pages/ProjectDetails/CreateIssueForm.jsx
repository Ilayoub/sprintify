import { Button } from "@/components/ui/button";
import { DialogClose } from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { createIssue } from "../redux/Issue/Action";
import { useParams } from "react-router-dom";

export default function CreateIssueForm({ status }) {
  const dispatch = useDispatch();
  const form = useForm({
    defaultValues: {
      issueName: "",
      description: "",
    },
  });
  const { id } = useParams();

  const onSubmit = (data) => {
    console.log(status);

    dispatch(
      createIssue({
        title: data.issueName,
        description: data.description,
        projectId: id,
        status,
      })
    );
    console.log("create issue data", data);
  };
  return (
    <>
      <div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
            <FormField
              control={form.control}
              name="issueName"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...field}
                      type="text"
                      className="border w-full border-gray-700 p-5"
                      placeholder="Issue Name"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...field}
                      type="text"
                      className="border w-full border-gray-700 p-5"
                      placeholder="Description"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <DialogClose>
              <Button type="submit" className="w-full my-5" variant="outline">
                Create issue
              </Button>
            </DialogClose>
          </form>
        </Form>
      </div>
    </>
  );
}
