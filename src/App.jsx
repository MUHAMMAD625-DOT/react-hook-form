import React from "react";
import { useForm } from "react-hook-form";

function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors ,isSubmitting},
  } = useForm();

  async function onsubmit(data) {
    await new Promise((resolve) => setTimeout(resolve,5000));
    console.log("submitting the form", data);
  }

  return (
    <form onSubmit={handleSubmit(onsubmit)}>
      <div className="">
        <label>Form Name:</label>
        <input
          type="text"
          className="border border-gray-400 mb-6 rounded-md"
          {...register("firstName", {
            required: true,
            minLength: {value:3,message:"Min length At least 3 characters"},
            maxLength: {value:8,message:"Max length Al most 8 characters"}
            
          })}
        />
        {errors.firstName && <p className=" text-blue-600">{errors.firstName.message}</p> }
      </div>
      <div>
        <label>Middle Name:</label>
        <input
          type="text"
          className="border border-gray-400 rounded-md"
          {...register("middleName")}
        />
      </div>
      <div>
        <label>Last Name:</label>
        <input 
          type="text"
          className="border border-gray-400 mt-8  rounded-md"
          {...register("lastName" ,{
            pattern:{
              value: /^[A-Za-z]+$/i,
              message:"last name is not per as the rules"
            }
          })}
        />
        {errors.lastName && <p className=" text-blue-600">{errors.lastName.message}</p> }
      </div>{" "}
      <br />
      <input type="submit" className="bg-red-500 p-2 rounded-md " disabled={isSubmitting }/> {isSubmitting && <p className="text-blue-600 font-bold text-2xl">Submitting...</p>}

    </form>
  );
}

export default App;
