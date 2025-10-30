import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { addUser } from "@/utilss/api/users";
import Swal from "sweetalert2";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const addUserSchema = z.object({
  fullname: z
    .string()
    .min(8, { message: "Nama Lengkap harus minimal 8 karakter" }),
  username: z.string().min(5, { message: "Username harus minimal 5 karakter" }),
  password: z.string().min(5, { message: "Password harus minimal 5 karakter" }),
  email: z.string().email({ message: "Format email tidak valid" }),
  phone_number: z
    .string()
    .refine((val) => !isNaN(val), "Nomor telepon harus berupa angka")
    .transform((val) => Number(val)),
  age: z
    .string()
    .refine((val) => !isNaN(val), "Umur harus berupa angka")
    .transform((val) => Number(val))
    .refine((val) => val >= 18 && val <= 60, {
      message: "Umur harus antara 18 - 60 tahun",
    }),
  address: z.string().min(10, { message: "Alamat harus minimal 10 karakter" }),
  role: z.enum(["user", "admin"], { message: "Role tidak valid" }),
});

function AddUser() {
  const form = useForm({
    resolver: zodResolver(addUserSchema),
    defaultValues: {
      fullname: "",
      username: "",
      password: "",
      email: "",
      phone_number: "",
      age: "",
      address: "",
      role: "user",
    },
  });

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const message = await addUser(data);
      Swal.fire({
        title: "The Internet?",
        text: "That thing is still around?",
        icon: "success",
      });
    } catch (error) {
      console.error("Error adding user:", error);
      Swal.fire("Gagal menambahkan user.");
    }
  };

  const Navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 px-6 py-12">
      <div className="w-full max-w-md bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/20">
        <ArrowLeft
          onClick={() => Navigate("/dashboard/user")}
          className="h-6 w-6 text-white mb-4"
        />
        <h2 className="text-2xl font-bold text-center text-white mb-2">
          Tambah User Baru
        </h2>
        <p className="text-sm text-gray-300 text-center mb-6">
          Isi data user dengan lengkap
        </p>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-5 text-white"
          >
            {[
              {
                name: "fullname",
                label: "Nama Lengkap",
                placeholder: "Masukkan Nama Lengkap",
              },
              {
                name: "username",
                label: "Username",
                placeholder: "Masukkan Username",
              },
              {
                name: "password",
                label: "Password",
                placeholder: "Masukkan Password",
                type: "password",
              },
              { name: "email", label: "Email", placeholder: "Masukkan Email" },
              {
                name: "phone_number",
                label: "Nomor Telepon",
                placeholder: "Masukkan Nomor Telepon",
              },
              { name: "age", label: "Umur", placeholder: "Masukkan Umur" },
              {
                name: "address",
                label: "Alamat",
                placeholder: "Masukkan Alamat",
              },
            ].map(({ name, label, placeholder, type }) => (
              <FormField
                key={name}
                control={form.control}
                name={name}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-200 text-sm font-medium">
                      {label}
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder={placeholder}
                        type={type || "text"}
                        className="bg-white/10 border border-white/20 focus:border-blue-400 focus:ring-2 focus:ring-blue-400 text-white placeholder-gray-400 rounded-lg transition-all duration-200"
                      />
                    </FormControl>
                    <FormMessage className="text-red-400 text-sm" />
                  </FormItem>
                )}
              />
            ))}

            <Button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg transition-all duration-200 shadow-md hover:shadow-blue-400/30"
            >
              Tambahkan User
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}

export default AddUser;
