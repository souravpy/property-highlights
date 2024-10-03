import React from "react";

function AddHighlightButton() {
  return (
    <div className="flex gap-3.5 items-center self-stretch my-auto text-sm font-medium leading-normal text-white">
      <button className="flex overflow-hidden gap-2 justify-center items-center py-3 pr-4 pl-4 bg-indigo-500 rounded-lg shadow-[0px_1px_2px_rgba(16,24,40,0.05)]">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/e137e1396bf8a7dd7ede887f42c1f7ee1b6deda3a56f8ac0c0ee621a963d06e3?placeholderIfAbsent=true&apiKey=eaed1ddc95b0480bae09257e9297624a"
          alt=""
          className="object-contain shrink-0 self-stretch my-auto aspect-[1.05] w-[22px]"
        />

        <span className="self-stretch my-auto">Add Highlight</span>
      </button>
    </div>
  );
}

export default AddHighlightButton;
