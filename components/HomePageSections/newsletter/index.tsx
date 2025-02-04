import React from "react";

interface Form {
  placeholder: string;
  button_text: string;
}

interface Block {
  title: string;
  description: string;
  form: Form;
}

const Newsletter = (block: Block) => {
  const { title, description, form } = block;
  return (
    <div className="mt-12">
      <h2>{title}</h2>
      <span>{description}</span>
      <input type="text" placeholder={form.placeholder} />
      <button>{form.button_text}</button>
    </div>
  );
};

export default Newsletter;
