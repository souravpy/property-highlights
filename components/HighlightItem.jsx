import React from "react";

function HighlightItem({ text }) {
  return (
    <div className="flex items-center py-6 pl-8 w-full border-solid border-b-[1.052px] border-b-gray-200 min-h-[76px] max-md:pl-5 max-md:max-w-full">
      <div className="gap-2.5 self-stretch py-3 pl-1.5 my-auto rounded-md border border-gray-200 border-solid min-w-[240px] pr-[507px] w-[990px] max-md:pr-5 max-md:max-w-full">
        {text}
      </div>
    </div>
  );
}

export default HighlightItem;
