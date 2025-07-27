import React from "react";
import { useForm } from "react-hook-form";

const FormValidatioUsingReactHookForm = () => {
  const subjects = ["Mathematics", "Science", "English"];
  const grades = ["Grade-9", "Grade-10", "Grade-11", "Grade-12"];
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    alert("Registration successful!\n" + JSON.stringify(data, null, 2));
    reset(data);
  };
  return (
    <div className="bg-white max-w-96 mx-auto mt-8 shadow-2xl rounded-lg p-3">
      <form onSubmit={handleSubmit(onSubmit)} className="w-3/4 mx-auto">
        <div className="flex flex-col w-full mb-2">
          <label htmlFor="">Student Name</label>
          <input
            type="text"
            {...register("name", {
              required: "Student name is required",
              minLength: {
                value: 3,
                message: "Student name must be at least 3 charecters",
              },
            })}
            className="w-full border-1 border-gray-300 p-1 rounded-lg text-lg font-semibold "
          />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        </div>
        <div className="flex flex-col w-full mb-2">
          <label htmlFor="">Email</label>
          <input
            type="email"
            {...register("email", {
              required: "Student email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid Email",
              },
            })}
            className="w-full border-1 border-gray-300 p-1 rounded-lg text-lg font-semibold "
          />
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}
        </div>
        <div className="flex flex-col w-full mb-2">
          <label htmlFor="">Grade Level</label>
          <select
            {...register("grade", { required: "Select Your Grade" })}
            className="w-full border-1 border-gray-300 p-1 rounded-lg text-lg font-semibold "
          >
            <option value="">Select Grade</option>
            {grades.map((grade) => (
              <option value={grade}>{grade}</option>
            ))}
          </select>
          {errors.grade && (
            <p className="text-red-500">{errors.grade.message}</p>
          )}
        </div>
        <div className="flex flex-col w-full mb-2">
          <label htmlFor="">Interested Subjects</label>
          {subjects.map((subject) => (
            <div className="flex items-center">
              <input
                {...register("subject", {
                  required: "Select at least one subject",
                })}
                type="checkbox"
                value={subject}
                className="mr-2 mt-2"
              />
              <span>{subject}</span>
            </div>
          ))}
          {errors.subject && (
            <p className="text-red-500">{errors.subject.message}</p>
          )}
        </div>
        <button
          type="submit"
          className="bg-red-500 text-white font-bold px-3 py-2 rounded-lg cursor-pointer w-full"
        >
          Register Student
        </button>
      </form>
    </div>
  );
};

export default FormValidatioUsingReactHookForm;
