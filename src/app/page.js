import Link from "next/link";

const methods = [
  {
    title: "Bonferroni Correction",
    description: "Baseline method; simple and conservative."
  },
  {
    title: "Holm-Bonferroni Correction",
    description: "Sequential approach; adjusts thresholds progressively."
  },
  {
    title: "Benjamini-Hochberg Procedure",
    description: "Balances power and control; widely used in genomics."
  },
  {
    title: "Benjamini-Yekutieli Method",
    description: "FDR control under dependence; accounts for correlated tests."
  },
  {
    title: "Storey’s Q Value",
    description: "Adaptive FDR control; estimates proportion of true null hypotheses."
  },
  {
    title: "SGoF Test (Sequential Goodness-of-Fit)",
    description: "Increased power for large-scale testing; combines p-values from multiple tests."
  },
]

export default function Home() {
  return (
    <main className="py-2 ">
      <div className="flex flex-col items-center w-full h-screen justify-center">
        <div className="mb-10 md:mb-20">
        <h1 className="text-7xl md:text-8xl lg:text-9xl font-semibold text-white font-serif">MultiDST</h1>
        <p className="text-slate-50 font-semibold text-center">Empowering Data-Driven Decisions</p>
        </div>
        <p className="text-center md:w-[70%] text-slate-50 font-medium text-lg my-10">
        A tool designed for multiple hypothesis testing in statistical analysis. It provides implementations of various methods to control the family-wise error rate (FWER) and false discovery rate (FDR) in scenarios involving multiple hypothesis tests. Significant Index Plot (SIP) can be used to visualize the significant hypotheses under each of the method with ease.
        </p>
        <Link href={'/analysis'}>
        <p className="px-10 py-3 bg-slate-50 font-medium rounded-md">Get Started</p>
        </Link>
      </div>
      <div>
        <p className="text-4xl text-white font-semibold mb-8 text-center">Implemented Methods</p>
        <div className="grid grid-cols-1 gap-x-8 md:grid-cols-2 lg::grid-cols-2">
        {
          methods.map((item, i) => <Method key={i} item={item} />)
        }
        </div>
      </div>
    </main>
  );
}


function Method({item}){
  return(
    <div className="mb-10 bg-slate-50 p-8 rounded-sm reveal">
      <p className="text-xl font-semibold mb-2 ">{item.title}</p>
      <p className="">{item.description}</p>
    </div>
  )
}