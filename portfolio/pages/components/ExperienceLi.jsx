import React from "react";

const ExperienceLi = ({ Image, Company, Position, DateBefore, DateNow }) => {
  return (
    <>
      <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
        <Image src={Image} className="rounded-full object-fill"></Image>
      </div>
      <dl className="flex flex-auto flex-wrap gap-x-2">
        <dt className="sr-only">Company</dt>
        <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
          {Company}
        </dd>
        <dt className="sr-only">Role</dt>
        <dd className="text-xs text-zinc-500 dark:text-zinc-400">{Position}</dd>
        <dt className="sr-only">Date</dt>
        <dd className="ml-auto text-xs text-zinc-400 dark:text-zinc-500">
          <time dateTime="2022">{DateBefore}</time>
          <span aria-hidden="true"> ----- </span>
          <time dateTime="2022">{DateNow}</time>
        </dd>
      </dl>
    </>
  );
};

export default ExperienceLi;
