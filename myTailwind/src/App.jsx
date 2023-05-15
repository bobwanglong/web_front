function App() {
  return (
    <main className=" min-h-screen flex justify-center items-center w-full">
      {/* // <div className=" grid justify-items-center">
    //   <span className="text-3xl underline bg-yellow-50  font-bold">
    //     myAlter
    //   </span>
    // </div> */}
      <button
        type="button"
        className=" px-24 py-8 text-3xl font-bold
         bg-[conic-gradient(from_var(--shimmer-angle),theme(colors.green.950)_0%,theme(colors.red.100)_10%,theme(colors.yellow.950)_20%,theme(colors.slate.950)_30%,theme(colors.blue.950)_20%)]
         animate-[shimmer_2.5s_linear_infinite]
         rounded-[24px]
          relative
         after:flex after:absolute after:bg-slate-950 
         after:inset-[2px] after:rounded-[22px]  
         after:content-[attr(aria-label)]
         after:items-center after:justify-center
      "
        aria-label="渐变demo1">
        渐变demo1
      </button>
      <button
        type="button"
        className=" px-24 py-8 text-3xl font-bold
         bg-[conic-gradient(from_var(--shimmer-angle),theme(colors.slate.950)_0%,theme(colors.slate.500)_10%,theme(colors.slate.950)_20%)] 
         animate-[shimmer_2.5s_linear_infinite] 
         rounded-[24px] 
         relative
          after:flex after:absolute after:bg-slate-950 
          after:inset-[2px] after:rounded-[22px]  
          after:content-[attr(aria-label)]
          after:items-center after:justify-center
         "
        aria-label="渐变demo2">
        <span className=" opacity-0"> 渐变demo2</span>
      </button>
      {/* <button
        type="button"
        className="
        px-24 py-8 text-3xl font-bold 
        bg-[conic-gradient(from_var(--shimmer-angle),theme(colors.slate.950)_0%,theme(colors.slate.500)_10%,theme(colors.slate.950)_20%)] 
        animate-[shimmer_2.5s_linear_infinite] rounded-[24px]
        relative
        
        after:flex after:absolute after:bg-slate-950 after:inset-[2px] after:rounded-[22px] 
        after:content-[attr(aria-label)]
        after:items-center after:justify-center
        "
        aria-label="生成 AI 内容">
        <span className="opacity-0">生成 AI 内容</span>
      </button> */}

      <div
        className=" p-[1px]  rounded-2xl
         bg-[conic-gradient(from_var(--shimmer-angle),theme(colors.green.950)_0%,theme(colors.pink.200)_10%,theme(colors.green.200)_10%,theme(colors.pink.100))]
         hover:animate-[shimmer_2.5s_linear_infinite]
        ">
        <input
          className=" bg-slate-950 px-24 py-8  rounded-[calc(1rem_-_1px)] focus:outline-none "
          placeholder="what's your good name?"
        />
      </div>
    </main>
  )
}

export default App
